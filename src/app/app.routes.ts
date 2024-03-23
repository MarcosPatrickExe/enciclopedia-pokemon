import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { HomeMenuComponent } from './contents/home-menu/home-menu.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';

 
const ROUTES: Routes = [
    { path:'', component: HomeComponent },
    { path:'pokedex', component: HomeMenuComponent },
    { path:'about', component: AboutComponent },
    { path:'**', component: NotFoundPageComponent }
]

const Routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot( ROUTES ) ;

export default Routing;
