import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebProjectsService } from './web-projects.service';


@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.scss']
})

export class WebProjectsComponent implements OnInit, OnDestroy {

  images: Array<any>;
  errorMessage: any = '';
  collectionSize: number;
  page: number;
  itemsPerPage = 10;
  subscription;
  loading: boolean;

  constructor(private webProjectsService: WebProjectsService) { }

  ngOnInit() {
    this.page = 1;
    this.getData();
  }

  onPageChanged() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.subscription = this.webProjectsService.getData(this.page, this.itemsPerPage)
      .subscribe(
        p => {
          this.images = p.rows;
          this.collectionSize = p.totalCount;
          this.loading = false;
        },
        error => this.errorMessage = <any>error);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
