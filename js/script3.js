
let gomba = document.querySelector('#gomba')
let mario = document.querySelector('#mario')

var sampler = new Tone.Sampler({
	"C3" : "assets/audio/acertou.mp3",
	"C#3" : "assets/audio/errou.mp3"
}, function(){

   

    gomba.onclick = function () {

        sampler.triggerAttack('C3')

        gomba.classList.add('animate__flash')
        setTimeout(() => {

            window.location = 'q4.html'
            
        }, 3000);
        
    }

    mario.onclick = function () {

        sampler.triggerAttack('C#3')

        mario.classList.add('animate__shakeX')
        
    }
    
    

    
    





}).toDestination()