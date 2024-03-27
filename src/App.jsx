/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Layout } from './components/layout/component';
import { RestaurantTabs } from './components/restaurant-tabs/component';
import { Restaurant } from './components/restaurant/component';
import { restaurants } from './constants/mock';

export const App = () => {
    const savedCurrentRestaurantIndex = Number(localStorage.getItem("currentRestaurantIndex")) || null;
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(savedCurrentRestaurantIndex);
    const restaurant = restaurants[currentRestaurantIndex];


    return (
        <Layout>
            <RestaurantTabs 
            restaurants={restaurants}
            currentRestaurantIndex={currentRestaurantIndex}
            onTabClick={setCurrentRestaurantIndex}
            />
            {restaurant && <Restaurant restaurant={restaurant}/>}
        </Layout>
    );
};
