import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Quiz from '../Screens/Quiz';
import Result from '../Screens/Result';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}} />
      <Stack.Screen name="Result" component={Result} options={{headerShown:false}} />
    
    </Stack.Navigator>
  );
}
export default MyStack