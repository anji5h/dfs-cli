export const getTotalAmount = (categories: Food.IFoodCategory[]) => {
  let total = 0;
  categories.forEach((category) => {
    category.foods.forEach((food) => {
      total += (food.order_count || 0) * food.rate;
    });
  });
  return total;
};

export const filterOrder = (categories: Food.IFoodCategory[]) => {
  let order: ORDER.IOrder[] = [];
  categories.forEach((category) => {
    category.foods.forEach((food) => {
      if (!food.order_count) return;
      order.push({
        food_id: food.id,
        quantity: food.order_count,
      });
    });
  });
  return order;
};
