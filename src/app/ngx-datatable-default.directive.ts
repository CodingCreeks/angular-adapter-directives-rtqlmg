import { Directive, HostBinding, Input } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";

@Directive({
  // tslint:disable-next-line
  selector: "ngx-datatable[default]",
  exportAs: "ngxDatatableDefault"
})
export class NgxDatatableDefaultDirective {
  @Input() class = "material bordered";

  @HostBinding("class")
  get classes(): string {
    return `ngx-datatable ${this.class}`;
  }

  constructor(private table: DatatableComponent) {
    this.table.columnMode = ColumnMode.force;
    this.table.footerHeight = 50;
    this.table.headerHeight = 50;
    this.table.rowHeight = "auto";
    this.table.cssClasses = {
      sortAscending: "feather-icon chevron-up",
      sortDescending: "feather-icon chevron-down",
      pagerLeftArrow: "feather-icon chevron-left",
      pagerRightArrow: "feather-icon chevron-right",
      pagerPrevious: "feather-icon chevrons-left",
      pagerNext: "feather-icon chevrons-right"
    };
  }
}
