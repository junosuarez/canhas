import canhas from './index'
import CanHas from './canhas'
import { expect } from 'chai'

describe('canhas', () => {
  it('can set and locate a service', () => {
    function foo() {}
    canhas.set('foo', foo)
    expect(canhas('foo')).to.equal(foo)
  })

  describe('class', () => {
    let canhas: CanHas
    function a() { return 'a' }
    (<any> a).foo = 'afoo'
    function b() { return 'b' }
    (<any> b).foo = 'bfoo'
    beforeEach(() => {
      canhas = new CanHas()
    })

    it('can set a value', () => {
      canhas.set('a', a)
    })

    it('throws if getting something that hasnt been set', () => {
      expect(() => {
        canhas.get('abc')
      }).to.throw(/abc/)
    })

    xit('can swap out implementations', () => {
      canhas.set('a', a)
      const A = canhas.get('a')
      expect(A()).to.equal('a')
      expect(A.foo).to.equal('afoo')
      canhas.set('a', b)
      expect(A()).to.equal('b')
      expect(A.foo).to.equal('bfoo')
    })

  })
})

