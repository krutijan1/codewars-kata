***ES6: Use Destructuring Assignment to Assign Variables from Nested Objects***

We can similarly destructure nested objects into variables.

Consider the following code:

```javascript
const a = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
};
const { start : { x: startX, y: startY }} = a;
console.log(startX, startY); // 5, 6
```

In the example above, the variable start is assigned the value of a.start, which is also an object.


Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow.
