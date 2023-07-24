import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    const auth_token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qVTBRVE01TmtJNVJqSTNOVEpFUlVSRFF6WXdRVFF4TjBSRk56SkNNekpFUWpBNFFqazBSUSJ9.eyJodHRwczovL3F1aXguYWkvb3JnX2lkIjoicXVpeCIsImh0dHBzOi8vcXVpeC5haS9yb2xlcyI6ImFkbWluIFF1aXhBZG1pbiIsImlzcyI6Imh0dHBzOi8vYXV0aC5xdWl4LmFpLyIsInN1YiI6ImF1dGgwfGJjZmZmYTYyLTE1YTQtNDllYy05OWE0LWQ1Mjk5OTBkN2I1MSIsImF1ZCI6WyJxdWl4IiwiaHR0cHM6Ly9sb2dpY2FsLXBsYXRmb3JtLmV1LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2Mzk2NTUxOTEsImV4cCI6MTY0MjI0NzE5MSwiYXpwIjoiMHptV2ZKZGtpdUdQaUpXeXBTQ0E4ckthVnZmUERLTEkiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwicGVybWlzc2lvbnMiOltdfQ.oYGw6gp3KerOQ-hcfK0cOmVE5pgSEnojyJxCSzOFp2VDG2jyPIKjdYT1atXgVOykkdP10AqyFEoJUQO4X3IMIvhHURTj4q-7PdGGruBIEX00tx5QRiTiufVS7iVkxWo_g87iq_sLhxlP8GWFIjHzmVJ4gfnuQ4gVvR5Ug_ggIgd706gLZ9PqW-jQ0bIFrdUG-RMdxLEtRWlD55u3HPnxy8d8xxDIAw4ThRkoJHRB3OTate0t2kbnvpckyMbSPBI4f_EF97CfCBjM-aze7owSzLgpVtzQUZO-hRomdsdzgSBAviVQY5cp_fxfmxxMsatceaRcZ4FDx-IZFeHRuoP_Kw';
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
