### FOR LOOPS
```js
const ash = {
  a: 'somestring',
  b: 42,
};


// IN ->  USED ONLY TO ITERATE OBJECTS
for (const key in ash){
    console.log(key, ash[key]);
}

// FOR -> ANY DATA STRUCTS LIKE ARRAY...
for (const [key,val] of Object.entries(ash)){
    console.log(key,val);
}
```