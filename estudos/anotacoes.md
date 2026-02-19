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