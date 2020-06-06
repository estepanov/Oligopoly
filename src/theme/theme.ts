import merge from 'lodash/merge'
// @ts-ignore
import preset from '@rebass/preset' // no types :)

export default merge(preset, {
  colors: {
    // custom primary color
    // primary: 'tomato',
  }
})