const prModule = {
  prop: 'my prop',
  config: {
    languaje: 'es',
    cache: true
  },
  setConfig: conf => {
    prModule.config = conf
  },
  isCacheEnabled: () => {
    console.log(prModule.config.cache ? 'yes' : 'no')
  }
}
