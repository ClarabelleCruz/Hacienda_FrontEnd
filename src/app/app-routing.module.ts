import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modules/main-page/landing-page/landing-page.component';

const routes: Routes = [
    // Landing page
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      component: LandingPageComponent,
    },
    {
      path: 'about-us',
      loadChildren: () =>
        import('./modules/main-page/about-us/about-us.module').then(
          (m) => m.AboutUsModule
        ),
    },
    {
      path: 'services',
      loadChildren: () =>
        import('./modules/main-page/services/services.module').then(
          (m) => m.ServicesModule
        ),
    },
    {
      path: 'contact',
      loadChildren: () =>
        import('./modules/main-page/contact/contact.module').then(
          (m) => m.ContactModule
        ),
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
