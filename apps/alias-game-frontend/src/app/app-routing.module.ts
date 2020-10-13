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
    path: 'neue-session-erstellen',
    loadChildren: () =>
      import('./create-new-session/create-new-session.module').then(
        (m) => m.CreateNewSessionModule
      ),
  },
  {
    path: 'einer-session-beitreten',
    loadChildren: () =>
      import('./join-session/join-session.module').then(
        (m) => m.JoinSessionModule
      ),
  },
  {
    path: 'spielen',
    loadChildren: () => import('./play/play.module').then((m) => m.PlayModule),
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
