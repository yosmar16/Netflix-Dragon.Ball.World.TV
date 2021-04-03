lista = [
        {"nome":"O dragonballheroes","img1":"https://i.ibb.co/JkgS8bg/dragon-heroes.jpg","img2":"https://i.ibb.co/JkgS8bg/dragon-heroes.jpg","link":"capitulos/dragonballheroes/index.html"},
        {"nome":"O dragon-ball-z-la-resurreccion-de-freezer","img1":"https://www.cinemascomics.com/wp-content/uploads/2015/10/Dragon-Ball-Z-La-resurreccion-de-Freezer-Chequea-aqui-cuando-se-estrena-en-tu-pais1.jpg","img2":"https://www.cinemascomics.com/wp-content/uploads/2015/10/Dragon-Ball-Z-La-resurreccion-de-Freezer-Chequea-aqui-cuando-se-estrena-en-tu-pais1.jpg","link":"https://streamtape.com/v/7zYQmbzppMiAKJd/dragon-ball-z-la-resurreccion-de-freezer_1.mp4"},
        {"nome":"O dragon ball super broly","img1":"https://depor.com/resizer/uBdpx1UcosiRFWwNJTitGzCjwbc=/1200x675/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/G4XI7R3MFJGRPCHYJKKEZR3ENA.jpg","img2":"https://depor.com/resizer/uBdpx1UcosiRFWwNJTitGzCjwbc=/1200x675/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/G4XI7R3MFJGRPCHYJKKEZR3ENA.jpg","link":"**"},
        {"nome":"O dragon ball revolution","img1":"https://i.ytimg.com/vi/bJcF-of03JA/maxresdefault.jpg","img2":"https://i.ytimg.com/vi/bJcF-of03JA/maxresdefault.jpg","link":"**"},
        {"nome":"O dragon ball gt","img1":"https://www.tierragamer.com/wp-content/uploads/2019/02/dragon-ball-gt.jpg","img2":"https://www.tierragamer.com/wp-content/uploads/2019/02/dragon-ball-gt.jpg","link":"**"},
        {"nome":"O dragonball super","img1":"https://diariocorreo.pe/resizer/PrYLHCMTgURogGpJa_xn5nnUbpc=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/RESHE3ELQNH6BJ6BRSDIPLBYOM.jpg","img2":"https://diariocorreo.pe/resizer/PrYLHCMTgURogGpJa_xn5nnUbpc=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/RESHE3ELQNH6BJ6BRSDIPLBYOM.jpg","link":"**"},
        {"nome":"O dragonball super","img1":"https://www.themoviedb.org/t/p/original/s3clSZKSqJNILzmAEm5KaTUS5Z0.jpg","img2":"https://www.themoviedb.org/t/p/original/s3clSZKSqJNILzmAEm5KaTUS5Z0.jpg","link":"**"},
        {"nome":"O dragonball super","img1":"https://www.koi-nya.net/img/subidos_posts/2018/01/DBZ-X-Keepers-PV_01-21-18.jpg","img2":"https://www.koi-nya.net/img/subidos_posts/2018/01/DBZ-X-Keepers-PV_01-21-18.jpg","link":"**"},

 

 


  


        ]


    for(i of lista){
        div = document.createElement('div')
        div.classList.add("card")
        div.innerHTML = `<img src='${i.img1}'><img src='${i.img2}'>`
        div.i = i
        div.onclick=function(){
            ifr.src = ""
            ifr.src = `${this.i.link}`
            caixa.checked=true
        }
        conteudo.appendChild(div)
    }


        