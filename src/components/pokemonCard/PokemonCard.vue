<script setup>
defineProps({ name: String, image: String });
</script>

<template>
  <div className="text-center">
    <div
      className="mb-[18px] rounded-circle w-[400px] h-[400px] outline-black outline-[6px] outline overflow-hidden"
    >
      <img :src="image" alt="" className="w-full h-full" />
    </div>
    <strong className="text-[24px] leading-[24px]">{{ name }}</strong>
  </div>
</template>
