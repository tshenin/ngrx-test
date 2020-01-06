import {EAlbumActions, AlbumActions} from '../actions/album.actions';
import {initialAlbumState} from '../state/album.state';


export function albumReducers(state = initialAlbumState, action: AlbumActions) {

    switch (action.type) {
        case EAlbumActions.GET_ALBUMS_SUCCESS: {
            return {
                ...state,
                albums: action.payload
            };
        }
        default:
            return state;
    }
}
