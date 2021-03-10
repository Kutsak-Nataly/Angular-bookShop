import {Component, OnInit, Optional} from '@angular/core';
import {ConfigOptionsService} from '../../services/config-options.service';
import {LocalStorageService} from '../../services/local-storage.service';
import {GeneratorService} from '../../services/generator.service';

class ConstantServiceValue {
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  generateString: string;
  num: number;
  num1: number;
  answerLocalStorage: string;

  constructor(@Optional() private localStorageService: LocalStorageService,
              @Optional() private configOptions: ConfigOptionsService,
              @Optional() private constantServiceValue: ConstantServiceValue,
              @Optional() private generatorService: GeneratorService
  ) {
  }

  ngOnInit(): void {

  }
  getString(){
    this.generateString = this.generatorService.stringGenerate(this.num);
  }
  getLocalStorage(){
    this.answerLocalStorage = this.localStorageService.getItem(this.num1);
  }
}
