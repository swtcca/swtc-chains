"use strict"

const SWTC_CHAINS = [
  {
    code: "bitcoin",
    currency: "BTC",
    simple: true,
    ACCOUNT_ALPHABET:
      "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  },
  {
    code: "ripple",
    currency: "XRP",
    simple: true,
    ACCOUNT_ALPHABET:
      "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"
  },
  {
    code: "stellar",
    currency: "XLM",
    simple: true,
    ACCOUNT_ALPHABET:
      "gsphnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCr65jkm8oFqi1tuvAxyz"
  },
  {
    code: "jingtum",
    currency: "SWT",
    ACCOUNT_ALPHABET:
      "jpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65rkm8oFqi1tuvAxyz",
    SEED_PREFIX: 33,
    ACCOUNT_PREFIX: 0,
    ACCOUNT_ZERO: "jjjjjjjjjjjjjjjjjjjjjhoLvTp",
    ACCOUNT_ONE: "jjjjjjjjjjjjjjjjjjjjBZbvri",
    fee: 10
  },
  {
    code: "bizain",
    currency: "BWT",
    ACCOUNT_ALPHABET:
      "bpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2jcdeCg65rkm8oFqi1tuvAxyz",
    SEED_PREFIX: 33,
    ACCOUNT_PREFIX: 0,
    ACCOUNT_ZERO: "bbbbbbbbbbbbbbbbbbbbbhoLvTp",
    ACCOUNT_ONE: "bbbbbbbbbbbbbbbbbbbbBZjvri",
    fee: 10
  }
]

module.exports = SWTC_CHAINS
