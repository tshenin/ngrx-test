import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AlbumService} from './shared/album.service';
import {Album} from './shared/models/album';
import {Store, select} from '@ngrx/store';
import {IAppState} from './store/app.state';
import {selectAlbumList} from './store/selectors/album.selectors';
import {GetAlbums} from './store/actions/album.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    public title = 'ngrx-test';
    public albums$ = this.store.pipe(select(selectAlbumList));

    constructor(
        private albumService: AlbumService,
        private store: Store<IAppState>
    ) {
    }

    ngOnInit() {
        this.store.dispatch(new GetAlbums());
    }


}
