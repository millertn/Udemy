export interface Recipe {
    id: number;
    title: string;
    imageUrl: string;
    ingredients: string[];
    directions: string[];
    prepTime: number;
    cookTime:number;
}