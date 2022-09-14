# message: "CECI EST UN TEST"
# k=23
s = 'OGOR GEA XY AGEA'.upper()
print(s)


def encode(txt, k):
    """encoding function"""
    out = ''
    for ch in txt.upper().replace(' ', '@'):
        c = ord(ch)-64
        if 0 <= c <= 100:
            d = (c*k) % 27
        else:
            d = c
        out += chr(d+64)
    return out.replace('@', ' ')
