> ### Update state with content editable elements
With content editable after element updates, state will be updated as well as input changes.
```javascript
let senil_content = new Senil({
    text: 'Senil is awesome!'
})
// It's only for testing purpose
function show_content() {
    alert(senil_content.state.text)
}
```  
```html
<h3 contenteditable model="text"></h3>
<button onclick="show_content()">Show</button>
```
<h3 contenteditable model="text"></h3>
<button onclick="show_content()">Show Title</button>