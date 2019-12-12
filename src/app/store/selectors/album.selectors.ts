import {createSelector} from '@ngrx/store';

import {IAppState} from '../app.state';
import {IAlbumState} from '../state/album.state';

const selectAlbums = (state: IAppState) => state.albums;

export const selectAlbumList = createSelector(
    selectAlbums,
    (state: IAlbumState) => state.albums
);
