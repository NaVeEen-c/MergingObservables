import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    {
        path:'',component:RegisterComponent
    },{
        path:'students',component:StudentsComponent
    },{
        path:'teachers',component:TeachersComponent
    },
    {
        path:'users',component:UsersComponent
    }
];
