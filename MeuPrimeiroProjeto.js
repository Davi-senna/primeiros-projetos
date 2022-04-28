var listaUsuarios = []

menuFora()

function menuFora() { // função para o primeiro menu
    var opcao = Number(prompt("Qual ação deseja fazer? \n\n 1- cadastrar novo usario \n 2- Fazer login \n 0- Sair"))
    switch (opcao) {
        case 1:
            cadastrar()
            menuFora()
            break;

        case 2:
            login()
            break;

        case 0:
            break;

        default:
            alert("Opção invalida")
            menuFora()
            break;
    }
}

function menu() { // função para o segundo menu
    var opcao = Number(prompt("Qual ação deseja fazer \n\n 1- Fazer saque \n 2- Fazer depósito \n 3-Fazer transferências \n 4-consultar o saldo \n 0- sair"))
    switch (opcao) {
        case 1:
            var saque = Number(prompt("Informe o valor a ser sacado"))
            if (saque < listaUsuarios[UsuarioAtual].saldo) {
                listaUsuarios[UsuarioAtual].saldo = listaUsuarios[UsuarioAtual].saldo - saque
            } else {
                alert("Saldo Insuficiente")
            }
            menu()
            break;

        case 2:
            var deposito = Number(prompt("Informe o valor a ser depositado"))
            listaUsuarios[UsuarioAtual].saldo = listaUsuarios[UsuarioAtual].saldo + deposito
            menu()
            break;

        case 3:
            tranferencia()
            break;

        case 4:
        var dinheiro = listaUsuarios[UsuarioAtual].saldo.toLocaleString('pt-br',{style:'currency',currency: 'BRL'})    
        alert(`O seu saldo é: \n ${dinheiro}`)
            menu()
            break;
        case 0:
            menuFora()
            break;
        default:
            alert("Opção invalida")
            menu()
            break;
    }
}

function cadastrar() {

    var usuario = {
        nome: prompt("Informe o seu nome completo:"),
        idade: Number(prompt("Informe sua idade:")),
        cidade: prompt("Informe a cidade em que você reside"),
        email: prompt("Digite seu Email"),
        id: listaUsuarios.length,
        nomeUsuario: prompt("Informe o seu nome de Úsuario"),
        senha: prompt("Informe uma senha"),
        saldo: 0,
    }
    var existe = false;
    for (i = 0; i !== listaUsuarios.length && existe == false; i++) {
        if (usuario.nomeUsuario == listaUsuarios[i].nomeUsuario) {
            alert("O usuario que você digitou já existe")
            existe = true
        }
    }
    if (existe == false) {

        if (usuario.idade >= 18) {
            listaUsuarios.push(usuario),
                alert(`Essas são informações do seu usuário \n Nome: ${usuario.nome} \n Idade: ${usuario.idade} \n Cidade: ${usuario.cidade} \n email: ${usuario.email} \n Nome de usuario: ${usuario.nomeUsuario} `);
        } else {
            alert("Desculpe mas sua idade é menor que a idade necessária ")
            menuFora()
        }
    } else {
        menuFora
    }
}
var UsuarioAtual = 0; //Para saber qual o usuario que está logado

function login() {
    var flag = false;
    var testeUsu = prompt("Informe seu Usuário");
    for (i = 0; i !== listaUsuarios.length && flag === false; i++) {
        if (listaUsuarios[i].nomeUsuario == testeUsu) {
            var comfirmSenha = prompt("Informe sua senha")
            if (comfirmSenha == listaUsuarios[i].senha) {
                flag = true;
                UsuarioAtual = i
                menu()
            } else {
                alert("senha incorreta")
                alert("Tente Novamente")
            }
            if (flag === false) {
                comfirmSenha = prompt("Informe sua senha")
                if (comfirmSenha == listaUsuarios[i].senha) {
                    flag = true;
                    UsuarioAtual = i
                    menu()
                } else {
                    alert("senha incorreta")
                    menuFora()
                }
            }
        }
    }
    if (flag == false) {
        alert("Usuário não encontrado")
        menuFora()
    }
}

function tranferencia() {
    var ProcurarUsu = prompt("Informe o Usuário da pessoa a quem deseja tranferir");
    var UsuAchado = false;
    for (i = 0; i !== listaUsuarios.length && UsuAchado == false; i++) {
        if (listaUsuarios[i].nomeUsuario == ProcurarUsu) {
            var valorTransferir = Number(prompt("Informe o valor que deseja tranferir"))
            if (valorTransferir <= listaUsuarios[UsuarioAtual].saldo) {
                listaUsuarios[UsuarioAtual].saldo = listaUsuarios[UsuarioAtual].saldo - valorTransferir
                listaUsuarios[i].saldo = listaUsuarios[i].saldo + valorTransferir
                UsuAchado = true;
            } else {
                alert("Saldo insuficiente")
                UsuAchado = true;
                menu()
        }
        }
    }
    if (UsuAchado == false) {
        alert("Usuário não encontrado")
        menu()
    }
    if (UsuAchado == true) {
        alert("Você fez a transferência com sucesso")
        menu()
    }
}

console.log(listaUsuarios)