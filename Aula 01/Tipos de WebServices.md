# Tipos de WebServices

### O que é WebServices
- Um Web service é um conjunto de métodos acedidos e invocados por outros programas utilizando tecnologias Web.<p>
- Um Web service é utilizado para transferir dados através de protocolos de comunicação para diferentes plataformas, independentemente das linguagens de programação utilizadas nessas plataformas. <p>

## Como Funciona ?
A aplicação solicita uma operação disponível no webservice, o webservice processa essa solicitação e retorna os dados após esse processamento.


## Soap
O protocolo SOAP utiliza XML para enviar mensagens e, geralmente, serve-se do protocolo HTTP para transportar os dados. Associado ao protocolo SOAP está o documento WSDL (Web Service Definition Language) que descreve a localização do Web service e as operações que dispõe. Além disso, fornece a informação necessária para que a comunicação entre sistemas seja possível.

## Rest 
REST é o estilo de arquitetura mais popular para a construção de APIs, principalmente  para aplicativos baseados na web e infraestruturas baseadas em microsserviços. Ele define restrições específicas que oferecem suporte à operabilidade entre microsserviços e aplicações web-based. <p>
O REST é um protocolo de comunicação mais recente que surgiu com o objetivo de simplificar o acesso aos Web services. Este baseia-se no protocolo HTTP e permite utilizar vários formatos para representação de dados, como JSON (um dos mais utilizados), XML, RSS, entre outros.

## GraphQL 
GraphQL é uma linguagem de consulta e ambiente de execução voltada a servidores para as interfaces de programação de aplicações (APIs) cuja prioridade é fornecer exatamente os dados que os clientes solicitam e nada além. <p>

O GraphQL foi desenvolvido para tornar as APIs mais rápidas, flexíveis e intuitivas para os desenvolvedores. Ainda é possível implantá-lo em um ambiente de desenvolvimento integrado (IDE) conhecido como GraphiQL. Como alternativa à arquitetura REST, o GraphQL permite aos desenvolvedores construir solicitações que extraem os dados de várias fontes em uma única chamada de API. 


## GrpC
gRPC é uma arquitetura RPC de código aberto projetada pelo Google para obter uma comunicação de alta velocidade entre microsserviços. Ela permite que os desenvolvedores integrem serviços programados em diferentes linguagens. <p>

A arquitetura gRPC usa o formato de mensagem protobuf (buffers de protocolo), que é altamente compactado e eficiente para serializar dados estruturados. <p>

As APIs baseadas em RPC são ótimas para ações (ou seja, procedimentos ou comandos) e, como veremos mais adiante, em alguns contextos, pode servir como uma alternativa mais eficiente do que uma API REST. <p>



## Quando usar API REST vs. API gRPC

## #APIs REST
APIs REST são as APIs mais usadas e populares para conectar infraestruturas baseadas em microsserviços, seja um sistema interno ou que exponha seus recursos para o resto do mundo. São ideais quando um sistema precisa de iteração e padronização de alta velocidade do protocolo HTTP.<p>

Com seu suporte universal de ferramentas de terceiros, APIs REST devem ser sua primeira opção para integrações de aplicações, integração de microsserviços e desenvolvimento de serviços da web.<p>

Quando uma API REST é disponibilizada publicamente como um serviço da web, cada componente fornecido pelo serviço da web é apresentado aos clientes como um recurso. Os clientes podem acessar esses recursos por meio de uma interface comum que aceita diferentes comandos HTTP como GET, POST, DELETE e PUT.<p>

### APIs gRPC
Quanto ao gRPC, a maioria das ferramentas de terceiros continua sem recursos integrados para compatibilidade do gRPC. Como tal, o gRPC é principalmente usado na construção de sistemas internos e assim, com esta ressalva em mente, as APIs gRPC podem ser úteis nas seguintes circunstâncias:<p>

Conexões de microsserviços: a comunicação de baixa latência e alta velocidade do gRPC o torna particularmente útil para conectar arquiteturas que consistem em microsserviços leves em que a eficiência da transmissão de mensagens é fundamental.<p>

Sistemas multilinguagens: com seu suporte de geração de código nativo para uma ampla gama de linguagens de desenvolvimento, o gRPC é excelente para gerenciar conexões em um ambiente políglota.<p>
Streaming em tempo real: a capacidade do gRPC de gerenciar o streaming bidirecional permite que seu sistema envie e receba mensagens em tempo real sem esperar pela resposta unária do cliente.<p>
Redes de baixa largura de banda e baixa potência: o uso de mensagens serializadas Protobuf pelo gRPC oferece mensagens leves, maior eficiência e velocidade para redes de baixa potência e largura de banda restrita.