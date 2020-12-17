import logo from './logo.svg';
import './Reboot.css'
import './App.css';

import Home from './page/Home'
import DefaultFolder from './page/DefaultFolderPage'
import NotePage from './page/NotePage'
import history from './util/history/history'
import FolderPage from './page/FolderPage'
import FolderNote from './page/FolderNotePage'

import{ BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// react-redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
      {/* <Nav/> */}
      <Provider store={store}>
        <BrowserRouter　 history={history}>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mainfolder" component={DefaultFolder} />
            <Route exact path="/mainfolder/0/:folder" component={FolderPage} />
            <Route exact path="/mainfolder/:noteid" component={NotePage} />
            <Route exact path="/mainfolder/folder?:folder/:noteid" component={FolderNote} />
          </Switch>
          </BrowserRouter>
        </Provider>
      </>
  );
}

export default App;
