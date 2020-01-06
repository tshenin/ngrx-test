import {Action} from '@ngrx/store';
import {Photo} from '../../shared/models/photo';

export enum EPhotoActions {
    GET_PHOTOS = '[PHOTO] Get Photos',
    GET_PHOTOS_SUCCESS = '[PHOTO] Get Success',
}

export class GetPhotos implements Action {
    readonly type = EPhotoActions.GET_PHOTOS;
    constructor(public payload: number) {}
}

export class GetPhotosSuccess implements Action {
    readonly type = EPhotoActions.GET_PHOTOS_SUCCESS;
    constructor(public payload: Photo[]) {}
}

export type PhotoActions = GetPhotos | GetPhotosSuccess;
