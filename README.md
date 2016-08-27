# mvc
tiny mvc example
----
## usage
use controller to connect viewers with data models and provide business logic:
```js
const Controller = require('../controller');

const c = new Controller(new ModelXXX(),new ViewXXX());

c.method = ...
```

## api
`controller.api` is availible from View. So you can add methods to the `c.api` and call them in View from `this.api`

## Views

### STDIO
+ `./views/view-stdio.js` - console used for input and output.
+ `./views/view-file.js` - file (specified in construction `new ViewFile('path/to/filename')`) used for input and output.

### Models