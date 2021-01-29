import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import FoodDetail from '../pages/FoodDetail';

const Auth = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#7E2F37' },
    }}
  >
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="FoodDetail" component={FoodDetail} />
  </Auth.Navigator>
);

export default AppRoutes;
