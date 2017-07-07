export default function createElement (vm, nodeData) {
  let nodeName = nodeData.nodeName
  let type = nodeData.type
  // 元素节点
  if (type === 1) {
    let node = document.createElement(nodeName)
    return node
  }
  // 文本节点
  if (type === 3) {
    let text = nodeData.text
    text = text.replace(/{{([a-zA-z0-9_]+)}}/gm, function (value, key) {
      return vm.data[key]
    })
    return document.createTextNode(text)
  }
}
