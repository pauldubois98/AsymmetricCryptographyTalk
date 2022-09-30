ps = []

for k in range(2,1000):
    ok = True
    for p in ps:
        if k%p==0:
            ok = False
            break
    if ok:
        ps.append(k)

for p in ps:
    print("<option value="+str(p)+">"+str(p)+"</option>")
