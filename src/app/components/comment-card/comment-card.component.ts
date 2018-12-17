import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models';
import { GitDataService } from 'src/app/services/git-data.service';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {
  @Input() data: Comment;
  constructor(private gitDataService: GitDataService) { }

  ngOnInit() {
  }

}
