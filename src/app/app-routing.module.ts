import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AdminComponent} from './admin/admin.component';
import { LabComponent} from './lab/lab.component';
import { TestsComponent} from './tests/tests.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'admin',component:AdminComponent
  },
  {
    path:'lab',component:LabComponent
  },
  {
    path:'test',component:TestsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
