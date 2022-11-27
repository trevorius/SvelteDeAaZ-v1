// stores are js files and allow global data
/*
the export must be imported to svelte file and then subscribed to access data. see app.svelte

can be writable or readable: 
writable can be edited by imports and readable can be edited by its'self.

*/

// import { writable } from 'svelte/store';

// const text = writable("hello from the store");

// export default text;


// import { readable } from 'svelte/store';
// let counter = 0;

// const timer = readable(

//   counter
//   , (callback) => {
//     const interval = setInterval(() => {
//       counter++;
//       callback(counter)
//     }, 1000)
//     return () => { clearInterval(interval) }
//   }
// )

// export default timer;

/* Custom Stores */
import { writable } from 'svelte/store';

const customStoreBox = () => {
  const boxes = writable([
    {
      id: 1,
      txt: "lorem1"
    },
    {
      id: 2,
      txt: "lorem2"
    },
    {
      id: 3,
      txt: "lorem3"
    },
  ]);
  return {
    subscribe: boxes.subscribe,
    addBox: (box) => {
      boxes.update(boxes => {
        return [...boxes, box]
      })
    }
  }
}

export default customStoreBox();