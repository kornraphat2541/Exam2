def factorial (number):
    if number == 1:
        return number
    else:
        return number * factorial(number-1)

x  = factorial(int(input()))

word = str(x)
list_s = list(word)
num = len(list_s)
allzero = 0
for i in range(len(list_s)):
    if(word[num-1]) == '0':
        num -= 1
        allzero += 1
    else:
        break

print( '=' + word +' '+'มีเลข 0 ต่อท้าย' + ' ' +str(allzero) + 'ตัว')





