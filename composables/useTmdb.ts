export const useTmdb = () => {
  const config = useRuntimeConfig();

  const fetchMovies = async (endpoint: string, params = {}) => {
    try {
      const queryParams = new URLSearchParams({
        api_key: config.public.apiKey,
        ...params,
      });

      const response = await fetch(
        `${config.public.apiBaseUrl}${endpoint}?${queryParams}`
      );
      return await response.json();
    } catch (error) {
      console.error("Erreur API:", error);
      throw error;
    }
  };

  // Fonction pour récupérer les films populaires
  const getPopularMovies = (page = 1) => {
    return fetchMovies("/movie/popular", { page });
  };

  // Fonction pour récupérer un film par son ID
  const getMovie = (id: number) => {
    return fetchMovies(`/movie/${id}`);
  };

  // Fonction pour rechercher des films
  const searchMovies = (query: string, page = 1) => {
    return fetchMovies("/search/movie", { query, page });
  };

  // Fonction pour mettre à jour une note de film (côté admin)
  const updateRating = async (movieId: number, rating: number) => {
    try {
      const response = await fetch(
        `${config.public.apiBaseUrl}/movie/${movieId}/rating`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.public.apiKey}`,
          },
          body: JSON.stringify({ value: rating }),
        }
      );
      return await response.json();
    } catch (error) {
      console.error("Erreur mise à jour:", error);
      throw error;
    }
  };

  return {
    getPopularMovies,
    getMovie,
    searchMovies,
    updateRating,
  };
};
