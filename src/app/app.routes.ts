import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';


const ROUTES: Routes = [
    {  path:'', component: AppComponent},
    {  path:'home', component: HomeComponent}
]

const Routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot( ROUTES ) ;

export default Routing ;
