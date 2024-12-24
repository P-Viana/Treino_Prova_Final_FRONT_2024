function abrirmodal(){
    document.getElementById("modal").showModal()
}

function fecharmodal(){
    document.getElementById("modal").close()
}

function enviardados() {
    alert("O seus dados foram atualizados com sucesso!")
}

function salvarnome(){
    const nomeSalvar  = document.getElementById("nome").value
    localStorage.setItem("nomeAtualizado", nomeSalvar)
}

function salvaremail(){
    const emailSalvar  = document.getElementById("email").value
    localStorage.setItem("emailAtualizado", emailSalvar)
}

function salvartelefone(){
    const telefoneSalvar = document.getElementById("telefone").value
    if (telefoneSalvar[0]!="(")
            {
                if(telefoneSalvar[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+telefoneSalvar[0];
                }
            }

            if (telefoneSalvar[3]!=")")
            {
                if(telefoneSalvar[3]!=undefined)
                {
                    document.getElementById("telefone").value=telefoneSalvar.slice(0,3)+")"+telefoneSalvar[3]
                }
            }

            if (telefoneSalvar[9]!="-")
            {
                if(telefoneSalvar[9]!=undefined)
                {
                    document.getElementById("telefone").value=telefoneSalvar.slice(0,9)+"-"+telefoneSalvar[9]
                }
            }
    localStorage.setItem("telefoneAtualizado", telefoneSalvar)
}

function salvarcpf(){
    const CPFsalvar = document.getElementById("cpf").value

        if (CPFsalvar[3]!=".")
        {
            if(CPFsalvar[3]!=undefined)
            {
                document.getElementById("cpf").value=CPFsalvar.slice(0,3)+"."+CPFsalvar[3]
            }
        }
        if (CPFsalvar[7]!=".")
        {
            if(CPFsalvar[7]!=undefined)
            {
              document.getElementById("cpf").value=CPFsalvar.slice(0,7)+"."+CPFsalvar[7]
            }
        }

        if (CPFsalvar[11]!="-")
        {
            if(CPFsalvar[11]!=undefined)
            {
                document.getElementById("cpf").value=CPFsalvar.slice(0,11)+"-"+ CPFsalvar[11]
            }
        }
    localStorage.setItem("cpfAtualizado", CPFsalvar)
}

function salvarsenha(){
    const SenhaSalvar = document.getElementById("senha").value
    localStorage.setItem("senhaAtualizada", SenhaSalvar)
}

addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("nome2").innerHTML = localStorage.getItem("nomeAtualizado")
    document.getElementById("email2").innerHTML = localStorage.getItem("emailAtualizado")
    document.getElementById("cpf2").innerHTML = localStorage.getItem("cpfAtualizado")
    document.getElementById("telefone2").innerHTML = localStorage.getItem("telefoneAtualizado")
    document.getElementById("senha2").innerHTML = localStorage.getItem("senhaAtualizada")
})