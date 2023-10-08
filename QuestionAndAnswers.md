<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>greeting variable decleared but it does'nt have any value. Second line decleared a variable named "greetign", this variable create a global scoped variable because it does'nt decleared with 'var', 'let' and 'const' keyword. IF we consoled the greetign variable we got the result an empty object "{}"</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>"sum" function received two parameters and add using "+" operator. First parameter "1" is number type data and second parameter "2" is string type data. Javascript matched common type data before performing mathmatical operation. In this case it will attepmt the number typed value "1" to string and performed the operation. We got the result "12" in string type</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>"food" variable decleared an array with ["🍕", "🍫", "🥑", "🍔"]. In info variable decleared an object with property named "favoriteFood" and value is "🍕", then performed change into info object with "🍝" , then consoled the food variable we got the result is ["🍕", "🍫", "🥑", "🍔"]. This info variable changes not affect to main "food" variable.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>"sayHi" function receive a parameter called "name" and the function will return a string. In this case, "sayHi" function is called without any parameter, We know if we decleared any variable without any value the variable auto define the value is "undefined". This why we got the result is "Hi there, undefined"</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>"count" variable initial value "0". "nums" variable decleared an array with four element "[0, 1, 2, 3]". in "nums" varable we got one by one element using "forEach" loop then checked a condition the element truthy or falsy. If the element is truthy then incremeant the "count" value by "1" and the element is falsy it will not incremeant the "count" value. In this case, "[0, 1, 2, 3]" in "0" is a falsy value and "1", "2", "3" is truthy value this why incremeant three times and we got the result is "3"</i>

</p>
</details>
