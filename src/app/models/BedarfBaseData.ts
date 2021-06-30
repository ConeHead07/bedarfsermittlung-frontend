export class BedarfBaseData {
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
  Einzelarbeit_Anteil?: number;
  MobilArbeit_AT_Woche_Halb?: number;
  MobilArbeit_AT_Woche_1?: number;
  MobilArbeit_AT_Woche_2?: number;
  MobilArbeit_AT_Woche_3?: number;
  MobilArbeit_AT_Woche_4Plus?: number;
  MobilArbeit_VP?: number;
  MobilArbeit_Senior_Dep_Head?: number;
  MobilArbeit_Senior_Teammanager?: number;
  MobilArbeit_MA_Innendienst?: number;
  MobilArbeit_MA_Aussendienst?: number;
  MobilArbeit_Azubis?: number;
  MobilArbeit_Werkstudenten_Praktikanten?: number;
  MobilArbeit_Externe?: number;
  Woche_Arbeitstage?: number;
  created_at?: string;
  created_uid?: number;
  modified_at?: string;
  modified_uid?: number;
}

export class BedarfBaseDataResult {
  rows: BedarfBaseData[] = [];
}
