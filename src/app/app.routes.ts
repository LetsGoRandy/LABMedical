import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MedicalHistorysComponent } from './pages/medical-historys/medical-historys.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { authGuard } from './guard/auth.guard';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';

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
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [authGuard],
            },
            {
                path: 'prontuarios',
                component: MedicalHistorysComponent,
                canActivate: [authGuard],
            },
            {
                path:'novopaciente',
                component: NewPatientComponent,
                canActivate: [authGuard],
            }
        ]
    },
    {
        path: '**',
        component: LoginComponent
    }

];
