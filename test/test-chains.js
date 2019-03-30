/* eslint-disable no-unused-expressions/no-unused-expressions */

'use strict'

const assert = require('assert')
const api = require('../')

describe('swtc-chains', function() {
  it('has jingtum', function() {
    assert(api.filter( c => c.code === 'jingtum').length === 1)
  }),
  it('has bizain', function() {
    assert(api.filter( c => c.code === 'bizain').length === 1)
  })
})
