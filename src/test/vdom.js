import {Tiny} from '../core/'
export function testVdom () {
  let vm = new Tiny({
    data: {
      a: 1,
      b: 2
    },
    template: `<div><div>
    {{a}}</div>
    <div>{{b}}</div>
    <div>哈哈哈哈</div>
    </div>`
  })
  vm.rend()
}
