puts "Type in as many words as you want (one word per line, continuing until you just press Enter on an empty line). Once you're done, I'll repeat the words back to you in alphabetical order."

array = []
input = 'input'

while input != ""    # If the last object in the array isn't empty 
    input = gets.chomp    # (i.e., if the user didn't just hit return), then 
    array.push input      # continue to accept more input
end

if array.last == ''
    array.pop
end

puts "Your original word order: " + array.join(', ')
puts ''

array.each_index do |first|
    array.each_index do |second|
        if array[first] < array[second]
            array[first], array[second] = array[second], array[first]
            puts "[#{array.join(', ')}]"
        end
    end
end

puts "Your words sorted alphabetically: " + array.join(', ') 
