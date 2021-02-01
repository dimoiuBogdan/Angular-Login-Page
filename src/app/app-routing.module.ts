import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppInterfaceComponent } from './app-interface/app-interface.component';
import { AuthGuard } from './login-box/auth.guard';
import { LoginBoxComponent } from './login-box/login-box.component';

const routes: Routes = [
  {
    path: '',
    component: LoginBoxComponent,
  },
  {
    path: 'app',
    component: AppInterfaceComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
