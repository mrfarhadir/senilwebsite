> ### Create form with Senil state
Two way binding data updates state model after form changes and updates form when state changes.
```javascript
let senil_form = new Senil({
    name: 'Your Name',
    email: 'email@example.com',
    message: 'Hi this is my message'
})

// It's only for testing purpose
function send() {
  let body = `
    Name: ${senil_form.state.name} \r\n
    Email: ${senil_form.state.email} \r\n
    Message: ${senil_form.state.message} \r\n
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