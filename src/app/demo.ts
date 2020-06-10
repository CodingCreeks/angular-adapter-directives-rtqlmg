import { Observable } from "rxjs";

export interface ListResponse<T> {
  items: T[];
  count: number;
}

export interface Account {
  company: string;
  balance: number;
}

export interface Query {
  page: number;
  max: number;
  sort: string;
}

export type QueryCallback<T> = (query: Query) => Observable<T>;
