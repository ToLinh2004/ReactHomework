let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

// // Using forEach() method
// numbers.forEach(element => {
//   console.log(element);
// });

// // Using map() method (not just for looping but also for transforming elements)
// numbers.map(element => {
//   console.log(element);
// });

// // Using for...of loop
// for (const element of numbers) {
//   console.log(element);
// }

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
//   numbers.pop(); // xóa phần tử cuối
//   console.log(numbers);
//   numbers.shift(); // xóa phần tử đâu
//   console.log(numbers);
//   numbers.unshift(6); // thêm  phần tử vào đấu
//   console.log(numbers);

  let sliceNumber=numbers.slice(1); 
  console.log(sliceNumber); // cắt số phần tử từ trái qua phải
  let sliceNumbers=numbers.slice(1,3);
  console.log(sliceNumbers);   //bắt đầu từ chỉ mục 1 (bao gồm) và kết thúc tại chỉ mục 3 (không bao gồm).
//   let atNumber=numbers.at(2);
//   console.log(atNumber); // cắt trả về phần tử ở index 2

const result = numbers.filter(numbers=>numbers>2); // lọc các phần tử
console.log(result)

// Định nghĩa hàm biến đổi
function transformElement(element) {
  // Áp dụng bất kỳ logic biến đổi nào ở đây
  return element * 2; // Ví dụ, hãy nhân đôi mỗi phần tử
}

// Sử dụng phương thức map() để áp dụng hàm biến đổi cho từng phần tử
let transformedNumbers = numbers.map(transformElement);

console.log(transformedNumbers); // Đầu ra: [2, 4, 6, 8, 10]