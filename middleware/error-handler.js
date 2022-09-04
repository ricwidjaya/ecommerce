module.exports = {
  // Throw 404 page is the path doesn't exist
  pageErrorHandler: (req, res, next) => {
    return res.status(404).render('404', {
      style: '404'
    })
  }
}
