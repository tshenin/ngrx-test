import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { selectPhotoList } from 'src/app/store/selectors/photo.selectors';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.less']
})
export class PhotosComponent implements OnInit {

    public photos$ = this.store.pipe(select(selectPhotoList));

    constructor(private store: Store<IAppState>) { }

    ngOnInit() {
    }

}
