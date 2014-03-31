import scala.annotation._

def factorial(n: Int): BigInt = {
  if (n == 0) 1 else n * factorial(n-1)
}

@tailrec 
def factorial_tco(n: Int, accumulator: BigInt = 1): BigInt = {
    if(n == 0) accumulator else factorial_tco(n - 1, (accumulator * n))
}

val start = System.nanoTime
println(factorial_tco(1000))
println((System.nanoTime - start) / 1e6 + " millisecs")

val start2 = System.nanoTime
println(factorial(1000))
println((System.nanoTime - start2) / 1e6 + " millisecs")

