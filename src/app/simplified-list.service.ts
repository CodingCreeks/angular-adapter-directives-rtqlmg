import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, merge } from "rxjs";
import {
  debounceTime,
  map,
  shareReplay,
  switchMap,
  tap,
  distinctUntilChanged
} from "rxjs/operators";
import { Query, QueryCallback } from "./demo";

@Injectable()
export class SimplifiedListService {
  private _isLoading$ = new BehaviorSubject(true);

  readonly max$ = new BehaviorSubject(10);
  readonly page$ = new BehaviorSubject(1);
  readonly sort$ = new BehaviorSubject("");

  isLoading$ = this._isLoading$.asObservable();

  hookToQuery<T extends any>(callback: QueryCallback<T>): Observable<T> {
    this._isLoading$.next(true);

    return merge(this.max$, this.page$, this.sort$).pipe(
      debounceTime(300),
      map(() => ({
        max: this.max$.value,
        page: this.page$.value,
        sort: this.sort$.value
      })),
      distinctUntilChanged(compare),
      tap(() => this._isLoading$.next(true)),
      switchMap(query => callback(query)),
      tap(() => this._isLoading$.next(false)),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}

function compare(a: Query, b: Query): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}
