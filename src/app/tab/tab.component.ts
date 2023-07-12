import { Component, Input } from "@angular/core";
import { TabsComponent } from "../tabs/tabs.component";

@Component({
  selector: "tab",
  template: `
    <div [hidden]="!show">
      <ng-content></ng-content>
    </div>
  `,
})
export class TabComponent {
  @Input() tabTitle: string = '';
  @Input() disabled: boolean = false;
  show: boolean = true;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }
}
