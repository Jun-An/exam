import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from "@angular/core";
import { ApiService } from "../service/api.service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { DataStoreService } from "../service/data-store.service";
@UntilDestroy()
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  @HostBinding("class") class = "w-screen h-full";

  constructor(
    private readonly apiService: ApiService,
    private readonly dataStoreService: DataStoreService
  ) {}

  ngOnInit(): void {
    this.fetchSideBarData();
    this.fetchProfileData();
  }

  private fetchSideBarData() {
    this.apiService
      .fetchSideBar()
      .pipe(untilDestroyed(this))
      .subscribe((value) =>
        this.dataStoreService.updateToStore({ sideBar: value })
      );
  }

  private fetchProfileData() {
    this.apiService
      .fetchProfile()
      .pipe(untilDestroyed(this))
      .subscribe((profile) => this.dataStoreService.updateToStore({ profile }));
  }
}
