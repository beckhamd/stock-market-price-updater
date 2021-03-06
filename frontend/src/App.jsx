import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';

import Footer from './components/Footer';
import Header from './components/Header';

const LoadablePage = (page) => loadable(() => import(`${page}`));

const App = () => (
  <React.Fragment>
    <div className="content">
      <Header />
      <Switch>
        <Route
          exact
          path={`${process.env.SUBDIRECTORY}`}
          component={LoadablePage('./pages/HomePage')}
        />
        <Route
          path={`${process.env.SUBDIRECTORY}/prices`}
          component={LoadablePage('./pages/PricesPage')}
        />
        <Route
          path={`${process.env.SUBDIRECTORY}/stock/:symbol`}
          component={LoadablePage('./pages/StockPage')}
        />
        {/* Not found */}
        <Route>
          <Redirect to={`${process.env.SUBDIRECTORY}`} />
        </Route>
      </Switch>
    </div>
    <Footer />
  </React.Fragment>
);

export default App;
