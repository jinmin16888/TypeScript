//object 表示 一个js对象
let a: object;
a = {};
a = function () {};

/**
 * {} 用来指定对象中可以包含哪些属性 自定义类型
 *  语法：{ 属性名：自定类型，属性名：自定类型 }
 * 在属性名的后边加上问号：？，表示的属性是可选的,(有 或者 没有 都可以)
 */
let b: { name: string; age?: Number };

b = { name: "张咪", age: 23 };

//如何让接下的属性值的任意类型，可选呢？
//[propName:string]:any 表示任意类型的属性
//语法：[任意的属性名:默认类型]:any 表示任意的类型
// let c: { name: string; [propName: string]: unknown };
let c: { name: string; [propName: string]: any };

c = { name: "猪八戒", age: 234, sex: "男", height: { name: " 猪扒皮" } };

console.log(c);

/**
 * 设置函数结构的类型声明
 * 代码：(a: Number, b: Number) => number;
 * 语法：(变量：类型，变量：类型....) => 返回值的类型
 *
 */

let d: (a: Number, b: Number) => number;
// d = function (ax: string, ab: string) {
d = function (ax, ab) {
  return 130;
};

/**
 * Array
 * 数组的类型声明：
 *    类型[]
 *    Array<类型>
 */

// string[] 字符串-数组
let e: string[];
e = ["a", "s", "as"];

//number[] 数值-数值
let f: number[];
f = [123, 3323, 23323, 4343];

//语法二：Array<类型>
let g: Array<number>;
//字符串数组
g = [11, 23343, 434];

/**
 *  tuple:元组
 *    元组，是 TS新增类型，固定长度的数组
 *  语法：[类型，类型，类型]
 */
let h: [number, number, string];
h = [2342, 2323, "sdfsd"];

/**
 * enum 枚举
 *  Ts中新增的类型，可以将可能的情况一个个列举出来
 * 语法：enum 变量名 { 枚举的数量 }
 */
enum Gender {
  Male,
  Female,
}

let i: { name: string; gender: Gender };
i = {
  name: "孙悟空",
  gender: Gender.Male,
};

console.log(i.gender === Gender.Male);

console.log(typeof Gender.Male);

//可以来连接类型的有 | 或 满足任意个条件即可 标识符  进行类型连接

// 可以用 & 表示同时满足条件才可以
let j: { name: string } & { age: number };
j = { name: "沙僧", age: 23 };

//类型的别名 语法：type 别名 = 声明的类型
type myType = string;
type myNmber = 1 | 2 | 3 | 4 | 5 | 5;
let k: myNmber;
let l: myNmber;
let m: myType;
k = 3;
