import unicodedata


def strip_accents(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s)
                   if unicodedata.category(c) != 'Mn')


f1 = open("mots_francais.txt", 'r', encoding='UTF8')
f2 = open("mots_francais-cleaned.txt", 'w')
l = '*'
last = l
while l != '':
    l = f1.readline()
    clean = strip_accents(l)
    if not '-' in l and clean != last:
        f2.write(clean)
        last = clean
f1.close()
f2.close()
