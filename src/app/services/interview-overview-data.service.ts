import { Injectable } from '@angular/core';
import {BedarfBaseDataResult} from "../models/BedarfBaseData";
import {BaseApiDataService} from "./base-api-data.service";
import {InterviewOverviewData, InterviewOverviewDataResult} from "../models/interview-overview-data";

@Injectable({
  providedIn: 'root'
})
export class InterviewOverviewDataService extends BaseApiDataService {

  getAll(kid: number): Promise<InterviewOverviewDataResult> {
    const url = this.getFullUrl('interviewOverview/all/' + kid.toString(10));
    console.log('BedarfOverviewDataService #14 getAll()', { url });
    return this.http.get<InterviewOverviewDataResult>(url).toPromise();
  }
}
