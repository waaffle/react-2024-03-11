import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCurrentUser } from "../../contexts/UserContext";
import { decrementDish, incrementDish } from "../../redux/ui/cart";
import { selectAmountDishById } from "../../redux/ui/cart/selectors";
import { Dish } from "./component";

export const DishContainer = ({dish}) => {

    const {user} = useCurrentUser();

    const value = useSelector((state) => selectAmountDishById(state, dish?.id));

    const dispatch = useDispatch();
    const incrementCallback = useCallback(() => dispatch(incrementDish(dish?.id)), [dish?.id, dispatch]);
    const decrementCallback = useCallback(() => dispatch(decrementDish(dish?.id)),[dish?.id, dispatch]);

    return <Dish withCart={!!user} value={value} increment={incrementCallback} decrement={decrementCallback} dish = {dish}/>
};