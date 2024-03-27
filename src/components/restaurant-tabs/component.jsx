/* eslint-disable react/jsx-key */
import { Tab } from '../tab/component';

export const RestaurantTabs = ({ restaurants, currentRestaurantIndex, onTabClick }) => {

    return (
        <div>
            {restaurants.map((restaurant, index) => (
                <Tab 
                title={restaurant.name}
                onClick={() => {
                    onTabClick(index)
                    localStorage.setItem("currentRestaurantIndex", index)
                }}
                isActive={currentRestaurantIndex === index}
                />
            ))}
        </div>
    );
};
