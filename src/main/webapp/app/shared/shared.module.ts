import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JobSampleAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JobSampleAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JobSampleAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JobSampleAppSharedModule {
  static forRoot() {
    return {
      ngModule: JobSampleAppSharedModule
    };
  }
}
