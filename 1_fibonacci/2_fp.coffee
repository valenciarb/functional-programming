fibonacci = (n) ->
  if n <= 1
    n
  else
    fibonacci(n-1) + fibonacci(n-2)

TOTAL_NUMBERS_TO_GET = 30

crono = require "node-chrono"

crono.time ->
  fibonacci TOTAL_NUMBERS_TO_GET
