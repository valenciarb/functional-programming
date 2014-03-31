_ = require "lodash"

#memoize = (fn, keymaker) ->
  #lookupTable = {}

  #( keymaker = (args) ->
    #JSON.stringify args
  #) unless keymaker

  #->
    #key = keymaker.call @, arguments
    #lookupTable[key] or (lookupTable[key] = fn.apply @, arguments)

fibonacci = (n) ->
  if n <= 1
    n
  else
    fibonacci(n-1) + fibonacci(n-2)

TOTAL_NUMBERS_TO_GET = 3000

crono = require "node-chrono"

fibonacci = _.memoize fibonacci

crono.time ->
  fibonacci TOTAL_NUMBERS_TO_GET

crono.time ->
  fibonacci TOTAL_NUMBERS_TO_GET + 1
