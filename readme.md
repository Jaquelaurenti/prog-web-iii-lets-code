# Passo a Passo

Criar uma pasta chamada backend, dentro dessa pasta backend, rodar o comando:

```
npm init
```

após rodar o npm init, irá criar o arquivo do package.json

instalar as seguintes dependencias:

### express
```
npm i express
```
### nodemon
```
npm i nodemon -D
instalando apenas em ambiente de desenvolvimento
```

#### Configurando o uso do nodemonn
O nodemon é utilizado para que a cada alteração salva, você não precise ficar subindo o servidor toda hora.
No arquivo #package.json, insira a seguinte informação:
```
"scripts": {
    "dev": "nodemon --inspect src/server.js"
  },
```
### rodando a aplicação

```
npm run dev
```
Agora sua aplicação esterá disponpivel com o nodemonm e sempre que salvar um arquivo, não precisará mais subir o servidor para a aplicação refletir.

### mongoose
```
npm i mongoose
```

### requireDir
```
npm i require-dir
```


Após criar o passo a passo acima, estamos prontos para começar criar nossas pastas.

## Criando as pastas

[x] src
    - Responsável por armazenar TODA a estrutura base da nossa aplicação

#### Dentro da pasta src criar as pastas abaixo
[x] controllers
- Reponsável por armazenar o que foi recebido da requisição do client e passar ao servidor, processar e depois retornar ao client o que o servidor processou.
- É como se fosse um túnel entre o Client e Servidor


[x] models
- Responsável por fazer a representação das Entidades que vamos usar na aplicação


[x] repositories
- Reponsável por representar tudo que fará acesso ao banco de dados, exemplo: consultas, alterações, etc.
- Tudo que precise de alteração em BD ficará nessa camada.


[x] routers
- Crie um arquivo de index, para indexar todas as rotas necessárias.
- Responsável pela criação dos roteamentos de todas as rotas que serão utilizadas na sua aplicação.


[x] services
- Responsável por toda a camada de negócio da aplicação.
-  Aqui ficará toda a regra de negócio, tratativa de erros.
-


Após criar as pastas acima e ainda dentro de src, criar os arquivos
[x] server.js
- Aqui iremos subir nossa aplicação como um todo, será responsável por instanciar todos os usos necessários para seu servidor ficar de pé.


[x] .editorconfig
- Aqui iremos armazenar tod editor base da nossa aplicação
- Um padrão de identação.

```
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true
quote_type = single

[vcbuild.bat]
end_of_line = crlf

[Makefile]
indent_size = 8
indent_style = tab

[{deps}/**]
charset = unset
end_of_line = unset
indent_size = unset
indent_style = unset
trim_trailing_whitespace = unset

[{test/fixtures,deps,tools/node_modules,tools/gyp,tools/icu,tools/msvs}/**]
insert_final_newline = false
```

