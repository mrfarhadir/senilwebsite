> ### Basic usage of Senil state for inputs
Two way binding data updates state model after dom changes and updates dom when state changes.
```javascript
let senil_basic = new Senil({
    name: '',
    email: '',
    message: ''
})

// It's only for testing purpose
function send() {
  let body = `
    Name: ${senil_basic.state.name} \r\n
    Email: ${senil_basic.state.email} \r\n
    Message: ${senil_basic.state.message} \r\n
  `
  alert(body)
}
``` 

```html
<input model="name" placeholder="Name" />
<input model="email" placeholder="Email" />
<textarea model="message" placeholder="Message"></textarea>
<button onclick="send()">Send!</button>
```

<input model="name" placeholder="Name" /><br>
<input model="email" placeholder="Email" /><br>
<textarea model="message" placeholder="Message"></textarea><br>
<button onclick="send()">Send!</button>