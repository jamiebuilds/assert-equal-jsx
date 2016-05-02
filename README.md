# `assertEqualJSX`

![Example of output](https://cloud.githubusercontent.com/assets/952783/14961155/0df51bd8-104d-11e6-9eeb-efc9c372d0b9.png)


### API

```js
assertEqualJSX(jsx, jsx, [opts]);
```

### Example

```js
assertEqualJSX(
  <MyComponent/>,
  // should equal:
  <div className="my-component">
    <h1>Hello world</h1>
    <p>Look at this amazing component</p>
  </div>
)
```

#### `opts.sanitize`

```js
function sanitizeId(str) {
  return str.replace(/my-component-id-(\d+)/ig, 'my-component-id-0');
}

assertEqualJSX(
  <div id="my-component-id-314159265"/>,
  // should equal:
  <div id="my-component-id-0">,
  // with sanitization:
  {
    sanitize: sanitizeId
  }
)
```
