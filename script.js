let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {

    button.addEventListener("click", (e) => {

        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == "del") {
            string = "";
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == "clr") {
            string = string.slice(0,-1);
            document.querySelector("input").value = string;
        }
        else {
            string += e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })

    // button.addEventListener("click", function() {
    //     let buttonpressed = this.innerHTML 

    //     if (buttonpressed == "=") {
    //         string = eval(string);
    //         document.querySelector("input").value = string;
    //     }
    //     else if(buttonpressed == "del") {
    //         string = "";
    //         document.querySelector("input").value = string;
    //     }
    //     else if(buttonpressed == "C") {
    //         string = string.slice(0,-1);
    //         document.querySelector("input").value = string;
    //     }
    //     else {
    //         string += buttonpressed;
    //         document.querySelector("input").value = string;
    //     }
    // })
})