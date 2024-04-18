<script setup>
import { ref } from "vue";

defineProps({ title: String });
const isOpen = ref(false);

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div>
    <button
      @click="toggleIsOpen"
      className="w-full flex justify-between items-center"
    >
      <h3>{{ title }}</h3>
      <img
        src="/arrow-top.svg"
        alt="arrow-top"
        :className="`trans-def ${isOpen ? '' : 'rotate-180'}`"
      />
    </button>
    <slot v-if="isOpen"></slot>
  </div>
</template>
