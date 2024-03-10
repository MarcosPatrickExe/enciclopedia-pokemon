import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';


const ROUTES: Routes = [
    {  path:'', component: AppComponent},
    {  path:'', component: AppComponent}
]

const Routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot( ROUTES ) ;

export default Routing ;
