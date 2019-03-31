/* eslint-disable no-unused-expressions/no-unused-expressions */

"use strict"

const assert = require("assert")
const api = require("../")

describe("swtc-chains", function() {
  it("has bitcoin", function() {
    assert(api.filter(c => c.code === "bitcoin").length === 1)
  }),
    it("has ripple", function() {
      assert(api.filter(c => c.code === "ripple").length === 1)
    }),
    it("has stellar", function() {
      assert(api.filter(c => c.code === "stellar").length === 1)
    }),
    it("has jingtum", function() {
      assert(api.filter(c => c.code === "jingtum").length === 1)
    }),
    it("has bizain", function() {
      assert(api.filter(c => c.code === "bizain").length === 1)
    })
})
