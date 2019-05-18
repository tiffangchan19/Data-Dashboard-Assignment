import { Component, OnInit } from '@angular/core';
import data from '../../data';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  barChartData = []
  barChartLabels = []
  barChartType = "bar"
  
  constructor() { }

  ngOnInit() {

    let numOfLikesPerTag = {}
    let tagPerMonth = {}
    let allMonths = []

    function sortNumber(a: number, b: number) {
      return a - b;
    }

    for(let image of data) {

      let tags = image.tags
      let likes = image.likes
      let date = new Date(image.dateAdded)
      let m = date.getMonth()
      
      if(!allMonths.includes(m)) {
        allMonths.push(m)
      }
      
      for(let tagsIndex = 0; tagsIndex < tags.length; tagsIndex++) {
        // fails: {0: 6805, 1: 7000, 2: 7831, 3: 7226, 4: 7076, 5:

        if(!numOfLikesPerTag[m]) {
          numOfLikesPerTag[m] = {}
        }

        if(!numOfLikesPerTag[m][tags[tagsIndex]]) {
          numOfLikesPerTag[m][tags[tagsIndex]] = 0
        }

        numOfLikesPerTag[m][tags[tagsIndex]] += parseInt(likes)

        
        if(!tagPerMonth[tags[tagsIndex]]) {
          tagPerMonth[tags[tagsIndex]] = {}
        }

        if(!tagPerMonth[tags[tagsIndex]][m]) {
          tagPerMonth[tags[tagsIndex]][m] = 0
        }
        
        // if(!tagPerMonth[tags[tagsIndex]]) {
        //   tagPerMonth[tags[tagsIndex]] = 0
        // }
      
        tagPerMonth[tags[tagsIndex]][m] += parseInt(likes)
        
  
      }
    
    }
  
    let allMonthsSort = allMonths.sort(sortNumber)
    console.log(numOfLikesPerTag)

    this.barChartLabels = allMonths

    let tagLabels = {}
    

    for(let tagIndex in tagPerMonth) {
      let numOfLikes = tagPerMonth[tagIndex]
      for(let month of allMonthsSort) {
        if(!tagLabels[tagIndex]) {
          tagLabels[tagIndex] = []
        }
        tagLabels[tagIndex].push(numOfLikes[month])
      }

    }

    for(let tagIndex in tagLabels) {
      this.barChartData.push({
        data: tagLabels[tagIndex],
        label: tagIndex
      })
    }

    
    // console.log(this.barChartData)

  }

}

