import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ActionsComponent}    from './actions.component';
import {ActionDetailComponent}  from './action-detail/action-detail.component';
// import {ActionsListComponent} from './actions-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        {
            path: '',
            component: ActionsComponent,
            children: [
                // {
                //     path: '',
                //     component: ActionsListComponent
                // },
                {
                    path: 'detail',
                    component: ActionDetailComponent,
                }
            ]
        }
    ])
  ],
  exports: [
      RouterModule
  ]
})
export class ActionsRoutingModule { }
