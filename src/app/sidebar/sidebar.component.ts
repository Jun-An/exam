import { Component, HostBinding, OnInit } from "@angular/core";
import { SideBar } from "../interface/sidebar";
import { ApiService } from "../service/api.service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  @HostBinding("class") class = "absolute inset-0 w-20 h-screen bg-[lightGray]";

  sideBars: SideBar[] = [];
  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchSideBar();
  }

  trackByFunc(index: number, sideBar: SideBar) {
    return sideBar.name;
  }

  clickSideBar(sideBar: SideBar) {
    this.sideBars = this.sideBars.map((value) => ({
      ...value,
      isFocus: value.name === sideBar.name,
    }));
  }

  private fetchSideBar() {
    this.apiService
      .fetchSideBar()
      .pipe(untilDestroyed(this))
      .subscribe((value: SideBar[]) => (this.sideBars = value));
  }
}
