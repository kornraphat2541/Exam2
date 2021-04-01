array = [1,2,1,3,5,6,4]
b = 0
for i in range(len(array)):
    b = array[i]
    if b == max(array) :
        print('ลำดับค่าที่มากที่สุดคือ index' + '=' + str(i))
