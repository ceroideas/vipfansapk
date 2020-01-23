import { Injectable } from '@angular/core';
import { ApiService } from '../../service/api.service';


// export const UsersList:Array<any> = [

//   // {
//   //   id: '1',
//   //   name: 'José',
//   //   lastName: 'Martínez',
//   //   avatar: 'avatar-1.jpg',
//   //   userName: 'martinez74'
//   // },
//   // {
//   //   id: '2',
//   //   name: 'Raúl',
//   //   lastName: 'Urdaneta',
//   //   avatar: 'avatar-2.jpg',
//   //   userName: 'urdaneta02'
//   // },
//   // {
//   //   id: '3',
//   //   name: 'Verónica',
//   //   lastName: 'Manzanzares',
//   //   avatar: 'avatar-3.jpg',
//   //   userName: 'vero23'
//   // },
//   // {
//   //   id: '4',
//   //   name: 'Lupita',
//   //   lastName: 'Carmona',
//   //   avatar: 'avatar-4.jpg',
//   //   userName: 'lupecar12'
//   // },
//   // {
//   //   id: '5',
//   //   name: 'Saul',
//   //   lastName: 'López',
//   //   avatar: 'avatar-5.jpg',
//   //   userName: 'saul-l11'
//   // },
//   // {
//   //   id: '6',
//   //   name: 'María',
//   //   lastName: 'Reinoso',
//   //   avatar: 'avatar-6.jpg',
//   //   userName: 'reinoso-m'
//   // },
//   // {
//   //   id: '7',
//   //   name: 'Gema',
//   //   lastName: 'Puig',
//   //   avatar: 'avatar-7.jpg',
//   //   userName: 'puig400'
//   // },
//   // {
//   //   id: '8',
//   //   name: 'Rosa',
//   //   lastName: 'Moreno',
//   //   avatar: 'avatar-8.jpg',
//   //   userName: 'rmoreno85'
//   // },

// ];

export const PublicationList:Array<any> = [

  {
    id: '1',
    name: 'Encuentro de amigas',
    picture: 'publicacion-1.jpg',
    comment: '¡Que guapas!',
    userName: 'martinez74'
  },
  {
    id: '2',
    name: 'Sandra',
    picture: 'publicacion-2.jpg',
    comment: '¡Que guapa!',
    userName: 'urdaneta02'
  },
  {
    id: '3',
    name: 'Pareja en la playa',
    picture: 'publicacion-3.jpg',
    comment: 'Se ven bien juntos',
    userName: 'vero23'
  },
  {
    id: '4',
    name: 'Paracaidismo',
    picture: 'publicacion-4.jpg',
    comment: '¡Que divertido!',
    userName: 'lupecar12'
  },
  {
    id: '5',
    name: 'Esquiando',
    picture: 'publicacion-5.jpg',
    comment: '¡Que fríooo!',
    userName: 'saul-l11'
  },
  {
    id: '6',
    name: 'Carolina',
    picture: 'publicacion-6.jpg',
    comment: '¡Luces bien!',
    userName: 'reinoso-m'
  },
  {
    id: '7',
    name: 'En la plaza',
    picture: 'publicacion-7.jpg',
    comment: '¡Saludos!',
    userName: 'puig400'
  },
  {
    id: '8',
    name: 'En el bar',
    picture: 'publicacion-8.jpg',
    comment: '¡Saludos!',
    userName: 'rmoreno85'
  }

];


@Injectable({
  providedIn: 'root'
})
export class LikesService {

  UsersList;

  constructor(public api: ApiService) {
    this.api.usersAll().subscribe(data=>{
      this.UsersList = data;
    })
  }
}
