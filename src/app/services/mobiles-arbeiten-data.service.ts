import { Injectable } from '@angular/core';
import {BaseApiDataService} from "./base-api-data.service";
import {BedarfBaseDataResult} from "../models/BedarfBaseData";
import {MobilesArbeitenData, MobilesArbeitenDataResult} from "../models/mobiles-arbeiten-data";

@Injectable({
  providedIn: 'root'
})
export class MobilesArbeitenDataService extends BaseApiDataService {

  getAll(kid: number): Promise<MobilesArbeitenDataResult> {
    const url = this.getFullUrl('mobilesArbeiten/all/' + kid.toString(10));
    console.log('MobilesArbeitenDataService #12 getAll()', { url });
    return this.http.get<MobilesArbeitenDataResult>(url).toPromise();
  }
}
