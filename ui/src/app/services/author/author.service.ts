import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author, AuthorRequest } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(private httpClient: HttpClient) {}

  getAllAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(environment.baseApiUrl + '/authors');
  }

  getAuthorById(id: number | string): Observable<Author> {
    return this.httpClient.get<Author>(
      environment.baseApiUrl + '/authors/' + id
    );
  }

  postNewAuthor(authorData: AuthorRequest): Observable<any> {
    return this.httpClient.post(
      environment.baseApiUrl + '/authors',
      authorData
    );
  }

  editExistingAuthor(
    authorId: string | number,
    authorData: Author
  ): Observable<any> {
    return this.httpClient.put(
      environment.baseApiUrl + '/authors/' + authorId,
      authorData
    );
  }

  deleteAuthorById(authorId: string | number): Observable<any> {
    return this.httpClient.delete(
      environment.baseApiUrl + '/authors/' + authorId
    );
  }
}
