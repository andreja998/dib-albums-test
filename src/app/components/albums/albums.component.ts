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
import { Album } from "src/app/models";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.scss"]
})
export class AlbumsComponent implements OnInit {
  images: string[] = ["asd", "dfg"];
  mode = "card";
  albums: Album[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums(1).subscribe(albums => {
      this.albums = albums;
    });
  }

  switchMode() {
    this.mode = this.mode === "list" ? "card" : "list";
  }
}
