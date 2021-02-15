import {AXIOS} from "./AxiosConfig";

 export class GenresService {
    async getGenres() {
        const {data} = await AXIOS.get('/genre/movie/list');
        return data;
    }
}
export const genresService = new GenresService();
