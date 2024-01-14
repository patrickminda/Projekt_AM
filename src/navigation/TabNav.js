import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CalendarScreen from '../screens/CalendarScreen'
import HomeScreen from '../screens/HomeScreen';
import UserPrfileScreen from '../screens/UserProfileScreen'
import SearchScreen from '../screens/SearchScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (

            <Tab.Navigator 
                screenOptions={{ 
                    headerShown: false, 
                    tabBarStyle:{
                    
                        height:60,
                    },
                    tabBarItemStyle:{

                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        marginBottom: 10,
                    },
                }}
            >

            <Tab.Screen 
                name="Home" 
                component={HomeScreen}  
                options={{
                    tabBarLabel: 'Ekran głowny',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} style={{ marginBottom: -5 }}/>
                    ),
                }}
            />

            <Tab.Screen 
                name="Search" 
                component={SearchScreen} 
                options={{
                    tabBarLabel: 'Szukaj',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-search" color={color} size={30} style={{ marginBottom: -5 }} />
                    ),
                }}
            />

            <Tab.Screen 
                name="Calendar" 
                component={CalendarScreen} 
                options={{
                    tabBarLabel: 'Kalendarz',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="calendar" color={color} size={30} style={{ marginBottom: -5 }} />
                    ),
                }}
            />

            <Tab.Screen 
                name="Profil" 
                component={UserPrfileScreen} 
                options={{
                    tabBarLabel: 'Profil',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={30} style={{ marginBottom: -5 }} />
                    ),
                }}
            />

        </Tab.Navigator>
     
    );
  }