const config = {
  entry: '0',
  list: ['a', 'b', 'c'],
  sub: [{
    entry: "c",
    list: ['g', 'h', 'i'],
    sub: {
      entry: "h",
      list: ['j', 'k'],
    }
  }, {
    entry: "a",
    list: ['d', 'e', 'f'],
  }]
};

function getRoamListFromConfig(config, roamList = []) {
  const { entry, list, sub } = config;

  roamList = roamList.concat(entry);

  if (sub == null) { // 已到达叶子节点
    roamList = roamList.concat(list);
    return roamList;
  }

  list.forEach(node => {
    const nodeSub = [].concat(sub).find(v => v.entry === node);
    if (nodeSub) {
      roamList = getRoamListFromConfig(nodeSub, roamList);
    }
    else {
      roamList = roamList.concat(node);
    }
  });
  return roamList;
}

const roamList = getRoamListFromConfig(config);
const expectedRoamList = ['0', 'a', 'd', 'e', 'f', 'b', 'c', 'g', 'h', 'j', 'k', 'i'];

const equalLength = roamList.length === expectedRoamList.length;
let equalValue = equalLength;
if (equalValue) {
  expectedRoamList.forEach((node, id) => {
    if (roamList[id] !== node) equalValue = false;
  });
}

if (equalValue) console.log('ok');