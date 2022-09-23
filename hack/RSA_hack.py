n = 31*51
e = 7
print("n =", n)
print("e =", e)
print('\n\n')


d = list()
for m in range(27):
    print(chr(m+64).replace('@', ' '), '\t', m, '\t', pow(m, e, n))
    d.append([pow(m, e, n), m])
print('\n\n')


d.sort()
for k, v in d:
    print(k, '\t', v, '\t', chr(v+64).replace('@', ' '))
