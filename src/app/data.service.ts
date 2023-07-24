import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    const auth_token = '';
    const url = 'https://telemetry-query-quix-gamedemo.platform.quix.ai/data/query';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    const body = {
      "from": 1634742777583569200,
      "to": 1634742809407737900,
      "numericParameters": [
          {
              "parameterName": "Speed",
              "aggregationType": "None"        
          }
      ],
      "stringParameters": [],
      "streamIds": [
          "f567893a-29ee-45c9-b87e-8ed1ca8d7720"],
      "tagFilters": [],
      "eventIds": []
  }

    return this.http.post(url, body, { headers: headers });
  }


}
