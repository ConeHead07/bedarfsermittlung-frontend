import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseApiDataService {

  baseUrl = environment.config.apiUrl;

  constructor(protected http: HttpClient) {
    if (!this.baseUrl.endsWith('/')) {
      this.baseUrl+= '/';
    }
  }

  getFullUrl(path: string) {
    if (path.startsWith('/')) {
      return this.baseUrl + path.substr(1);
    }
    return this.baseUrl + path;
  }
}
