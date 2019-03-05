import {Component} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private modalService: NzModalService, private router: Router) {
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
}
