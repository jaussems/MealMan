import {Component, OnInit} from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {Ingredient} from "../../shared/interfaces/api";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  searchFormGroup = new FormGroup({
    search  : new FormControl<string>('')
  })
  data$?: Ingredient;

constructor(private _dataService: DataService) {
  this.searchFormGroup.controls['search']?.valueChanges.subscribe((value) => {
    console.log(`Input Value: ${value}`);
    setTimeout(() => {
      if(value)
      {
        this._dataService.getMealsPerMainIngredient(value).subscribe((data) => {
          console.log(`Meals with main ingredients: ${data}`);
        })
      }
    }, 3000)
  })
}

ngOnInit() {
  this.getData();

}

getData() {
    this._dataService.getAllIngredients().subscribe((data: Ingredient) => {
      this.data$ = data;
    })


}
}
