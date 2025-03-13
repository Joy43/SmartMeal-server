interface IMeal {
    mealId: string;
    name: string;
    price: number;
    calories: number;
    category: string;
    description: string;
    nutritionInfo: string;
    ingredients: string[];
    imageUrl: string;
    reviews: Review[];
    availability: boolean;
    createdAt: Date;
    updatedAt?: Date;
  }
  
  interface Review {
    userId: string;
    rating: number;
    comment: string;
    createdAt: Date;
  }
  