import { Injectable } from '@angular/core';

export const AgeList:Array<any> = [
  {value: 16},
  {value: 17},
  {value: 18},
  {value: 19},
  {value: 20},
  {value: 21},
  {value: 22},
  {value: 23},
  {value: 24},
  {value: 25},
  {value: 26},
  {value: 27},
  {value: 28},
  {value: 29},
  {value: 30},
  {value: 31},
  {value: 32},
  {value: 33},
  {value: 34},
  {value: 35},
  {value: 36},
  {value: 37},
  {value: 38},
  {value: 39},
  {value: 40},
  {value: 41},
  {value: 42},
  {value: 43},
  {value: 44},
  {value: 45},
  {value: 46},
  {value: 47},
  {value: 48},
  {value: 49},
  {value: 50},
  {value: 51},
  {value: 52},
  {value: 53},
  {value: 54},
  {value: 55},
  {value: 56},
  {value: 57},
  {value: 58},
  {value: 59},
  {value: 60},
  {value: 61},
  {value: 62},
  {value: 63},
  {value: 64},
  {value: 65},
  {value: 66},
  {value: 67},
  {value: 68},
  {value: 69},
  {value: 70},
  {value: 71},
  {value: 72},
  {value: 73},
  {value: 74},
  {value: 75},
  {value: 76},
  {value: 77},
  {value: 78},
  {value: 79},
  {value: 80},
  {value: 81},
  {value: 82},
  {value: 83},
  {value: 84},
  {value: 85},
  {value: 86},
  {value: 87},
  {value: 88},
  {value: 89},
  {value: 90},
  {value: 91},
  {value: 92},
  {value: 93},
  {value: 94},
  {value: 95},
  {value: 96},
  {value: 97},
  {value: 98},
  {value: 99},
  
];

export const GenderList:Array<any> = [
  {
    value: 1,
    name: 'Femenino'
  },
  {
    value: 2,
    name: 'Masculino'
  },{
    value: 3,
    name: 'Otro'
  },
  {
    value: 4,
    name: 'Prefiero no indicarlo'
  }
];

export const ThematicsList:Array<any> = [
  {
    value: 1,
    name: 'Deportes'
  },
  {
    value: 2,
    name: 'Música'
  },
  {
    value: 3,
    name: 'Videojuegos'
  },
  {
    value: 4,
    name: 'Moda/Belleza'
  },
  {
    value: 5,
    name: 'Fitnes'
  },
  {
    value: 6,
    name: 'Estilo de vida'
  },
  {
    value: 7,
    name: 'Humor/memes'
  },
  {
    value: 8,
    name: 'Cultura'
  }
];

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
}
