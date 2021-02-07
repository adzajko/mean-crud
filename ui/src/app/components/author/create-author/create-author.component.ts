import { Component, ElementRef, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Author } from 'src/app/interfaces';
import { AuthorService } from 'src/app/services/author/author.service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent implements OnInit {
  createAuthorForm: FormGroup = new FormGroup({});
  // @ts-ignore
  modalRef: NgbModalRef;
  @Input() editMode = false;
  @Input() author!: Author;
  constructor(
    private ngbModal: NgbModal,
    private authorService: AuthorService,
    private toastrService: ToastrService
    ) {}

  ngOnInit(): void {
    this.initializeAuthorForm();
    this.patchAuthorForm();
  }


  private initializeAuthorForm(): void {
    this.createAuthorForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      birthDate: new FormControl(null, Validators.required)
    });
  }

  private patchAuthorForm(): void {
    if (this.editMode) {
      const firstName = this.author.first_name;
      const lastName = this.author.last_name;
      this.createAuthorForm.patchValue({
        firstName,
        lastName,
        email: this.author.email,
        birthDate: this.author.birthdate
      });
    }
  }

  openCreateAuthorModal(templateRef: TemplateRef<any>): void {
    this.modalRef = this.ngbModal.open(templateRef, {
      centered: true
    });
  }


  closeModal(): void {
    this.modalRef.close();
  }

  handleAuthorFormSubmit(): void {
    const formValue = this.createAuthorForm.value;
    if (this.editMode === true) {
      this.authorService.editExistingAuthor(this.author.id, formValue)
        .subscribe(() => {
          this.toastrService.success('Author edited', 'Success!');
          this.createAuthorForm.reset();
          this.closeModal();
        }, err => {
          this.toastrService.error('Error editing Author!', 'Error!');
        });
    } else {

      this.authorService.postNewAuthor(formValue)
        .subscribe(() => {
          this.toastrService.success('Author created', 'Success!');
          this.createAuthorForm.reset();
          this.closeModal();
        }, err => {
          this.toastrService.error('Error creating Author!', 'Error!');
        });
    }
  }
}
