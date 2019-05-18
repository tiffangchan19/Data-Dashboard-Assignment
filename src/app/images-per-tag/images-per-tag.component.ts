import { Component, OnInit } from '@angular/core';
import data from '../../data'

@Component({
  selector: 'app-images-per-tag',
  templateUrl: './images-per-tag.component.html',
  styleUrls: ['./images-per-tag.component.css']
})

export class ImagesPerTagComponent implements OnInit {
  pieChartData = [{data:[]}]
  pieChartLabels = []
  pieChartType = "pie"

  constructor() { }

  ngOnInit() {

    let numOfImagesPerTag = {}

    for(let image of data) {

      let tags = image.tags
      
      for(let tagsIndex = 0; tagsIndex < tags.length; tagsIndex++) {
        
        if(!numOfImagesPerTag[tags[tagsIndex]]) {
          numOfImagesPerTag[tags[tagsIndex]] = 0
        }
        
        numOfImagesPerTag[tags[tagsIndex]] += 1

      }

    }

    console.log(numOfImagesPerTag)

    let tagsLabel = []

    for(let tagsI in numOfImagesPerTag) {
      this.pieChartLabels.push(tagsI)
      tagsLabel.push(numOfImagesPerTag[tagsI])
    }
  

    this.pieChartData = [{
      data: tagsLabel
    }]

  }

}
