### Part 1: Implement a Class for Handling a Single Handler per Event

#### Task

Implement a class `EventEmitter` that allows a single event handler per event. The class should have the following methods:

-   `on(event, handler)`: Registers an event handler for the specified event.
-   `trigger(event, ...args)`: Triggers the specified event and passes any arguments to the event handler.

#### Implementation

```javascript
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, handler) {
        this.events[event] = handler;
    }

    trigger(event, ...args) {
        if (this.events[event]) {
            this.events[event](...args);
        }
    }
}
```

#### Test Cases

1. **Test handler registration and execution:**

    ```javascript
    const emitter = new EventEmitter();

    emitter.on("greet", (name) => {
        console.log(`Hello, ${name}!`);
    });

    emitter.trigger("greet", "Alice");
    // Expected output: "Hello, Alice!"
    ```

2. **Test overwriting handler:**

    ```javascript
    const emitter = new EventEmitter();

    emitter.on("greet", (name) => {
        console.log(`Hello, ${name}!`);
    });

    emitter.on("greet", (name) => {
        console.log(`Hi, ${name}!`);
    });

    emitter.trigger("greet", "Bob");
    // Expected output: "Hi, Bob!"
    ```

3. **Test emitting event with no handler:**

    ```javascript
    const emitter = new EventEmitter();

    emitter.trigger("nonexistent");
    // Expected output: no output
    ```

### Part 2: Modify the Class to Handle Multiple Handlers per Event

#### Task

Modify the `EventEmitter` class to handle multiple event handlers per event. The class should now allow registering multiple handlers for the same event and execute all of them when the event is emitted.

#### Implementation

```javascript
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, handler) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(handler);
    }

    trigger(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach((handler) => handler(...args));
        }
    }
}
```

#### Test Cases

1. **Test multiple handlers registration and execution:**

    ```javascript
    const emitter = new EventEmitter();

    emitter.on("greet", (name) => {
        console.log(`Hello, ${name}!`);
    });

    emitter.on("greet", (name) => {
        console.log(`Hi, ${name}!`);
    });

    emitter.trigger("greet", "Alice");
    // Expected output:
    // "Hello, Alice!"
    // "Hi, Alice!"
    ```

2. **Test multiple events with multiple handlers:**

    ```javascript
    const emitter = new EventEmitter();

    emitter.on("greet", (name) => {
        console.log(`Hello, ${name}!`);
    });

    emitter.on("greet", (name) => {
        console.log(`Hi, ${name}!`);
    });

    emitter.on("farewell", (name) => {
        console.log(`Goodbye, ${name}!`);
    });

    emitter.trigger("greet", "Alice");
    // Expected output:
    // "Hello, Alice!"
    // "Hi, Alice!"

    emitter.trigger("farewell", "Bob");
    // Expected output: "Goodbye, Bob!"
    ```

3. **Test emitting event with no handlers:**

    ```javascript
    const emitter = new EventEmitter();

    emitter.trigger("nonexistent");
    // Expected output: no output
    ```

By splitting the task into these two parts, you can assess the candidate's ability to implement basic event handling and then extend it to support more complex scenarios.
