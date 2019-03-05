import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable()
export class ImageLoaderService {
  constructor(private http: HttpClient) {
  }

  getImages(): Observable<any> {
    return this.http.get('https://api.unsplash.com/photos/random?count=15' +
      '&client_id=2b7b9ccca1756f3139d8295d1d2620dca865272f92e61c73943f1f5f82cd5863');
  }
}
