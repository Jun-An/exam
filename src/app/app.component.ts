import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer
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
