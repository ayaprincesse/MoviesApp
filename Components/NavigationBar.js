import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; 
import { FontAwesome } from '@expo/vector-icons';
// Screens
import Search from './Search';
import Heart from './Heart';
import FilmDetail from './FilmDetail'
import Favorite from './Favorite';
//Screen names


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function HomeStack() {
   
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Movie" component={Search}  />
      <Stack.Screen name="Detail" component={FilmDetail} />
    </Stack.Navigator>
    )
}
function MainContainer() {
    
    return (
        <Tab.Navigator>
           <Tab.Screen name='Movie' component={HomeStack} options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="home" size={size} color={color} />
                )
            }} />

            <Tab.Screen name='Liked Movies' component={Favorite} options={{
                tabBarIcon: ({ color, size }) => (
                 <FontAwesome name="heart" size={size} color={color} />
                 )
            }} />
        </Tab.Navigator>
   );
}

export default MainContainer;