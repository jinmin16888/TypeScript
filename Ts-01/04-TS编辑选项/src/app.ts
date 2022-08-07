import { hi } from "./m.js";

console.log("编译器的选项");

let a1 = "编辑器App";

// console.log(hi);

//自定义类型
function fn(a: number, b: number) {
  //检测到两个时any的隐式类型
  return a + b;
}

//明确this的类型，避免 被 禁用 不允许
function fn2(this: string) {
  alert(this); //不明确的this
}

let box1 = document.getElementById("box1");

// if (box1 !== null) {
//   box1.addEventListener("click", function () {
//     alert("hello box1");
//   });
// }

box1?.addEventListener("click", () => alert("hello box1"));
