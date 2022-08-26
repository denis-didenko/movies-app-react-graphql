import { HTTPCache, RESTDataSource } from 'apollo-datasource-rest';

const API_KEY = '9b04d7aad3c2ae56f965c2c9a5141ada';

export class MovieAPI extends RESTDataSource {
    constructor() {
        super();
        this.httpCache = new HTTPCache();

        this.baseURL = 'https://api.themoviedb.org/3';
    }

    async getMovie(id) {
        return this.get(`/movie/${id}?api_key=${API_KEY}&language=uk-UA`);
    }

    async getCredits(id) {
        return this.get(`/movie/${id}/credits?api_key=${API_KEY}&language=uk-UA`);
    }

    async getVideos(id) {
        const data = await this.get(`/movie/${id}/videos?api_key=${API_KEY}&language=uk-UA`);

        return data.results;
    }

    async getGenres() {
        const data = await this.get(`/genre/movie/list?api_key=${API_KEY}&language=uk-UA`);

        return data.genres;
    }

    async getReviews(id) {
        const data = await this.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=uk-UA`);

        return data.results;
    }

    async getRecommendations(id) {
        const data = await this.get(`/movie/${id}/recommendations?api_key=${API_KEY}&language=uk-UA`);

        return data.results;
    }

    async getUpcoming(page) {
        return await this.get(`/movie/upcoming?api_key=${API_KEY}&page=${page}&language=uk-UA`);
    }

    async getNowPlaying(page) {
        return await this.get(`/movie/now_playing?api_key=${API_KEY}&page=${page}&language=uk-UA`);
    }

    async getDiscoverMovies({ sortBy, genreId, page }) {
        return await this.get(
            `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sortBy}&with_genres=${genreId}&page=${page}&language=uk-UA`
        );
    }

    async getPerson(id) {
        const data = await this.get(`/person/${id}?api_key=${API_KEY}&language=uk-UA`);

        return data;
    }

    async getCombinedCredits(personId) {
        const data = await this.get(`/person/${personId}/combined_credits?api_key=${API_KEY}&language=uk-UA`);

        return data.cast;
    }

    async searchMovies({ query, page }) {
        return await this.get(`/search/movie?api_key=${API_KEY}&language=uk-UA&query=${query}&page=${page}`);
    }
}
