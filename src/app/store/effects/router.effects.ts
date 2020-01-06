import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

@Injectable()
export class RouterEffects {

    constructor(
        private actions$: Actions
    ) { }

    @Effect({dispatch: false})
    public changeLocation$ = this.actions$.pipe(
        ofType(ROUTER_NAVIGATION),
        map(res => console.log(res)),
        // map((photos: Photo[]) => new GetPhotosSuccess(photos))
    );
}
