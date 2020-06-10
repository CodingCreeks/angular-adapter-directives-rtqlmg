import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { AppComponent } from "./app.component";
import { InMemAccountsService } from "./in-mem-accounts.service";
import { NgxDatatableDefaultDirective } from "./ngx-datatable-default.directive";
import { NgxDatatableListDirective } from "./ngx-datatable-list.directive";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemAccountsService, {
      delay: 1000
    }),
    NgxDatatableModule
  ],
  declarations: [
    AppComponent,
    NgxDatatableDefaultDirective,
    NgxDatatableListDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
