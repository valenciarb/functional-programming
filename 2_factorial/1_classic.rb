class Integer
  def factorial
    self <= 1 ? 1 : self * (self - 1).factorial
  end
end

start = Time.now
puts 1000.factorial()
puts "#{(Time.now - start) * 1000} secs"
