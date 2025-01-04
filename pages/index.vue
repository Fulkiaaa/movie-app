<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Films Populaires</h1>

    <!-- Barre de recherche -->
    <div class="mb-8">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Rechercher un film..."
        class="w-full p-2 border rounded"
        @input="handleSearch"
      />
    </div>

    <!-- Grille de films -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        @click="navigateToMovie(movie.id)"
      />
    </div>

    <!-- Pagination -->
    <div class="mt-8 flex justify-center">
      <button
        v-if="page > 1"
        @click="page--"
        class="px-4 py-2 bg-blue-500 text-white rounded mr-2"
      >
        Précédent
      </button>
      <button @click="page++" class="px-4 py-2 bg-blue-500 text-white rounded">
        Suivant
      </button>
    </div>
  </div>
</template>

<script setup>
import { debounce } from "lodash-es"; // Ajoutez cette ligne
const { getPopularMovies, searchMovies } = useTmdb();

const movies = ref([]);
const page = ref(1);
const searchQuery = ref("");

const fetchMovies = async () => {
  if (searchQuery.value) {
    const data = await searchMovies(searchQuery.value, page.value);
    movies.value = data.results;
  } else {
    const data = await getPopularMovies(page.value);
    movies.value = data.results;
  }
};

const handleSearch = debounce(fetchMovies, 300);

watch(page, fetchMovies);

onMounted(fetchMovies);

const navigateToMovie = (id) => {
  navigateTo(`/movie/${id}`);
};
</script>
