import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'selec-automatic-mode',
    loadChildren: './pages/automatic/selec-automatic-mode-routing.module#SelecAutomaticModeRoutingModule'
  },
  {
    path: 'comments',
    loadChildren: './pages/comments/comments-routing.module#CommentsRoutingModule'
  },
  {
    path: 'followers',
    loadChildren: './pages/followers/followers-routing.module#FollowersRoutingModule'
  },
  {
    path: 'forms',
    loadChildren: './pages/forms/forms-routing.module#FormsRoutingModule'
  },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  {
    path: 'likes',
    loadChildren: './pages/likes/likes-routing.module#LikesRoutingModule'
  },
  { path: 'login', loadChildren: './pages/public/login/login.module#LoginPageModule' },
  {
    path: 'magnetism',
    loadChildren: './pages/magnetism/magnetism-routing.module#MagnetismRoutingModule'
  },
  {
    path: 'process',
    loadChildren: './pages/process/process-routing.module#ProcessRoutingModule'
  },
  {
    path: 'shop',
    loadChildren: './pages/shop/shop-routing.module#ShopRoutingModule'
  },
  {
    path: 'videos',
    loadChildren: './pages/videos/videos-routing.module#VideosRoutingModule'
  },
  {
    path: 'slider',
    loadChildren: () => import('./slider/slider/slider.module').then( m => m.SliderPageModule)
  },
  {
    path: 'gestion',
    loadChildren: './pages/gestion/gestion/gestion-routing.module#GestionRoutingModule'
  },
  {
    path: 'share',
    loadChildren: './pages/share/share/share-routing.module#ShareRoutingModule'
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
