import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Author } from 'src/app/interfaces';
import { AuthorService } from 'src/app/services/author/author.service';

@Component({
  selector: 'app-author-delete',
  templateUrl: './author-delete.component.html',
  styleUrls: ['./author-delete.component.scss']
})
export class AuthorDeleteComponent implements OnInit {
  @Input() author!: Author;

  constructor(
    public ngbModal: NgbModal,
    private authorService: AuthorService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  closeModal(): void {
    this.ngbModal.dismissAll();
  }

  deleteAuthor(): void {
    this.authorService.deleteAuthorById(this.author.id).subscribe(
      () => {
        this.toastrService.success('Author deleted.', 'Success!');
      },
      err => {
        this.toastrService.error('Error deleting author!', 'Error!');
      }
    );
  }
}
