let tree = {
  type: 11,
  children: []
}
// 开始标签
let regSTag = /^<[^/>]+>/m
// 结束标签
let regETag = /^<\/[^>]+>/m
// 文本
let regText = /^[^/<>]+/m
// 属性
let regAttr = /([a-zA-Z0-9_-]+)="([^"])+"/gm

function parse (s, tree) {
  let parent = tree
  while (s.length > 0) {
    // 匹配文本节点
    if (s.slice(0,1) === '<') {
      // 匹配开始标签
      if (regSTag.test(s)) {
        let lc = RegExp.leftContext
        let lm = RegExp.lastMatch
        let rc = RegExp.rightContext
        let nodeName = getNodeName(lm)
        let attrs = getAttrs(lm)
        // 添加一个node 并将这个node 变成当前操作的父节点
        parent = addElementNode(nodeName, parent)
        // s 位置前进
        s = rc
      } 
      // 匹配结束标签
      else if (regETag.test(s)) {
        let lc = RegExp.leftContext
        let lm = RegExp.lastMatch
        let rc = RegExp.rightContext
        let nodeName = getNodeName(lm)
        // 如果结束标签name等于当前parent node的name 
        if (nodeName === parent.nodeName) {
          parent = closeNode(parent)
        }
        // s 位置前进
        s = rc
      }
    } else {
      if (regText.test(s)) {
        let lm = RegExp.lastMatch
        let rc = RegExp.rightContext
        addTextNode(lm, parent)
        s = rc
      }
    } 
  }
  return tree
}

function addElementNode (nodeName, parent) {
  // 构造元素节点
  let node = {
    type: 1,
    nodeName: nodeName,
    parent: parent,
    children: [],
    closed: 0
  }
  parent.children.push(node)
  return node
}

function addTextNode (text, parent) {
  // 构造文本节点
  let node = {
    type: 3,
    text: text,
    parent: parent
  }
  parent.children.push(node)
}

function closeNode (parent) {
  let p = parent.parent
  p.closed = 1
  return p
}

function getNodeName (s) {
  return s.replace(/<\/?([a-z]+).*/, '$1')
}

function getAttrs (s) {

} 

export default function parseHTML (s) {
  return parse(s, tree)
}