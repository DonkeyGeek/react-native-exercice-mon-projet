import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons'; 
import Drawer from './routes/DrawerNav';
import CustomDrawerContent from './components/CustomDrawerContent'
import BottomTabNav from './routes/BottomTabNav';

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={ props => <CustomDrawerContent {...props} /> }
      >
        <Drawer.Screen 
          name="Home" 
          component={BottomTabNav} 
          options={{ 
            title: "Accueil",
            drawerIcon: () => <MaterialIcons name="home" size={24} color="white" />
          }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}