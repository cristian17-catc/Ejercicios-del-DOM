
let $btn = document.getElementById("btn"),
    $contenedor = document.querySelector(".contenedor"),
    $header2 = document.querySelector("header")


$btn.addEventListener("click", () => {
    $contenedor.classList.toggle("translate")
})

window.addEventListener("scroll", () => {
    if(window.scrollY > 122){
        $header2.classList.replace("header", "header2")
    }else{
        $header2.classList.replace("header2", "header")
    }
})

// relog
// let hora = setInterval(() => { console.clear();let fecha = new Date().toLocaleTimeString(); console.log(fecha);},1000);



// let $iniRel = document.getElementById("reloj")
// $iniRel.addEventListener("click", () => {
//     let hora = setInterval(() => {
//         let fecha = new Date().toLocaleTimeString()
//         },1000)
// })

let $iniRel = document.getElementById("reloj"),
    $detRel = document.getElementById("det-relo"),
    $vaHours = document.getElementById("va-hour"),
    $alarm = document.getElementById("alarm"),
    $detAlarm = document.getElementById("det-alarm"),
    $soundAlarm = document.getElementById("sound-alarm")

    let hora;
    

document.addEventListener("click", (e) => {
    if(e.target.matches("#reloj")){
    hora = setInterval(() => {
        let fecha = new Date().toLocaleTimeString()
        $vaHours.innerHTML = `${fecha}`
        },1000)
    $iniRel.setAttribute("disabled", true)
    $detRel.removeAttribute("disabled")
    }

    if(e.target.matches("#det-relo")){
        $vaHours.innerHTML = `Reloj detenido`
        $iniRel.removeAttribute("disabled")
        $detRel.setAttribute("disabled", true)
        clearInterval(hora)
    }

    if(e.target.matches("#alarm")){
        $vaHours.innerHTML = `Alarma activada`
        $detAlarm.removeAttribute("disabled")
        $alarm.setAttribute("disabled", true)
        // $soundAlarm.setAttribute("autoplay", true)
        $soundAlarm = document.getElementById("sound-alarm").play()
    }

    if(e.target.matches("#det-alarm")){
        $vaHours.innerHTML = `Alarma detenida`
        $alarm.removeAttribute("disabled")
        $detAlarm.setAttribute("disabled", true)
        $soundAlarm = document.getElementById("sound-alarm").load()
    }

    

})

console.log(window)
