
export class MobilesArbeitenData {
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
  Summe_Interne_MA?: string;
  Azubis?: number;
  WerkstudentenPraktikanten?: number;
  Externe?: number;
  Summe_Temp_MA?: string;
  MobilArbeit_AT_Woche_Halb?: number;
  MobilArbeit_AT_Woche_1?: number;
  MobilArbeit_AT_Woche_2?: number;
  MobilArbeit_AT_Woche_3?: number;
  MobilArbeit_AT_Woche_4Plus?: number;
  AT_Woche_Gewichtet?: string;
  MobilArbeit_VP?: number;
  MobilArbeit_Senior_Dep_Head?: number;
  MobilArbeit_Senior_Teammanager?: number;
  MobilArbeit_MA_Innendienst?: number;
  MobilArbeit_MA_Aussendienst?: number;
  MobilArbeit_Azubis?: number;
  MobilArbeit_Werkstudenten_Praktikanten?: number;
  MobilArbeit_Externe?: number;
  Summe_Tage?: string;
  Absolute_Tage?: string;
}

export class MobilesArbeitenDataResult {
  rows: MobilesArbeitenData[] = [];
}
