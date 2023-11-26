import { Injectable } from '@angular/core';
import { food } from '../shared/models/food';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():food[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food=> food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
