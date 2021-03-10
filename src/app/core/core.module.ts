import {NgModule} from '@angular/core';
import {ConfigOptionsService} from './services/config-options.service';
import {LocalStorageService} from './services/local-storage.service';
import {GeneratorService} from './services/generator.service';
import {AboutComponent} from './components/about/about.component';
import {ConstantService} from './services/constant.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AboutComponent],
  imports: [FormsModule],
  providers: [
    ConfigOptionsService,
    {provide: LocalStorageService, useClass: LocalStorageService},
    {provide: ConstantService, useValue: {app: 'TaskManager', ver: '1.0'}},
    {provide: GeneratorService, useFactory: () => new GeneratorService(5)},
  ]
})
export class CoreModule {


}
