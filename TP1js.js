function helloWorld()
        {
            document.getElementById("myP").innerHTML = "Hello World Punto 1"
        }

function helloWorld2()
        {
            document.getElementsByClassName("test")[0].innerHTML = "Hello World Punto 2"
        }
function insertRow()
        {
            var tbody = document.getElementsByTagName("tbody")[0].insertRow(-1)
            let row1 = tbody.insertCell(0)
            row1.innerHTML= "--"
            let row2 = tbody.insertCell(1)
            row2.innerHTML = "--"
        }

        function deleteRow() 
        {
            var tbody = document.getElementsByTagName ("tbody")[0].deleteRow(-1)
        }

