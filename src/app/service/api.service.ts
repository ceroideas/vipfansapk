import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  url = 'https://ceroideas.es/vipfans/public/api';
  // url = 'http://localhost/vipfans/public/api';

  constructor(private http: HttpClient) {
  }

  usersAdd(data)
  {
  	return this.http.post(this.url+'/users/add',data);
  }

  saveInformation(data)
  {
    return this.http.post(this.url+'/users/saveInformation',data);
  }

  usersAll() // vipfans
  {
  	return this.http.get(this.url+'/users/all');
  }

  likesAll()
  {
    return this.http.get(this.url+'/likes/all');
  }

  commentsAll()
  {
    return this.http.get(this.url+'/comments/all');
  }

  videosAll()
  {
    return this.http.get(this.url+'/videos/all');
  }

  getTheme()
  {
    return this.http.get(this.url+'/theme/all');
  }

  getPackages()
  {
    return this.http.get(this.url+'/packages/all');
  }

  getGains()
  {
    return this.http.get(this.url+'/gains/all');
  }

  getRestrictions()
  {
    return this.http.get(this.url+'/restrictions/all');
  }

  saveMagnetism(data)
  {
  	return this.http.post(this.url+'/users/magnetism/add',data);
  }
  resetMagnetism(data)
  {
    return this.http.post(this.url+'/users/magnetism/reset',data);
  }

  usersAddMagnetism(data)
  {
    let id = JSON.parse(localStorage.getItem('profile'))['id'];
    return this.http.post(this.url+'/users/add/magnetism/'+id,data);
  }
}
