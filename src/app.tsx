import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/app.store';
import MainNavigator from './component/navigator/main/main.navigator';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;