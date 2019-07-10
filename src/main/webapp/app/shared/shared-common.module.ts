import { NgModule } from '@angular/core';

import { JobSampleAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JobSampleAppSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JobSampleAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JobSampleAppSharedCommonModule {}
