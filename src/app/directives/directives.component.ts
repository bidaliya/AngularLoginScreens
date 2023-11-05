import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  currentPage:number = 0;
  pageLimit:number = 5;

  imagesArray = [
    { title: "Nature", imageURL: "https://www.w3schools.com/w3css/img_lights.jpg" },
    { title: "City", imageURL: "https://www.w3schools.com/w3images/fjords.jpg" },
    { title: "Mountains", imageURL: "https://www.w3schools.com/w3images/mountains.jpg" },
    { title: "Forest", imageURL: "https://www.w3schools.com/w3images/forest.jpg" },
    { title: "Beach", imageURL: "https://www.w3schools.com/w3images/ocean.jpg" },
    { title: "Nature", imageURL: "https://www.w3schools.com/w3css/img_lights.jpg" },
    { title: "City", imageURL: "https://www.w3schools.com/w3images/fjords.jpg" },
    { title: "Mountains", imageURL: "https://www.w3schools.com/w3images/mountains.jpg" },
    { title: "Forest", imageURL: "https://www.w3schools.com/w3images/forest.jpg" },
    { title: "Beach", imageURL: "https://www.w3schools.com/w3images/ocean.jpg" },
    { title: "Nature", imageURL: "https://www.w3schools.com/w3css/img_lights.jpg" },
    { title: "City", imageURL: "https://www.w3schools.com/w3images/fjords.jpg" },
    { title: "Mountains", imageURL: "https://www.w3schools.com/w3images/mountains.jpg" },
    { title: "Forest", imageURL: "https://www.w3schools.com/w3images/forest.jpg" },
    { title: "Beach", imageURL: "https://www.w3schools.com/w3images/ocean.jpg" },
    { title: "Nature", imageURL: "https://www.w3schools.com/w3css/img_lights.jpg" },
    { title: "City", imageURL: "https://www.w3schools.com/w3images/fjords.jpg" },
    { title: "Mountains", imageURL: "https://www.w3schools.com/w3images/mountains.jpg" },
    { title: "Forest", imageURL: "https://www.w3schools.com/w3images/forest.jpg" },
    { title: "Beach", imageURL: "https://www.w3schools.com/w3images/ocean.jpg" },
    
  ];

  checkPage(pageNumber:number){
    return Math.abs((this.currentPage - pageNumber)) < 5
  }

}
