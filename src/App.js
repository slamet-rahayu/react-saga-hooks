import { HashRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        {routes.map((route) => <Route key={route.name} {...route} />)}
      </Switch>
    </HashRouter>
  );
}

export default App;
