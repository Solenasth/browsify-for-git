import { Component, OnInit } from '@angular/core';
import { GitDataService } from 'src/app/services/git-data.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  public query: string;

  constructor(private gitDataService: GitDataService) { }

  ngOnInit() {

  }


  search() {
    this.gitDataService.searchRepos(this.query).subscribe((results) => {console.log(results); });
  }

}
