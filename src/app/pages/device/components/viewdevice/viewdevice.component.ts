import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'viewdevice',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./viewdevice.scss')],
  template: require('./viewdevice.html')
})
export class Viewdevice {

  constructor() {
  }
}
