import { createContext, useReducer } from "react";
import { FoodReducer } from "../reducers/FoodIReducer";
const initialState: Food.IFoodState = {
  loading: true,
  error: null,
  categories: [],
};
export const FoodContext = createContext({
  state: initialState,
  setFood: (categories: Food.IFoodCategory[]) => {},
  setFoodError: (error: string) => {},
  decreaseOrder: (row: number, col: number) => {},
  increaseOrder: (row: number, col: number) => {},
  resetOrder: () => {},
  resetFood: () => {},
});

const FoodProvider: ReactFCWithChildren = ({ children }) => {
  const [state, dispatch] = useReducer(FoodReducer, initialState);
  const setFood = (categories: Food.IFoodCategory[]) => {
    dispatch({ type: "GET_FOODS", payload: categories });
  };
  const setFoodError = (error: string) => {
    dispatch({ type: "GET_FOODS_ERROR", payload: error });
  };
  const decreaseOrder = (row: number, col: number) => {
    dispatch({ type: "DECREASE_ORDER", payload: { row, col } });
  };
  const increaseOrder = (row: number, col: number) => {
    dispatch({ type: "INCREASE_ORDER", payload: { row, col } });
  };
  const resetOrder = () => {
    dispatch({ type: "RESET_ORDER" });
  };
  const resetFood = () => dispatch({ type: "RESET" });
  return (
    <FoodContext.Provider
      value={{ state, setFood, setFoodError, resetFood, increaseOrder, decreaseOrder, resetOrder }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
