# Senil

States are very useful for web app development. popular frameworks such as Vuejs or React has state for their components and Senil is like that when you are using pure HTML with out any frameworks or when you are developing Wordpress theme.

### Feathers
> - Having multiple instance
> - Synchronize with localstorage
> - Supporting content editable attribute
> - Developed with TypeScript

### How it works?
Pass your your desired state object to Senil first parameter and add model attributes for input elements.
now you have two way binding data between dom and state

```html
<input model="title" />
```

```javascript
let senil_basic = new Senil({
    title: 'Hi I\'m Senil'
})
``` 
Senil class has state property which helps you to access to your current data 
See [Basic Example](/examples/basic.md)