import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import {Album} from './models/album';


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
}
