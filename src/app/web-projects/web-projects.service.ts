import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Image } from './web-projects.model';
import { ImagePage } from './page';

@Injectable()
export class WebProjectsService {

  private url = environment.api_url;

  constructor(private http: Http) { }

  getData(page: number, itemsPerPage: number): Observable<ImagePage> {
    const images = this.http.get(this.url).pipe(map(result => result.json()));
    return this.getPageItems(images, page, itemsPerPage);
  }

  private getPageItems(images: Observable<Image[]>, page: number, itemsPerPage: number): Observable<ImagePage> {
    return images.pipe(
      map(i => {
        const startIndex = itemsPerPage * (page - 1);
        return new ImagePage(i.length, i.slice(startIndex, startIndex + itemsPerPage));
      })
    );
  }
}
