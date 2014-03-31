import scala.annotation._

@tailrec 
def factorial_tco(n: Int, accumulator: BigInt = 1): BigInt = {
    if(n == 0) accumulator else factorial_tco(n - 1, (accumulator * n))
}

def factorial(n: Int): BigInt = {
  if (n == 0) 1 else n * factorial(n-1)
    
}

val start = System.nanoTime
println(factorial_tco(10000))
println((System.nanoTime - start) / 1000 / 1000)

val start2 = System.nanoTime
println(factorial(10000))
println((System.nanoTime - start2) / 1000 / 1000)

