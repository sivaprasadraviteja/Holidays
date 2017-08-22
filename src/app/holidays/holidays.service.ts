import { Injectable } from '@angular/core';
import {Http} from '@angular/http';



@Injectable()
export class HolidaysService {

  constructor(private http: Http) { }
  getDetails() {
    const key = '10d810f0-095f-49f5-ae70-ed295c4b7f9a';
    const year = '2017';
    const country = 'US';
    const url = 'https://holidayapi.com?country=' + country + 'year=' + year + 'key=' + key;
    this.http.get(url).subscribe(
      res => {
        const data = res.json();
        console.log(data);
        return data;
      }
    );
  }
}
