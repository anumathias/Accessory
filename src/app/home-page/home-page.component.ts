import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredSearchValue:string="";



  @Output()
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>();



onSearchTextChanged(){

  this.searchTextChanged.emit(this.enteredSearchValue);

  console.log(this.enteredSearchValue)

}

}
