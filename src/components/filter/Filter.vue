<script setup>
import { useQuery } from "@tanstack/vue-query";
import Accordeon from "../accordeon/Accordeon.vue";
import generationsService from "@/services/generationsService";
import { useDispatch } from "@/constants/helpers";
import { setGeneration } from "@/store/pokemonsSlice";

const dispatch = useDispatch();

const { data: generations } = useQuery({
  queryKey: ["generations"],
  queryFn: () => generationsService.getAll(),
  select: ({ data }) => data.results,
});

const onChangeGeneration = ({ target: { value } }) => {
  dispatch(setGeneration(value));
};
</script>

<template>
  <div
    className="box-content border-r-[6px] border-black pt-[32px] pr-[56px] min-w-[224px] relative"
  >
    <div
      className="absolute top-[-26px] right-[-26px] rounded-circle w-[48px] h-[48px] outline outline-[6px] outline-black bg-white"
    ></div>
    <Accordeon title="Поколение" className="mb-10"
      ><div className="pt-[16px]">
        <label
          v-for="(generation, key) in generations"
          :key="generation.name"
          :for="generation.name"
          className="flex gap-[12px] items-center cursor-pointer [&:not(:last-child)]:mb-[12px]"
          ><input
            type="radio"
            name="pokemons-generation-filter"
            className="peer hidden"
            :id="generation.name"
            :value="generation.name"
            @change="onChangeGeneration"
          />
          <div
            className="border border-gray rounded-circle w-[23px] h-[23px] flex justify-center items-center trans-def peer-checked:border-black peer-checked:*:opacity-100"
          >
            <div
              className="opacity-0 rounded-circle w-[10px] h-[10px] bg-black trans-def"
            ></div>
          </div>
          <span className="text-light-black ">{{ key + 1 }}-е</span>
        </label>
      </div></Accordeon
    >
  </div>
</template>
