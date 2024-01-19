import { Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { LoginModalComponent } from './shared-Components/login-modal/login-modal.component';

export const routes: Routes = [
    {
        path: '',
        component: ContentComponent,
        title: 'Home'

    },
    {
    path: 'home',
    component: ContentComponent,
    title: 'Home'
},
{
    path: 'login',
    component: LoginModalComponent,
    title: 'Login'
},



];
