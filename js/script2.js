
let moto = document.querySelector('#moto')
let bike = document.querySelector('#bike')

var sampler = new Tone.Sampler({
	"C3" : "assets/audio/acertou.mp3",
	"C#3" : "assets/audio/errou.mp3"
}, function(){

   

    moto.onclick = function () {

        sampler.triggerAttack('C3')

        moto.classList.add('animate__flash')
        setTimeout(() => {

            window.location = 'q3.html'
            
        }, 3000);
        
    }

    bike.onclick = function () {

        sampler.triggerAttack('C#3')

        bike.classList.add('animate__shakeX')
        
    }
    
    

    
    





}).toDestination()