const url = "https://botafogo-atletas.mange.li";

const numero_jogador = 56;

const body = document.body;
// body.style.display = 'flex';
// body.style.gap = '.5em';
// body.style.flexWrap = 'wrap';


const cria_cartao = (entrada) => {

    const container_atleta = document.createElement('article');
    container_atleta.style.width = '20rem';
    container_atleta.style.backgroundColor = '#777777';
    container_atleta.style.textAlign = 'center';
    container_atleta.style.margin = 'auto';

    container_atleta.dataset.id = entrada.id;
    container_atleta.dataset.altura = entrada.altura;
    container_atleta.dataset.nome_completo = entrada.nome_completo;
    container_atleta.dataset.nascimento = entrada.nascimento;

    const titulo = document.createElement('h3');
    titulo.innerHTML = entrada.nome;
    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `foto de ${entrada.nome}`;
    const descricao = document.createElement('p');
    descricao.innerHTML = entrada.descricao;

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(descricao);

    container_atleta.onclick = manipulaClick;

    document.body.appendChild(container_atleta);
}
const cria_senha = () => {
    let senha = document.getElementById("senha");
var teste=CryptoJS.MD5(senha.value);
console.log(teste);
localStorage.setItem('senha', "pudim");
console.log("AAAAAAAAAAAAAA");
}
const sair = () => {
    
localStorage.setItem('senha', "");
}

const manipulaClick = (e) => {
    const artigo = e.target.closest('article');
    //cookie
    document.cookie = `id=${artigo.dataset.id}`;
    document.cookie = `altura=${artigo.dataset.altura}`;
    document.cookie = `nome_completo=${artigo.dataset.nome_completo}`;
    document.cookie = `nascimento=${artigo.dataset.nascimento}`;

    localStorage.setItem('id', artigo.dataset.id);
    localStorage.setItem('altura', artigo.dataset.altura);
    localStorage.setItem('nome_completo', artigo.dataset.nome_completo);
    localStorage.setItem('nascimento', artigo.dataset.nascimento);

    sessionStorage.setItem('id', artigo.dataset.id);
    sessionStorage.setItem('altura', artigo.dataset.altura);
    sessionStorage.setItem('nome_completo', artigo.dataset.nome_completo);
    sessionStorage.setItem('nascimento', artigo.dataset.nascimento);
    sessionStorage.setItem('dados', JSON.stringify(artigo.dataset))



    console.log(acha_cookie('id'));
    console.log(localStorage.getItem('nome_completo'));
    console.log(JSON.parse(sessionStorage.getItem('dados')));

    window.location = `outra.html?id=${artigo.dataset.id}$nome_completo${artigo.dataset.nome_completo}`;
}

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find(
        (e) => e.startsWith(chave));
    return procurado.split('=')[1];
}

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

//pega_json(url).then((r) => console.log(r));

// pega_json(`${url2}`)

//     .then((r) => {
//         console.log(url2);
//         for (atleta of r) {
//             cria_cartao(atleta)
//         }
//     });

// console.log('síncrono');


const muda = (id) => {
    let getSEnha = localStorage.getItem('senha');
    if (getSEnha=="") {
        alert("Senha Invalida")
        return;
    }
    //console.log("aqui");
    switch (id) {
        case 1:
            pega_json(url + "/masculino")
            .then((r) => {
              
                for (atleta of r) {
                    cria_cartao(atleta)
                }
            });
            break;
        case 2:
            console.log("aqui2");
            pega_json(url + "/feminino")
            .then((r) => {
                
                for (atleta of r) {
                    cria_cartao(atleta)
                }
            });
            break;
        case 3:
            pega_json(url + "/all")
            .then((r) => {
                for (atleta of r) {
                    cria_cartao(atleta)
                }
            });
            break;

        default:
            break;
    }
}
const url3 = "https://www.google.com"

if(cria_senha = "pudim"){
    function openInNewTab(url3){
        const win = window.open(url3, '_blank')
        win.focus()
    }
}