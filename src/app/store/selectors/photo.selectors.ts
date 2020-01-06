import {createSelector} from '@ngrx/store';

import {IAppState} from '../app.state';
import {IPhotoState} from '../state/photo.state';

const selectAlbums = (state: IAppState) => state.photos;

export const selectPhotoList = createSelector(
    selectAlbums,
    (state: IPhotoState) => state.photos
);
