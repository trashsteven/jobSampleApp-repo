import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'location',
        loadChildren: './location/location.module#JobSampleAppLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#JobSampleAppDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#JobSampleAppTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#JobSampleAppEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#JobSampleAppJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#JobSampleAppJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JobSampleAppEntityModule {}
