import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { TabComponent } from "../tab/tab.component";
import { NgbNavConfig, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "tabs",
  templateUrl: "./tabs.component.html",
})


export class TabsComponent {
  tabs: TabComponent[] = [];
  @Input() active: number = 0;

  addTab(tab: TabComponent) {
    //this line adds tab and set the property show for tab component
    if (this.tabs.length === this.active) {
      tab.show = true;
    } else {
      tab.show = false;
    }
    this.tabs.push(tab);
  }

  onShown($event:any) {
    for (let i = 0; i < this.tabs.length; i++) {
      if ($event == i) {
        this.tabs[i].show = true;
      } else {
        this.tabs[i].show = false;
      }
    }
  }
}
