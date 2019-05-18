import { Component, OnInit } from '@angular/core';
import data from '../../data';

@Component({
  selector: 'app-images-per-month',
  templateUrl: './images-per-month.component.html',
  styleUrls: ['./images-per-month.component.css']
})
export class ImagesPerMonthComponent implements OnInit {

  lineChartData = []
  lineChartLabels = []
  lineChartType = "line"

  constructor() { }

  ngOnInit() {

    let numOfImagePerMonth = {}
    let allMonths = []

    function sortNumber(a: number, b: number) {
      return a - b;
    }
    
    for(let image of data) {
      
      let date = new Date(image.dateAdded)
      let m = date.getMonth()
      
      if(!allMonths.includes(m)) {
        allMonths.push(m)
      }

      if(!numOfImagePerMonth[m]) {
        numOfImagePerMonth[m] = 0
      }

      numOfImagePerMonth[m] += 1

    }

    let allMonthsSort = allMonths.sort(sortNumber)
    this.lineChartLabels = allMonthsSort
    console.log(numOfImagePerMonth)

    for(let i in numOfImagePerMonth) {
      this.lineChartData.push({
        data: numOfImagePerMonth[i],
        label: "Number of Images Per Month"
      })

    }
  }
}
