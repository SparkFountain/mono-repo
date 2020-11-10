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
    loadChildren: () =>
      import('./how-to-play/how-to-play.module').then((m) => m.HowToPlayModule),
  },
  {
    path: 'karte',
    loadChildren: () => import('./map/map.module').then((m) => m.MapModule),
  },
  {
    path: 'kirche',
    loadChildren: () =>
      import('./church/church.module').then((m) => m.ChurchModule),
  },
  {
    path: 'wald',
    loadChildren: () =>
      import('./forest/forest.module').then((m) => m.ForestModule),
  },
  {
    path: 'iglu',
    loadChildren: () =>
      import('./igloo/igloo.module').then((m) => m.IglooModule),
  },
  {
    path: 'zoo',
    loadChildren: () => import('./zoo/zoo.module').then((m) => m.ZooModule),
  },
  {
    path: 'schlittschuh-laufen',
    loadChildren: () =>
      import('./ice-skating/ice-skating.module').then(
        (m) => m.IceSkatingModule
      ),
  },
  {
    path: 'seilbahn',
    loadChildren: () =>
      import('./cableway/cableway.module').then((m) => m.CablewayModule),
  },
  {
    path: 'theater',
    loadChildren: () =>
      import('./theater/theater.module').then((m) => m.TheaterModule),
  },
  {
    path: 'bar',
    loadChildren: () => import('./bar/bar.module').then((m) => m.BarModule),
  },
  {
    path: 'schwimmbad',
    loadChildren: () => import('./pool/pool.module').then((m) => m.PoolModule),
  },
  {
    path: 'hotel',
    loadChildren: () =>
      import('./hotel/hotel.module').then((m) => m.HotelModule),
  },
  {
    path: 'gewonnen',
    loadChildren: () =>
      import('./jazzchor/jazzchor.module').then((m) => m.JazzchorModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
