export type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type Ingredients = Record<string, string>;

export type RecipeDetails = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strYoutube: string;
  tags: string[];
  strArea: string;
  strCategory: string;
  strInstructions: string;
  ingredients: Ingredients;
  strSource: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface RecipeSliceState {
  items: Recipe[];
  status: Status;
  recipeStatus: Status;
  selectedRecipe: RecipeDetails | null;
}