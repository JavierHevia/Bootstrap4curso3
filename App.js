import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}



// expo start


// cambiar aquí : E:\Documentos\Coursera\Full Stack\Modulo3\Bootstrap4curso3\ReacNative\confusion\node_modules\react-native-safe-area-view\index
// pone esto:   this.view.getNode().measureInWindow((winX, winY, winWidth, winHeight) => {


// para debbuger      react-devtools

// json parser esta en https://my-json-server.typicode.com/JavierHevia/serverjson/

// y los imagenes son https://raw.githubusercontent.com/JavierHevia/serverjson/master