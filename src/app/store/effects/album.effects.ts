import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';

import {AlbumService} from '../../shared/album.service';
import {Album} from '../../shared/models/album';
import {GetAlbums, EAlbumActions, GetAlbumsSuccess} from '../actions/album.actions';
import {of} from 'rxjs';
import {switchMap, switchMapTo} from 'rxjs/operators';

@Injectable()
export class AlbumEffects {

    constructor(
        private actions$: Actions,
        private albumService: AlbumService
    ) {}

    @Effect()
    public getAlbums$ = this.actions$.pipe(
        ofType<GetAlbums>(EAlbumActions.GET_ALBUMS),
        switchMap(() => this.albumService.getAlbums()),
        switchMap((albums: Album[]) => of(new GetAlbumsSuccess(albums)))
    );
}
