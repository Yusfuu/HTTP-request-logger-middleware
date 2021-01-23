const logger = (req, res, next) => {
  console.log(`\n\x1b[33m   ==>  \x1b[0m\x1b[32m${req.method}\x1b[35m  ${req.protocol}://${req.get('host') || req.headers.host}${req.originalUrl || req.url}\x1b[36m  ${res.statusCode}\x1b[31m  '${new Date().toLocaleTimeString()}\x1b[0m'`);
  next();
}

const error404 = '<script>document.title="Page not found"</script><h1 style="text-align:center;font-family:Poppins;color:#2e2e2e;font-weight:700;font-size:4rem;margin-top:50px;">😭 404 Not Found 😭</h1>';

module.exports = { logger, error404, listening };