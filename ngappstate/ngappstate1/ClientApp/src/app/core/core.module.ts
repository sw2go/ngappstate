import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreConfigInterface } from './core-config.interface';
import { CoreConfigService } from './core-config.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  exports: [],
  providers: [
    /* Intentionally no providers here! See providers in forRoot() */
  ]
})
export class CoreModule { 
  /* to import the module including providers for use in root module only */
  static forRoot(config: CoreConfigInterface) : ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [  
        {
          provide: CoreConfigService,
          useValue: config
        }
      ]   
    }
  }
}
