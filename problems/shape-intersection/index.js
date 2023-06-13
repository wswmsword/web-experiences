import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import solution from "./shape-intersection.js";

main();

async function main() {
  const rl = readline.createInterface({ input, output });
  let shape1 = null;
  let shape2 = null;
  shape1 = await rl.question(`请输入第一个图形，例如“1,1 5,1 5,5 1,5”表示下面这样的图形：
6  (1,5)
5  *-----------*(5,5)
4  |           |
3  |           |
2  |(1,1)      |(5,1)
1  *-----------*
0  1  2  3  4  5  6
`); // 输入
  shape2 = await rl.question("请输入第二个图形：\n"); // 输入

  const intersectionLines = solution(shape1, shape2); // 计算
  const isIntersection = intersectionLines.length === 4;
  if (isIntersection) {
    const [point1, point2, point3, point4] = intersectionLines;
    console.log(`这两个图形相交，其中至少有相交的两条连线是“${point1[0]},${point1[1]}-${point2[0]},${point2[1]}”和“${point3[0]},${point3[1]}-${point4[0]},${point4[1]}”。`); // 输出
  } else {
    console.log("这两个图形没有交点。"); // 输出
  }

  rl.close();
}