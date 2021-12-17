import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ElementsHomeComponent} from './elements-home/elements-home.component';
import {CollectionsHomeComponent} from '../collections/collections-home/collections-home.component';

const routes: Routes = [
{
    path: 'elements', 
    component: ElementsHomeComponent,
},

{
  path: 'collections',
  component: CollectionsHomeComponent,
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
