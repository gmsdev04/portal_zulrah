function InserirMensagemErro(msg) {
    span = document.createElement("span");
    span.classList.add("msg-erro", "msgErro");
    span.innerHTML = msg;
    return span;
}

function LimpaMensagemErro() {
    if (document.getElementsByClassName("msgErro").length > 0) {
        var msgErro = document.getElementsByClassName("msgErro");
        while (msgErro.length > 0) {
            msgErro[0].parentNode.removeChild(msgErro[0]);
        }
    }
}

function Validar() {
    event.preventDefault();
    LimpaMensagemErro();

    // Formulário
    var form = document.querySelector("#form");
    let validado = true;

    // Valores input
    let nome = form.nome.value;
    let nomeEmpresa = form.empresa.value;
    let email = form.email.value;
    let ddd = form.ddd.value;
    let tel = form.telefone.value;
    let formaContato = form.formaContato.value;
    let comentario = form.comentario.value;

    // Inputs
    let nomeInput = document.getElementById("nome");
    let nomeEmpresaInput = document.getElementById("empresa");
    let emailInput = document.getElementById("email");
    let dddInput = document.getElementById("ddd");
    let telefoneInput = document.getElementById("telefone");
    let comentarioInput = document.getElementById("comentario");

    if (nome === null || nome === "") {
        nomeInput.insertAdjacentElement('afterend', InserirMensagemErro("Este campo é obrigatório"));
        form.nome.focus();
        validado = false;
    }

    if (nome.length > 50) {
        nomeInput.insertAdjacentElement('afterend', InserirMensagemErro("O campo deve ter menos que 50 letras"));
        form.nome.focus();
        validado = false;
    }

    if (nomeEmpresa.length > 50) {
        nomeEmpresaInput.insertAdjacentElement('afterend', InserirMensagemErro("O campo deve ter menos que 50 letras"));
        form.empresa.focus();
        validado = false;
    }

    if (email.length > 70) {
        emailInput.insertAdjacentHTML('afterend', InserirMensagemErro("O campo deve ter menos que 70 letras"));
        form.email.focus();
        validado = false;
    }

    if (ddd.length > 2) {
        dddInput.insertAdjacentElement('afterend', InserirMensagemErro("O campo deve ter no máximo 2 caracteres"));
        form.ddd.focus();
        validado = false;
    }



    if (comentario.length > 200) {
        comentarioInput.insertAdjacentElement('afterend', InserirMensagemErro("O campo deve ter menos que 200 letras"));
        form.comentario.focus();
        validado = false;
    }

    switch (formaContato) {
        case "Telefone":
            if (tel === null || tel === "") {
                telefoneInput.insertAdjacentElement('afterend', InserirMensagemErro("Este campo é obrigatório"));
                form.telefone.focus();
                validado = false;

                if (ddd === null || ddd === "") {
                    dddInput.insertAdjacentElement('afterend', InserirMensagemErro("O campo é obrigatório"));
                    form.ddd.focus();
                    validado = false;
                }
            }
            break;
        case "Email":
            if (email === null || email === "") {
                emailInput.insertAdjacentElement('afterend', InserirMensagemErro("Este campo é obrigatório"));
                form.email.focus();
                validado = false;
            }
            break;
        default:
            if (email === null || email === "") {
                emailInput.insertAdjacentElement('afterend', InserirMensagemErro("Este campo é obrigatório"));
                form.email.focus();
                validado = false;
            }

            if (tel === null || tel === "") {
                telefoneInput.insertAdjacentElement('afterend', InserirMensagemErro("Este campo é obrigatório"));
                form.telefone.focus();
                validado = false;
            }

            break;
    }

    if (validado) {
        CriarObjeto(form);
        ExibirMsgSucesso();
    }
}

function ExibirMsgSucesso() {
    swal({
        title: 'Enviado!',
        text: 'Obrigado pela confiança! Aguarde que muito em breve retornaremos o contato.',
        type: 'success',
        confirmButtonText: 'De nada!'
    });
    form.reset();
}


function CriarObjeto(form) {
    var SolicitacaoContato = {
        NomeSolicitante: form.nome.value,
        NomeEmpresa: form.empresa.value,
        Email: form.email.value,
        Ddd: form.ddd.value,
        NumeroTelefone: form.telefone.value,
        FormaContato: form.formaContato.value,
        Comentario: form.comentario.value
    };

    $.ajax({
        url: '/SolicitacaoContato/NovaAsync',
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(SolicitacaoContato),
        contentType: 'application/json; charset=utf-8',
        success: function (xhr, textStatus, errorThrown) {
            console.log("ok");
        },
        error: function (response) {
            console.log(response.responseText);
        }
    });

}

