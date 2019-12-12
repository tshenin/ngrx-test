import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {appReducers} from './store/reducers/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {AlbumEffects} from './store/effects/album.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AlbumEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
