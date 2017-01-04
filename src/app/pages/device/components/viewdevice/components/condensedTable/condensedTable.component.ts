import {Component} from '@angular/core';

import {ViewdeviceService} from '../../viewdevice.service';

@Component({
  selector: 'condensed-table',
  template: require('./condensedTable.html')
})
export class CondensedTable {

  peopleTableData:Array<any>;

  constructor(private _viewdeviceService: ViewdeviceService) {
    this.peopleTableData = _viewdeviceService.peopleTableData;
  }
}
