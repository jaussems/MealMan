export interface Ingredient {
  meals: Ingredient[];
}

export interface Ingredient {
  idIngredient:   string;
  strIngredient:  string;
  strDescription: null | string;
  strType:        null | string;
}


export interface Meal {
  meals: MealElement[];
}

export interface MealElement {
  strMeal:      string;
  strMealThumb: string;
  idMeal:       string;
}
