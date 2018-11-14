# npm-view

View the `package.json` of a specific version of an NPM package.

```js
const npmView = require('npm-view')

// View the latest version.
await npmView('lodash')

// View the max version that satisfies the given range.
await npmView('lodash', '3.x')

// View a specific version.
await npmView('lodash', '4.0.0')
```
