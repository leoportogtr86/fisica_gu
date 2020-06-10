
let canhao = document.querySelector('#canhao')
let ping = document.querySelector('#ping')

var sampler = new Tone.Sampler({
	"C3" : "assets/audio/acertou.mp3",
	"C#3" : "assets/audio/errou.mp3"
}, function(){

   

    canhao.onclick = function () {

        sampler.triggerAttack('C3')

        canhao.classList.add('animate__flash')
        setTimeout(() => {

            window.location = 'q6.html'
            
        }, 3000);
        
    }

    ping.onclick = function () {

        sampler.triggerAttack('C#3')

        ping.classList.add('animate__shakeX')
        
    }
    
    

    
    





}).toDestination()