import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Author } from 'src/app/interfaces';
import { AuthorService } from 'src/app/services/author/author.service';
import { AuthorDeleteComponent } from '../author-delete/author-delete.component';
import { AuthorDetailsComponent } from '../author-details/author-details.component';
import { CreateAuthorComponent } from '../create-author/create-author.component';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  private listOfAuthors: any[] = [];
  pageSize = 5;
  page = 1;

  constructor(private authorService: AuthorService, private ngbModal: NgbModal) { }

  ngOnInit(): void {
    this.getAllAuthors();
  }

  getFilteredListOfAuthors(searchParameter?: string): Author[] {
    if (!searchParameter) {
      return this.listOfAuthors;
    }
    const evaluationParameter =  searchParameter.toLowerCase();
    return this.listOfAuthors.filter(element =>
      Object.keys(element).some(key => {
        if (typeof element[key] === 'string') {
          return element[key].toLowerCase().includes(evaluationParameter);
        } else if (typeof element[key] === 'number') {
          return element[key].toString().includes(evaluationParameter);
        }
      }
      ));
  }

  viewAuthorDetails(author: Author): void {
    const modalRef = this.ngbModal.open(AuthorDetailsComponent, {
      centered: true
    });
    modalRef.componentInstance.editMode = false;
    modalRef.componentInstance.author = author;
  }

  editAuthorDetails(author: Author): void {
    const modalRef = this.ngbModal.open(AuthorDetailsComponent, {
      centered: true
    });
    modalRef.componentInstance.editMode = true;
    modalRef.componentInstance.author = author;
  }

  deleteAuthorConfirmation(author: Author): void {
    const modalRef = this.ngbModal.open(AuthorDeleteComponent, {
      centered: true
    });

    modalRef.componentInstance.author = author;
  }

  private getAllAuthors(): void {
    this.authorService
      .getAllAuthors()
      .subscribe(response => {
        this.listOfAuthors = response;
      }, err => {
        console.log(err);
      });
  }

}
