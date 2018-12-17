import { Component, OnInit } from '@angular/core';
import { GitDataService } from 'src/app/services/git-data.service';
import { Comment } from '../../models';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  public commentsData: Array<Comment>;
  public shown: boolean;
  public error: boolean;

  constructor(private gitDataService: GitDataService) { }

  ngOnInit() {
    this.shown = false;
    this.error = false;

    this.gitDataService.results_comments.subscribe(res => {
      this.error = res.length === 0;
      this.commentsData = res;
      this.shown = true;
    });
  }

  close() {
    this.shown = false;
  }

}
