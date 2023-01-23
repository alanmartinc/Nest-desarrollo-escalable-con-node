import axios from 'axios';

// SUSTITUCION DE LISKOV
export interface HttpAdapter {
    get<T>(url:string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>(url:string): Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();
        console.log('Con Axios');
        return data;
    }
}

export class PokeApiAxiosAdapter implements HttpAdapter {
    private readonly axios = axios;

    async get<T>(url: string): Promise<T> {
        const { data } = await this.axios.get<T>(url);
        console.log('Con Fetch');
        return data;
    }
}
