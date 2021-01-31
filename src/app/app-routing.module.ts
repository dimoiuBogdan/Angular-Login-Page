import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppInterfaceComponent } from './app-interface/app-interface.component';
import { LoginBoxComponent } from './login-box/login-box.component';

const routes: Routes = [
  {
    path: '',
    component: LoginBoxComponent,
  },
  {
    path: 'app',
    component: AppInterfaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
