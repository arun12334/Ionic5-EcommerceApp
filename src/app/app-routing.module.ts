import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'instruction-one',
    loadChildren: () => import('./instruction-one/instruction-one.module').then( m => m.InstructionOnePageModule)
  },
  {
    path: 'instruction-two',
    loadChildren: () => import('./instruction-two/instruction-two.module').then( m => m.InstructionTwoPageModule)
  },
  {
    path: 'instruction-three',
    loadChildren: () => import('./instruction-three/instruction-three.module').then( m => m.InstructionThreePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
