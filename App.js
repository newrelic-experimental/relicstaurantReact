import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavi from './app/navigation/BottomNavi';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './app/cartStore/store';

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <BottomNavi />
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}
