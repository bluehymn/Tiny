import parseHTML from '../vdom/parse-html.js'
import render from '../vdom/render.js'
export class Tiny {
  constructor (obj) {
    this.data = obj.data
    this.vDomTree = parseHTML(obj.template)
  }

  rend () {
    render(this, this.vDomTree)
  }
}
