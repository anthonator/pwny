# pwny

[![Build Status](https://travis-ci.org/anthonator/pwny.svg?branch=master)](https://travis-ci.org/anthonator/pwny)

Pwny (pronounced pony) makes configuring your Express apps modular and maintainable.

## Installation

```bash
$ npm install pwny
```

## Using pwny

Rather than this moderate mess:

```js
var bodyParser = require('body-parser'),
    express    = require('express'),
    morgan     = require('morgan');

var app        = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

morgan.token('type', function(req, res){ req.headers['content-type']; });

app.use(morgan('dev'));

app.listen(process.env.PORT || 1337);
```

You can clean things up using Pwny:

**app.js**

```js
var express = require('express'),
    pwny    = require('pwny');

var app     = express();

pwny(app, {});

app.listen(process.env.PORT || 1337);
```

**config/initializers/bodyParser.js**

```js
var bodyParser = require('body-parser');

module.exports = require(app, config) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};
```

**config/initializers/morgan.js**

```js
var morgan = require('morgan')

module.exports = require(app, config) {
  morgan.token('type', function(req, res){ req.headers['content-type']; });

  app.use(morgan('dev'));
};
```

As you can see, Pwny allows you to keep your Express configuration sparkly clean and logically separated.

## Configuration

By default Pwny will load all files located in ```config/initializers```. You can modify where Pwny looks by passing a path to the ```configPath``` option.

```js
pwny(app, { configPath: 'config/middleware' });
```

Sometimes order matters. To specify an order in which your config files load you can pass in an ```order``` array.

```js
pwny(app, { order: ['morgan', 'bodyParser'] });
```

Note that by specifying an order Pwny will only load specified files.

```js
pwny(app, { order: ['morgan'] }); // will not load bodyParser
```

### .pwnyrc

You can also configure Pwny by adding a JSON ```.pwnyrc``` file to your app's root directory.

```json
{
  "configPath": "config/middleware",
  "order": ["morgan", "bodyParser"]
}
```
