
export default function resolve (template) {
  let string = template
  let vDom = Object.create(null)
  let regNode = new RegExp(/<([a-z]+)>/, 'g')
  let nodeProto = {
    tagName: null,
    nodeType: null,
    children: []
  }
  let node = 0
  let lastIndex = 0
  while (node !== null) {
    let result = regNode.exec(string)
    console.log(result)
    
    node = result
  }

  // 节点类型 text element


}
