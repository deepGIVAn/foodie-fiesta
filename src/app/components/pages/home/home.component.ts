import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    this.foods = this.foodService.getAll();
    activatedRoute.params.subscribe((params) => {
      // "noPropertyAccessFromIndexSignature": false, in tsconfig.json file okkk!!!.. for params.searchTerm
      if (params['searchTerm'].length>0) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params['searchTerm']
        );
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }

  ngOnInit(): void {}
}
