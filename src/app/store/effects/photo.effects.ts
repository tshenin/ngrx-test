import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';

import {AlbumService} from '../../shared/album.service';
import {of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { EPhotoActions, GetPhotosSuccess, GetPhotos } from '../actions/photo.actions';
import { Photo } from 'src/app/shared/models/photo';

@Injectable()
export class PhotoEffects {

    constructor(
        private actions$: Actions,
        private albumService: AlbumService
    ) {}

    @Effect()
    public getPhotos$ = this.actions$.pipe(
        ofType<GetPhotos>(EPhotoActions.GET_PHOTOS),
        switchMap((res) => {
            console.log(res);
            return this.albumService.getPhotos(1);
        }),
        switchMap((photos: Photo[]) => of(new GetPhotosSuccess(photos)))
    );
}
