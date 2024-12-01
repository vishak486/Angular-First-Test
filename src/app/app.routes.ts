import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: 'employee',component:EmployeeComponent
    },
    {
        path: 'login',component:LoginComponent
    }
];
