import bisect
# message: "CECI EST UN TEST"
# k=23
s = 'OGOR GEA XY AGEA'.upper()
print(s)


# load all french words
f = open("mots_francais-cleaned.txt", 'r')
l = '*'
mots = []
while l != '':
    l = f.readline()
    mots.append(l.upper().replace('\n', ''))
f.close()


def encode(txt, k):
    """encoding function"""
    out = ''
    for ch in txt.upper().replace(' ', '@'):
        c = ord(ch)-64
        if 0 <= c <= 100:
            d = (c+k) % 27
        else:
            d = c
        out += chr(d+64)
    return out.replace('@', ' ')


# test all encodings
for k in range(27):
    message = encode(s, k)
    print(f"{k:2d} {message}", end=' ')
    for mot in message.split(' '):
        i = bisect.bisect_left(mots, mot)
        if i != len(mots) and mots[i] == mot:
            print('<', end='')
    print()
