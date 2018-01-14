import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import {ContactComponent} from './about-us/contact/contact.component';
import {TeamComponent} from './about-us/team/team.component';
import {ProfileComponent} from './about-us/profile/profile.component';

import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
    { path: '', component: AboutUsComponent, pathMatch: 'full', canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'aboutus', component: AboutUsComponent, canActivate: [AuthGuard],
    children: [
        {path: '', redirectTo: 'contactus', pathMatch: 'full'},
        { path: 'contactus', component: ContactComponent },
        { path: 'profile', component: ProfileComponent },
        {path : 'team', component : TeamComponent}
      ]
},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
