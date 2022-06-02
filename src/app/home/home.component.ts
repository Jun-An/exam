import { Component, HostBinding, OnInit } from "@angular/core";
import { ApiService } from "../service/api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @HostBinding("class") class = "w-screen h-full";

  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchNews();
  }

  private fetchNews() {
    this.apiService.fetchNews().subscribe();
  }
}
