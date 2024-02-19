import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user.types";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private static readonly API_URL = 'https://onlyjosh.de/api';

  constructor(private http: HttpClient) { }

  public getUserData():Observable<User[]> {
    return this.http.get<User[]>(DataService.API_URL + "/user");
  }
}