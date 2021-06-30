import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import Tabulator from "tabulator-tables";
import {
  BereichsMitarbeiterColDef,
  InterviewOverviewColDef,
  TaetigkeitenColDef,
  MobileArbeitenColDef,
  MobileArbeitenAbleitungColDef
} from "../../models/column-definitions";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {MatTab, MatTabChangeEvent, MatTabGroup} from "@angular/material/tabs";
import {BaseApiDataService} from "../../services/base-api-data.service";
import {InterviewOverviewDataService} from "../../services/interview-overview-data.service";
import {TaetigkeitenDataService} from "../../services/taetigkeiten-data.service";
import {MobilesArbeitenDataService} from "../../services/mobiles-arbeiten-data.service";
import {MobilesArbeitenAbleitungDataService} from "../../services/mobiles-arbeiten-ableitung-data.service";
import {BedarfOverviewDataService} from "../../services/bedarf-overview-data.service";
import ColumnComponent = Tabulator.ColumnComponent;

@Component({
  selector: 'app-bedarfsermittlung-auswertungen',
  templateUrl: './bedarfsermittlung-auswertungen.component.html',
  styleUrls: ['./bedarfsermittlung-auswertungen.component.scss']
})
export class BedarfsermittlungAuswertungenComponent implements OnInit, OnDestroy, AfterViewInit {

  private routingSubscription?: Subscription;
  private height = 500;

  kid = 0;
  interviewOverviewTable?: Tabulator;
  taetigkeitenTable?: Tabulator;
  mobilesArbeitenTable?: Tabulator;
  mobilesArbeitenAbleitungTable?: Tabulator;
  interviewBaseDataTable?: Tabulator;

  @ViewChild('myTabGroup', { static: true }) tabGroup: ElementRef | undefined;
  @ViewChild('myTabInterviewOverview', { static: true }) tabInterviewOverview: ElementRef | undefined;
  @ViewChild('myTabTaetigkeiten', { static: true }) tabTaetigkeiten: ElementRef | undefined;
  @ViewChild('myTabMobilesArbeiten', { static: true }) tabMobilesArbeiten: ElementRef | undefined;
  @ViewChild('myTabMobilesArbeitenAbleitung', { static: true }) tabMobilesArbeitenAbleitung: ElementRef | undefined;
  @ViewChild('myTabInterviewBase', { static: true }) tabInterviewBase: ElementRef | undefined;

  @ViewChild('MatTabInterviewOverview', { static: true }) matTabInterviewOverview: ElementRef | undefined;
  @ViewChild('MatTabTaetigkeiten', { static: true }) matTabTaetigkeiten: ElementRef | undefined;
  @ViewChild('MatTabMobilesArbeiten', { static: true }) matTabMobilesArbeiten: ElementRef | undefined;
  @ViewChild('MatTabMobilesArbeitenAbleitung', { static: true }) matTabMobilesArbeitenAbleitung: ElementRef | undefined;
  @ViewChild('MatTabInterviewBase', { static: true }) matTabInterviewBase: ElementRef | undefined;

  bereichsMitarbeiterBaseColDef = BereichsMitarbeiterColDef;
  interviewOverviewColDef = InterviewOverviewColDef;
  taetigkeitenColDef = TaetigkeitenColDef;
  mobilesArbeitenColDef = MobileArbeitenColDef;
  mobilesArbeitenAbleitungColDef = MobileArbeitenAbleitungColDef;

  tabs: ElementRef[] = [];
  activatedTab: string[] = [];
  selectedTab?:MatTab;
  selectedTabIndex = 0;
  activeTable?: Tabulator;
  public activeTableColumns: { title: string, checked:boolean, column:ColumnComponent}[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: BaseApiDataService,
    private interviewData: InterviewOverviewDataService,
    private taetigkeitenData: TaetigkeitenDataService,
    private mobilesArbeitenData: MobilesArbeitenDataService,
    private mobilesArbeitenAbleitungData: MobilesArbeitenAbleitungDataService,
    private bereichsMitarbeiterBaseData: BedarfOverviewDataService) { }

  ngOnInit(): void {
    this.kid = 1;

    if (this.matTabInterviewOverview) {
      this.tabs.push(this.matTabInterviewOverview);
    }
    if (this.matTabTaetigkeiten) {
      this.tabs.push(this.matTabTaetigkeiten);
    }
    if (this.matTabTaetigkeiten) {
      this.tabs.push(this.matTabTaetigkeiten);
    }
    if (this.matTabMobilesArbeiten) {
      this.tabs.push(this.matTabMobilesArbeiten);
    }
    if (this.matTabMobilesArbeitenAbleitung) {
      this.tabs.push(this.matTabMobilesArbeitenAbleitung);
    }

    this.routingSubscription = this.route.params.subscribe(params => {
      this.kid = parseInt(params.kid, 10);
    });
  }

