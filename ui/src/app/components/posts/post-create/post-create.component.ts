import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Author, Attribute } from 'src/app/interfaces';
import { AuthorService } from 'src/app/services/author/author.service';
import { PostsService } from 'src/app/services/posts/posts.service';

const ALL_ATTRIBUTES: Attribute[] = [
  {
    attributeName: 'atr1',
    attributeValue: 0
  },
  {
    attributeName: 'atr2',
    attributeValue: 0
  },
  {
    attributeName: 'atr3',
    attributeValue: 0
  },
  {
    attributeName: 'atr4',
    attributeValue: 0
  },
  {
    attributeName: 'atr5',
    attributeValue: 0
  },
  {
    attributeName: 'atr6',
    attributeValue: 0
  },
  {
    attributeName: 'atr7',
    attributeValue: 0
  },
  {
    attributeName: 'atr8',
    attributeValue: 0
  },
  {
    attributeName: 'atr9',
    attributeValue: 0
  },
  {
    attributeName: 'atr10',
    attributeValue: 0
  },
];

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  createPostForm: FormGroup = new FormGroup({});
  private listOfAuthors: Author[] = [];
  listOfAttributes: Attribute[] = ALL_ATTRIBUTES;
  constructor(
    private ngbModal: NgbModal,
    private toastrService: ToastrService,
    private postsService: PostsService,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.initializePostForm();
    this.getAllAuthors();
  }

  private initializePostForm(): void {
    this.createPostForm = new FormGroup({
      title: new FormControl('', Validators.required),
      date: new FormControl(null, Validators.required),
      author: new FormControl(null),
      description: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      attributes: new FormArray([])
    });
  }

  getFilteredListOfAuthors(searchValue?: string): Author[] {
    if (!searchValue) {
      return this.listOfAuthors;
    }
    return this.listOfAuthors.filter(author => {
      author.first_name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  addNewAttributeToForm(atrName: string, atrValue: string): void {
    (this.createPostForm.get('attributes') as FormArray).push(
      new FormControl({
        attributeName: atrName,
        attributeValue: +atrValue
      })
    );
  }

  openCreatePostModal(content: TemplateRef<any>): void {
    this.ngbModal.open(content, {
      centered: true
    });
  }

  closeModal(): void {
    this.ngbModal.dismissAll();
  }

  handleFormSubmit(): void {
    const formValue = this.createPostForm.value;
    console.log(formValue);
    // this.postsService.addPost(formValue).subscribe(
    //   () => {
    //     this.toastrService.success('Added new post!', 'Success!');
    //     this.closeModal();
    //   },
    //   err => {
    //     this.toastrService.error('Error adding post!', 'Error.');
    //   }
    // );
  }

  private getAllAuthors(): void {
    this.authorService.getAllAuthors().subscribe(
      response => {
        this.listOfAuthors = response;
      },
      err => {
        console.log(err);
      }
    );
  }
}
