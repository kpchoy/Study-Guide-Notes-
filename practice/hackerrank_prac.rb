# key is for consecutive numbers 

def minSwaps(arr)
    count = 0
    i = 0
    while i < arr.length - 1 
      
      if arr[i] != i + 1
        p [arr[i], i + 1]
        p arr[arr[i] - 1]
        p arr 
        arr[arr[i] - 1], arr[i] = arr[i], arr[arr[i] - 1]
        p arr 
        p "---"
        count += 1
      else
        i += 1
      end
    end
    
    count
end


def checkMagazine(mag, note)
  hashmap = Hash.new(0)
  mag.join.chars.each do |ch|
    hashmap[ch] += 1 
  end 

  note.join.chars.each do |ch|
    hashmap[ch] -= 1 
  end 
    

  if hashmap.values.all? {|ch| ch >= 0 }
    print "Yes"
  else 
    print "No"
  end 
end 

checkMagazine(["give", "me", "one", "grand", "today", "night"], ["give", "one", "grand", "today"])