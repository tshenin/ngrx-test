import {ActionReducerMap} from '@ngrx/store';

import {albumReducers} from './album.reducers';
import {IAppState} from '../app.state';

export const appReducers: ActionReducerMap<IAppState, any> = {
    albums: albumReducers
};
