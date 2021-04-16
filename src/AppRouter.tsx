import {Route, Switch} from 'react-router-dom';
import Dex from './Pokedex';
import Pokemon from './Pokemon';

const AppRouter = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dex}></Route>
            <Route path='/' exact component={Pokemon}></Route>

        </Switch>

    );
  };
  
  export default AppRouter;