  ngAfterViewInit() {

    const loadTables = Promise.all([
      this.drawTableInterviewOverview(),
      this.drawTableTaetigkeiten(),
      this.drawTableMobilesArbeiten(),
      this.drawTableMobilesArbeitenAbleitung(),
      this.drawTableInterviewBaseData(),
    ]);

    loadTables.then( () => {
      this.tabs.find( (tab) => {
        if (tab instanceof MatTab) {
          if (tab.isActive && (typeof tab.position === 'number')) {
            console.log('Found active Tab #106: ', {tab, iActive: tab.isActive, position: tab.position});
            this.onTabLoad(tab as unknown as MatTab, tab.position);
            return tab;
          }
          console.error('Active Tab Not Found #110: ', { tab, iActive: tab.isActive, position: tab.position });
        }
        return null;
      });
    });
  }

  ngOnDestroy() {
    this.routingSubscription?.unsubscribe();
  }

  renderTest(col: ColumnComponent) {
    const title = col.getDefinition().title;
  }

  reloadAllData() {
    Promise.all([
      this.reloadDataIntOver(),
      this.reloadDataTaetigkeiten(),
      this.reloadDataMobilesArbeiten(),
      this.reloadDataMobilesArbeitenAbleitung(),
      this.reloadDataBase()
    ]);
  }

  public async reloadDataBase(): Promise<boolean> {
    const allData = this.bereichsMitarbeiterBaseData.getAll(this.kid);
    return allData.then( (bdata) => {
      console.log('tabulator-test01.components.ts #81', bdata);
      if (this.interviewBaseDataTable instanceof Tabulator) {
        return this.interviewBaseDataTable?.setData(bdata.rows)
          .then(() => true)
          .catch((reason) => {
            console.error(reason);
            return false;
          });
      } else {
        return false;
      }
    });
  }

  public reloadDataIntOver() {
    const allDataIntOver = this.interviewData.getAll(this.kid);
    allDataIntOver.then( (bdata) => {
      console.log('tabulator-test01.components.ts #98', bdata);
      this.interviewOverviewTable?.setData(bdata.rows).catch( (reason) => console.error(reason));
    });
  }

  public reloadDataTaetigkeiten() {
    const dataResult = this.taetigkeitenData.getAll(this.kid);
    dataResult.then( (data) => {
      console.log('tabulator-test01.components.ts #97', data);
      this.taetigkeitenTable?.setData(data.rows).catch( (reason) => console.error(reason));
    });
  }

  public reloadDataMobilesArbeiten() {
    const dataResult = this.mobilesArbeitenData.getAll(this.kid);
    dataResult.then( (data) => {
      console.log('tabulator-test01.components.ts #105', data);
      this.mobilesArbeitenTable?.setData(data.rows).catch( (reason) => console.error(reason));
    });
  }

  public reloadDataMobilesArbeitenAbleitung() {
    const dataResult = this.mobilesArbeitenAbleitungData.getAll(this.kid);
    dataResult.then( (data) => {
      console.log('tabulator-test01.components.ts #113', data);
      this.mobilesArbeitenAbleitungTable?.setData(data.rows).catch( (reason) => console.error(reason));
    });
  }

  private async drawTableInterviewOverview(): Promise<Tabulator|undefined> {
    if (this.tabInterviewOverview?.nativeElement) {
      this.interviewOverviewTable = new Tabulator(this.tabInterviewOverview.nativeElement, {
        data: [],
        selectable: true,
        reactiveData: true, //enable data reactivity
        columns: this.interviewOverviewColDef,
        layout:"fitDataStretch",
        height: this.height,
        paginationSize:3, //optional parameter to request a certain number of rows per page
        paginationInitialPage:2 //optional parameter to set the initial page to load
      });
      // this.interviewOverviewTable.setData(urlData).then( (value) => {
      //   console.log('drawTableInterviewOverview setData() then', { value });
      // });
      this.reloadDataIntOver();
    } else {
      alert("this.tab ist " + (typeof this.tabInterviewOverview));
    }
    return this.interviewOverviewTable;
  }

  private async drawTableTaetigkeiten(): Promise<Tabulator|undefined> {
    if (this.tabTaetigkeiten?.nativeElement) {
      this.taetigkeitenTable = new Tabulator(this.tabTaetigkeiten.nativeElement, {
        data: [],
        selectable: true,
        reactiveData: true, //enable data reactivity
        columns: this.taetigkeitenColDef,
        layout:"fitDataStretch",
        height: this.height,
        paginationSize:3, //optional parameter to request a certain number of rows per page
        paginationInitialPage:2 //optional parameter to set the initial page to load
      });
      this.reloadDataTaetigkeiten();
    } else {
      alert("this.tab ist " + (typeof this.tabTaetigkeiten));
    }
    return this.taetigkeitenTable;
  }

  private async drawTableMobilesArbeiten(): Promise<Tabulator|undefined> {
    if (this.tabMobilesArbeiten?.nativeElement) {
      this.mobilesArbeitenTable = new Tabulator(this.tabMobilesArbeiten.nativeElement, {
        data: [],
        selectable: true,
        reactiveData: true, //enable data reactivity
        columns: this.mobilesArbeitenColDef,
        layout:"fitDataStretch",
        height: this.height,
        paginationSize:3, //optional parameter to request a certain number of rows per page
        paginationInitialPage:2 //optional parameter to set the initial page to load
      });
      this.reloadDataMobilesArbeiten();
    } else {
      alert("this.tab ist " + (typeof this.tabMobilesArbeiten));
    }
    return this.mobilesArbeitenTable;
  }

