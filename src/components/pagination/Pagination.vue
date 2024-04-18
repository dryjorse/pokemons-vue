<script setup>
import { useDispatch, useSelector } from "@/constants/helpers";
import { setOffset } from "@/store/pokemonsSlice";

const dispatch = useDispatch();
const offset = useSelector((state) => state.pokemons.offset);
const limit = 20;

const onClickNext = () => {
  dispatch(setOffset(offset.value + limit));
};

const onClickPrev = () => {
  dispatch(setOffset(offset.value - limit));
};
</script>

<template>
  <div class="py-20 flex justify-between">
    <button
      :disabled="offset < limit"
      @click="onClickPrev"
      className="rounded-[12px] px-40 py-10 bg-red text-white trans-def hover:brightness-[.8] active:brightness-[.9] disabled:bg-gray"
    >
      Prev</button
    ><button
      @click="onClickNext"
      className="rounded-[12px] px-40 py-10 bg-red text-white trans-def hover:brightness-[.8] active:brightness-[.9] disabled:bg-gray"
    >
      Next
    </button>
  </div>
</template>
