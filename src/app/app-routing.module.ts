import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{HttpClientModule} from '@angular/common/http'
const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'mipagina', loadChildren: './mipagina/mipagina.module#MipaginaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
   HttpClientModule 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
