import { Component, OnInit } from "@angular/core";
import { Photo } from "src/app/models";
import { PhotoService } from "src/app/services/photo.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"]
})
export class PhotosComponent implements OnInit {
  thumbnails: Photo[] = [];
  mode = "card";
  filterValue = "";

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(
      Number.parseInt(this.route.snapshot.queryParamMap.get("album_id"), 10)
    );
    this.photoService
      .getThumbnails(
        Number.parseInt(this.route.snapshot.queryParamMap.get("album_id"), 10)
      )
      .subscribe(thumbnails => {
        console.log("thumbnails");
        this.thumbnails = thumbnails;
      });
  }

  // filter(value: string) {
  //   this.filterValue = value;
  // }

  deleteImage(imageId: number) {}

  thumnailClick(photoId: number) {
    this.router.navigate(["/photo"], { queryParams: { photo_id: photoId } });
  }
}
