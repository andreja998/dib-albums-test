import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { CardItemDirective } from "./directives/card-item.directive";
import { ListItemDirective } from "./directives/list-item.directive";
import { AlbumsComponent } from "./components/albums/albums.component";
import { AlbumComponent } from "./components/albums/album/album.component";
import { CardListViewComponent } from "./components/card-list-view/card-list-view.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardItemDirective,
    ListItemDirective,
    AlbumsComponent,
    AlbumComponent,
    CardListViewComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
