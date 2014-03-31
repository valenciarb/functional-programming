class Calculator
  constructor: (@total = 0) ->

  sum: (n) ->
    @total += n

  subs: (n) ->
    @total -= n

  mult: (n) ->
    @total *= n

  res: ->
    @total

calc = new Calculator
calc.sum(2)
calc.subs(1)
calc.mult(3)
console.log calc.res()


fluent = (method) ->
  () ->
    method.apply(this, arguments)
    this

class Calculator
  constructor: (@total = 0) ->

  sum: fluent (n) ->
    @total += n

  subs: fluent (n) ->
    @total -= n

  mult: fluent (n) ->
    @total *= n

  res: ->
    @total

calc = new Calculator
console.log calc.sum(2).subs(1).mult(3).res()
