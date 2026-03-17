# Notas - Estudos
## 01 - Configurando ambiete:

cmd (windows): 
```bash
git config --global user.name "nome"
git config --global user.email "email"
```
ssh (gitbash):

Adicinar uma nova chave:
```bash
ssh-keygen -t ed25519 -C "email"
```
Iniciar agente-ssh:
```bash
eval "$(ssh-agent -s)"
```
Adicionar chave ssh ao agente:
```bash
ssh-add ~/.ssh/id_ed25519
```
Copiar a chave pública:
```bash
cat ~/.ssh/id_ed25519.pub
```
Resultado colocar em "SSH and GPG keys"

teste: 
```bash 
ssh -T git@github.com
```

## 02 - Comandos Básicos

Clonar Repositório:
```bash
git clone
```
Atualizar Repositório:
```bash
git pull
```

Linkar ao CSS:
```bash
<link type="text/css" rel="stylesheet" href="./css/tema.css">
```

Linkar:
```bash
<script src="./..."></script>
```

Entre dois números (10-50):
```bash
variavel >= 10 && variavel <= 50
```


## 03 - Fórmulas

Porcentagem:
```bash
valor * (1 + porcentagem / 100)
```

## 04 - Doom

Função e Conexão com Botão no Index:
```bash
function exercicio1() {

}
const buttonexercicio1 = document.getElementById("exercicio1")
buttonexercicio1.addEventListener('click', () => { exercicio1() })
```

Botão no Index:
```bash
<button id="exercicio1">Executar Exercicio 1</button>
```

## 05 - HTML e CSS
```bash
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <body style="background-color:rgba(23, 56, 104, 0.945);"></body>
    <div id="titulo">
        <h1><i>AVALIAÇÃO 01 - RENAN<i></h1>
    </div>
    <div id="titulo2">
        <h3>Feito por João Victor Costa Souza</h3>
    </div>
    <main>
        <ol>
            <h2> Exercicios:</h2>
            <div class="botao">
                <li><button id="exercicio1">Executar Exercicio 1</button></li>
                <li><button id="exercicio2">Executar Exercicio 2</button></li>
            </div>
        </ol>
    </main>

    <script src="scripts/avaliacao.js"></script>
    <link type="text/css" rel="stylesheet" href="./css/tema.css">
</body>

</html>
```
```bash
#titulo {
    text-align: center;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    background-color: dimgray;
    border: 2px solid black;
    border-radius: 10px;
}

#titulo2 {
    text-align: center;
}

.botao {
   border: none;
   width: 200px;
}

li:hover {
    background: rgb(0, 0, 0);
}
```