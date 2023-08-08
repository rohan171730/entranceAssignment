import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(public apiService: HttpClient) {}
  getData(payload: any) {
    return this.apiService.get(
      `${environment.baseRef}search?page_count=${payload.count}&items_per_page=${payload.itemCount}&category=${payload.category}`
    );
  }
}
