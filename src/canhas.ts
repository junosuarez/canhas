import invariant from './invariant'

export interface locator {
  (name: string): any,
  set (name: string, value: any): void
}

export default class CanHas {
  static instance = new CanHas

  private things = new Map()
  private proxies = new Map()

  func (): locator {
    const i = this
    function canhas (name: string) {
      return i.get(name)
    }
    (<any> canhas).set = this.set.bind(this)
    return canhas as locator
  }

  get (name: string) {
    invariant(this.things.has(name), 'name must be set: ' + name)
    return this.things.get(name)
  }

  set (name: string, value: any) {
    this.things.set(name, value)
  }
}

