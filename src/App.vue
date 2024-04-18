<script setup>
import Header from "./components/header/Header.vue";
import Pokemons from "./components/pokemons/Pokemons.vue";
import Filter from "./components/filter/Filter.vue";
import Sort from "./components/sort/Sort.vue";
import Pagination from "./components/pagination/Pagination.vue";
</script>

<template>
  <Header />
  <div className="container flex justify-between min-h-[calc(100vh-94px)]">
    <Filter />
    <div className="pl-[56px] flex-1"><Sort /><Pokemons /><Pagination /></div>
  </div>
</template>

<style scoped></style>
