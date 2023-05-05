import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Animation from './Animation';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Animation}
      />
      <Tab.Screen
        name="Settings"
        component={Animation}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;