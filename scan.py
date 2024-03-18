# Cambia el viejo formato html de ElCielo a una versión normalizada como lista de JS

lista = [
"""<a target="0" href="https://www.youtube.com/embed/tk5Uturacx8?autoplay=1"
onclick="cA('disco-respaldo_2.png', 'Tchaikovsky_The-nutcracker_1.png'), escribir('Tchaikovsky', 'The Nutcracker'), color('', '#141d32')">
<img src="Tchaikovsky_The-nutcracker_1.png" id="portada"/></a><a id="texto">
Tchaikovsky - The Nutcracker </a>""",
"""<a target="0" href="https://www.youtube.com/embed/7G3bWPUW6Jw?list=OLAK5uy_kumBk-OR6rpI8Zh9kO77yqYhDu4UnI8YE"
onclick="cA('ELP_Love-Beach_2.png', 'ELP_Love-Beach_1.png', 'ELP_Love-Beach_3.png'), escribir('ELP', 'Love Beach'), color('', '')">
<img src="ELP_Love-Beach_1.png" id="portada"/></a><a id="texto">
ELP - Love Beach</a>""",
"""<a target="1" href="https://www.youtube.com/watch?v=9vwjfRMSm3A&list=PLmJvHNd9SFm9NMrLw4ui_mniFgNZdt-w3&index=1"
onclick="cA('Bee-Gees_Geratest-hits_2.png', 'Bee-Gees_Geratest-hits_1.png', 'Bee-Gees_Geratest-hits_3.png'), escribir('Bee Gees', 'Greatest Hits'), color('', '#edaa14')">
<img src="Bee-Gees_Geratest-hits_1.png" id="portada_alt"/></a><a id="texto">
Bee Gees - Greatest Hits</a>""",
"""<a target="1" href="https://www.youtube.com/watch?v=XAJXuPqllRA&list=OLAK5uy_kRBhyHjGRpkOO-hNSxgoYCKvBaAnrNLTo&index=1"
onclick="cA('Burt-Bacharach_Hit-Maker_2.png', 'Burt-Bacharach_Hit-Maker_1.jpg', 'Burt-Bacharach_Hit-Maker_3.png'), escribir('Burt Bacharach', 'Hit Maker!'), color('', '')">
<img src="Burt-Bacharach_Hit-Maker_1.jpg" id="portada_alt"/></a><a id="texto">
Burt Bacharach - Hit Maker!</a>""",
"""<a target="1" href="https://www.youtube.com/watch?v=weUhBGA8mxo?autoplay=1"
onclick="cA('Prince_1999_2.png', 'Prince_1999_1.png'), escribir('Prince', '1999'), color('#5c2278', '#300383')">
<img src="Prince_1999_1.png" id="portada_alt"/></a><a id="texto">
Prince - 1999</a>""",
"""<a target="0" href="https://www.youtube.com/embed/gjpeL6aGJAI?autoplay=1"
onclick="cA('Prince_Purple-Rain_2.png', 'Prince_Purple-Rain_1.png', 'Prince_Purple-Rain_3.png'), escribir('Prince', 'Purple Rain'), color('', '')">
<img src="Prince_Purple-Rain_1.png" id="portada"/></a><a id="texto">
Prince - Purple Rain </a>""",
"""<a target="0" href="https://www.youtube.com/embed/EVolCHbpk34?autoplay=1"
onclick="cA('Prince_Sign-O-The-Times_2.png', 'Prince_Sign-O-The-Times_1.png'), escribir('Prince', 'Sign O` The Times'), color('', '#c07b0a')">
<img src="Prince_Sign-O-The-Times_1.png" id="portada"/></a><a id="texto">
Prince - Sign O' The Times </a>"""]

from bs4 import BeautifulSoup

# def convertir_html_a_lista(html):
#     # Parsear el fragmento de HTML
#     soup = BeautifulSoup(html, 'html.parser')

#     # Encontrar el primer elemento 'a' que cumpla con las condiciones dadas
#     a_element = soup.find('a', onclick=lambda value: value and 'correrAnimacion' in value and 'escribir' in value and 'color' in value)

#     # Obtener los valores de los atributos 'target', 'href', 'src', y el texto dentro de las etiquetas 'a' e 'img'
#     target = a_element.get('target')
#     href = a_element.get('href')
#     src = a_element.find('img').get('src')
#     texto_a = a_element.get_text(strip=True)

#     # Obtener los valores pasados a la función 'correrAnimacion' mediante 'onclick'
#     onclick = a_element.get('onclick')
#     animacion_values = [value.strip('\'') for value in onclick.split('(')[1].split(')')[0].split(',')]

