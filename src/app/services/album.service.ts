import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { of, Observable, throwError } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import { Album, User } from "../models";

@Injectable({
  providedIn: "root"
})
export class AlbumService {
  baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) {}

  getAlbums(userId: number): Observable<Album[]> {
    return this.http.get(this.baseUrl + "albums", {}).pipe(
      switchMap((res: any) => {
        console.log(res);
        const albums: Album[] = [];
        res.forEach(element => {
          albums.push(
            new Album(
              element["id"],
              null,
              element["title"],
              new User(element["userId"], null)
            )
          );
        });

        return this.http.get(this.baseUrl + "photos", {}).pipe(
          switchMap((photos: any) => {
            console.log(photos);
            photos.forEach(photo => {
              for (let i = 0; i < albums.length; i++) {
                if (
                  photo["albumId"] === albums[i].id &&
                  !(typeof albums[i].url != undefined && albums[i].url)
                ) {
                  console.log("EQUAAL");
                  albums[i].url = photo["url"];
                  break;
                }
              }
            });
            console.log(albums);
            return this.http.get(this.baseUrl + "users", {}).pipe(
              map((users: any) => {
                users.forEach(user => {
                  for (let i = 0; i < albums.length; i++) {
                    if (albums[i].creator.id === user["id"]) {
                      albums[i].creator.name = user["name"];
                    }
                  }
                });
                return albums;
              })
            );
            // return albums;
          })
        );
      })
    );
    // return this.http.get(this.baseUrl + 'albums', {}).pipe(
    //   map((res: any) => {
    //     console.log(res);
    //     const albums: Album[] = [];
    //     res.forEach(element => {
    //       albums.push(new Album(element['id'], eleme))
    //     });

    //     return marks;
    //   })
    // );
  }
}
