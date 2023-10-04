import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts/layouts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      {
        path: '', component: LayoutsComponent,
        children: [
          { path: '', redirectTo: '/home', pathMatch: 'full' },
          { path: 'home', title: 'Home', component: HomeComponent },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
