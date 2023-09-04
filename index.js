const express = require('express');
const path = require('path');
const appConfig = require('./app/config/app'); // Import your app configuration

const app = express();

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public'))); // Imported public folder

app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

app.use((req, res, next) => {
  req.url = req.url.replace(/\/{2,}/g, '/');
  next();
});

app.get('/', (req, res) => {
  res.render('home', { currentPage: 'home' });
});

app.get('/aboutus', (req, res) => {
  res.render('aboutus', { currentPage: 'aboutus' });
});

app.get('/products', (req, res) => {
  res.render('products', { currentPage: 'products' });
});

app.get('/machinery', (req, res) => {
  res.render('machinery', { currentPage: 'machinery' });
});

app.get('*', (req, res, next) => {
  if (req.headers.host.startsWith('www.')) {
    res.redirect(301, `http://${req.headers.host.slice(4)}${req.originalUrl}`);
  } else {
    next();
  }
});

app.use((req, res, next) => {
  if (req.headers.host.startsWith('www.')) {
    const newUrl = `http://${req.headers.host.slice(4)}${req.originalUrl}`;
    return res.redirect(301, newUrl);
  }
  next();
});

app.listen(appConfig.PORT, function (err) {
  if (err) {
    return console.log('An error occurred.');
  }
  console.log('This server is running on port ' + appConfig.PORT);
});
