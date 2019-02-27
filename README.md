# ie-class

## What

Adds a `ie[x]` class in your body tag, `x` being the IE version (if any).

For example, if your user is using IE9, their body tag will be like:

```html
<body class="ie9">
```

## Why

Because most feature detection libraries are bloated and some of us just need to know if the user is using IE.


## How
### HTML
```html
<script src="https://unpkg.com/ie-class@0.1.1/index.js"></script>
```
### Via package managers
```bash
yarn add ie-class
```
Then, in your code
```js
require('ie-class');
```

