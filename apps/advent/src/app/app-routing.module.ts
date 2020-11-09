import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'willkommen',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  { path: '', redirectTo: '/willkommen', pathMatch: 'full' },
  {
    path: 'so-wird-gespielt',
    loadChildren: () => import('./how-to-play/how-to-play.module').then((m) => m.HowToPlayModule),
  },
  {
    path: 'karte',
    loadChildren: () => import('./map/map.module').then((m) => m.MapModule),
  },
  {
    path: 'gewonnen',
    loadChildren: () => import('./jazzchor/jazzchor.module').then((m) => m.JazzchorModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  // { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
