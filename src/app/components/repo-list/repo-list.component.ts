import { Component, OnInit } from '@angular/core';
import { GitDataService } from 'src/app/services/git-data.service';
import { Repo } from 'src/app/models';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {
  public reposData: Array<Repo>;

  constructor(private gitDataService: GitDataService) {
   }

  ngOnInit() {
    this.gitDataService.results_repos.subscribe(res => {
      this.reposData = res;
    });
  }

}
