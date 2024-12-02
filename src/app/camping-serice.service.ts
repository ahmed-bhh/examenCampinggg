import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Camping} from "../Camping";

@Injectable({
  providedIn: 'root'
})
export class CampingSericeService {

  baseUrl = 'http://localhost:3000/campings';

  constructor(private http: HttpClient) { }

  getStages():Observable<Camping[]> {
    return this.http.get<Camping[]>(this.baseUrl);
  }

  getStageById(id: string):Observable<Camping> {
    return this.http.get<Camping>(`${this.baseUrl}/${id}`);
  }

  addStage(stage: any) {
    return this.http.post<Camping>(this.baseUrl, stage);
  }

  updateStage(stage: any) {
    return this.http.put<Camping>(`${this.baseUrl}/${stage.id}`, stage);
  }

  deleteStage(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }}
