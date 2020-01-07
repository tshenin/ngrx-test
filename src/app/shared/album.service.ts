import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Album } from './models/album';
import { Photo } from './models/photo';


@Injectable({
    providedIn: 'root'
})
export class AlbumService {

    constructor(private httpClient: HttpClient) {
    }

    public getAlbums(): Observable<Album[]> {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/albums')
            .pipe(map((res: Album[]) => res));
    }

    public getPhotos(albumId: number): Observable<Photo[]> {
        return this.httpClient.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .pipe(map((res: Photo[]) => res));
    }
}
