## Usage
Senil class takes two parameter for creating new state.
> First parameter is your state object

> Second parameter is Senil config

### Configuration schema
```javascript
{
    wrapper?: string,
    storageKey?: string,
    storages?: {
        localStorage: boolean
    }
}
```
#### wrapper
Wrapper selector is used to creating event listener on it's child nodes
> default is body

#### storageKey
Sey for storing data on localstorage
> default is senil

#### storages
Synchronizing state data with different type of storages
> default is false for all storages

### Usage Example
```javascript
let senil = new Senil({
    count: 1
})

console.log(senil.state)
// { count: 1 }

```

### Full Configuration
```javascript

let senil = new Senil({
    count: 1
}, {
	wrapper: 'form',
	storageKey: 'contact',
	storages: {
		localStorage: true
	}
})

console.log(senil.state)
// { count: 1 }

```

### Methods

#### set
> parameters: key, value

updating specific key with new value in state

```javascript
let senil = new Senil({
    count: 1
});
senil.set({
    count: senil.state.count + 1
})
```

#### $push
> parameters: array or single value

push new element to an array in state
```javascript
let senil = new Senil({
    users: [1, 2]
});
senil.set({
    users: senil.$push([3, 4])
})

console.log(senil.state.users)
// [1, 2, 3, 4]
```

#### $pop

removes last element of an array in state
```javascript
let senil = new Senil({
    users: [1, 2]
});
senil.set({
    users: senil.$pop()
})
console.log(senil.state.users)
// [1]
```

#### $shift

removes first element of an array in state
```javascript
let senil = new Senil({
    users: [1, 2]
});
senil.set({
    users: senil.$shift()
})
console.log(senil.state.users)
// [2]
```


### Properties

#### state
Senil class has state property for accessing your current data