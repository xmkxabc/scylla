import * as process from 'process'

export function getBaseURL(): string {
    return process.env['NODE_ENV'] === 'production' ? '/' : 'http://localhost:8000';
}

export interface Proxy {
    id: number;
    ip: string;
    port: number;
    is_valid: boolean;
    created_at: number;
    updated_at: number;
    latency: number;
    stability: number;
    is_anonymous: boolean;
    location: string;
    organization: string;
    region: string;
    country: string;
    city: string;
}

export interface ResponseJSON {
    proxies: Proxy[];
    count: number;
    per_page: number;
    page: number;
    total_page: number;
}