  private async drawTableMobilesArbeitenAbleitung(): Promise<Tabulator|undefined> {
    if (this.tabMobilesArbeitenAbleitung?.nativeElement) {
      this.mobilesArbeitenAbleitungTable = new Tabulator(this.tabMobilesArbeitenAbleitung.nativeElement, {
        data: [],
        selectable: true,
        reactiveData: true, //enable data reactivity
        columns: this.mobilesArbeitenAbleitungColDef,
        layout:"fitDataStretch",
        height: this.height,
        paginationSize:3, //optional parameter to request a certain number of rows per page
        paginationInitialPage:2 //optional parameter to set the initial page to load
      });
      this.reloadDataMobilesArbeitenAbleitung();
    } else {
      alert("this.tab ist " + (typeof this.tabInterviewBase));
    }
    return this.mobilesArbeitenAbleitungTable;
  }

  private async drawTableInterviewBaseData(): Promise<Tabulator|undefined> {
    if (this.tabInterviewBase?.nativeElement) {
      const table = new Tabulator(this.tabInterviewBase.nativeElement, {
        data: [],
        selectable: true,
        reactiveData: true, //enable data reactivity
        columns: this.bereichsMitarbeiterBaseColDef,
        layout:"fitDataStretch",
        height: this.height,
        paginationSize:3, //optional parameter to request a certain number of rows per page
        paginationInitialPage:2 //optional parameter to set the initial page to load
      });
      this.interviewBaseDataTable = table;
      // this.interviewOverviewTable.setData(urlData).then( (value) => {
      //   console.log('drawTableInterviewOverview setData() then', { value });
      // });
      this.reloadDataBase().then( (success) => {

      });
    } else {
      alert("this.tab ist " + (typeof this.tabInterviewBase));
    }
    return this.interviewBaseDataTable;
  }

  onTabLoad(tab: MatTab, tabIndex: number) {
    this.selectedTab = tab;
    this.selectedTabIndex =tabIndex;
    this.activeTable = undefined;
    let hideExtraColumns: string[] = [];
    switch(tab.textLabel) {
      case 'Interview-Overview':
        this.activeTable = this.interviewOverviewTable;
        break;
      case 'Tätigkeiten':
        this.activeTable = this.taetigkeitenTable;
        break;
      case 'Mobiles Arbeiten':
        this.activeTable = this.mobilesArbeitenTable;
        break;
      case 'Mobiles Arbeiten Ableitung':
        this.activeTable = this.mobilesArbeitenAbleitungTable;
        hideExtraColumns = [ 'MobAT_Gewichtet', 'Usability_Factor_Anteil', 'Summe_Tage', 'Absolute_Tage' ];
        break;
      case 'Interview-Basis':
        this.activeTable = this.interviewBaseDataTable;
        break;
    }
    if (this.activeTable instanceof Tabulator && this.activatedTab.indexOf(this.selectedTab.textLabel) === -1) {
      this.activatedTab.push(this.selectedTab.textLabel);
      if (this.activeTable instanceof Tabulator) {
        this.hideColumns(this.activeTable, [
          'kid', 'bid', 'aid', 'created_at', 'created_uid', 'modified_at', 'modified_uid'
        ].concat(hideExtraColumns));
      }
    }
    this.showColumnPicker();
  }
  tabFocusChange(event: MatTabChangeEvent) {}
  tabSelectedTabChange(event: MatTabChangeEvent) {
    console.log('tabSelectedChange #318 ', event);
    this.selectedTab = event.tab;
    this.selectedTabIndex = event.index;
    this.activeTable = undefined;
    this.onTabLoad(event.tab, event.index);
  }

  hideColumns(table: Tabulator, fieldNames: string[]) {
    console.log('Call to hide Colums of table ', table, table.element.id, fieldNames);
    const actions: any = {};

      const cols = table.getColumns();
      cols.forEach((col, idx) => {
        const ti = col.getDefinition().field;
        if (ti) {
          actions[ti] = 'not Found in hiding FieldNames';
          if (fieldNames.indexOf(ti) > -1) {
            col.hide();
            actions[ti] = 'hidden';
          }
        }
      });

    console.log('hideColumns #342', { actions });
  }

  tabAnimationDone() {}

  showColumnPicker() {
    if (this.activeTable !== undefined && this.activeTable instanceof Tabulator) {
      const columnComponents = this.activeTable.getColumns();
      this.activeTableColumns = columnComponents?.map( column => {
        return {
          title: column.getDefinition().title,
          checked: column.isVisible(),
          column
        };
      })
    }
    console.log('showColumnPicker', { activeTable: this.activeTable, activeTableColumns: this.activeTableColumns });
  }

  columnToggle(colIndex: number) {
    this.activeTableColumns[colIndex].column.toggle();
    this.activeTableColumns[colIndex].checked = this.activeTableColumns[colIndex].column.isVisible();
  }

}
