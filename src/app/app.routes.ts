import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';


const ROUTES: Routes = [
    {  path:'', component: AppComponent}
]

const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot( ROUTES ) ;

export default routing ;
