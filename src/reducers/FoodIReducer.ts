export const FoodReducer = (state: Food.IFoodState, action: Food.FoodAction) => {
  switch (action.type) {
    case "GET_FOODS": {
      state.loading = false;
      state.error = null;
      state.categories = action.payload;
      break;
    }
    case "GET_FOODS_ERROR": {
      state.loading = false;
      state.error = action.payload;
      state.categories = [];
      break;
    }
    case "INCREASE_ORDER": {
      const { row, col } = action.payload;
      const food = state.categories[row].foods[col];
      const newFood = {
        ...food,
        order_count: (food.order_count || 0) + 1,
        quantity: food.quantity - 1,
      };
      state.categories[row].foods[col] = newFood;
      break;
    }
    case "DECREASE_ORDER": {
      const { row, col } = action.payload;
      const food = state.categories[row].foods[col];
      const newFood = {
        ...food,
        order_count: (food.order_count || 0) - 1,
        quantity: food.quantity + 1,
      };
      state.categories[row].foods[col] = newFood;
      break;
    }
    case "RESET_ORDER": {
      state.categories.forEach((category) => {
        category.foods.forEach((food) => {
          if (!food.order_count) return;
          food.order_count = 0;
        });
      });
      break;
    }
    case "RESET": {
      state.loading = true;
      state.error = null;
      state.categories = [];
      break;
    }
    default:
      return state;
  }
};
