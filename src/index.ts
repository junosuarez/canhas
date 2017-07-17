import CanHas, {locator} from './canhas'

const locator = new CanHas().func()

module.exports = locator // node style interop
module.exports.default = locator
export default locator
