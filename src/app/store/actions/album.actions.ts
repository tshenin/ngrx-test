import {Action} from '@ngrx/store';
import {Album} from '../../shared/models/album';

export enum EAlbumActions {
    GET_ALBUMS = '[ALBUM] Get Albums',
    GET_ALBUMS_SUCCESS = '[ALBUM] Get Success',
}

export class GetAlbums implements Action {
    readonly type = EAlbumActions.GET_ALBUMS;
}

export class GetAlbumsSuccess implements Action {
    readonly type = EAlbumActions.GET_ALBUMS_SUCCESS;
    constructor(public payload: Album[]) {}
}

export type AlbumActions = GetAlbums | GetAlbumsSuccess;
