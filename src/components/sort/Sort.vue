<script setup>
import { useDispatch } from "@/constants/helpers";
import { setSortBy } from "@/store/pokemonsSlice";

const dispatch = useDispatch();

function onChangeSortBy({ target: { value } }) {
  dispatch(setSortBy(value));
}
</script>

<template>
  <div className="pt-[32px] pb-[48px]">
    <h2>Сортировать по:</h2>
    <div className="mt-[16px] flex gap-[40px]">
      <label
        for="sort-by-height"
        className="rounded-[12px] py-[5px] px-10 trans-def cursor-pointer has-[:checked]:bg-red has-[:checked]:text-white"
        >Высоте роста
        <input
          id="sort-by-height"
          type="radio"
          name="pokemons-sort"
          value="height"
          @change="onChangeSortBy"
          className="hidden" /></label
      ><label
        for="sort-by-weight"
        className="rounded-[12px] py-[5px] px-10 trans-def cursor-pointer has-[:checked]:bg-red has-[:checked]:text-white"
        >Весу
        <input
          id="sort-by-weight"
          type="radio"
          name="pokemons-sort"
          value="weight"
          @change="onChangeSortBy"
          className="hidden" /></label
      ><label
        for="sort-by-strength"
        className="rounded-[12px] py-[5px] px-10 trans-def cursor-pointer has-[:checked]:bg-red has-[:checked]:text-white"
      >
        Уровню силы
        <input
          id="sort-by-strength"
          type="radio"
          name="pokemons-sort"
          value="base_experience"
          @change="onChangeSortBy"
          className="hidden"
        />
      </label>
    </div>
  </div>
</template>
