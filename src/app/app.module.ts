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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterComponent } from "./components/filter/filter.component";
import { PhotosComponent } from "./components/photos/photos.component";
import { HideDirective } from "./directives/hide.directive";
import { PhotoComponent } from "./components/photos/photo/photo.component";
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DialogComponent } from "./components/dialog/dialog.component";
import { CustomMaterialModule } from "./custom-material.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardItemDirective,
    ListItemDirective,
    AlbumsComponent,
    AlbumComponent,
    CardListViewComponent,
    FilterComponent,
    PhotosComponent,
    HideDirective,
    PhotoComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    {
      provide: MatDialogRef,
      useValue: {}
    },
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
