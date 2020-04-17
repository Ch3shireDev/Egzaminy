import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { ExamComponent } from './exam/exam.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BrowseComponent },
  { path: 'exam/:id', pathMatch: 'full', component: ExamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
