// 1、可以使用字面进行类型声明 a:指定变量的值 进行限制变量，不能是指定以外的值，否则无法使用
let a: 23;
a = 23;

// 1.1、可以使用 | 来连接多个类型，进范围扩充（联合类型）
let b: Number | "张明" | 233 | string | boolean;

//2、any 表示的任意的类型，一个变量设置为 any 后相当于对该变量关闭了 TS 的类型检测
//使用TS时候，强烈不建议使用 any 类型
// let c: any;

//2.1、声明变量如果不指定类型，则 TS 解析器会自动判断变量的类型为any (隐私的any)
let c;
c = 23;
c = "sdf";
c = true;

//3、unknown 表示未知类型的值
let e: unknown;
e = 22;
e = "sdf";
e = true;

let s: string;
//c 的类型any ，它可以赋值给任意变量的类型，出现 any 的任意类型 混乱，无法预知该传入的类型
// s = c;
s = "字符串的类型";

// 3.1、unknown 实际上就是一个类型安全的 any
// unknown 类型的变量，不能直接赋值给变量，必须进过判读类型
if (typeof e === "string") {
  //才可以正常使用 unknown
  s = e;
}

//上面的写法太过繁琐，简写
/**
 * 类型断言：可以用来告诉解析器变量的实际类型
 *
 *  语法：
 *    变量 as 类型
 *    <类型> 变量
 */
//语法一：
s = e as string;
//语法二：
s = <string>e;

//函数的默认的返回值的类型是 void 空值 ，可以根据需求 自动识别 类型
// function fn(num) {
//   if ((num = 0)) {
//     return true;
//   } else if ((num = 3)) {
//     return 232;
//   } else {
//     return "sldkfj";
//   }
// }

// void 用来表示空，以函数为例，就表示没有返回值的函数，就是啥也没用
function fn(): void {}

//never 表示永远不会返回结果
function fn2(): never {}
