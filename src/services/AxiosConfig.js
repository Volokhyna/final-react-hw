import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.' +
            'eyJhdWQiOiI0NTVmYzVlNDQ2OTJlYWNhM2YxZjdjNDczNTkyOGFlMyIsInN1YiI6IjYwMjJjMzhjZWEzN2UwMDAzZjQxOTRlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.' +
            'NerR_cp4yN_TikUXfNb6w-ekT4Z-5Ir__qaUfL4-P4M',
    },
});
