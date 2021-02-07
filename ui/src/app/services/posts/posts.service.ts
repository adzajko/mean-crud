import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostRequest } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private basePostsUrl = environment.baseApiUrl + '/posts';

  constructor(private httpClient: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.basePostsUrl);
  }

  deletePost(id: number | string): Observable<any> {
    return this.httpClient.delete(`${this.basePostsUrl}/${id}`);
  }

  addPost(postBody: PostRequest): Observable<any> {
    return this.httpClient.post(this.basePostsUrl, postBody);
  }

  editPost(postId: number | string, data: PostRequest): Observable<any> {
    return this.httpClient.put(`${this.basePostsUrl}/${postId}`, data);
  }
}
