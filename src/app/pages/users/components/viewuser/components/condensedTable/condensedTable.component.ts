import {Component} from '@angular/core';

import {ViewuserService} from '../../viewuser.service';

@Component({
  selector: 'condensed-table',
  template: require('./condensedTable.html')
})
export class CondensedTable {

  peopleTableData:Array<any>;

  constructor(private _viewuserService: ViewuserService) {
    this.peopleTableData = _viewuserService.peopleTableData;
  }
}
