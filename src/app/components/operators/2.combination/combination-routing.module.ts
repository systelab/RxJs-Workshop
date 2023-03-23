import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../models/menu.model';
import { CombineLatestWithComponent } from './combine-latest-with/combine-latest-with.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';

const routes: Routes = [
  {
    path: ROUTES.COMBINE_LATEST_WITH,
    component: CombineLatestWithComponent,
  },
  {
    path: ROUTES.WITH_LATEST_FROM,
    component: WithLatestFromComponent,
  },
  {
    path: ROUTES.CONCAT,
    component: CombineLatestWithComponent,
  },
  {
    path: ROUTES.MERGE,
    component: CombineLatestWithComponent,
  },
  {
    path: ROUTES.START_WITH,
    component: CombineLatestWithComponent,
  },
  {
    path: ROUTES.FORK_JOIN,
    component: CombineLatestWithComponent,
  },
  {
    path: ROUTES.ZIP,
    component: CombineLatestWithComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombinationRoutingModule {}
