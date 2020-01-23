import { Injectable } from '@angular/core';

export const VideosList:Array<any> = [

  {
    id: '1',
    name: 'SCOOB!',
    url: 'ZnKvQbpDYXU',
    comment: 'SCOOB!'
  },
  {
    id: '2',
    name: 'ndlTHE WITCHER1W4ltcmg',
    url: 'ndl1W4ltcmg',
    comment: 'THE WITCHER'
  },
  {
    id: '3',
    name: 'TROLLS WORLD TOUR',
    url: 'DFX6WQ1O6kI',
    comment: 'TROLLS WORLD TOUR'
  },
  {
    id: '4',
    name: 'Star Wars: The Rise of Skywalker',
    url: 'Zsp8iOt76YU',
    comment: 'Star Wars: The Rise of Skywalker'
  },
  {
    id: '5',
    name: 'EsquiPati Patni Aur Wohando',
    url: 'L7a1JSeqaXk',
    comment: 'Pati Patni Aur Woh'
  },
  {
    id: '6',
    name: 'Sonic the Hedgehog International',
    url: 'lDfHbfVS8kI',
    comment: 'Sonic the Hedgehog International'
  },
  {
    id: '7',
    name: 'Bad Boys For Life Trailer 2',
    url: '2tE-ey9s-OU',
    comment: 'Bad Boys For Life Trailer 2'
  },
  {
    id: '8',
    name: 'How to Get Away with Murder',
    url: 'CgwE0bbZiWI',
    comment: 'How to Get Away with Murder'
  }

];

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() { }
}
