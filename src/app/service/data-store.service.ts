import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { Profile } from "../interface/profile";
import { SideBar } from "../interface/sidebar";

interface DataStore {
  sideBar: SideBar[];
  profile: Profile;
}

@Injectable({
  providedIn: "root",
})
export class DataStoreService {
  initData = {
    sideBar: [],
    profile: { total: "", totalPages: "", page: "", pageSize: "", data: [] },
  };

  state$ = new BehaviorSubject<DataStore>(this.initData);

  sideBar$ = this.state$.pipe(map(({ sideBar }) => sideBar));

  constructor() {}

  updateToStore(data: object) {
    this.state$.next({ ...this.state$.getValue(), ...data });
  }
}
