import {EPhotoActions, PhotoActions} from '../actions/photo.actions';
import { initialPhotoState } from '../state/photo.state';


export function photoReducers(state = initialPhotoState, action: PhotoActions) {

    switch (action.type) {
        case EPhotoActions.GET_PHOTOS_SUCCESS: {
            return {
                ...state,
                photos: action.payload
            };
        }
        default:
            return state;
    }
}
