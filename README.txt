Rota que busca todos os registros do banco de dados e mostra um array com os respectivos:
curl --location 'http://localhost:3000'


Rota utilizada para buscar as "estatísticas" das chamadas anteriores
curl --location 'http://localhost:3000/stats'


Rota utilizada para enviar um array NxN, onde ele irá buscar as sequencias: "BBBB"; "UUUU"; "DDDD"; "HHHH"
Não especifiquei quantidades de dados que serão aceitos, então uma "matriz" 8x8, é aceita, como também uma 3x3.
Busco todas as combinações na veritical, horizontal e em todas as diagonais. 
Levando em consideração uma tabela 6x6, meu algoritmo aceitaria inclusive repetições como: matriz[5][2], matriz[4][3], matriz[3][4], matriz[2[5]. (matriz[x](Linha, indo de 0 até 5)[y]("Coluna", sendo 1 para cada caracter, indo de 0 até 5)
Exemplo de body que é aceito com esta lógica:
{ "letters": ["DUHXHB", "DUBUHD", "UBUUHD", "BHBDDH", "DDDDUB", "UDDDUH"] }

curl --location 'http://localhost:3000/sequence' \
--header 'Content-Type: application/json' \
--data '{
  "letters": ["DUHBHB", "DUBUHD", "UBUUHU", "BHBDHH", "DDDDUB", "UDBDUH"]
}
'



Na pasta data, fica o banco de dados
Pasta logicFuctions fica os scripts de verificações lógicas da sequência de letras
Pasta models, fica o modelo do banco de dados
Pasta setup, arquivo inicial para abrir o banco de dados
Arquivo app.js, sendo o principal do servidor.
Utilizei express para o servidor e mongoose para acesso ao banco

