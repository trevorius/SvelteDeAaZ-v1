// stores are js files and allow global data
/*
the export must be imported to svelte file and then subscribed to access data. see app.svelte

can be writable or readable: 
writable can be edited by imports and readable can be edited by its'self.

*/

// import { writable } from 'svelte/store';

// const text = writable("hello from the store");

// export default text;


import { readable } from 'svelte/store';
let counter = 0;

const timer = readable(

  counter
  , (callback) => {
    const interval = setInterval(() => {
      counter++;
      callback(counter)
    }, 1000)
    return () => { clearInterval(interval) }
  }
)

export default timer;