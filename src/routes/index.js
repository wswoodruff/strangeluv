const React = require('react');
const BrowserRouter = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;

// Just the modules necessary for initial render!
const CoreLayout = require('../layouts/CoreLayout');
const Home = require('./home');
const CounterRoute = require('./counter');

// Create routes
module.exports = () => {

    const routes = [
        { path: '/',
          layout: CoreLayout,
          component: Home,
        },
        { path: '/counter',
          layout: CoreLayout,
          component: CounterRoute
        }
    ];

    return routes;
};
/*
    <BrowserRouter>
        <Route path='/' component={CoreLayout}>
            <Route component={<Home store={store} />} />
        </Route>
        <Route path='/counter' component={CoreLayout}>
            <Route component={<CounterRoute store={store} />} />
        </Route>
    </BrowserRouter>
);

{
    path: '/',
    component: CoreLayout,
    indexRoute: Home,
    childRoutes: [
        CounterRoute(store)
    ]
}
*/
/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./counter')(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/
