// Sync route definition
export default (store) => ({
  path : '/womeningov/iii/publications',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const AboutView = require('./components/Publications').default
      cb(null, AboutView)
    }, 'publications')
  }
})