#     # Obtener los valores pasados a la función 'escribir' mediante 'onclick'
#     escribir_values = [value.strip('\'') for value in onclick.split('(')[2].split(')')[0].split(',')]

#     # Obtener los valores pasados a la función 'colorGrad' mediante 'onclick'
#     colorGrad_values = [value.strip('\'') for value in onclick.split('(')[3].split(')')[0].split(',')]

#     # Crear la lista final con los valores extraídos
#     lista_final = [target, href, src] + texto_a.split(' - ') + colorGrad_values + animacion_values + escribir_values

#     return lista_final

# html_fragmento = '''<a target="_blank" href="
# https://www.youtube.com/watch?
# " onclick="correrAnimacion('portadas/Steely-Dan_Cant-buy-a-thrill_2.png', 'portadas/Steely-Dan_Cant-buy-a-thrill_1.png', 'porta2/Steely-Dan_Cant-buy-a-thrill_3.png'), escribir('Steely Dan', 'Can`t Buy A Thrill'), colorGrad('#fff', '#000')">
# <img src="portadas/Steely-Dan_Cant-buy-a-thrill_1.png" id="portada_alt"/> <a id="texto">
# Steely Dan - Can't Buy A Thrill </a>'''

# resultado = convertir_html_a_lista(html_fragmento)
# print(resultado)

# # # ['_blank', '\nhttps://www.youtube.com/watch?\n', 'portadas/Steely-Dan_Cant-buy-a-thrill_1.png', 'Steely Dan', "Can't Buy A Thrill", '#fff', " '#000", 'portadas/Steely-Dan_Cant-buy-a-thrill_2.png', " 'portadas/Steely-Dan_Cant-buy-a-thrill_1.png", " 'porta2/Steely-Dan_Cant-buy-a-thrill_3.png", 'Steely Dan', " 'Can`t Buy A Thrill"]

############################################

# import os

# path1="C:/Users/RS/Documents/ElCielo - copia/img/p"
# # ['_blank','https://www.y','Steely-Dan_Cant-buy-a-thrill_1','Steely Dan', 'Can`t Buy A Thrill','#fff', '#000','portada_alt'], -->
# # 8 elementos
# lalb=os.listdir(path1)    
# for i in lalb:
#     if i[-5:-4]=='1':
#         a = f"[\'{i}\',\'\',\'\',\'\',\'\',\'\',\'\',\'\'],"
#         print(a)

############################################

# [autor, nombre, RootDir, dir1, dir2, dir3, alt?, disc?, colorT, color, target, link]
# target="[0|1]", 0:iframe_a, 1:_blank

for i in lista:
    autor=""        # 4
    nombre=""       # 4
    rootDir=""      # 3
    dir2=""         # 6
    dir3=""         # 6
    disc=""
    color1=""       # 5
    color2=""       # 5
    target="_blank" # 1
    link=""         # 2
        
    # 1
    a=i[11:12]
    if a=="0":
        target="iframe_a"
        
    soup = BeautifulSoup(i, 'html.parser')
    a_element = soup.find('a', onclick=lambda value: value and 'cA' in value and 'escribir' in value and 'color' in value)
    
    # 2
    link=a_element.get('href')
    # 3
    rootDir=a_element.find('img').get('src')
    # 4
    onclick = a_element.get('onclick')
    escribir_values = [value.strip('\'') for value in onclick.split('(')[2].split(')')[0].split(',')]
    autor=escribir_values[0]
    nombre=escribir_values[1][2:]    
    #5
    colorGrad_values = [value.strip('\'') for value in onclick.split('(')[3].split(')')[0].split(',')]
    c2=colorGrad_values[1][2:]
    color1=colorGrad_values[0]
    if c2=="linear-gradient" or c2=="radial-gradient":
        a = onclick.split('(\'')
        b = a[3][4:-2]
        if b[0]!='l' or b[0]!='g':
            color2=b[7:]
        else:
            color2=b
    else:
        color2=c2 # colorGrad_values[1][2:]
    # 6
    anm_values = [value.strip('\'') for value in onclick.split('(')[1].split(')')[0].split(',')]
    anm_values[1]=anm_values[1][2:]
    if rootDir[:-6] == anm_values[0][:-6]:
        dir2=anm_values[0][-3:]
    else:
        dir2=anm_values[0]
        
    if len(anm_values)<3:
        dir3=''
    else:
        anm_values[2]=anm_values[2][2:]
        if rootDir[:-6] == anm_values[2][:-6]:
            dir3=anm_values[0][-3:]
        else:
            dir3=anm_values[2]
    
    
    res=[autor,nombre,[rootDir,dir2,dir3,disc],[color1,color2],target,link]
    print(f"{res},")
    
    
