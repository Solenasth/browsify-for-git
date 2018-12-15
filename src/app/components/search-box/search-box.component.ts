import { Component, OnInit } from '@angular/core';
import { GitDataService } from 'src/app/services/git-data.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  public queue: string;

  constructor(private gitDataService: GitDataService) { }

  ngOnInit() {
  }


  search() {
    console.log(this.queue);
    console.log(this.gitDataService.search(''));
  }

}
