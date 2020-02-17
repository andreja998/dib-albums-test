import {
  Component,
  OnInit,
  ContentChild,
  TemplateRef,
  Input
} from "@angular/core";
import { CardItemDirective } from "src/app/directives/card-item.directive";
import { ListItemDirective } from "src/app/directives/list-item.directive";
import { AlbumService } from "src/app/services/album.service";
import { Album, User } from "src/app/models";
import { Router } from "@angular/router";
import { AuthUserService } from "src/app/services/auth-user.service";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.scss"]
})
export class AlbumsComponent implements OnInit {
  mode = "list";
  albums: Album[] = [];
  title = "Albumi porodice neke";

  constructor(
    private albumService: AlbumService,
    private router: Router,
    private authUser: AuthUserService
  ) {}

  ngOnInit() {
    this.albumService.getAlbums(1).subscribe(albums => {
      this.albums = albums;
    });
  }

  onFilter(text: string) {
    this.albums = this.albums.filter(album => {
      console.log("POSTOJI");
      return album.id
        .toString()
        .toLowerCase()
        .includes(text);
    });
  }

  albumClick(albumId: number) {
    this.router.navigate(["/photos"], { queryParams: { album_id: albumId } });
  }
}
