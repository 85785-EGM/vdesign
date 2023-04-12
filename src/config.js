export default {
  env: {
    mode: import.meta.env.MODE,
    dev: import.meta.env.DEV,
    prod: import.meta.env.PROD
  },
  url: {
    base: import.meta.env.BASE_URL
  }
}
