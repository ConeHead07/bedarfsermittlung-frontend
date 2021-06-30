import { Injectable } from '@angular/core';
import {BaseApiDataService} from "./base-api-data.service";
import {BedarfBaseDataResult} from "../models/BedarfBaseData";
import {TaetigkeitenData, TaetigkeitenDataResult} from "../models/taetigkeiten-data";

@Injectable({
  providedIn: 'root'
})
export class TaetigkeitenDataService extends BaseApiDataService {

  getAll(kid: number): Promise<TaetigkeitenDataResult> {
    const url = this.getFullUrl('taetigkeiten/all/' + kid.toString(10));
    console.log('TaetigkeitenDataService #12 getAll()', { url });
    return this.http.get<TaetigkeitenDataResult>(url).toPromise();
  }
}
