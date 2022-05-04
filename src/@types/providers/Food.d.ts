declare namespace Food {
  interface IFoodItem {
    id: number;
    name: string;
    description: string | null;
    rate: number;
    image: string;
    category_id: number;
    start_time: string;
    end_time: string;
    quantity: number;
    order_count: number;
    created_at: string;
    updated_at: string;
    is_menu: boolean;
  }
  interface IFoodCategory {
    id: number;
    name: string;
    foods: IFoodItem[];
  }
  interface IFoodState {
    loading: boolean;
    error: string | null;
    categories: IFoodCategory[];
  }
  interface IGetFoodsAction {
    type: "GET_FOODS";
    payload: IFoodCategory[];
  }
  interface IGetFoodsErrorAction {
    type: "GET_FOODS_ERROR";
    payload: string;
  }
  interface IDecrementOrderAction {
    type: "DECREASE_ORDER";
    payload: {
      row: number;
      col: number;
    };
  }
  interface IIncrementOrderAction {
    type: "INCREASE_ORDER";
    payload: {
      row: number;
      col: number;
    };
  }
  interface IResetOrderAction {
    type: "RESET_ORDER";
  }
  interface IResetAction {
    type: "RESET";
  }
  type FoodAction =
    | IGetFoodsAction
    | IGetFoodsErrorAction
    | IDecrementOrderAction
    | IIncrementOrderAction
    | IResetOrderAction
    | IResetAction;
}
