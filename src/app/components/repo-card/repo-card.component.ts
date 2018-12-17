import { Component, OnInit, Input } from '@angular/core';
import { Repo } from 'src/app/models';
import { GitDataService } from 'src/app/services/git-data.service';


@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {
  @Input() data: Repo;
  constructor(private gitDataService: GitDataService) { }

  ngOnInit() {
  }

  getComments() {
    this.gitDataService.getComments(this.data.comments_url);
    // this.gitDataService.results_comments.subscribe(res => {
    //   console.log(res);
    // });
  }

}
