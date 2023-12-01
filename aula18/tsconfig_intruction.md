# Configurar o ts -> forma simples

### OBS

npm -> Node Package Manager
npx -> Node Package eXecute

instalar:

```
npm install typescript -D
```

gerar o arquivo de config typescript

```
npx tsc --init
```

transpilar/traduzir para JS

```
npx tsc
```

executar o arquivo JS

```
node [nome do arquivo]
```

# Configurar o ts

instalar:

```
npm install typescript tsx tsup -D
```

gerar o arquivo de config typescript

```
npx tsc --init
```

executar em desenvolvimento

```
npx tsx [caminho do arquivo]
npx tsx watch [caminho do arquivo]
```

transpilar para producao

```
npx tsup [caminho da pasta]
```
