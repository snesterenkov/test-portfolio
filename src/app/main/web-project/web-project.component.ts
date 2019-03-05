import {Component, OnInit} from '@angular/core';
import {ImageLoaderService} from '../services/image-loader.service';
import {Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd";

@Component({
  templateUrl: './web-project.component.html',
  styleUrls: ['./web-project.component.scss'],
})
export class WebProjectComponent implements OnInit{

  allImages = [];
  pageImages : any;
  isLoading: boolean;
  pageNumber = 1;

  constructor(private imageLoader: ImageLoaderService, private modalService: NzModalService, private router: Router) {
  }

  ngOnInit() {
    this.getNewImages();
  }

  showConfirm(): void {
    this.modalService.info({
      nzTitle: 'Confirm',
      nzContent: 'Confirm for route',
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzOnOk: () => this.router.navigate(['/project'])
    });
  }

  onPrev() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.pageImages = this.allImages[this.pageNumber-1];
    }
  }

  onNext() {
    if (this.allImages.length > this.pageNumber) {
      this.pageNumber++;
      this.pageImages = this.allImages[this.pageNumber-1];
    } else {
      this.pageNumber++;
      this.getNewImages();
    }
  }

  getNewImages() {
    this.isLoading = true;
    this.imageLoader.getImages().subscribe(
      res => {
        this.pageImages = res;
        this.isLoading = false;
        this.allImages.push(this.pageImages);
      }
    );
  }

}
