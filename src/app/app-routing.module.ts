import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LifeGoalsComponent } from './life-goals/life-goals.component';
import { ProImagesGalleryComponent } from './pro-images-gallery/pro-images-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },
  {
    path: 'life_goals',
    component: LifeGoalsComponent
  },
  {
    path: 'pro_images_gallery/:name',
    component: ProImagesGalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
