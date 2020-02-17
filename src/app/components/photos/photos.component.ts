import { Component, OnInit } from "@angular/core";
import { Photo, ConfirmDialogModel } from "src/app/models";
import { PhotoService } from "src/app/services/photo.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../dialog/dialog.component";
import { AlbumService } from "src/app/services/album.service";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"]
})
export class PhotosComponent implements OnInit {
  thumbnails: Photo[] = [];
  deleted: number[] = [];
  mode = "list";
  filterValue = "";
  albumTitle = "";

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.photoService
      .getThumbnails(
        Number.parseInt(this.route.snapshot.queryParamMap.get("album_id"), 10)
      )
      .subscribe(thumbnails => {
        console.log("thumbnails");
        this.albumService
          .getAlbum(
            Number.parseInt(
              this.route.snapshot.queryParamMap.get("album_id"),
              10
            )
          )
          .subscribe(album => {
            this.albumTitle = album.title;
          });
        this.thumbnails = thumbnails;
      });
  }

  deletePhoto(imageId: number) {
    this.confirmDialog(imageId.toString());
  }

  confirmDialog(data: string): void {
    const message = "Da li si siguran da želiš da obrišeš sliku " + data;

    const dialogData = new ConfirmDialogModel("", message);

    const dialogRef = this.dialog.open(DialogComponent, {
      maxWidth: "100%",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult === true) {
        this.thumbnails.forEach(thumb => {
          if (thumb.id === parseInt(data, 10)) {
            this.deleted.push(thumb.id);
          }
        });
      }
    });
  }
  // This functionality is not needed as mentioned in the task
  thumnailClick(photoId: number) {
    this.router.navigate(["/photo"], { queryParams: { photo_id: photoId } });
  }
}
