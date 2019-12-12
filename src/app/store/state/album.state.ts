import {Album} from '../../shared/models/album';

export interface IAlbumState {
    albums: Album[];
}

export const initialAlbumState: IAlbumState = {
    albums: []
};
