import {IAlbumState, initialAlbumState} from './state/album.state';

export interface IAppState {
    albums: IAlbumState;
}

export const initialAppState: IAppState = {
    albums: initialAlbumState,
};

export function getInitialState(): IAppState {
    return initialAppState;
}
