const express = require('express');
const session = require('./config/session');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(session);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
});
