
let d = document.querySelector('#d')
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

var sampler = new Tone.Sampler({
	"C3" : "assets/audio/acertou.mp3",
	"C#3" : "assets/audio/errou.mp3"
}, function(){

   

    c.onclick = function () {

        sampler.triggerAttack('C3')

        c.classList.add('animate__flash')
        setTimeout(() => {

            window.location = 'win.html'
            
        }, 3000);
        
    }

    a.onclick = function () {

        sampler.triggerAttack('C#3')

        a.classList.add('animate__shakeX')
        
    }

    d.onclick = function () {

        sampler.triggerAttack('C#3')

        d.classList.add('animate__shakeX')
        
    }
    

    b.onclick = function () {

        sampler.triggerAttack('C#3')

        b.classList.add('animate__shakeX')
        
    }
    
    
    

    
    





}).toDestination()