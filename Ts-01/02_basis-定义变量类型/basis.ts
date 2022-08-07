//tdc 可以将 ts 的代码 编译成 js 代码，ts中有报错也可以进行编译执行，1、代码符合js的需求，2、为ts更好的推广，更好的使用和入手

// ts 中 被定义了的类型的变量，必须使用变量当前定义的类型 相同的 类型，否则无法正常使用
// 如果类型 错误 ，在编辑的代码中有红色的下划线
// 在编译代码的时候也是会报错：Type 'boolean' is not assignable to type 'string'. 报错:类型'boolean'不能赋值给类型'string'

//在ts 可以给变量 定义 变量类型
// let a;

//定义：变量 字符串类型
let a: string;
//定义：变量 数值类型
// let a: Number;
a = "张飞";
// 这里的报错：与赋值的类型 不符合
// a = 234;
// a = 243;
// a = { name: "小明" };
// a = [123, 324, 2342, 34, 234, 2, 34];
// a = true;

//声明完变量直接赋值（定义初始值）
//如果声明边的声明和赋值同时运行时，Ts 可以自动 变量进行类型检查（并定义该检查的类型）
// let b: boolean = true;
let b = true;

b = false;
// b = "s";
// b = 1;

function sum(a: Number, b: Number): number {
  return a + b;
}

// console.log(sum(343, 2343));
// console.log(sum(343));
// console.log(sum(343, "2343", w4rwer, 4234, 234324));

let result = sum(32, 234);

console.log(result);
