import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { albumReducers } from './album.reducers';
import { photoReducers } from './photo.reducers';
import { IAppState } from '../app.state';

export const appReducers: ActionReducerMap<IAppState, any> = {
    albums: albumReducers,
    photos: photoReducers,
};
