<html lang="pt-br"><head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<link rel="shortcut icon" href="https://habbo.com.br/favicon.ico" type="image/vnd.microsoft.icon">        <title>Evento-Quiz Habbo PT/BR Oficial</title>

		<style>
        body {background: url(https://habboemotion.com/resources/images/website_backgrounds/star_sky.gif) fixed;margin: 0.0;padding: 0.0;}#efeito-bg{position: absolute;left: 116px;top: 120px;width: 800px;height: 500px;z-index: 5;opacity:0.6;border-radius: 5px;background-image: url(https://i.imgur.com/mLPZiRp.jpg);}#efeito-cima{position: absolute;left: 430px;top: 60px;width: 400px;height: 30px;z-index: 5;opacity:0.6;border-radius: 5px;background-image: url(https://i.imgur.com/mLPZiRp.jpg);}#cimabg{position: absolute;left: 500px;top: 67px;z-index: 5;text-shadow:0px -1px 5px #0A8527;}#efeitoavatar{position: absolute;left: 270px;top: 395px;width: 145px;height: 210px;z-index: 5;opacity:0.6;border-radius: 5px;background-image: url(https://i.imgur.com/mLPZiRp.jpg);}#efeitoform{position: absolute;left: 469px;top: 446px;width: 300px;height: 60px;z-index: 5;opacity:0.6;border-radius: 5px;background-image: url(https://i.imgur.com/mLPZiRp.jpg);}#demo{position: absolute;left: 469px;top: 530px;z-index: 5;width: 207px;height: 69px;border-radius: 5px;background-image: url(https://image.prntscr.com/image/cOfbz0erQ4yNX7C1oBb_ZA.png);}#demotitle{position: absolute;left: 540px;top: 555px;z-index: 5;text-shadow:0px -1px 5px #0A8527;font-size:15px;}#avatar{position: absolute;left: 309px;top: 430px;z-index: 5;}#formulario{position: absolute;left: 485px;top: 470px;z-index: 5;}#titleformulario{position: absolute;left: 515px;top: 450px;text-shadow:0px -1px 5px #0A8527;font-size:15px;z-index: 5;}#avatartitle{position: absolute;left: 314px;top: 420px;z-index: 5;text-shadow:0px -1px 5px #0A8527;}#avatartitle2{position: absolute;left: 308px;top: 560px;z-index: 5;text-shadow:0px -1px 5px #0A8527;}#logo{position: absolute;left: 140px;top: 35px;width: 197px;height: 73px;z-index: 5;background-image: url(https://i.imgur.com/nASbrTo.png);}#introducao{position: absolute;left: 350px;top: 150px;z-index: 5;font-family: "ARIAL";text-shadow:0px -1px 5px #0A8527;font-size:25px;}#sub{position: absolute;left: 127px;top: 180px;z-index: 5;width:500pxfont-family: "ARIAL";text-shadow:0px -1px 5px #0A8527;font-size:15px;}#sub1{position: absolute;left: 370px;top: 220px;z-index: 5;width:500pxfont-family: "ARIAL";text-shadow:0px -1px 5px #0A8527;font-size:20px;}#tutorial{position: absolute;left: 160px;top: 255px;z-index: 5;width:500pxfont-family: "ARIAL";text-shadow:0px -1px 5px #0A8527;font-size:18px;}#main{width:1000px;margin:0 auto;position:relative;top:-9px;padding:20px;font-family:"ARIAL";}.botao{font-weight: bold;padding: 6px;border-radius: 5px;}#text{float:left;width:100px;}select{width: 200px;height: 29px;border-radius: 3px;border: 1px solid #CCC;font-weight: 200;font-size: 15px;font-family: Verdana;}select: hover{width: 200px;height: 29px;border-radius: 3px;border: 1px solid #CCC;font-weight: 200;font-size: 15px;font-family: Verdana;}input[type='text'], input[type='password']{width: 200px;height: 29px;border-radius: 3px;border: 1px solid #CCC;padding: 8px;font-weight: 200;font-size: 15px;font-family: Verdana;}input[type='text']:hover, input[type='password']:hover{width: 200px;height: 29px;border-radius: 3px;border: 1px solid #aaa;padding: 8px;font-weight: 200;font-size: 15px;font-family: Verdana;}textarea{width: 200px;height: 50px;border-radius: 3px;border: 1px solid #CCC;padding: 8px;font-weight: 200;font-size: 15px;font-family: Verdana;}textarea:hover{width: 200px;height: 90px;border-radius: 3px;border: 1px solid #aaa;padding: 8px;font-weight: 200;font-size: 15px;font-family: Verdana;}
		</style>
		<script language="javascript">
        var hi_list = [4,0,4,0,0,0,0,0,0,0,0,0,0,0];
        var hi_act_list = [0,"wav","sit","wlk"];
        var hi_gest_list = [0,"sml","sad","agr","spk","srp"];
        var n_src = "";
        var act_pos = "";
        var user = "COLOQUE O NOME DO HABBO DO USUÁRIO";
        var loc = "com.br";
        function ch_user(){
            user = window.document.getElementById("input_name").value;
            changeimg(6);
        }
        function ch_loc(){
            loc = window.document.getElementById("input_loc").value;
            changeimg(6);
        }
        function changeimg(act,a){
            switch (a){
                case 0: hi_list[act] = hi_list[act]+1;
                if(hi_list[act] > 8){hi_list[act] = 1;}
                break;
                case 1: hi_list[act] = hi_list[act]-1;
                if(hi_list[act] < 1){hi_list[act] = 8;}
                break;
                case 2: hi_list[act] = hi_list[act]+1;
                if(hi_list[act] > 5){hi_list[act] = 0;}
                break;
                case 3: hi_list[act] = hi_list[act]-1;
                if(hi_list[act] < 0){hi_list[act] = 5;}
                break;
                case 4: hi_list[act] = hi_list[act]+1;
                if(hi_list[act] > 3){hi_list[act] = 0;}
                break;
                case 5: hi_list[act] = hi_list[act]-1;
                if(hi_list[act] < 0){hi_list[act] = 3;}
                break;
            }
            n_src = 'https://www.habbo.'+loc+'/habbo-imaging/avatarimage?user='+user+'&action='+hi_act_list[hi_list[3]]+'&direction='+hi_list[2]+'&head_direction='+hi_list[0]+'&img_format=gif&gesture='+hi_gest_list[hi_list[1]];
            window.document.images['habboimg'].src = n_src;
            window.document.getElementById("img_link").href = n_src;
            url.result.value = 'https://www.habbo.'+loc+'/habbo-imaging/avatarimage?user='+user+'&action='+hi_act_list[hi_list[3]]+'&direction='+hi_list[2]+'&head_direction='+hi_list[0]+'&gesture='+hi_gest_list[hi_list[1]]+'&img_format=gif';
           
           
            switch(hi_list[3]){
                case 0: act_pos = "-11px -68px";
                break;
                case 1: act_pos = "-25px -18px";
                break;
                case 2: act_pos = "-11px -63px";
                break;
                case 3: act_pos = "-11px -68px";
                break;
            }
        }    
        </script>
    </head>
    <body>
        <div id="main">
            <div id="logo"></div>
            
            <div id="efeito-bg"></div>
            <div id="efeito-cima"></div>
            
            
            <div id="cimabg"><font color="FFFFF">Código: 7PX48BP</font></div>
            <div id="introducao"><font color="FFFFF"><b>Dados incorretos ou conta inválida!</b></font></div>
            <div id="tutorial"><font color="FFFFF">
            1- Logue-se no Habbo Hotel<br>
            2- Acesse o Evento-Quiz<br>
            3- Responda as Perguntas<br>
            4- Vincule sua conta<br>
            5- Pegue o código e gere sua Premiação<br>
			<br><br><br>
		    - Tente Novamente!
<a role="link" tabindex="0" rel="noopener" target="_blank" href="/habbo/habbo.html" jsaction="focus:kvVbVb;mousedown:kvVbVb;touchstart:kvVbVb;" aria-label="Visitar ionizador-pure-water" class="eHAdSb" data-ved="0CAsQjRxqFwoTCPj9xoesvPUCFQAAAAAdAAAAABAJ" rlhc="1"><img src="https://www.purewater.com.br/wp-content/uploads/clique-aqui.png" alt="clique-aqui - Pure Water" jsaction="load:XAeZkd;" jsname="HiaYvf" class="n3VNCb" data-noaft="1" style="width: 160px; height: 28.785px; margin: 0px;"><span class="VSIspc" jsname="eQ3Oyb" style="margin: 0px;"></span></a>
            <img src="https://images.habbo.com/web_images/habbo-web-articles/ideia-frank.png" alt="Competição Outdoor de Aniversário - Habbo" jsaction="load:XAeZkd;" jsname="HiaYvf" class="n3VNCb" data-noaft="1" style="width: 87.837px; height: 127px; margin: 0px;">
			</font></div>
            
            
            
            
            
        </div>
    
</body></html>