node-glances [![NPM version](https://badge.fury.io/js/glances.png)](http://badge.fury.io/js/glances)
============

Nicolargo's [Glances] (https://github.com/nicolargo/glances) client for Node.js available on [NPM] (https://npmjs.org/package/glances)

## Requirements
* `Node.js >= 0.8`
* `Glances server <= 1.7`

## Installation

    npm install glances
    
## Usage

```javascript
var glances = require('node-glances');

var client = glances.createClient({ host: 'your-url' });

client.call('api-method(ie: getAll)', function(error, value){
    if(error) {
        console.log(error.faultString);
    } else {
        console.dir(value);
    }
});
```

## Documentation
All available API methods for Glances are available [here] (https://github.com/nicolargo/glances/blob/master/docs/glances-doc.rst).
