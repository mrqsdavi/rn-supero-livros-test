import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from '../containers/Search';
import DetailScreen from '../containers/Detail';

const AppNavigator = createStackNavigator({
  Search: {
    screen: SearchScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
});

export default createAppContainer(AppNavigator);
