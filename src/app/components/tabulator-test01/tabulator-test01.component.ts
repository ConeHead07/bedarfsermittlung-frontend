import { Component, OnInit, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import Tabulator from 'tabulator-tables';
import {BedarfOverviewDataService} from "../../services/bedarf-overview-data.service";
import {BedarfBaseData} from "../../models/BedarfBaseData";
import CellComponent = Tabulator.CellComponent;
import ColumnDefinition = Tabulator.ColumnDefinition; //import Tabulator library

const tabledata = [
  { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
  { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
  { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
  { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
  { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
  { id: 11, name: "Oli Bob", age: "12", col: "red", dob: "" },
  { id: 12, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
  { id: 13, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
  { id: 14, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
  { id: 15, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
  { id: 21, name: "Oli Bob", age: "12", col: "red", dob: "" },
  { id: 22, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
  { id: 23, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
  { id: 24, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
  { id: 25, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
  { id: 31, name: "Oli Bob", age: "12", col: "red", dob: "" },
  { id: 32, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
  { id: 33, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
  { id: 34, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
  { id: 35, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
];

var underlineFormatter = (cell: CellComponent, formatterParams: any, onRendered: any) => {
  console.log('underlineFormatter #29', { cell, formatterParams, onRendered });
  onRendered(function(){
    console.log('underlineFormatter onRendered #29');
  });
  return '<u>' + cell.getValue() + '</u>';
};

var sumIntMA = (cell: CellComponent, formatterParams: any, onRendered: any) => {

  if (cell.getData) {
    const d = cell.getData() as BedarfBaseData;
    const seniorDirVP = +(d.SeniorDirector_VP ?? 0);
    const seniorDepHd = +(d.SeniorDep_Head ?? 0);
    const TeamMngr = +(d.Teammanager ?? 0);
    const MAInt = +(d.MA_Innendienst ?? 0);
    const MAAus = +(d.MA_Aussendienst ?? 0);
    return (seniorDirVP + seniorDepHd + TeamMngr + MAInt + MAAus).toString(10);
  }
  return '0';
};

const tablecolnames1: ColumnDefinition[] = [
  { field: 'id', title: 'id' },
  { field: 'name', title: 'name', formatter: underlineFormatter },
  { field: 'age', title: 'age' },
  { field: 'col', title: 'col' },
  { field: 'dob', title: 'dob' }
];

// Sheet: Overview
const tablecolnames: ColumnDefinition[] = [
  { field: 'Abteilung', title: 'Abteilung', formatter: underlineFormatter },
  { field: 'Fachbereich', title: '(Fach-)Bereich' },
  { field: 'SeniorDirector_VP', title: 'Senior Director/VP' },
  { field: 'SenioDep_Head', title: 'Senior Dep Head' },
  { field: 'Teammanager', title: 'Teammanager' },
  { field: 'MA_Innendienst', title: 'Innendienst' },
  { field: 'MA_Aussendienst', title: 'Außendienst' },
  { field: '', title: 'Summe interne MA', formatter: sumIntMA },
  { field: 'Azubis', title: 'Azubis' },
  { field: 'WerkstudentenPraktikanten', title: 'Werkstudenten/ Praktikanten' },
  { field: '', title: 'Externe' },
  { field: '', title: 'Summe temp. MA' },
  { field: '', title: 'Summe MA gesamt' },
  { field: 'DS_Ratio_Intern', title: 'DS Ratio' },
  { field: '', title: 'AP' },
  { field: 'DS_Ratio_Temp', title: 'DS Ratio' },
  { field: '', title: 'AP' },
  { field: '', title: 'Summe AP Bedarf' },
];

// Sheet Tätigkeiten
const tablecolnames3: ColumnDefinition[] = [
    { field: 'Abteilung', title: 'Abteilung' },
    { field: 'Fachbereich', title: '(Fach-)Bereich' },
    { field: 'SeniorDirector_VP', title: 'Senior Director / VP' },
    { field: 'SenioDep_Head', title: 'Senior Dep Head' },
    { field: 'Teammanager', title: 'Teammanager' },
    { field: 'MA_Innendienst', title: 'MA Innendienst' },
    { field: 'MA_Aussendienst', title: 'MA Außendienst' },
    { field: '', title: 'Summe interne MA' },
    { field: 'Azubis', title: 'Azubis' },
    { field: 'WerkstudentenPraktikanten', title: 'Werkstudenten/ Praktikanten' },
    { field: 'Externe', title: 'Externe' },
    { field: '', title: 'Summe temp. MA' },
];

// Sheet: Mobiles Arbeiten
const tablecolnames4: ColumnDefinition[] = [
  { field: 'Abteiltung', title: 'Abteilung' },
  { field: 'Fachbereich', title: '(Fach-)Bereich' },
  { field: 'SeniorDirector_VP', title: 'Senior Director / VP' },
  { field: 'SenioDep_Head', title: 'Senior Dep Head' },
  { field: 'Teammanager', title: 'Teammanager' },
  { field: 'MA_Innendienst', title: 'MA Innendienst' },
  { field: 'MA_Aussendienst', title: 'MA Außendienst' },
  { field: '', title: 'Summe interne MA' },
  { field: 'Azubis', title: 'Azubis' },
  { field: 'WerkstudentenPraktikanten', title: 'Werkstudenten/ Praktikanten' },
  { field: 'Externe', title: 'Externe' },
  { field: '', title: 'Summe temp. MA' },
  { field: '', title: 'VP' },
  { field: '', title: 'Senior Dep Head' },
  { field: '', title: 'Senior/Teammanager' },
  { field: '', title: 'MA Innendienst' },
  { field: '', title: 'MA Außendienst' },
  { field: '', title: 'Azubis' },
  { field: '', title: 'Werkstudenten/ Praktikanten' },
  { field: '', title: 'Externe' },
  { field: '', title: 'Tage' },
  { field: '', title: 'Absolute Tage' }
];


// Sheet: Mobiles Arbeiten
const tablecolnames5: ColumnDefinition[] = [
  { field: 'Abteilung', title: 'Abteilung' },
  { field: 'Fachbereich', title: '(Fach-)Bereich' },
  { field: '', title: 'Anzahl MA (int.)' },
  { field: '', title: 'Anzahl MA (ext.)' },
  { field: '', title: 'Anzahl MA (int.+ext.)' },
  { field: '', title: 'Arbeitstage' },
  { field: '', title: 'AT in %' },
  { field: '', title: 'Mobiles Arbeiten(Tage)' },
  { field: '', title: 'Anwesenheit (in %)' },
  { field: '', title: 'Anwesenheit MA an Tagen' },
  { field: '', title: 'RECHN. MINIMUM ANZAHL AP' },
  { field: '', title: 'Minimum AP + 10% Sicherheit' },
  { field: '', title: 'Minimum "DSQM"+ Usability Factor' },
  { field: '', title: 'entsprechende DS Quote' },
];

// Sheet: Kommunikationsarten
const tablecolnames6: ColumnDefinition[] = [
  { field: 'Art', title: 'Art' },
  { field: 'Haeufigkeit', title: 'Häufigkeit',
    columns: [
      { field: 'taeglich', title: 'täglich' },
      { field: 'woechentlich_4', title: '4x pro Woche' },
      { field: 'woechentlich_3', title: '3x pro Woche' },
      { field: 'woechentlich_2', title: '2x pro Woche' },
      { field: 'woechentlich_1', title: '1x pro Woche' },
      { field: 'monatlich', title: '1x monatlich' }
    ]
  },
  { field: 'teilnehmer_anzahl', title: 'Anzahl Teilnehmer',
    columns: [
      { field: 'teilnehmer_bis_2', title: 'bis 2' },
      { field: 'teilnehmer_bis_4', title: 'bis 4' },
      { field: 'teilnehmer_bis_8', title: 'bis 8' },
      { field: 'teilnehmer_bis_12', title: 'bis 12' },
      { field: 'teilnehmer_12_plus', title: '>12' }
    ]
  },
  { field: 'dauer', title: 'Dauer in Stunden (pro Meeting)' }
];

// Sheet: Ausw KommArten
const tablecolnames7: ColumnDefinition[] = [
  { field: '', title: 'Raumtypen' },
  { field: '', title: 'Anzahl Pers.' },
  { field: '', title: 'ANNAHME Anzahl Räume' },
  { field: '', title: 'Anzahl Termine pro Tag' },
  { field: '', title: 'Anzahl mögl. Termine p.a.' },
  { field: '', title: 'ermittelte Anzahl Termine p.a. + FF' },
  { field: '', title: 'Delta Termine p.a.' },
  { field: '', title: 'Reserve-Termine in % (mögl. Termine = 100%)' },
  { field: '', title: 'Reserve-Termine pro Tag' }
];

// Sheet: flaechenrelev_Sonderanf
const tablecolnames8: ColumnDefinition[] = [
  { field: '', title: 'Fachbereich' },
  { field: '', title: 'Lagerfläche/ Stauraum' },
  { field: '', title: 'Sonderbedarfe\t' },
  { field: '', title: 'SonderAPL' },
  { field: '', title: 'RaumNR. Lagerraum' },
  { field: '', title: 'Tresore (BxHxT)' },
  { field: '', title: 'Sonstiges' },
  { field: '', title: 'Klärungen/Hinweise' },
  { field: '', title: 'Neue Arbeitswelt Ja oder Nein?' },
  { field: '', title: 'Kategorien' }
];

// Sheet: Tabelle1
const tablecolnames9: ColumnDefinition[] = [
  { field: '', title: 'Bereich' },
  { field: '', title: 'Gruppe' },
  { field: '', title: 'Sonderräume/Flächen können bereichsfremd' },
  { field: '', title: 'Ablage-/Archivfläche' },
  { field: '', title: 'Sonderbedarfe' },
  { field: '', title: 'SonderAPL' },
  { field: '', title: 'RaumNR. Lagerraum' },
  { field: '', title: 'Tresore (BxHxT)' },
  { field: '', title: 'Sonstiges' },
  { field: '', title: 'Klärungen/Hinweise' },
  { field: '', title: 'Neue Arbeitswelt Ja oder Nein?' }
];

@Component({
  selector: 'app-tabulator-test01',
  templateUrl: './tabulator-test01.component.html',
  styleUrls: ['./tabulator-test01.component.css']
})
export class TabulatorTest01Component implements OnInit {

  // @Input()
  tableData: any[] = tabledata;
  // @Input()
  columnNames: any[] = tablecolnames;
  // @Input()
  height: string = '311px';
  // list properties you want to set per implementation here...
  table: Tabulator|null = null;

  // tab = document.createElement('div');

  @ViewChild('myTabulatorTable', { static: true }) tab: ElementRef | undefined;

  constructor(
    private winRef: Window,
    private interviewData: BedarfOverviewDataService) {
    console.log('#214 tabulator-test01.component.ts constructor');
    (this.winRef as any).Tabulator = Tabulator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.drawTable();
  }

  ngOnInit(): void {
    console.log('#223 tabulator-test01.component.ts ngOnInit');
    const resultTable = this.drawTable();
    const allData = this.interviewData.getAll();
    allData.then( (bdata) => {
      console.log('tabulator-test01.components.ts #227', bdata);
      this.table?.setData(bdata.rows);
    });
    console.log('Bedarfsermittlung allData #224', allData);
  }

  private drawTable(): Tabulator|null {
    const urlData = '';
    if (this.tab?.nativeElement) {
      this.table = new Tabulator(this.tab.nativeElement, {
        data: this.tableData,
        reactiveData: true, //enable data reactivity
        columns: this.columnNames,
        layout:"fitDataStretch",
        height: this.height,
        paginationSize:3, //optional parameter to request a certain number of rows per page
        paginationInitialPage:2 //optional parameter to set the initial page to load
      });
      this.table.setData(urlData);
    } else {
      alert("this.tab ist " + (typeof this.tab));
    }
    return this.table;
  }

}
