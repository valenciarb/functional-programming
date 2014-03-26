class Fibonacci
  previousNumber: 0
  nextNumber: 0

  next: =>
    [@nextNumber, @previousNumber] = [@nextNumber + @previousNumber, @nextNumber]
    @previousNumber = 1 if @nextNumber is 0
    @nextNumber

class Iterator
  constructor: (@sequenceClass) ->

  first: (n) =>
    sequence = new @sequenceClass
    sequence.next() for i in Array(n)


TOTAL_NUMBERS_TO_GET = 10000000

crono = require "node-chrono"

crono.time ->
  fibonacci = new Fibonacci
  i = 0
  while i < TOTAL_NUMBERS_TO_GET
    i++
    fibonacci.next()

crono.time ->
  fibonacciIterator = new Iterator(Fibonacci)
  fibonacciIterator.first TOTAL_NUMBERS_TO_GET
