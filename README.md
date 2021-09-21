## Install Android Studio (Linux)


#### Download

<https://developer.android.com/studio>



#### Descompactar
```
tar -xz < android-studio[version]-linux.tar.gz 
```


#### verificar instruções de instalação

Geralmente fica em um arquivo txt com nome **Install**

Provavelmente indicará para executar algum arquivo Bash.

Pra instalar é só ir dando 'next'.



#### Copnfiguração do Android Studio

<https://www.youtube.com/watch?v=eSjFDWYkdxM>



#### Permissões

Pode ocorrer de o Android Studio informar alguma falta de permissão, no caso basta ver qual o arquivo e dar um **chmod** nele.



<br>
<br>


## Install Expo Server


#### Instalar pacote npm
```
sudo npm install --global expo-cli
```


#### Criar o App
```
expo init [project-name]
```

Com o comando acima o expo cria o app react native com a estrutura necessária.



#### Inicializar o Expo
```
expo start 
```
Com o comando acima o expo inicializa o app e abre uma janela no browser para configurar o **dispositivo** no qual iremos ver o react native renderizar o app.



#### Instalar Expo Cliente
Esse passo independe de estarmos utilizando o emulador ou um dispositivo real:

1. Ir na Play Store e baixar o app com nome 'Expo'
2. Voltar no Bronser renderizado pelo Expo Server e copiar o código gerado (é algo parecido com endereço IP)
3. Colar o código na tela do expo cliente que está executando no dispositivo móvel (real ou emulador).








