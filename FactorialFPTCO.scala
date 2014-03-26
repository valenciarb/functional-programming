import scala.annotation._

//@tailrec 
def factorial_tco(n: Int, accumulator: BigInt = 1): BigInt = {
    if(n == 0) accumulator else factorial_tco(n - 1, (accumulator * n))
}

def factorial(n: Int): BigInt = {
  if (n == 0) 1 else n * factorial(n-1)
    
}

println(factorial_tco(10000))
println(factorial(10000))
