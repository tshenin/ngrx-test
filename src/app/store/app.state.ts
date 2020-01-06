import {IAlbumState, initialAlbumState} from './state/album.state';
import {initialPhotoState, IPhotoState} from './state/photo.state';

export interface IAppState {
    albums: IAlbumState;
    photos: IPhotoState;
}

export const initialAppState: IAppState = {
    albums: initialAlbumState,
    photos: initialPhotoState,
};

export function getInitialState(): IAppState {
    return initialAppState;
}
