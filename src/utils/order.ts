export const getTotalAmount = (categories: Food.IFoodCategory[]) => {
  return categories.reduce((acc, cur) => {
    return (
      acc +
      cur.foods.reduce((acc, cur) => {
        return acc + cur.rate * (cur.order_count || 0);
      }, 0)
    );
  }, 0);
};

export const filterOrder = (categories: Food.IFoodCategory[]) => {
  return categories.reduce<ORDER.IOrder[]>((acc, cur) => {
    return acc.concat(
      cur.foods.reduce<ORDER.IOrder[]>((acc, cur) => {
        if (!!cur.order_count) {
          return acc.concat({
            food_id: cur.id,
            quantity: cur.order_count,
          });
        }
        return acc;
      }, [])
    );
  }, []);
};
