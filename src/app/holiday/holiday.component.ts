import { Component, OnInit } from '@angular/core';
import {HolidaysService} from '../holidays/holidays.service';
@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css'],
  providers: [HolidaysService]
})
export class HolidayComponent implements OnInit {

  constructor(private holidayservice: HolidaysService) { }

  ngOnInit() {
    this.holidayservice.getDetails();
  }

}
