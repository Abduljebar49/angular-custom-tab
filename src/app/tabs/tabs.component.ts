import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { TabComponent } from "../tab/tab.component";
import { NgbNavConfig, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "tabs",
  templateUrl: "./tabs.component.html",
  styles: [
    `
      .active {
        background-color: #009da0 !important;
        color: white !important;
        --bs-nav-tabs-link-active-border-color: #009da0 #009da0 #ededed !important;
      }

      .nav-tabs {
        --bs-nav-tabs-border-width: 2px !important;
        --bs-nav-tabs-border-color: #009da0 !important;
        --bs-nav-tabs-border-radius: 0.375rem;
        color: #009da0;
      }
    `,
  ],
})
// <a
//     *ngFor="let tab of tabs; let i = index"
//     (click)="selectTab(tab)"
//     class=""
//     [ngClass]="i == 0? 'index-margin':''"
//     [ngClass]="tab.active ? 'tab-btn btn-primary' : 'btn-active btn-outline-primary'"
//   >
//     {{ tab.tabTitle }}
//   </a>
export class TabsComponent {
  tabs: TabComponent[] = [];
  @Input() active: number = 0;

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.show = true;
    } else {
      tab.show = false;
    }
    this.tabs.push(tab);
  }

  onShown($event:any) {
    console.log("inside on shown : ")
    for (let i = 0; i < this.tabs.length; i++) {
      if ($event == i) {
        this.tabs[i].show = true;
      } else {
        this.tabs[i].show = false;
      }
    }
    console.log("tabs ",this.tabs)
  }
}
