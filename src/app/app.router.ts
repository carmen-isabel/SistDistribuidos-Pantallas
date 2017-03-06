import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { UploadComponent } from './upload/upload.component';

export const router: Routes = [
    { path: '', redirectTo: 'profile', pathMatch: 'full'},//Component que abrirá por defecto
    { path: 'profile', component: ProfileComponent},
    { path: 'edit', component: EditComponent},
    { path: 'upload', component: UploadComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router); 
