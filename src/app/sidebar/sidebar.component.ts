import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef,
} from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { map } from "rxjs";
import { SideBar } from "../interface/sidebar";
import { DataStoreService } from "../service/data-store.service";

@UntilDestroy()
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  sideBars: SideBar[] = [];

  isHandSet$ = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(map(({ matches }) => matches));
  constructor(
    private readonly dataStoreService: DataStoreService,
    private readonly breakpointObserver: BreakpointObserver,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getSideBar();
  }

  private getSideBar() {
    this.dataStoreService.sideBar$
      .pipe(untilDestroyed(this))
      .subscribe((value) => {
        this.sideBars = value;
        this.changeDetectorRef.detectChanges();
      });
  }
}
