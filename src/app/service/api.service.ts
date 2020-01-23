import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  // url = 'https://vipfans.es/api';
  url = 'http://depruebas.club/vipfans/backend/public/api';

  constructor(private http: HttpClient) {
  }

  usersAdd(data)
  {
  	return this.http.post(this.url+'/users/add',data);
  }

  usersAll()
  {
  	return this.http.get(this.url+'/users/all');
  }

  usersAddMagnetism(data)
  {
  	let id = JSON.parse(localStorage.getItem('profile'))['id'];
  	return this.http.post(this.url+'/users/add/magnetism/'+id,data);
  }
}
