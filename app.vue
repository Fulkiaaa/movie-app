<template>
  <div>
    <!-- En-tête du site -->
    <header class="bg-black text-white p-4">
      <nav class="container mx-auto flex justify-between items-center">
        <!-- Logo/Titre -->
        <NuxtLink to="/" class="text-xl font-bold"> MovieApp </NuxtLink>

        <!-- Navigation -->
        <div class="space-x-4">
          <NuxtLink
            to="/"
            class="hover:text-gray-300"
            active-class="text-blue-400"
          >
            Accueil
          </NuxtLink>
          <NuxtLink
            to="/admin"
            class="hover:text-gray-300"
            active-class="text-blue-400"
          >
            Admin
          </NuxtLink>
        </div>
      </nav>
    </header>

    <!-- Contenu principal -->
    <main>
      <!-- Cette balise affiche le contenu de vos pages -->
      <NuxtPage />
    </main>

    <!-- Pied de page -->
    <footer class="bg-gray-800 text-white p-4 mt-8">
      <div class="container mx-auto text-center">
        <p>© 2025 MovieApp - Propulsé par TMDB</p>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  @apply bg-gray-100 min-h-screen;
}
</style>
