import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/app.state';
import { selectAlbumList } from '../../store/selectors/album.selectors';
import { GetAlbums } from '../../store/actions/album.actions';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.less']
})
export class AlbumsComponent implements OnInit {
    public title = 'ngrx-test';
    public albums$ = this.store.pipe(select(selectAlbumList));

    constructor(
        private store: Store<IAppState>
    ) {
    }

    ngOnInit() {
        this.store.dispatch(new GetAlbums());
    }
}
