export const FoodReducer = (state: Food.IFoodState, action: Food.FoodAction) => {
  switch (action.type) {
    case "GET_FOODS":
      return {
        loading: false,
        error: null,
        categories: action.payload,
      };
    case "GET_FOODS_ERROR": {
      return {
        loading: false,
        error: action.payload,
        categories: [],
      };
    }
    case "INCREASE_ORDER": {
      const { row, col } = action.payload;
      const food = state.categories[row].foods[col];
      const newFood = { ...food, order_count: (food.order_count || 0) + 1 };
      state.categories[row].foods[col] = newFood;
      return {
        ...state,
        categories: [...state.categories],
      };
    }
    case "DECREASE_ORDER": {
      const { row, col } = action.payload;
      const food = state.categories[row].foods[col];
      const newFood = { ...food, order_count: (food.order_count || 0) - 1 };
      state.categories[row].foods[col] = newFood;
      return {
        ...state,
        categories: [...state.categories],
      };
    }
    case "RESET_ORDER": {
      let newCategory = state.categories.map((category) => {
        return {
          ...category,
          foods: category.foods.map((food) => {
            return { ...food, order_count: 0 };
          }),
        };
      });
      return { ...state, categories: [...newCategory] };
    }
    case "RESET":
      return {
        loading: true,
        error: null,
        categories: [],
      };
    default:
      return state;
  }
};
