import { Component, OnInit } from '@angular/core';
import { GitDataService } from 'src/app/services/git-data.service';
import { Repo } from '../../models';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  public query: string;
  public test: Array<Repo>;


  constructor(private gitDataService: GitDataService) { }

  ngOnInit() {
    // this.gitDataService.results_repos.subscribe((value: Array<Repo>) => {
    //  console.log(value);
    //  console.log('log');
    // });


  }


  search() {
    this.gitDataService.searchRepos(this.query);
  }

}
