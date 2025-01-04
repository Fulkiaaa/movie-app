<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold">Dashboard Admin</h1>
      <button
        @click="logout"
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Déconnexion
      </button>
    </div>

    <!-- Statistiques -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-2">Films Notés</h3>
        <p class="text-3xl">{{ stats.ratedMovies }}</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-2">Note Moyenne</h3>
        <p class="text-3xl">{{ stats.averageRating }}/10</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-2">Films Favoris</h3>
        <p class="text-3xl">{{ stats.favorites }}</p>
      </div>
    </div>

    <!-- Liste des films gérés -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-xl font-bold mb-4">Films Gérés</h2>

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Film
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Note
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date de modification
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="movie in managedMovies" :key="movie.id">
              <td class="px-6 py-4 whitespace-nowrap">
                {{ movie.title }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{{ movie.rating }}/10</td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ formatDate(movie.lastModified) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button
                  @click="editMovie(movie)"
                  class="text-blue-600 hover:text-blue-900 mr-4"
                >
                  Modifier
                </button>
                <button
                  @click="deleteMovie(movie.id)"
                  class="text-red-600 hover:text-red-900"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});

const user = useState("user");
const router = useRouter();

// Données simulées - À remplacer par vos vraies données
const stats = ref({
  ratedMovies: 42,
  averageRating: 7.5,
  favorites: 15,
});

const managedMovies = ref([
  {
    id: 1,
    title: "Film Example",
    rating: 8,
    lastModified: new Date(),
  },
  // Ajoutez plus de films ici
]);

const logout = () => {
  user.value = null;
  router.push("/login");
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

const editMovie = (movie) => {
  // Implémenter la logique de modification
  console.log("Modifier:", movie);
};

const deleteMovie = (movieId) => {
  // Implémenter la logique de suppression
  console.log("Supprimer:", movieId);
};
</script>
