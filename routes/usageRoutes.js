module.exports = app => {
  app.get('/api/model', (req, res) => {
    res.json('Usage');
  });
};
