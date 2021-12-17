import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ElementsHomeComponent} from './elements-home/elements-home.component';

const routes: Routes = [

  {

    path: 'collections',
    loadChildren: () => 
      import('../collections/collections.module').then(m => m.CollectionsModule)
  
  },

  
{
    path: 'elements', 
    loadChildren: () => 
    import('../elements/elements.module').then(m => m.ElementsModule)
},

{
  path: '',
  component: ElementsHomeComponent,
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
