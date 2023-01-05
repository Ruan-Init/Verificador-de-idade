function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var gênero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked) {
            gênero ='Homem'
            if(idade >=0 && idade < 10){
                //Criança
             img.setAttribute('src', 'Imagens/menino.png')
             document.body.style.background = '#292933'
            }else if (idade < 21){
                //Jovem
             img.setAttribute('src', 'Imagens/garoto.png')
             document.body.style.background = '#af8366'
            }else if(idade < 50){
                //Adulto
             img.setAttribute('src', 'Imagens/homem.png')
             document.body.style.background = '#af5b20'
            }else{
                //Idoso
            img.setAttribute('src', 'Imagens/idoso.png')
            document.body.style.background = '#c69b84'
        }
            

            
        } else if (fsex[1].checked) {
           gênero = 'Mulher'
           if(idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src', 'Imagens/menina.png')
            document.body.style.background = '#54292b'
        }else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'Imagens/garota.png')
            document.body.style.background = '#875a63'
        }else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'Imagens/mulher.png')
            document.body.style.background = '#4a4b45'
        }else{
            //Idoso
            img.setAttribute('src', 'Imagens/idosa.png')
            document.body.style.background = '#877f45'
        }


       
        }      
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    } 



}
