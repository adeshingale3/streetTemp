// App.tsx
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import YourCart from './screens/YourCart';


enableScreens(); // Improve performance by using native navigation
// Create stack navigator
const Stack = createStackNavigator();

const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            headerShown: false // Hide default header if you have a custom one
          }}
        /> */}
        <Stack.Screen 
          name="Cart" 
          component={YourCart}
          options={{
            headerShown: false // Hide default header if you have a custom one
          }}
        />
        {/* <Stack.Screen 
          name="Billing" 
          component={Billing}
          options={{
            headerShown: false // Hide default header if you have a custom one
          }}
        /> */}
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App

const styles = StyleSheet.create({
  
});
