import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './pages/photos/photos.component';
import { AlbumsComponent } from './pages/albums/albums.component';


const routes: Routes = [
    {
        path: '',
        component: AlbumsComponent
    },
    {
        path: 'album/:id',
        component: PhotosComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
