<template>
  <div v-if="movie" class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-8">
      <img
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        :alt="movie.title"
        class="w-full md:w-1/3 rounded-lg"
      />
      <div>
        <h1 class="text-4xl font-bold mb-4">{{ movie.title }}</h1>
        <p class="text-gray-600 mb-4">{{ movie.overview }}</p>
        <div class="flex items-center mb-4">
          <span class="text-yellow-500">★</span>
          <span class="ml-1">{{ movie.vote_average }}</span>
        </div>
        <div class="space-y-2">
          <p><strong>Date de sortie:</strong> {{ movie.release_date }}</p>
          <p>
            <strong>Genre:</strong>
            {{ movie.genres?.map((g) => g.name).join(", ") }}
          </p>
          <p><strong>Durée:</strong> {{ movie.runtime }} minutes</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { getMovie } = useTmdb();

const movie = ref(null);

onMounted(async () => {
  movie.value = await getMovie(route.params.id);
});
</script>
