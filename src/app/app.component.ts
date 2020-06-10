import { Component, VERSION } from "@angular/core";
import { AccountsService } from "./accounts.service";
import { Observable } from "rxjs";
import { SimplifiedListService } from "./simplified-list.service";
import { Account, ListResponse } from "./demo";

@Component({
  selector: "app-root",
  template: `
    <ngx-datatable
      [rows]="(data$ | async)?.items"
      [count]="(data$ | async)?.count"
      [list]="list"
      default
    >
      <ngx-datatable-column name="Company">
        <ng-template let-value="value" ngx-datatable-cell-template>
          {{ value }}
        </ng-template>
      </ngx-datatable-column>

      <ngx-datatable-column name="Balance">
        <ng-template let-value="value" ngx-datatable-cell-template>
          {{ value | currency }}
        </ng-template>
      </ngx-datatable-column>
    </ngx-datatable>
  `,
  providers: [SimplifiedListService]
})
export class AppComponent {
  data$: Observable<ListResponse<Account>>;

  constructor(
    public readonly list: SimplifiedListService,
    private accounts: AccountsService
  ) {
    this.data$ = this.list.hookToQuery(query => this.accounts.get(query));
  }
}
