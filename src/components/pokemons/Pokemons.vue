<script setup>
import { useQuery, useQueryClient } from "@tanstack/vue-query";
import { computed, watch } from "vue";
import { useDispatch, useSelector } from "../../constants/helpers";
import { addPokemons, setFilteredPokemons } from "@/store/pokemonsSlice";
import PokemonCard from "../pokemonCard/PokemonCard.vue";
import pokemonsService from "../../services/pokemonsService";
import generationsService from "@/services/generationsService";

const dispatch = useDispatch();
const pokemons = useSelector((state) => state.pokemons.pokemons);
const filteredPokemons = useSelector(
  (state) => state.pokemons.filteredPokemons
);
const sortBy = useSelector((state) => state.pokemons.filter.sortBy);
const generation = useSelector((state) => state.pokemons.filter.generation);
const offset = useSelector((state) => state.pokemons.offset);

const queryClient = useQueryClient();



const { data } = useQuery({
  queryKey: ["pokemons"],
  queryFn: () => pokemonsService.getAll(offset.value),
  select: ({ data }) => data,
});

const { data: generationData } = useQuery({
  queryKey: ["generation", generation],
  queryFn: () => generationsService.getByName(generation.value),
  select: ({ data }) => data,
  enabled: computed(() => !!generation.value),
});

watch(data, () => {
  let currPokemons = [];

  data.value.results.forEach(async (pokemon) => {
    const { data } = await pokemonsService.getByUrl(pokemon.url);
    currPokemons.push(data);

    if (currPokemons.length >= 20) {
      dispatch(addPokemons(currPokemons));
      dispatch(setFilteredPokemons(currPokemons));
    }
  });
});

watch(
  () => offset.value,
  () => {
    console.log(offset.value)
    queryClient.prefetchQuery({
      queryKey: ["pokemons"],
      queryFn: () => pokemonsService.getAll(offset.value),
    });
  }
);

watch([sortBy, () => generationData.value], () => {
  const newArray = [...pokemons.value];
  let filteredPokemons = [];

  if (generationData.value) {
    const filteredByGeneration = generationData.value.pokemon_species.map(
      (pokemon) => pokemon.name
    );
    filteredPokemons = newArray.filter((pokemon) =>
      filteredByGeneration.includes(pokemon.name)
    );
    console.log(filteredPokemons);
  }

  if (sortBy) {
    filteredPokemons = filteredPokemons.sort((a, b) =>
      a[sortBy.value] > b[sortBy.value] ? 1 : -1
    );
  }

  dispatch(setFilteredPokemons(filteredPokemons));
});
</script>

<template>
  <div className="grid grid-cols-2 gap-x-[44px] gap-y-[86px]">
    <PokemonCard
      :key="pokemon.id"
      :name="pokemon.name"
      v-for="pokemon in filteredPokemons"
      :image="pokemon.sprites.other.dream_world.front_default"
    />
  </div>
</template>
