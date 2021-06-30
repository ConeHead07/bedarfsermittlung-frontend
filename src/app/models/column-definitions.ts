import Tabulator from "tabulator-tables";
import ColumnDefinition = Tabulator.ColumnDefinition;
import ColumnComponent = Tabulator.ColumnComponent;
import CellComponent = Tabulator.CellComponent;

let headerMenu: (Tabulator.MenuObject<Tabulator.ColumnComponent> | Tabulator.MenuSeparator)[] | undefined = [];
let test = function(this: Tabulator) {
  const columns = this.getColumns();
  const menu: any[] = [];
  columns.forEach( (col, idx) => {
    menu.push({
      label: (col.isVisible() ? ' + ' : ' - ') + col.getDefinition().title,
      action: (e: any, column: ColumnComponent) => {
        e.toggle()
      }
    })
  })
  return menu;
};
headerMenu = test as unknown as (Tabulator.MenuObject<Tabulator.ColumnComponent> | Tabulator.MenuSeparator)[] | undefined;


const formatPct = function(cell: CellComponent, formatterParams?: any, onRendered?: any) {
  return cell.getValue() + "%";
};
const formatAvgTage = function(cell: CellComponent, formatterParams?: any, onRendered?: any) {
  return '&#216; ' + cell.getValue() + " Tage";
};

