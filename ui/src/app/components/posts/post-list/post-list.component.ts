import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/interfaces';
import { PostsService } from 'src/app/services/posts/posts.service';
import { PostDeleteComponent } from '../post-delete/post-delete.component';
import { PostDetailsComponent } from '../post-details/post-details.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  pageSize = 5;
  page = 1;
  private listOfPosts: Post[] = [];

  constructor(private ngbModal: NgbModal, private postsService: PostsService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getFilteredListOfPosts(searchValue?: string): Post[] {
    if (!searchValue) {
      return this.listOfPosts;
    } else {
      const evaluationParameter = searchValue.toLowerCase();
      return this.listOfPosts.filter(element =>
        Object.keys(element).some(key => {
          // @ts-ignore
          if (typeof element[key] === 'string') {
            // @ts-ignore
            return element[key].toLowerCase().includes(evaluationParameter);
            // @ts-ignore
          } else if (typeof element[key] === 'number') {
            // @ts-ignore
            return element[key].toString().includes(evaluationParameter);
          }
        })
      );
    }
  }

  viewPostDetails(post: Post): void {
    const modalRef = this.ngbModal.open(PostDetailsComponent, {
      centered: true
    });

    modalRef.componentInstance.editMode = false;
    modalRef.componentInstance.post = post;
  }

  editPostDetails(post: Post): void {
    const modalRef = this.ngbModal.open(PostDetailsComponent, {
      centered: true
    });
    modalRef.componentInstance.editMode = true;
    modalRef.componentInstance.post = post;
  }

  deletePostConfirmation(post: Post): void {
    this.ngbModal.open(PostDeleteComponent, {
      centered: true
    });
  }

  private getAllPosts(): void {
    this.postsService.getAllPosts().subscribe(
      response => {
        this.listOfPosts = response;
      },
      err => {
        console.log(err);
      }
    );
  }
}
