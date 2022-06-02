import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SideBar } from "../interface/sidebar";
@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseUrl = "http://localhost:3000";
  constructor(private httpClient: HttpClient) {}

  fetchSideBar(): Observable<SideBar[]> {
    return this.httpClient.get<SideBar[]>(`${this.baseUrl}/sidebars`);
  }

  fetchNews() {
    const url = "https://www.hpa.gov.tw/wf/newsapi.ashx";
    return this.httpClient.get(url);
  }
}
