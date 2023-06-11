const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3002;

// Установка Handlebars в качестве шаблонизатора представлений
app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

// Папка для статических файлов
app.use(express.static('public'));

// Маршрут главной страницы
app.get('/', (req, res) => {
  res.render('index', { layout: false, title: 'RedDevUtd' });
});

// Маршруты для остальных страниц
app.get('/news', (req, res) => {
  res.render('news', { layout: false, title: 'Новости' });
});

app.get('/schedule', (req, res) => {
  res.render('schedule', { layout: false, title: 'Расписание' });
});

app.get('/gallery', (req, res) => {
  res.render('gallery', { layout: false, title: 'Галерея' });
});

app.get('/shop', (req, res) => {
  res.render('shop', { layout: false, title: 'Магазин' });
});

app.get('/players', (req, res) => {
  res.render('players', { layout: false, title: 'Игроки' });
});

app.get('/product-1', (req, res) => {
  res.render('product-1', { layout: false, title: 'Продукт' });
});

app.get('/product-2', (req, res) => {
  res.render('product-2', { layout: false, title: 'Продукт' });
});

app.get('/product-3', (req, res) => {
  res.render('product-3', { layout: false, title: 'Продукт' });
});

app.get('/product-4', (req, res) => {
  res.render('product-4', { layout: false, title: 'Продукт' });
});

app.get('/product-5', (req, res) => {
  res.render('product-5', { layout: false, title: 'Продукт' });
});

app.get('/product-6', (req, res) => {
  res.render('product-6', { layout: false, title: 'Продукт' });
});

app.get('/product-7', (req, res) => {
  res.render('product-7', { layout: false, title: 'Продукт' });
});

app.get('/product-8', (req, res) => {
  res.render('product-8', { layout: false, title: 'Продукт' });
});

app.get('/product-9', (req, res) => {
  res.render('product-9', { layout: false, title: 'Продукт' });
});

app.get('/product-10', (req, res) => {
  res.render('product-10', { layout: false, title: 'Продукт' });
});

app.get('/product-11', (req, res) => {
  res.render('product-11', { layout: false, title: 'Продукт' });
});

app.get('/product-12', (req, res) => {
  res.render('product-12', { layout: false, title: 'Продукт' });
});

let cartItems = [];

// Регистрируем шаблонизатор Handlebars
app.set('view engine', 'hbs');

app.get('/cart', (req, res) => {
  res.render('cart', { layout: false, title: 'Корзина' });
});

app.post('/cart', (req, res) => {
  const item = req.body.item;
  cartItems.push(item);
  res.redirect('/cart');
});

app.get('/new-1', (req, res) => {
  res.render('new-1', { layout: false, title: 'Новости' });
});

app.get('/new-2', (req, res) => {
  res.render('new-2', { layout: false, title: 'Новости' });
});

app.get('/new-3', (req, res) => {
  res.render('new-3', { layout: false, title: 'Новости' });
});

app.get('/new-4', (req, res) => {
  res.render('new-4', { layout: false, title: 'Новости' });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту http://localhost:${port}`);
});
