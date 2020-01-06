import { Photo } from 'src/app/shared/models/photo';

export interface IPhotoState {
    photos: Photo[];
}

export const initialPhotoState: IPhotoState = {
    photos: []
};
