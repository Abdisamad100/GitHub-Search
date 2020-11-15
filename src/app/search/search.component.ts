import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  username:string;
  @Output() addSearch  = new EventEmitter<any>();
    constructor() { }
  search(){
    this.addSearch.emit(this.username);
  }
    ngOnInit(): void {
    }
  }
