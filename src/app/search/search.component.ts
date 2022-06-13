import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  isHandSet$ = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(map(({ matches }) => matches));
  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}
}
