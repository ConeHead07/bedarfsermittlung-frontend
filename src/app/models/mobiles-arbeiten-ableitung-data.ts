
export class MobilesArbeitenAbleitungData {
  bid?: number;
  kid?: number;
  aid?: number;
  Abteilung?: string;
  Fachbereich?: string;
  Summe_Interne_MA?: string;
  Summe_Temp_MA?: string;
  Summe_MA_Int_Ext?: string;
  Arbeitstage?: number;
  AT_in_Pct?: number;
  MobAT_Gewichtet?: string;
  Summe_Tage?: string;
  Absolute_Tage?: string;
  MobilArbeit_Tage?: string;
  MobilArbeit_Anteil?: string;
  MobilArbeit_Anwesenheit_Anteil?: string;
  MobilArbeit_Anwesenheit_Tage?: string;
  Usability_Factor_Anteil?: string;
  CalcMinAP?: string;
  CalcBufferAP?: string;
  CalcMinAPWithBuffer?: string;
  Min_DSQM_Usability_Factor?: string;
  DSQM_Usability_Factor?: string;
}

export class MobilesArbeitenAbleitungDataResult {
  rows: MobilesArbeitenAbleitungData[] = [];
}
