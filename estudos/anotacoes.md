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
