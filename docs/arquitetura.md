# Configurar um server.ts
Configuração do servidor.

# Configurar um app.ts
Configurar a aplçicação.

# Configurar um routes.ts
Apontar para as controllers.

# Arquitetura N-Layers

Aplicação se comunica por json

# Arquitetura - Camada controllers
1. players-controller

2. clubs-controller


# Arquitetura - Camada services

1. get api/players/{id}

2. get api/players/list

3. post api/players

4. delete api/players/{id}

5. patch api/players/{id}

6. get api/clubs/list


# Arquitetura - Camada repositories
1. getPlayersById()

2. getListPlayers()

3. insertPlayer()

4. deletePlayerById()

5. updatePlayerById()

6. getListClubs()


# Arquitetura - Camada Models
Modelagem fiél do tipo de dado.
1. Player-model

2. Club-model


# Arquitetura - Camada Data
Onde ficam os dados.
1. JSON
