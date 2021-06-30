import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { environment } from "../../environments/environment";
import { BaseApiDataService } from "./base-api-data.service";
import { BedarfBaseDataResult } from "../models/BedarfBaseData";

@Injectable({
  providedIn: 'root'
})
export class BedarfOverviewDataService extends BaseApiDataService {

  getAll(kid?: number): Promise<BedarfBaseDataResult> {
    const url = this.getFullUrl('interviewdata/all/' + (kid ? kid.toString(10) : ''));
    console.log('BedarfOverviewDataService #14 getAll()', { url });
    return this.http.get<BedarfBaseDataResult>(url).toPromise();
  }
}
