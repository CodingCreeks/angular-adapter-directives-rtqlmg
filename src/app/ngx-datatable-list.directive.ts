import { SimplifiedListService } from "./simplified-list.service";
import {
  ChangeDetectorRef,
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Subscription } from "rxjs";

@Directive({
  // tslint:disable-next-line
  selector: "ngx-datatable[list]",
  exportAs: "ngxDatatableList"
})
export class NgxDatatableListDirective implements OnChanges, OnDestroy, OnInit {
  private subscription = new Subscription();

  @Input() list: SimplifiedListService;

  constructor(
    private table: DatatableComponent,
    private cdRef: ChangeDetectorRef
  ) {
    this.table.externalPaging = true;
    this.table.externalSorting = true;
  }

  private subscribeToPage() {
    const sub = this.table.page.subscribe(({ offset }) => {
      this.list.page$.next(offset + 1);
      this.table.offset = offset;
    });
    this.subscription.add(sub);
  }

  private subscribeToSort() {
    const sub = this.table.sort.subscribe(({ sorts }) => {
      const [{ prop, dir }] = sorts;
      this.list.sort$.next(`${prop || ""} ${dir || ""}`);
    });
    this.subscription.add(sub);
  }

  private subscribeToIsLoading() {
    const sub = this.list.isLoading$.subscribe(loading => {
      this.table.loadingIndicator = loading;
      this.cdRef.markForCheck();
    });
    this.subscription.add(sub);
  }

  ngOnChanges({ list }: SimpleChanges) {
    if (!list.firstChange) return;

    const { max$, page$ } = list.currentValue;
    this.table.limit = max$.value;
    this.table.offset = page$.value - 1;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscribeToPage();
    this.subscribeToSort();
    this.subscribeToIsLoading();
  }
}
