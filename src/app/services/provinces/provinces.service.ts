import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URL } from "../config/url.service";
import { Provinces } from "../../interfaces/provinces";
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {

  data: any;
  resp: any;
  headers: any;

  constructor(public http: HttpClient) {

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });

  }

  async getProvinces() {

    let url = URL + "provinces/list";

    return new Promise((resolve, reject) => {

      this.data = this.http.get(url, { headers: this.headers });
      this.data.subscribe(data => {

        this.resp = data;
        let response: Provinces;

        if (this.resp.code == 200) {
          response = this.resp.data;
        }
        resolve(response);

      }, (err) => {

        reject(err);

      });

    });

  }

}
