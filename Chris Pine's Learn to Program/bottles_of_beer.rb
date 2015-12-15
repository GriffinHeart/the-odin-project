def english_number number
  if number < 0  # No negative numbers.
    return 'Please enter a number that isn\'t negative.'
  end
  if number == 0
    return 'zero'
  end

  # No more special cases! No more returns!

  num_string = ''  # This is the string we will return.

  ones_place = ['one',     'two',       'three',    'four',     'five',
               'six',     'seven',     'eight',    'nine']
  tens_place = ['ten',     'twenty',    'thirty',   'forty',    'fifty',
               'sixty',   'seventy',   'eighty',   'ninety']
  teenagers = ['eleven',  'twelve',    'thirteen', 'fourteen', 'fifteen',
               'sixteen', 'seventeen', 'eighteen', 'nineteen']

  # "left" is how much of the number we still have left to write out.
  # "write" is the part we are writing out right now.
  # write and left... get it?  :)
    
  
  left  = number
  write = left/1000000000000          # How many trillions left to write out?
  left  = left - write*1000000000000  # Subtract off those trillions.

  if write > 0
      trillions  = english_number write
      num_string = num_string + trillions + ' trillion'
   
    if left > 0
        # So we don't write 'two trillionfifty-one'...
      num_string = num_string + ' '
    end
  end 
    
  
  write = left/1000000000          # How many billions left to write out?
  left  = left - write*1000000000  # Subtract off those billions.

  if write > 0
      billions  = english_number write
      num_string = num_string + billions + ' billion'
   
    if left > 0
        # So we don't write 'two billionfifty-one'...
      num_string = num_string + ' '
    end
  end
  
  write = left/1000000          # How many millions left to write out?
  left  = left - write*1000000  # Subtract off those millions.

  if write > 0
      millions  = english_number write
      num_string = num_string + millions + ' million'
   
    if left > 0
        # So we don't write 'two millionfifty-one'...
      num_string = num_string + ' '
    end
  end
  
  write = left/1000          # How many thousands left to write out?
  left  = left - write*1000  # Subtract off those thousands.

  if write > 0
      thousands  = english_number write
      num_string = num_string + thousands + ' thousand'
   
    if left > 0
        # So we don't write 'two thousandfifty-one'...
      num_string = num_string + ' '
    end
  end

    
  
  write = left/100          # How many hundreds left to write out?
  left  = left - write*100  # Subtract off those hundreds.

  if write > 0
    # Now here's a really sly trick:
    hundreds  = english_number write
    num_string = num_string + hundreds + ' hundred'
    # That's called "recursion". So what did I just do?
    # I told this method to call itself, but with "write" instead of
    # "number". Remember that "write" is (at the moment) the number of
    # hundreds we have to write out. After we add "hundreds" to
    # "num_string", we add the string ' hundred' after it.
    # So, for example, if we originally called english_number with
    # 1999 (so "number" = 1999), then at this point "write" would
    # be 19, and "left" would be 99. The laziest thing to do at this
    # point is to have english_number write out the 'nineteen' for us,
    # then we write out ' hundred', and then the rest of
    # english_number writes out 'ninety-nine'.

    if left > 0
      # So we don't write 'two hundredfifty-one'...
      num_string = num_string + ' '
    end
  end

  write = left/10          # How many tens left to write out?
  left  = left - write*10  # Subtract off those tens.

  if write > 0
    if ((write == 1) and (left > 0))
      # Since we can't write "tenty-two" instead of "twelve",
      # we have to make a special exception for these.
      num_string = num_string + teenagers[left-1]
      # The "-1" is because teenagers[3] is 'fourteen', not 'thirteen'.

      # Since we took care of the digit in the ones place already,
      # we have nothing left to write.
      left = 0
    else
      num_string = num_string + tens_place[write-1]
      # The "-1" is because tens_place[3] is 'forty', not 'thirty'.
    end

    if left > 0
      # So we don't write 'sixtyfour'...
      num_string = num_string + '-'
    end
  end

  write = left  # How many ones left to write out?
  left  = 0     # Subtract off those ones.

  if write > 0
    num_string = num_string + ones_place[write-1]
    # The "-1" is because ones_place[3] is 'four', not 'three'.
  end

  # Now we just return "num_string"...
  num_string + " bottles of beer on the wall, " + num_string + " bottles of beer.\nYou take one down and pass it around, " + english_number(number-1).to_s + " bottles of beer on the wall."
end

puts english_number(  9)