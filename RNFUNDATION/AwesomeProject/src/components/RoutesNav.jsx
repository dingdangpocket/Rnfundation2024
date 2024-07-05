import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {containStackRoutes} from '../router/index';
// import Login from 'src/screens/login/Login';
import HomeTabRoutes from './HomeTabsRoutes';
const Stack = createStackNavigator();
const linking = {
  prefixes: ['foundation://'],
  config: {
    initialRouteName: 'HomeTabs',
    screens: {
      InfoScreen: {
        path: 'InfoScreen/:id',
      },
    },
  },
};
//linking配置交给NavigationContainer；

const RoutesNav = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        {/* 将tab页装载在根节点Stack页面; */}
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabRoutes}
          options={{headerShown: false, title: '首页Stack'}}
        />
        {containStackRoutes.map(item => {
          return (
            <Stack.Screen
              key={item.name}
              name={item.name}
              options={{
                title: item.option.title,
              }}
              component={item.component}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RoutesNav;
