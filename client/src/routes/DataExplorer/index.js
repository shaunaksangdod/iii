import DataExplorer from "./components/DataExplorer";

export let Explorer = (store) => ({
  path : 'data/',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const DataExplorer = require('./components/DataExplorer').default

      /*  Return getComponent   */
      cb(null, DataExplorer)

    /* Webpack named bundle   */
    }, 'data')
  }
})

export let ExplorerType_PR_new = (store) => ({
 path : 'data/'+ 'PR_new' +'/:type',
 /*  Async getComponent is only invoked when route matches   */
 getComponent (nextState, cb) {
  /*  Webpack - use 'require.ensure' to create a split point
      and embed an async module loader (jsonp) when bundling   */
  require.ensure([], (require) => {
   /*  Webpack - use require callback to define
       dependencies for bundling   */
   const DataExplorer = require('./components/DataExplorer_PR_new').default
   /*  Return getComponent   */
   cb(null, DataExplorer)

   /* Webpack named bundle   */
  }, 'data')
 }
})

export let ExplorerType_PR_2012_2016 = (store) => ({
 path : 'data/'+ 'PR_2012_2016' +'/:type',
 /*  Async getComponent is only invoked when route matches   */
 getComponent (nextState, cb) {
  /*  Webpack - use 'require.ensure' to create a split point
      and embed an async module loader (jsonp) when bundling   */
  require.ensure([], (require) => {
   /*  Webpack - use require callback to define
       dependencies for bundling   */
   const DataExplorer = require('./components/DataExplorer_PR_2012_2016').default
   /*  Return getComponent   */
   cb(null, DataExplorer)

   /* Webpack named bundle   */
  }, 'data')
 }
})

export let ExplorerType_HISP_2016 = (store) => ({
 path : 'data/'+ 'HISP_2016' +'/:type',
 /*  Async getComponent is only invoked when route matches   */
 getComponent (nextState, cb) {
  /*  Webpack - use 'require.ensure' to create a split point
      and embed an async module loader (jsonp) when bundling   */
  require.ensure([], (require) => {
   /*  Webpack - use require callback to define
       dependencies for bundling   */
   const DataExplorer = require('./components/DataExplorer_HISP_2016').default
   /*  Return getComponent   */
   cb(null, DataExplorer)

   /* Webpack named bundle   */
  }, 'data')
 }
})

export let ExplorerType_2017 = (store) => ({
 path : 'data/'+ '2017' +'/:type',
 /*  Async getComponent is only invoked when route matches   */
 getComponent (nextState, cb) {
  /*  Webpack - use 'require.ensure' to create a split point
      and embed an async module loader (jsonp) when bundling   */
  require.ensure([], (require) => {
   /*  Webpack - use require callback to define
       dependencies for bundling   */
   const DataExplorer = require('./components/DataExplorer_2017').default
   /*  Return getComponent   */
   cb(null, DataExplorer)

   /* Webpack named bundle   */
  }, 'data')
 }
})


export let ExplorerType_2016 = (store) => ({
 path : 'data/'+ '2016' +'/:type',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const DataExplorer = require('./components/DataExplorer_2016').default
      /*  Return getComponent   */
      cb(null, DataExplorer)

    /* Webpack named bundle   */
    }, 'data')
  }
})

export let ExplorerType_2014 = (store) => ({
 path : 'data/'+ '2014' +'/:type',
 /*  Async getComponent is only invoked when route matches   */
 getComponent (nextState, cb) {
  /*  Webpack - use 'require.ensure' to create a split point
      and embed an async module loader (jsonp) when bundling   */
  require.ensure([], (require) => {
   /*  Webpack - use require callback to define
       dependencies for bundling   */
   const DataExplorer = require('./components/DataExplorer').default
   /*  Return getComponent   */
   cb(null, DataExplorer)

   /* Webpack named bundle   */
  }, 'data')
 }
})

