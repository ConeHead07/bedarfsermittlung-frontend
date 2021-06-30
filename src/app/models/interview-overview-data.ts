
export class InterviewOverviewData {
  bid?: number;
  kid?: number;
  aid?: number;
  Abteilung?: string;
  Fachbereich?: string;
  SeniorDirector_VP?: number;
  SeniorDep_Head?: number;
  Teammanager?: number;
  MA_Innendienst?: number;
  MA_Aussendienst?: number;
  Azubis?: number;
  WerkstudentenPraktikanten?: number;
  Externe?: number;
  DS_Ratio_Intern?: number;
  DS_Ratio_Temp?: number;
  created_at?: string;
  created_uid?: number;
  modified_at?: string;
  modified_uid?: number;
  Summe_Interne_MA?: string;
  Summe_Temp_MA?: string;
  Summe_Gesamt_MA?: string;
  Interne_MA_OhneDS?: string;
  Temp_MA_OhneDS?: string;
  Gesamt_MA_OhneDS?: string;
}

export class InterviewOverviewDataResult {
  rows: InterviewOverviewData[] = [];
}
