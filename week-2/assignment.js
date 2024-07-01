/* 
Assignment 1: Function and Array
Complete the function below to find the max number of the passing array of numbers.
*/
function max(numbers) {
  let maxNum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7

/*
Assignment 2: Function and Object
Complete the function below to calculate the result of the passing object.
*/
function calculate(args) {
  let {n1, n2, op} = args;

  if (op === "+") {
    return n1 + n2;
  } else if (op === "-") {
    return n1 - n2;
  } else if (op === "*") {
    return n1 * n2;
  } else if (op === "/") {
    return n1 / n2;
  } else {
    return "Not supported";
  }
}
console.log(calculate({ n1: 2, n2: 3, op: "+" })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: "-" })); // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: "x" })); // expected output: 'Not supported'

/*
Assignment 3: Function, Array, and Object
Complete the function below to calculate the total price of all products after applying a discount.
*/
function calculate(data) {
  let discount = data.discount;
  let products = data.products;
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
  }
  let discountedPrice = totalPrice * (1 - discount);
  return discountedPrice;
}
const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});
console.log(discountedPrice);

/*
Assignment 5: Algorithm (Advanced Optional)
Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
/*
	For example:
		twoSum([2, 7, 11, 15], 9);
	Should returns:
		[0, 1]
	Because:
		nums[0] + nums[1] is 9
*/