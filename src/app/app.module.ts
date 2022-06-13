import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from "./home/home.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MatButtonModule } from "@angular/material/button";
import { SearchComponent } from "./search/search.component";
import { ProfileComponent } from "./profile/profile.component";
import { MatTabsModule } from "@angular/material/tabs";

const materialModule = [MatIconModule, MatButtonModule, MatTabsModule];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    SearchComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    materialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