export const BereichsMitarbeiterColDef: ColumnDefinition[] = [
  { field: 'bid', title: 'bid', cssClass:"black-col-header"},
  { field: 'kid', title: 'kid', cssClass:"black-col-header"},
  { field: 'aid', title: 'aid', cssClass:"black-col-header"},
  { field: 'Abteilung', title: 'Abteilung', cssClass:"yellow-background"},
  { field: 'Fachbereich', title: 'Fachbereich', cssClass:"yellow-background"},
  { field: 'SPACER', title: '', width: '2rem', cssClass:"col-spacer", headerSort: false },
  { field: 'Senior_Director_VP', title: 'Senior Director VP', cssClass:"black-col-header"},
  { field: 'Senior_Dep_Head', title: 'Senior Dep Head', cssClass:"black-col-header"},
  { field: 'Teammanager', title: 'Teammanager', cssClass:"black-col-header"},
  { field: 'MA_Innendienst', title: 'MA Innendienst', cssClass:"black-col-header"},
  { field: 'MA_Aussendienst', title: 'MA Aussendienst', cssClass:"black-col-header"},
  { field: 'Azubis', title: 'Azubis', cssClass:"black-col-header"},
  { field: 'Werkstudenten_Praktikanten', title: 'Werkstudenten Praktikanten', cssClass:"black-col-header"},
  { field: 'Externe', title: 'Externe', cssClass:"black-col-header"},
  { field: 'DS_Ratio_Intern', title: 'DS Ratio Intern', cssClass:"black-col-header"},
  { field: 'DS_Ratio_Temp', title: 'DS Ratio Temp', cssClass:"black-col-header"},
  { field: 'Einzelarbeit_Anteil', title: 'Einzelarbeit Anteil', cssClass:"black-col-header"},
  { field: 'MobilArbeit_AT_Woche_Halb', title: 'MobilArbeit AT Woche Halb', cssClass:"black-col-header"},
  { field: 'MobilArbeit_AT_Woche_1', title: 'MobilArbeit AT Woche 1', cssClass:"black-col-header"},
  { field: 'MobilArbeit_AT_Woche_2', title: 'MobilArbeit AT Woche 2', cssClass:"black-col-header"},
  { field: 'MobilArbeit_AT_Woche_3', title: 'MobilArbeit AT Woche 3', cssClass:"black-col-header"},
  { field: 'MobilArbeit_AT_Woche_4Plus', title: 'MobilArbeit AT Woche 4Plus', cssClass:"black-col-header"},
  { field: 'MobilArbeit_VP', title: 'MobilArbeit VP', cssClass:"black-col-header"},
  { field: 'MobilArbeit_Senior_Dep_Head', title: 'MobilArbeit Senior Dep Head', cssClass:"black-col-header"},
  { field: 'MobilArbeit_Senior_Teammanager', title: 'MobilArbeit Senior Teammanager', cssClass:"black-col-header"},
  { field: 'MobilArbeit_MA_Innendienst', title: 'MobilArbeit MA Innendienst', cssClass:"black-col-header"},
  { field: 'MobilArbeit_MA_Aussendienst', title: 'MobilArbeit MA Aussendienst', cssClass:"black-col-header"},
  { field: 'MobilArbeit_Azubis', title: 'MobilArbeit Azubis', cssClass:"black-col-header"},
  { field: 'MobilArbeit_Werkstudenten_Praktikanten', title: 'MobilArbeit Werkstudenten Praktikanten', cssClass:"black-col-header"},
  { field: 'MobilArbeit_Externe', title: 'MobilArbeit Externe', cssClass:"black-col-header"},
  { field: 'Woche_Arbeitstage', title: 'Woche Arbeitstage', cssClass:"black-col-header"},
  { field: 'created_at', title: 'created at', cssClass:"black-col-header"},
  { field: 'created_uid', title: 'created uid', cssClass:"black-col-header"},
  { field: 'modified_at', title: 'modified at', cssClass:"black-col-header"},
  { field: 'modified_uid', title: 'modified uid', cssClass:"black-col-header"}
];
export const InterviewOverviewColDef: ColumnDefinition[] = [
  { field: 'bid', title: 'bid', visible: false },
  { field: 'kid', title: 'kid', visible: false },
  { field: 'aid', title: 'aid', visible: false },
  { field: 'Abteilung', title: 'Abteilung', cssClass:"yellow-background"},
  { field: 'Fachbereich', title: 'Fachbereich', cssClass:"yellow-background"},
  { field: 'SPACER', title: '', width: '2rem', cssClass:"col-spacer", headerSort: false },
  { field: 'Senior_Director_VP', title: 'Senior Director VP', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Senior_Dep_Head', title: 'Senior Dep Head', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Teammanager', title: 'Teammanager', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'MA_Innendienst', title: 'MA Innendienst', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'MA_Aussendienst', title: 'MA Aussendienst', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Summe_Interne_MA', title: 'Summe Interne MA', cssClass:"yellow-background", bottomCalc: 'sum'},
  { field: 'Azubis', title: 'Azubis', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Werkstudenten_Praktikanten', title: 'Werkstudenten Praktikanten', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Externe', title: 'Externe', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Summe_Temp_MA', title: 'Summe Temp MA', cssClass:"yellow-background", bottomCalc: 'sum'},
  { field: 'Summe_Gesamt_MA', title: 'Summe Gesamt MA', cssClass:"yellow-background", bottomCalc: 'sum'},
  { field: 'SPACER', title: '', width: '2rem', cssClass:"col-spacer", headerSort: false },

  { field: 'DS_Ratio_Intern', title: 'DS Ratio Intern', cssClass:"yellow-background", bottomCalc: 'sum'},
  { field: 'Interne_MA_OhneDS', title: 'Interne MA OhneDS', cssClass:"yellow-background", bottomCalc: 'sum'},
  { field: 'SPACER2', title: '', width: '2rem', cssClass:"col-spacer", headerSort: false },

  { field: 'DS_Ratio_Temp', title: 'DS Ratio Temp', cssClass:"yellow-background", bottomCalc: 'sum'},
  { field: 'Temp_MA_OhneDS', title: 'Temp MA OhneDS', cssClass:"yellow-background", bottomCalc: 'sum'},
  { field: 'SPACER3', title: '', width: '2rem', cssClass:"col-spacer", headerSort: false },

  { field: 'Gesamt_MA_OhneDS', title: 'Gesamt MA OhneDS', cssClass:"yellow-background", bottomCalc: 'sum'},

  { field: 'created_at', title: 'created at', cssClass:"black-col-header"},
  { field: 'created_uid', title: 'created uid', cssClass:"black-col-header"},
  { field: 'modified_at', title: 'modified at', cssClass:"black-col-header"},
  { field: 'modified_uid', title: 'modified uid', cssClass:"black-col-header"}
];

export const TaetigkeitenColDef: ColumnDefinition[] =  [
  { field: 'bid', title: 'bid', visible: false },
  { field: 'kid', title: 'kid', visible: false },
  { field: 'aid', title: 'aid', visible: false },
  { field: 'Abteilung', title: 'Abteilung', cssClass:"yellow-background"},
  { field: 'Fachbereich', title: 'Fachbereich', cssClass:"yellow-background"},
  { field: 'SPACER', title: '', width: '2rem', cssClass:"col-spacer", headerSort: false },
  { field: 'Senior_Director_VP', title: 'Senior Director VP', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Senior_Dep_Head', title: 'Senior Dep Head', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Teammanager', title: 'Teammanager', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'MA_Innendienst', title: 'MA Innendienst', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'MA_Aussendienst', title: 'MA Aussendienst', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Summe_Interne_MA', title: 'Summe Interne MA', cssClass:"yellow-background", bottomCalc: 'sum'},
  { field: 'Azubis', title: 'Azubis', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Werkstudenten_Praktikanten', title: 'Werkstudenten Praktikanten', cssClass:"black-col-header"},
  { field: 'Externe', title: 'Externe', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Summe_Temp_MA', title: 'Summe Temp MA', cssClass:"yellow-background", bottomCalc: 'sum'},
  { field: 'SPACER', title: '', width: '2rem', cssClass:"col-spacer", headerSort: false },
  { field: 'Einzelarbeit_Anteil', title: 'Einzelarbeit Anteil', cssClass:"green-col-header",
    bottomCalc: 'avg', formatter: formatPct, bottomCalcFormatter: formatPct },
  { field: 'Teamarbeit_Anteil', title: 'Teamarbeit Anteil', cssClass:"blue-col-header",
    bottomCalc: 'avg', formatter: formatPct, bottomCalcFormatter: formatPct }
];

export const MobileArbeitenColDef: ColumnDefinition[] =  [
  { field: 'bid', title: 'bid', visible: false },
  { field: 'kid', title: 'kid', visible: false },
  { field: 'aid', title: 'aid', visible: false },
  { field: 'Abteilung', title: 'Abteilung', cssClass:"yellow-background"},
  { field: 'Fachbereich', title: 'Fachbereich', cssClass:"yellow-background"},
  { field: 'SPACER', title: '', width: '2rem', cssClass:"col-spacer", headerSort: false },
  { field: 'Senior_Director_VP', title: 'Senior Director VP', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Senior_Dep_Head', title: 'Senior Dep Head', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Teammanager', title: 'Teammanager', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'MA_Innendienst', title: 'MA Innendienst', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'MA_Aussendienst', title: 'MA Aussendienst', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Summe_Interne_MA', title: 'Summe Interne MA', cssClass:"yellow-background", bottomCalc: 'sum'},
  { field: 'Azubis', title: 'Azubis', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Werkstudenten_Praktikanten', title: 'Werkstudenten Praktikanten', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Externe', title: 'Externe', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Summe_Temp_MA', title: 'Summe Temp MA', cssClass:"yellow-background", bottomCalc: 'sum'},
  { field: 'SPACER', title: '', width: '2rem', cssClass:"col-spacer", headerSort: false },

  { field: 'MobilArbeit_AT_Woche_Halb', title: 'MobilArbeit AT Woche Halb', cssClass:"black-col-header",
    bottomCalc: 'avg', formatter: formatPct, bottomCalcFormatter: formatPct},
  { field: 'MobilArbeit_AT_Woche_1', title: 'MobilArbeit AT Woche 1', cssClass:"black-col-header",
    bottomCalc: 'avg', formatter: formatPct, bottomCalcFormatter: formatPct},
  { field: 'MobilArbeit_AT_Woche_2', title: 'MobilArbeit AT Woche 2', cssClass:"black-col-header",
    bottomCalc: 'avg', formatter: formatPct, bottomCalcFormatter: formatPct},
  { field: 'MobilArbeit_AT_Woche_3', title: 'MobilArbeit AT Woche 3', cssClass:"black-col-header",
    bottomCalc: 'avg', formatter: formatPct, bottomCalcFormatter: formatPct},
  { field: 'MobilArbeit_AT_Woche_4Plus', title: 'MobilArbeit AT Woche 4Plus', cssClass:"black-col-header",
    bottomCalc: 'avg', formatter: formatPct, bottomCalcFormatter: formatPct},
  { field: 'AT_Woche_Gewichtet', title: 'AT Woche Gewichtet', cssClass:"black-col-header",
    bottomCalc: 'avg', formatter: formatPct, bottomCalcFormatter: formatAvgTage},
  { field: 'SPACER', title: '', width: '2rem', cssClass:"col-spacer", headerSort: false },

  { field: 'MobilArbeit_VP', title: 'MobilArbeit VP', cssClass:"black-col-header",
    bottomCalc: 'avg', bottomCalcFormatter: formatAvgTage},
  { field: 'MobilArbeit_Senior_Dep_Head', title: 'MobilArbeit Senior Dep Head', cssClass:"black-col-header",
    bottomCalc: 'avg', bottomCalcFormatter: formatAvgTage},
  { field: 'MobilArbeit_Senior_Teammanager', title: 'MobilArbeit Senior Teammanager', cssClass:"black-col-header",
    bottomCalc: 'avg', bottomCalcFormatter: formatAvgTage},
  { field: 'MobilArbeit_MA_Innendienst', title: 'MobilArbeit MA Innendienst', cssClass:"black-col-header",
    bottomCalc: 'avg', bottomCalcFormatter: formatAvgTage},
  { field: 'MobilArbeit_MA_Aussendienst', title: 'MobilArbeit MA Aussendienst', cssClass:"black-col-header",
    bottomCalc: 'avg', bottomCalcFormatter: formatAvgTage},
  { field: 'MobilArbeit_Azubis', title: 'MobilArbeit Azubis', cssClass:"black-col-header",
    bottomCalc: 'avg', bottomCalcFormatter: formatAvgTage},
  { field: 'MobilArbeit_Werkstudenten_Praktikanten', title: 'MobilArbeit Werkstudenten Praktikanten',
    cssClass:"black-col-header", bottomCalc: 'avg', bottomCalcFormatter: formatAvgTage},
  { field: 'MobilArbeit_Externe', title: 'MobilArbeit Externe', cssClass:"black-col-header",
    bottomCalc: 'avg', bottomCalcFormatter: formatAvgTage},
  { field: 'SPACER', title: '', width: '2rem', cssClass:"col-spacer", headerSort: false },

  { field: 'Summe_Tage', title: 'Summe Tage', cssClass:"yellow-background",
    bottomCalc: 'avg', bottomCalcFormatter: formatAvgTage},
  { field: 'Absolute_Tage', title: 'Absolute Tage', cssClass:"yellow-background",
    bottomCalc: 'avg', bottomCalcFormatter: formatAvgTage}
];

export const MobileArbeitenAbleitungColDef: ColumnDefinition[] = [
  { field: 'bid', title: 'bid', visible: false },
  { field: 'kid', title: 'kid', visible: false },
  { field: 'aid', title: 'aid', visible: false },
  { field: 'Abteilung', title: 'Abteilung', cssClass:"yellow-background"},
  { field: 'Fachbereich', title: 'Fachbereich', cssClass:"yellow-background"},
  { field: 'SPACER', title: '', width: '2rem', cssClass:"col-spacer", headerSort: false },

  { field: 'Summe_Interne_MA', title: 'Anzahl MA (int.)', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Summe_Temp_MA', title: 'Anzahl MA (ext.)', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Summe_MA_Int_Ext', title: 'Anzahl MA (alle)', cssClass:"black-col-header", bottomCalc: 'sum'},
  { field: 'Arbeitstage', title: 'Arbeit-stage', cssClass:"black-col-header"},
  { field: 'AT_in_Pct', title: 'AT in %', cssClass:"black-col-header", formatter: formatPct},

  { field: 'MobilArbeit_Tage', title: 'Mobiles Arbeiten (Tage)', cssClass:"black-col-header"},
  { field: 'MobilArbeit_Anteil', title: 'Mobiles Arbeiten (in %)', cssClass:"black-col-header", formatter: formatPct},
  { field: 'MobilArbeit_Anwesenheit_Anteil', title: 'Anwesenheit (in %)', cssClass:"black-col-header", formatter: formatPct},
  { field: 'MobilArbeit_Anwesenheit_Tage', title: 'Anwesenheit MA an Tagen', cssClass:"black-col-header"},

  { field: 'CalcMinAP', title: 'Rechn. Minimum Anzahl AP', cssClass:"red-col-header", bottomCalc: 'sum'},
  { field: 'CalcBufferAP', title: 'Minimum AP Mit Buffer', cssClass:"green-col-header", bottomCalc: 'sum'},
  { field: 'CalcMinAPWithBuffer', title: 'CalcMinAPWithBuffer', cssClass:"green-col-header", bottomCalc: 'sum'},
  { field: 'Min_DSQM_Usability_Factor', title: 'Min DSQM Usability Factor', cssClass:"red-col-header", bottomCalc: 'avg'},
  { field: 'DSQM_Usability_Factor', title: 'DSQM Usability Factor', cssClass:"green-col-header", bottomCalc: 'avg'},

  // Hidden Fields
  { field: 'MobAT_Gewichtet', title: 'MobAT Gewichtet', cssClass:"black-col-header"},
  { field: 'Usability_Factor_Anteil', title: 'Usability Factor Anteil', cssClass:"black-col-header"},
  { field: 'Summe_Tage', title: 'Summe Tage', cssClass:"black-col-header"},
  { field: 'Absolute_Tage', title: 'Absolute Tage', cssClass:"black-col-header"}
];
