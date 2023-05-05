import { createStackNavigator } from '@react-navigation/stack';
import Signin from './screens/signin';
import Dashboard from './screens/dashboard';

const Stack = createStackNavigator();

 export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen
        name="Signin"
        component={Signin}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
      />
    </Stack.Navigator>
  );
}