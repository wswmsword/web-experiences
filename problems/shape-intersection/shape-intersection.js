
/** 两个形状相交吗 */
export default function shapeIntersection(shape1, shape2) {
  const lines1 = shape1.split(' ').map(str => str.split(',').map(str => Number(str)));
  const lines2 = shape2.split(' ').map(str => str.split(',').map(str => Number(str)));

  const length1 = lines1.length;
  const length2 = lines2.length;
  for(let i = 0; i < length1; ++ i) {
    const line1 = [lines1[i], lines1[(i + 1) % length1]];
    for (let j = 0; j < length2; ++ j) {
      const line2 = [lines2[j], lines2[(j + 1) % length2]];
      const isIntersection = isIntersectionLines(line1[0], line1[1], line2[0], line2[1]);
      if (isIntersection) {
        return [line1[0], line1[1], line2[0], line2[1]];
      }
    }
  }

  return [];
}

/**
 * 两条线相交吗
 * @param {[number, number]} point1 点 1
 * @param {[number, number]} point2 点 2
 * @param {[number, number]} point3 点 3
 * @param {[number, number]} point4 点 4
 * @returns {boolean}
 */
export function isIntersectionLines(point1, point2, point3, point4) {
  const [kP1, bP1] = getQuadraticEquationKB(point1, point2);
  const [kP2, bP2] = getQuadraticEquationKB(point3, point4);

  const isInfinityK1 = Math.abs(kP1) === Infinity;
  const isInfinityK2 = Math.abs(kP2) === Infinity;
  if (isInfinityK1 && isInfinityK2) return false;
  else if (isInfinityK1) {
    const x = point1[0];
    const y = kP2 * x + bP2;
    return isPointWithinLine(x, y, point3, point4) && isPointWithinLine(x, y, point3, point4);
  }
  else if (isInfinityK2) {
    const x = point3[0];
    const y = kP1 * x + bP1;
    return isPointWithinLine(x, y, point1, point2) && isPointWithinLine(x, y, point3, point4);
  }
  else {
    const [x, y] = getIntersectionPoint(kP1, bP1, kP2, bP2);
    return isPointWithinLine(x, y, point1, point2) && isPointWithinLine(x, y, point3, point4);
  }
}

/** 获取交点坐标 */
export function getIntersectionPoint(k1, b1, k2, b2) {
  const x = (b1 - b2) / (k2 - k1);
  const y = k1 * x + b1;
  return [x, y];
}

/** 获取两个点构成线段的 k 和 b */
export function getQuadraticEquationKB(point1, point2) {
  const k = (point1[1] - point2[1]) / (point1[0] - point2[0]); // (k)x + b
  const b = point1[1] - k * point1[0]; // kx + (b)
  return [k, b];
}

/** 点是否在线段上 */
export function isPointWithinLine(x, y, point1, point2) {
  let isXWithinLine = false;
  if (point1[0] > point2[0]) {
    isXWithinLine = point1[0] >= x && x >= point2[0];
  } else {
    isXWithinLine = point1[0] <= x && x <= point2[0];
  }

  let isYWithinLine = false;
  if (point1[1] > point2[1]) {
    isYWithinLine = point1[1] >= y && y >= point2[1];
  } else {
    isYWithinLine = point1[1] <= y && y <= point2[1];
  }
  return isXWithinLine && isYWithinLine;
}