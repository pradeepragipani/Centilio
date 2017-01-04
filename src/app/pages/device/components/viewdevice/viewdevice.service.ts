import { Injectable } from '@angular/core';

@Injectable()
export class ViewdeviceService {

  smartTablePageSize = 10;

  editableTableData: Array<any>;

  peopleTableData = [
    {
      id: 1,
      deviceName: 'Mobile',
      latitude: '-14.25252',
      longitude: '74.2653',
      dateTime: '03-01-2017 10:01:00',
      battery: '90',
      temperature: '56',
      status: 'info'
    },
    {
      id: 2,
      deviceName: 'Laptop',
      latitude: '17.25252',
      longitude: '85.2653',
      dateTime: '25-12-2016 22:36:42',
      battery: '28',
      temperature: '38',
      status: 'primary'
    },
    {
      id: 3,
      deviceName: 'iPad',
      latitude: '17.25252',
      longitude: '85.2653',
      dateTime: '15-12-2016 20:45:55',
      battery: '74',
      temperature: '28',
      status: 'success'
    },
    {
      id: 4,
      deviceName: 'Windows Tab',
      latitude: '17.25252',
      longitude: '85.2653',
      dateTime: '09-12-2016 13:09:52',
      battery: '15',
      temperature: '35',
      status: 'danger'
    },
    {
      id: 5,
      deviceName: 'Watch',
      latitude: '-16.25252',
      longitude: '65.2653',
      dateTime: '03-12-2016 10:45:18',
      battery: '98',
      temperature: '15',
      status: 'warning'
    }
  ];

  

  constructor() {
    // this.editableTableData = this.smartTableData.slice(0, 36);
  }
}
