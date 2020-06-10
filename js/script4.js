
let basket = document.querySelector('#basket')
let gude = document.querySelector('#gude')

var sampler = new Tone.Sampler({
	"C3" : "assets/audio/acertou.mp3",
	"C#3" : "assets/audio/errou.mp3"
}, function(){

   

    basket.onclick = function () {

        sampler.triggerAttack('C3')

        basket.classList.add('animate__flash')
        setTimeout(() => {

            window.location = 'q5.html'
            
        }, 3000);
        
    }

    gude.onclick = function () {

        sampler.triggerAttack('C#3')

        gude.classList.add('animate__shakeX')
        
    }
    
    

    
    





}).toDestination()