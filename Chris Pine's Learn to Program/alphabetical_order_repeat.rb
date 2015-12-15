puts "Type in as many words as you want (one word per line, continuing until you just press Enter on an empty line). Once you're done, I'll repeat the words back to you in alphabetical order."

array = []

input = gets.chomp
array.push input

while array.last != ""    # If the last object in the array isn't empty 
    input = gets.chomp    # (i.e., if the user didn't just hit return), then 
    array.push input      # continue to accept more input
end

array.sort!               # Needs to have the exclamation mark to affect the 
puts array                # actual array, not just a copy
