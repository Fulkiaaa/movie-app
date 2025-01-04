<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      :alt="movie.title"
      class="w-full h-64 object-cover"
    />
    <div class="p-4">
      <h3 class="text-xl font-bold mb-2">{{ movie.title }}</h3>
      <p class="text-gray-600">{{ movie.release_date }}</p>
      <div class="flex items-center mt-2">
        <span class="text-yellow-500">★</span>
        <span class="ml-1">{{ movie.vote_average }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>
