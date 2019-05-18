import { Component, OnInit } from '@angular/core';
import data from '../../data'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  
  pieChartData = [{data:[]}]
  pieChartLabels = []
  pieChartType = "pie" // OR "bar"
  
  constructor() { }

  ngOnInit() { 
    let numOfLikesPerTag = {}

    for(let image of data) {

      let tags = image.tags
      let likes = image.likes
      
      for(let tagsIndex = 0; tagsIndex < tags.length; tagsIndex++) {
        
        if(!numOfLikesPerTag[tags[tagsIndex]]) {
          numOfLikesPerTag[tags[tagsIndex]] = 0
        }
        
        numOfLikesPerTag[tags[tagsIndex]] += parseInt(likes)

      }
            
    }

    console.log(numOfLikesPerTag)
    let tagsLabel = []

    for(let tagsI in numOfLikesPerTag) {
      this.pieChartLabels.push(tagsI)
      tagsLabel.push(numOfLikesPerTag[tagsI])
    }
  

    this.pieChartData = [{
      data: tagsLabel
    }]

   }

}


