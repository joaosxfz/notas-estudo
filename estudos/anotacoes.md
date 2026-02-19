## 01 - Configurando ambiete:

cmd (windows): 

     git config --global user.name "<nome>"
     git config --global user.email "<email>"


ssh (gitbash):
```bash
Adicinar uma nova chave: ssh-keygen -t ed25519 -C "email";
```
```bash
Iniciar agente-ssh: eval "$(ssh-agent -s)";
```
```bash
Adicionar chave ssh ao agente: ssh-add ~/.ssh/id_ed25519;
```
```bash
Resultado colocar em "SSH and GPG keys";
```
teste: ```bash ssh -T git@github.com; ```

# notas-estudo
## Configurando Git

kjfbbir vh bwh uvwrv br3

```bash
git config --global
```