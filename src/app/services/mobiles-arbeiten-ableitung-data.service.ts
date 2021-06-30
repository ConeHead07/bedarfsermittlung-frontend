import { Injectable } from '@angular/core';
import {BaseApiDataService} from "./base-api-data.service";
import {BedarfBaseDataResult} from "../models/BedarfBaseData";
import {
  MobilesArbeitenAbleitungData,
  MobilesArbeitenAbleitungDataResult
} from "../models/mobiles-arbeiten-ableitung-data";

@Injectable({
  providedIn: 'root'
})
export class MobilesArbeitenAbleitungDataService extends BaseApiDataService {

  getAll(kid: number): Promise<MobilesArbeitenAbleitungDataResult> {
    const url = this.getFullUrl('mobilesArbeitenAbleitung/all/' + kid.toString(10));
    console.log('MobilesArbeitenAbleitungDataService #14 getAll()', { url });
    return this.http.get<MobilesArbeitenAbleitungDataResult>(url).toPromise();
  }
}
