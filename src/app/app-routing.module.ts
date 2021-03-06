import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/places/places.module').then((m) => m.PlacesPageModule),
  },
  {
    path: 'bookings',
    loadChildren: () =>
      import('./pages/bookings/bookings.module').then(
        (m) => m.BookingsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
