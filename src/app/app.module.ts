import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducers } from './store/reducers/app.reducers';
import { AlbumEffects } from './store/effects/album.effects';
import { PhotosComponent } from './pages/photos/photos.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { RouterEffects } from './store/effects/router.effects';
import { CustomSerializer } from './shared/models/custom-serializer';
import { PhotoEffects } from './store/effects/photo.effects';

@NgModule({
    declarations: [
        AppComponent,
        PhotosComponent,
        AlbumsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot({ ...appReducers, router: routerReducer }),
        EffectsModule.forRoot([AlbumEffects, RouterEffects, PhotoEffects]),
        StoreRouterConnectingModule.forRoot({
            serializer: CustomSerializer
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
