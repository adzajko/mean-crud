import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/interfaces';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.scss']
})
export class PostDeleteComponent implements OnInit {
  @Input() post!: Post;

  constructor(
    private ngbModal: NgbModal,
    private postsService: PostsService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  closeModal(): void {
    this.ngbModal.dismissAll();
  }

  deletePost(): void {
    this.postsService.deletePost(this.post.id).subscribe(
      () => {
        this.toastrService.success('Post deleted.', 'Success.');
        this.closeModal();
      },
      err => {
        this.toastrService.error('Error deleting post!', 'Error!');
      }
    );
  }
}
