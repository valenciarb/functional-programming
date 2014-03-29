#RubyVM::InstructionSequence.compile_option = {
#  :tailcall_optimization => true,
#  :trace_instruction => false
#}


#RubyVM::InstructionSequence.new(<<-EOF).eval
class Integer
  def factorial
    self <= 1 ? 1 : self * (self - 1).factorial
  end
  def factorial_tco(accumulator)
    self <= 1 ? accumulator : (self - 1).factorial_tco(accumulator * self)
  end
  def factorial_iterative
    f = 1; for i in 1..self; f *= i; end; f
  end
end

start = Time.now
#puts 100000000.factorial()
#puts (Time.now - start) * 1000

start = Time.now
puts 1000000000.factorial_tco(1)
puts (Time.now - start) * 1000

start = Time.now
puts 1000000000.factorial_iterative()
puts (Time.now - start) * 1000

#EOF
