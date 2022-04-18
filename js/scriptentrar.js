
const btentrar = document.getElementById("entrar")

btentrar.addEventListener("click",entrar);
function entrar(){
    if(document.getElementById("email").value == "manu@gmail.com" && document.getElementById("senha").value=="123"){
        window.open('./dashboard.html');
    }else{
        alert("E-mail ou senha invalido!!");
    }
}