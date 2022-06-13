import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  isHandSet$ = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(map(({ matches }) => matches));

  hideProfile$ = this.breakpointObserver
    .observe("(min-width: 1440px)")
    .pipe(map(({ matches }) => matches));
  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer,
    private readonly breakpointObserver: BreakpointObserver
  ) {
    this.registerCustomIcon();
  }

  private registerCustomIcon() {
    this.matIconRegistry.addSvgIconResolver(
      (name: string, namespace: string) => {
        const basePath = "assets/icon/";
        const suffix = ".svg";

        return namespace === ""
          ? this.sanitizer.bypassSecurityTrustResourceUrl(
              `${basePath}${name}${suffix}`
            )
          : null;
      }
    );
  }
}
