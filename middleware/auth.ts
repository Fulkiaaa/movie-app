export default defineNuxtRouteMiddleware((to) => {
  const user = useState("user");

  if (!user.value && to.path.startsWith("/admin")) {
    return navigateTo("/login");
  }
});
