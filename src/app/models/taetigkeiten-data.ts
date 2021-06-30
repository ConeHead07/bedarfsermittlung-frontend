
export class TaetigkeitenData {
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
  Einzelarbeit_Anteil?: number;
  Teamarbeit_Anteil?: string;
}

export class TaetigkeitenDataResult {
  rows: TaetigkeitenData[] = [];
}
