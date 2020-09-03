> ### Basic usage of Senil state for inputs
Two way binding data updates state model after dom changes and updates dom when state changes.
```javascript
let senil_basic = new Senil({
    title: 'Hi I\'m Senil'
})
``` 

```html
<input model="title" />
<h1 model="title"></h1>
```

<input model="title" />
<h1 model="title"></h1>
