(function() {  // Function som anropar sig själv och kapslar in koden nedanför så den inte kan nås utifrån



document.getElementById("btn1").addEventListener("click", myBishBosh);

function myBishBosh() {

    let myTotal = parseInt(document.getElementById("totIter").value, 10);

    let myFirst = parseInt(document.getElementById("firstMod").value, 10);

    let mySecond = parseInt(document.getElementById("secondMod").value, 10);

    let log = document.getElementById("log");
    let result = "";


    //for (let i = 1; i <= myTotal; i++) {
    //    str = ''
    //    if (i % myFirst === 0) str = '-Bish'
    //    if (i % mySecond === 0) str += '-Bosh'
    //    str = (str) ? str.substr(1) : i;
    //}

        for (let i = 1; i <= myTotal; i++) {
            if (i % myFirst === 0 && i % mySecond === 0) {
                result += "Bish-Bosh" + "<br>";
            }
            else if (i % myFirst === 0) {
                result += "Bish" + "<br>";
            }
            else if (i % mySecond === 0) {
                result += "Bosh" + "<br>";
            }
            else {
                result += i.toString() + "<br>";
            }
    }

    log.innerHTML = result;

    event.preventDefault();
}

//    for (let i = 1; i <= myTotal; i++) {
//        if (i % myFirst === 0 && i % mySecond === 0) {
//            document.write("Bish-Bosh");
//            document.write("<br>")
//        }
//        else if (i % myFirst === 0) {
//            document.writeln("Bish");
//            document.write("<br>")
//        }
//        else if (i % mySecond === 0) {
//            document.writeln("Bosh");
//            document.write("<br>")
//        }
//        else {
//            document.writeln(i);
//            document.write("<br>")
//        }
//    }
//}

})();

