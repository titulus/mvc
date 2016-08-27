# mvc
tiny mvc example
----
## usage
use controller to connect viewers with models and provide business logic:
```js
const Controller = require('../controller');

const c = new Controller(new ModelXXX(),new ViewXXX());

c.method = ...
```

## api
`controller.api` is availible from View. So you can add methods to the `c.api` and call them in View from `this.api`

## Views
+ `./views/view-stdio.js` - console used for input and output.
+ `./views/view-file.js` - file (specified in construction `new ViewFile('path/to/filename')`) used for input and output.

## Models
+ `./models/model-localstorage.js` - use pseudo-localstorage (require folder `new ModelLS('path/to/storage')`)
+ `./models/model-mongo.js` - use MongoDB (require server url, dbname and collection `new ModelMongo('mongodb://url/dbname', collection)`)
+ `./models/model-redis.js` - use Redis