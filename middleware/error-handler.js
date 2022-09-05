module.exports = {
  // Throw 404 page is the path doesn't exist
  // 404 IS NOT considered as an error in express,
  // so there's no way to catch it with express error handler
  // To deal with 404 error, just use a normal middleware function
  pageErrorHandler: async (req, res, next) => {
    try {
      return res.status(404).render('404', {
        style: '404'
      })
    } catch (error) {
      next(error)
    }
  },

  apiErrorHandler: (err, req, res, next) => {
    if (err instanceof Error) {
      res.status(500).json({
        status: 'error',
        message: `${err.name}: ${err.message}`
      })
    } else {
      res.status(500).json({
        status: 'err',
        message: `${err}`
      })
    }
    next(err)
  },

  apiNotFound: async (req, res, next) => {
    try {
      return res.status(500).json({
        status: 'error',
        message: 'API not found.'
      })
    } catch (error) {
      next(error)
    }
  }
}
