import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, filter } from 'rxjs/operators';
import { ROUTER_NAVIGATION, RouterNavigatedAction } from '@ngrx/router-store';
import { RouterStateUrl } from 'src/app/shared/models/custom-serializer';
import { GetPhotos } from '../actions/photo.actions';

@Injectable()
export class RouterEffects {

    constructor(
        private actions$: Actions
    ) { }

    @Effect()
    public changeLocation$ = this.actions$.pipe(
        ofType(ROUTER_NAVIGATION),
        map((action: RouterNavigatedAction<RouterStateUrl>): RouterStateUrl => action && action.payload.routerState),
        filter((state: RouterStateUrl) => state.url.includes('/album/')),
        map((state: RouterStateUrl) => new GetPhotos(state.params.albumId))
    );
}
