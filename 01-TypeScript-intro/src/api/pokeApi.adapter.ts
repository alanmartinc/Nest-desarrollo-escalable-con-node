import axios from 'axios';

export class PokeApiFetchAdapter {
    async get<T>(url:string): Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();

        return data;
    }
}

export class PokeApiAxiosAdapter {
    private readonly axios = axios;

    async get<T>(url: string): Promise<T> {
        const { data } = await this.axios.get<T>(url);
        return data;
    }
}
