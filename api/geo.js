// Returns the visitor's country code (e.g. "PK", "US", "GB") from Vercel's edge headers.
module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ country: req.headers['x-vercel-ip-country'] || null }));
};
