import React from 'react';
import {IndexRoute, Route} from 'react-router';

import {
    App,
    Home,
    About,
    Survey,
    NotFound,
  } from 'containers';

export default () => {
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes */ }
      <Route path="sobre" component={About}/>
      <Route path="contato" component={Survey}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
