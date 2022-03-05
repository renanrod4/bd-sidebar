/**
 * @name Myplugin
 * @author Renan
 * @version 0.0.1
 * @description just my plugin 
 **/

module.exports = class Myplugin {
    load(){
        var serversidebar = document.querySelector(".wrapper-1_HaEi.guilds-2JjMmN")
        var privateChannels = document.querySelector(".sidebar-1tnWFu")
        console.log(privateChannels);
        console.log(serversidebar);
        serversidebar.style.width = "0" // default: 72px
        privateChannels.style.width = "0" // default: 240px

        document.addEventListener(("keydown"),(k)=>{
            if(k.key == "Control"){
                serversidebar.style.width = "72px"
            }
            if (k.key == "Alt"){
                privateChannels.style.width = "240px"

            }
        })
        document.addEventListener(("keyup"),(k)=>{
            if(k.key == "Control"){
                serversidebar.style.width = "0px" 

            }
            if (k.key == "Alt"){
                privateChannels.style.width = "0px"

            }
        })
    }
    start(){

    }
    stop(){

    }
}