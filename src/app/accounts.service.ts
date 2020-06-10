import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SortDirection, SortPropDir } from "@swimlane/ngx-datatable";
import { Account, ListResponse, Query } from "./demo";

@Injectable({
  providedIn: "root"
})
export class AccountsService {
  constructor(private http: HttpClient) {}

  get({ max, page, sort }: Query): Observable<ListResponse<Account>> {
    return this.http.get<Account[]>("/api/accounts").pipe(
      // dummy sorting
      map(list => {
        const [sortKey, sortOrder] = sort.split(" ");

        if (sortKey) {
          const multiplier = sortOrder === "desc" ? -1 : 1;

          list.sort((a, b) => (a[sortKey] < b[sortKey] ? -1 : 1) * multiplier);
        }

        return list;
      }),
      // dummy pagination
      map(list => ({
        count: list.length,
        items: list.slice((page - 1) * max, page * max)
      }))
    );
  }
}
