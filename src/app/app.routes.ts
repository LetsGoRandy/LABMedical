import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MedicalHistorysComponent } from './pages/medical-historys/medical-historys.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/Home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastro',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'prontuarios', component: MedicalHistorysComponent },
        ]
    }

];
