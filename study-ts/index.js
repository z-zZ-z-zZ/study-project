/*
    枚举类型
    js中是不存在枚举这个概念的  在ts中通过 enum 关键字定义枚举类型
*/
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
console.log(Color.red);
console.log(Color.green);
console.log(Color.blue);
