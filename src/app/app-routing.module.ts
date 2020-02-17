import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumsComponent } from "./components/albums/albums.component";
import { PhotosComponent } from "./components/photos/photos.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "albums",
    component: AlbumsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "photos",
    component: PhotosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
