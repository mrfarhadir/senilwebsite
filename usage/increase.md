> ### Simple increase and decrease input

```javascript
let senil = new Senil({
  count: 1,
});
function plus() {
  senil.set({
    count: senil.state.count + 1,
  });
}
function minus() {
  senil.set({
    count: senil.state.count - 1,
  });
}
```

```html
<input type="text" value="1" model="count" id="input" />
```

<label for="input">Reactive Input</label>
<button onclick="minus()">-</button>
<input type="text" value="1" model="count" id="input">
<button onclick="plus()">+</button>
