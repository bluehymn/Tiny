import creatNode from './create-node.js'
export default function render (vm, tree) {
  let fragment = document.createDocumentFragment()
  let parent = fragment
  let tParent = tree
  queryInsert(vm, parent, tParent)
  document.body.appendChild(fragment)
}

// 递归查询树插入dom
function queryInsert (vm, parent, tParent) {
  for (let item of tParent.children) {
    let tNode = item
    let nodeType = item.type
    if (tNode) {
      let node = creatNode(vm, tNode)
      parent.appendChild(node)
      if (nodeType === 1) {
        queryInsert(vm, node, tNode)
      }
    }
  }
}
