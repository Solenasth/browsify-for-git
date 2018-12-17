import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Repo, Comment } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GitDataService {
  private apiUrl  = 'https://api.github.com/';
  private subject_repos: Subject<Array<Repo>>;
  public results_repos: Observable<Array<Repo>>;
  private subject_comments: Subject<Array<Comment>>;
  public results_comments: Observable<Array<Comment>>;

  constructor(
    public http: HttpClient,
    ) {
      this.subject_repos = new Subject<Array<Repo>>();
      this.results_repos = this.subject_repos.asObservable();

      this.subject_comments = new Subject<Array<Comment>>();
      this.results_comments = this.subject_comments.asObservable();
    }

  getComments(url: string) {
    this.http.get(url).subscribe((response: any) => {
      let commentArray: Array<Comment>;
      commentArray = response.map((currentComment) => {
        const newComment = {} as Comment;
        // map desired values here:
        newComment.user = currentComment.user.login;
        newComment.avatarURL = currentComment.user.avatar_url;
        newComment.date = currentComment.created_at.split('T')[0];
        newComment.body = currentComment.body;
        // return formatted instance
        return newComment;
      });
      // array is reversed since it was requested that they show in reverse order, in the future sorting will be implemented
      this.subject_comments.next(commentArray.reverse());
    });
  }

  searchRepos(q: string) {
    this.http.get(this.apiUrl + 'search/repositories?q=' + q).subscribe((response: any) => {
      let repoArray: Array<Repo>;
      repoArray = response['items'].map((current: Repo) => {
        const newEntry = {} as Repo;
        // map desired values here:
        newEntry.name = current.name;
        newEntry.id = current.id;
        newEntry.comments_url = current.comments_url.split('{')[0];
        newEntry.description = current.description;
        // return formatted instance
        return newEntry;
      });

      this.subject_repos.next(repoArray);
    });
  }
}
