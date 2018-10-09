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

def twoStrings(str1, str2)
  hash_map = Hash.new(0)
  str1.chars.each do |ch|
    hash_map[ch] += 1 
  end 

  str2.chars.each do |ch2|
    if hash_map.keys.include?(ch2)
      return true 
    end 
  end 

  false 
end 

def sherlockAndAnagrams(s)
  counter = Hash.new(0)
    i = 0
    while i < s.length
        j = i 
        while j < s.length
            temp = Hash.new(0)
            p s[i..j]
            s[i..j].chars.each do |el|
                temp[el] += 1
            end 
            p temp 
            p "----"
            counter[temp] += 1
            j += 1
        end 
        i += 1
    end 
    p counter 
    ans = counter.values.map {|c| c*(c-1)/2}
    ans.reduce(:+)

end

def bubblesort(arr)
  sorts = 0 
  sorted = false 
  until sorted 
    sorted = true 
    arr.each_with_index do |num, idx1|
      (idx1...arr.length).each do |idx2|
        if arr[idx1] > arr[idx2]
          arr[idx1], arr[idx2] = arr[idx2], arr[idx1]
          sorts += 1 
          sorted = false 
        end 
      end 
    end 
  end
  
  p `Array is sorted in #{sorts} swaps.`
  p `First Element: #{arr.first}`
  p `Last Element: #{arr.last}`
  
end 

bubblesort([3,2,1])