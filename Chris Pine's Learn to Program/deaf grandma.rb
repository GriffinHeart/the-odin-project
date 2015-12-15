speak_count = 1
puts "HI, SONNY!"
speak = gets.chomp
while speak_count <= 3
    if speak == "BYE"
        speak_count = 1
        speak_count = speak_count + 1
        puts "DON'T LEAVE, SONNY!"
        speak = gets.chomp
        if speak == "BYE"
            speak_count = speak_count + 1
            puts "NO, SONNY, NO!"
            speak = gets.chomp
            if speak == "BYE"
                speak_count = speak_count + 1
                exit
            elsif speak == speak.upcase
                puts "NO, NOT SINCE " + (1930 + rand(21)).to_s + "!"
            else
                puts "HUH?! SPEAK UP, SONNY!"
            end
        elsif speak == speak.upcase
            puts "NO, NOT SINCE " + (1930 + rand(21)).to_s + "!"
        else
            puts "HUH?! SPEAK UP, SONNY!"
        end 
    elsif speak == speak.upcase
        puts "NO, NOT SINCE " + (1930 + rand(21)).to_s + "!"
    else
        puts "HUH?! SPEAK UP, SONNY!"
    end
    speak = gets.chomp
end
