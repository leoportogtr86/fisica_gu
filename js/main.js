let morcego = document.querySelector('#morcego')
let pterodatilo = document.querySelector('#pterodatilo')
let moto = document.querySelector('#moto')
let bike = document.querySelector('#bike')

var sampler = new Tone.Sampler({
	"C3" : "assets/audio/acertou.mp3",
	"C#3" : "assets/audio/errou.mp3"
}, function(){

    morcego.onclick = function () {

        sampler.triggerAttack('C#3')
        morcego.classList.add('animate__shakeX')
        
        
    }

    pterodatilo.onclick = function () {

        sampler.triggerAttack('C3')

        pterodatilo.classList.add('animate__flash')

        setTimeout(() => {

            window.location = 'q2.html'
            
        }, 3000);
        
    }

    moto.onclick = function () {

        sampler.triggerAttack('C3')

        moto.classList.add('animate__flash')
        
    }

    bike.onclick = function () {

        sampler.triggerAttack('C#3')

        bike.classList.add('animate__shakeX')
        
    }
    
    

    
    





}).toDestination()