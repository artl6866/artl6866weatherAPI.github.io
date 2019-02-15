import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service'

@Component({
  selector: 'app-kihei',
  templateUrl: './kihei.component.html',
  styleUrls: ['./kihei.component.css']
})
export class KiheiComponent implements OnInit {
  city = 96753;
  currentTemp = null;
  humidity = null;
  tempHi = null;
  tempLow = null;
  status = null;

  constructor(private getWeatherService: GetWeatherService) { }

  ngOnInit() {this.getWeatherService.getWeather(this.city).subscribe(
    (currentCity:any = {}) => {
      this.currentTemp = currentCity.main.temp;
      this.humidity = currentCity.main.humidity;
      this.status = currentCity.weather[0].description;
      this.tempHi = currentCity.main.temp_max;
      this.tempLow = currentCity.main.temp_min
    }
  )}

}