import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ImageLoaderService {
  constructor(private http: HttpClient) {
  }

  getImages() {
    return this.http.get<any>('https://api.unsplash.com/photos/random?count=25');
  }
}
