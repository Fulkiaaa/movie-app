<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
      <h2 class="text-3xl font-bold text-center">Connexion Admin</h2>

      <form @submit.prevent="handleLogin" class="mt-8 space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="email"
            type="email"
            required
            class="mt-1 block w-full rounded border-gray-300 shadow-sm"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Mot de passe</label
          >
          <input
            v-model="password"
            type="password"
            required
            class="mt-1 block w-full rounded border-gray-300 shadow-sm"
          />
        </div>

        <div v-if="error" class="text-red-500 text-center">
          {{ error }}
        </div>

        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Se connecter
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const email = ref("");
const password = ref("");
const error = ref("");
const user = useState("user");
const router = useRouter();

const handleLogin = () => {
  // Ici vous implementerez votre vraie logique d'authentification
  if (email.value === "admin@example.com" && password.value === "admin123") {
    user.value = {
      email: email.value,
      role: "admin",
    };
    router.push("/admin");
  } else {
    error.value = "Identifiants invalides";
  }
};
</script>
