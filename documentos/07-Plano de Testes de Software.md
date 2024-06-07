
# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/PMV-ADS-2024-1-E1-Proj-Direcionamento-Profissional/blob/main/documentos/02-Especificação%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/PMV-ADS-2024-1-E1-Proj-Direcionamento-Profissional/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Início
</td>
  <td>
   <ul>
    <li>RF-001:	RF-01: A aplicação deve permitir ao usuário acessar informações sobre a área de desenvolvimento
.</li>
   <li>RF-05: A aplicação deve permitir ao usuário acessar melhores instituições validadas pelo MEC
.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Início ao serem acionados, acessam as páginas correspondentes</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de inicio.</li>
    <li>Clicar nos links da página de inicio.</li>
   </ol>
   </td>
  <td>Todos os links da página Início devem encaminhar os usuários para as páginas descritas.</td>
  <td>Ana</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento dos links da página Áreas de Atuação
</td>
  <td>
   <ul>
    <li>RF-01: A aplicação deve permitir ao usuário acessar informações sobre a área de desenvolvimento
.</li>
   <li>RF-02: A aplicação deve permitir ao usuário acessar lista de sub-área
.</li>
    <li>RF-04: A aplicação deve permitir ao usuário acessar planos de estudos para a sub-área selecionada
.</li>
    <li>RF-05: A aplicação deve permitir ao usuário acessar melhores instituições validadas pelo MEC
.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Áreas de Atuação ao serem acionados, acessam as páginas correspondentes.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de inicio.</li>
    <li>Clicar na página Áreas de Atuação.</li>
    <li>Clicar nos links da página.</li>
   </ol>
   </td>
  <td>Todos os links da página Áreas de Atuação devem encaminhar os usuários para as páginas de sub-áreas.</td>
  <td>Ana</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar o funcionamento do filtro de pesquisa da página Áreas de Atuação
</td>
  <td>
   <ul>
    <li>RF-02: A aplicação deve permitir ao usuário acessar lista de sub-área
.</li>
   <li>RF-04: A aplicação deve permitir ao usuário acessar planos de estudos para a sub-área selecionada
.</li>
   </ul>
  </td>
  <td>Verificar se o filtro de pesquisa está selecionando o valor informado pelo usuário na lista de sub-áreas.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de inicio.</li>
    <li>Clicar na página Áreas de Atuação.</li>
    <li> Digitar no filtro de pesquisa o nome de alguma sub-área e verificar se o resultado é exibido na página.</li>
   </ol>
   </td>
  <td>Os dados inseridos no filtro de pesquisa devem mostrar as sub-áreas que tem o nome ou descrição contendo o conteúdo informado pelo usuário.</td>
  <td>Ana</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o funcionamento dos links das páginas de sub-áreas.
</td>
  <td>
   <ul>
    <li>RF-01: A aplicação deve permitir ao usuário acessar informações sobre a área de desenvolvimento
.</li>
   <li>RF-05: A aplicação deve permitir ao usuário acessar melhores instituições validadas pelo MEC
.</li>
   </ul>
  </td>
  <td>Verificar se os links das páginas de sub-áreas ao serem acionados, acessam as páginas correspondentes.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de inicio.</li>
    <li>Clicar na página Áreas de Atuação.</li>
    <li>Clicar em alguma sub-área.</li>
    <li>Clicar nos links da página.</li>
   </ol>
   </td>
  <td>Todos os links da página de sub-áreas devem encaminhar os usuários para as páginas correspondentes.</td>
  <td>Ana</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar o funcionamento dos links da página Pontuações do MEC.
.
</td>
  <td>
   <ul>
    <li>RF-01: A aplicação deve permitir ao usuário acessar informações sobre a área de desenvolvimento
.</li>
   <li>RF-05: A aplicação deve permitir ao usuário acessar melhores instituições validadas pelo MEC
.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Pontuações do MEC ao serem acionados, acessam as páginas correspondentes.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de inicio.</li>
    <li>Clicar na página Pontuações do MEC.</li>
    <li>Clicar nos links da página.</li>
   </ol>
   </td>
  <td>Verificar se os links das página Pontuações do MEC ao serem acionados, acessam as páginas correspondentes.</td>
  <td>Ana</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-06: Verificar o funcionamento dos links da página Melhores faculdades.
.
</td>
  <td>
   <ul>
    <li>RF-01: A aplicação deve permitir ao usuário acessar informações sobre a área de desenvolvimento
.</li>
   <li>RF-05: A aplicação deve permitir ao usuário acessar melhores instituições validadas pelo MEC
.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Pontuações do MEC ao serem acionados, acessam as páginas correspondentes.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de inicio.</li>
    <li>Clicar na página Pontuações do MEC.</li>
    <li>Clicar no link para página Melhores faculdades.</li>
    <li>Clicar nos links da página.</li>
   </ol>
   </td>
  <td>Verificar se os links das página Melhores faculdades ao serem acionados, acessam as páginas correspondentes.</td>
  <td>Ana</td>
 </tr>
</table>
