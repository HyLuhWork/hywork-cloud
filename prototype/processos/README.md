# Módulo Processos — Protótipo (Administrador + Colaborador)

Protótipo navegável de alta fidelidade da experiência de **construção** de processos
internos na Hywork Cloud (férias, reembolso, compras, chamados, onboarding, aprovações
etc), do ponto de vista do **Administrador** — e, a partir da v12, também do ponto de
vista do **Colaborador** na Intranet: a Central de Processos onde ele inicia
solicitações e acompanha o andamento delas. Um seletor "Administrador / Colaborador" no
topo alterna entre as duas visões dentro do mesmo protótipo (é um atalho de demonstração
— na plataforma real, isso seria decidido pela permissão/perfil de quem faz login, não
por um botão).

**v2** — revisado a partir de um vídeo de referência do produto real e de feedback
direto sobre a lógica de construção do workflow. Ver "O que mudou na v2" abaixo.

**v3** — Home reconstruída como "Central de Processos", seguindo um mock específico
enviado: botão "Criar do 0", seção de entrada via **HyA Builder** (IA, mockada —
não há geração real por trás, é só a interface e um retorno em toast) e "Comece a
partir de modelos" com 3 templates clicáveis que pré-preenchem o wizard. A lista de
processos virou uma lista vertical (não grade de cards) com badge colorido em
monograma, nome e um toggle "Ativo" por processo. Ver "O que mudou na v3" abaixo.

**v4** — configuração de etapa movida do painel lateral para uma **modal com abas**
(Geral / Responsável / SLA / Campos / Regras de saída), com etapa inicial/final
configurável e tipos de responsável alinhados ao vocabulário pedido. Ver
"O que mudou na v4" abaixo. Também corrigido um bug visual em que as abas do editor
apareciam com caixa (bug de reset de `button` no CSS).

**v5** — simplificação direta da modal de etapa: removida a aba "Regras de saída" e
o seletor "Tipo de etapa" (Geral agora só tem nome, descrição e os toggles de
inicial/final); e a aba Campos ganhou a possibilidade real de **criar campos
específicos da etapa** (não fazem parte do formulário inicial, existem só ali). Ver
"O que mudou na v5" abaixo.

**v6** — nova aba de topo **Automações** (evento → condição → ação), inspirada num
modelo de referência enviado, com abas do editor reordenadas para Formulário, Fluxo,
Automações, Indicadores, Permissões. Ver "O que mudou na v6" abaixo.

**v7** — a modal de etapa ganhou de volta uma aba **Ações**, agora com um modelo bem
mais estruturado: em vez de um cartão de regra genérico, existem quatro tipos fixos de
ação (Aprovar, Reprovar, Mover Etapa, Devolver para o Solicitante), cada um com a
configuração que faz sentido para ele. Ver "O que mudou na v7" abaixo.

**v8** — ajustes em Automações (campos de qualquer etapa nas condições/eventos, evento
recolhido num dropdown, grupos de condições com E/OU, botão "Salvar automação") e a aba
**Fluxo** virou **Etapas**, com as etapas em caixas lado a lado (visão kanban) sem os
ícones de tipo de etapa nem o seletor de tipo ao criar uma nova. Ver "O que mudou na v8"
abaixo.

**v9** — dois ajustes na aba Ações da etapa: "Devolver para o Solicitante" ganhou seu
próprio switch de "Exigir justificativa/motivo", e a "Ação personalizada" passou a
poder exigir o preenchimento de um campo específico do processo, além de (ou em vez
de) mudar de etapa. Ver "O que mudou na v9" abaixo.

**v10** — no Formulário, clicar num campo abre uma modal (em vez do painel lateral) e
foi adicionado "Personalizar formulário" (nome, descrição, capa real via upload e
posição Cabeçalho/Lateral). Nas Etapas, cada card ganhou um menu de três pontinhos
(Editar/Excluir), uma cor personalizável (predefinida ou color picker) visível no
próprio card, e o scroll horizontal do kanban ganhou mais respiro antes da barra de
rolagem. Ver "O que mudou na v10" abaixo.

**v11** — clicar em "Publicar" agora mostra um loading animado (etapas, responsáveis e
barra de progresso surgindo em sequência) antes de abrir a **visão do processo
publicado**: header com capa/nome/descrição e abas Kanban / List / Dashboard, com
solicitações de exemplo distribuídas pelas etapas. Clicar numa solicitação abre uma
modal de detalhes (formulário enviado, histórico, anexos) com as ações da etapa atual
numa lateral — Aprovar, Reprovar, Mover Etapa e Devolver para o Solicitante realmente
funcionam e movem a solicitação entre etapas. Ver "O que mudou na v11" abaixo.

**v12** — nova visão do **Colaborador**: um seletor no topo alterna para a Intranet,
onde o item "Processos" abre uma Central de Processos própria (todos os processos
habilitados, Minhas Solicitações, Minhas Pendências e Histórico). "Iniciar Solicitação"
abre o formulário de verdade (com a personalização configurada) e, ao enviar, mostra um
tracker das etapas do processo. O quadro do processo, nessa visão, só tem Kanban e List
(sem Dashboard), sem foto de capa na página do Kanban, e os cards foram redesenhados no
estilo Pipefy. Ver "O que mudou na v12"
abaixo.

**v13** — ajuste direto na Central de Processos do Colaborador: removida a prévia
"Suas pendências" (os cartões que apareciam acima das abas); a aba antes chamada
"Minha fila de aprovação" foi renomeada para **"Minhas Pendências"** e passa a ser o
único lugar para ver essas solicitações.

**v14** — três ajustes no Formulário e um geral. Personalização do formulário ganhou
**layout de colunas** (1 ou 2 — no modo 2 colunas dá para arrastar campos da paleta
para a coluna da direita); a **capa/banner ficou bem mais alta**; e agora dá para
**adicionar Seção** ao formulário (título + descrição, quebrando os campos em blocos).
No geral: o fundo cinza claro do módulo Processos virou **branco**. Ver "O que mudou
na v14" abaixo.

**v15** — as áreas de canvas com fundo pontilhado (**Etapas** e **Automações**) ganharam
de volta um fundo levemente colorido — um cinza bem claro puxado para azul — para se
diferenciarem do restante do módulo, que segue branco. E no Formulário, agora dá para
**adicionar uma seção diretamente pelo canvas**: um botão "Adicionar nova Seção" abre,
inline, um editor com Nome da seção, Descrição e botões de atalho para já criar campos
dentro dela — sem precisar arrastar da paleta e configurar pela modal. Ver "O que mudou
na v15" abaixo.

**v16** — redesenho completo da visão do processo publicado (Kanban/List/Dashboard),
inspirado num quadro de referência: colunas com bolinha colorida + contador, cards com
selo de etapa, campos configuráveis, avatar do solicitante, data, selo de prioridade e
ícones de atividade/anexos/campos preenchidos. Ganhou uma barra de busca e filtro por
etapa, além de Agrupar (Etapa/Solicitante) e Ordenar (Recentes/Solicitante) no Kanban e
na List. Administradores agora têm um botão "Personalizar visualização" para escolher
quais campos aparecem nos cards do Kanban e nas colunas da List, e o agrupamento/
ordenação padrão. O banner de capa foi removido de todas as abas (Kanban, List e
Dashboard) e, no lugar, o cabeçalho passou a mostrar o ícone do processo, igual ao da
tela de construção. E no Colaborador, a opção de ver o quadro Kanban foi removida — só
sobrou a List, tanto ao abrir pelo card do processo quanto pelo botão do rastreador após
enviar uma solicitação. Ver "O que mudou na v16" abaixo.

**v17** — modal de detalhes da solicitação bem maior e reorganizada em 3 colunas, no
estilo Pipefy: **Formulário Inicial** (todos os dados enviados + anexos) à esquerda,
**Fase atual** no meio (progresso da etapa + campos específicos daquela etapa) e
**Ações disponíveis** à direita, cada ação com sua própria cor (Aprovar em verde,
Reprovar em vermelho, Devolver em âmbar, Mover Etapa em azul, Ação personalizada em
neutro). O Histórico de atividades virou uma faixa de rodapé com largura total. Ver "O
que mudou na v17" abaixo.

**v18** — cinco ajustes na modal de detalhes da solicitação, a partir de feedback direto
sobre a v17: o cabeçalho ganhou o **ícone, título e descrição do processo** (como no
resto do módulo); a coluna de **Ações disponíveis** ficou mais minimalista (sem fundo
colorido, só um card neutro com o ícone e o botão "Confirmar" coloridos); o **Progresso**
virou uma faixa **horizontal** no topo da modal, acima das 3 colunas; a faixa de rodapé
agora tem duas abas — **Histórico de atividades** e **Comentários** (com campo para
escrever e enviar um novo comentário); e o rótulo "Fase atual" virou **"Etapa atual"**.
Ver "O que mudou na v18" abaixo.

**v19** — as etapas passaram a ganhar uma **cor padrão automaticamente** ao serem
criadas (rotação de 8 cores da paleta do produto), em vez de ficarem cinza até o
administrador escolher uma manualmente. Vale para as etapas de exemplo, para etapas
novas criadas pelo construtor e para as duas etapas de sistema (Formulário
enviado/Finalizado). O seletor de cor continua funcionando normalmente para trocar ou
remover a cor de qualquer etapa não-sistema.

**v20** — a modal de detalhes da solicitação voltou a ter **2 colunas** em vez de 3 (a
pedido, inspirada num layout de referência): a coluna da esquerda ficou só com
**Formulário Inicial** e **Anexos**; a da direita passou a reunir **Etapa atual**
(com os campos específicos daquela etapa) e **Ações disponíveis**, empilhados um
abaixo do outro. Cabeçalho, progresso horizontal e as abas de Histórico/Comentários no
rodapé continuam exatamente como na v18/v19 — só a divisão das 3 colunas centrais em 2
mudou. Ver "O que mudou na v20" abaixo.

**v21** — o menu lateral e o header passaram a usar um **cinza bem clarinho**
(`#F0F1F3` no tema claro) como fundo, em vez de branco puro, para ficar mais próximo
do produto real da Hywork. O conteúdo das telas continua branco — só a "moldura" do
app (menu + topo) mudou de tom, o que também faz o card do seletor de workspace no
topo do menu se destacar mais. Sem mudança no tema escuro.

**v22** — dois ajustes na modal de detalhes da solicitação: os botões "Confirmar" das
ações não ocupam mais a largura toda do card (ficaram no tamanho do texto, como um
botão normal), e a coluna da direita passou a mostrar o **responsável pela etapa
atual** (avatar com iniciais + nome/vínculo, ex: "Gestor direto do solicitante");
e na coluna da esquerda, o título "Formulário Inicial" ficou maior e em preto, com um
resumo logo abaixo ("Solicitação de X · Enviada em dd/mm/aaaa") — texto que antes
ficava só no cabeçalho da modal e agora vive ali. Também aumentei o painel lateral do
construtor de **Automações** (de 392px para 460px), porque a linha de condição (campo +
operador + valor) estava apertada demais nesse espaço.

**v23** — a **List** da visão do processo publicado ficou bem mais interativa: a
**Etapa atual** agora aparece como um badge colorido (em vez de texto simples); uma
nova coluna **Responsável** mostra o avatar + nome de quem responde pela etapa atual;
uma coluna **Progresso** mostra uma barrinha + "N/total" com o avanço da solicitação
até a conclusão; e o **Agrupar** (que já existia no Kanban) passou a valer também na
List, com uma terceira opção — Etapa, Solicitante ou **Responsável** — cada grupo
vira uma linha de cabeçalho recolhível (com contador) dentro da própria tabela.
Também mudei o clique nos processos em "Seus Processos" (Home): processos
**publicados** agora abrem direto no **Kanban**, em vez de cair na tela de edição —
rascunhos continuam abrindo a edição, já que não têm nada publicado para ver.

**v24** — a List da v23 usava uma tabela tradicional com bordas (a mesma da aba
Permissões), o que ficou visualmente pesado para um agrupamento — refeita do zero
num estilo mais parecido com Linear/Notion: sem bordas de tabela, linhas de grupo
com fundo levemente colorido (na cor da etapa) e um ícone por tipo de agrupamento,
cabeçalho de colunas repetido dentro de cada grupo (não uma única linha fixa no
topo), linhas com hover sutil em vez de grades, e uma nova coluna **Prioridade**
(a partir do campo "Tipo de solicitação", quando existir). A coluna "Etapa atual"
some quando o agrupamento já é por Etapa (ela seria redundante com o próprio
cabeçalho do grupo) e volta a aparecer nos outros agrupamentos. Ver "O que mudou na
v24" abaixo.

**v25** — rodada de polimento pedida direto sobre a visão Administrador e a visão
Colaborador: modal "Criar processo" bem maior (era apertado); **todos os emojis do
protótipo viraram ícones SVG** (heroicons-style), inclusive no seletor de ícone do
processo, nos cards de etapa e na lista da Intranet; a tela de Etapas tinha duas
barras de rolagem sobrepostas — agora só uma; os cards de cada etapa passaram a ter
a mesma altura; e a linha "v2 · última edição por..." saiu do cabeçalho do editor. Na
visão Colaborador: "Minhas Pendências" ganhou um **dashboard** (KPIs de pendentes,
atendidas, urgentes e tempo médio de espera, mais gráficos de solicitações prestes a
vencer e todas as solicitações em aberto); "Minhas Solicitações"/"Histórico" viraram
uma **tabela com cores e filtros**, no mesmo estilo Linear/Notion da List
administrativa (v24); e a modal de confirmação pós-envio ganhou abas **Status**
(etapa atual + linha do tempo do histórico) e **Formulário** (valores enviados). Ver
"O que mudou na v25" abaixo.

**v26** — três ajustes finos na visão Colaborador, a partir de feedback direto sobre
a v25: a tabela abaixo do dashboard em "Minhas Pendências" ganhou o título "Todas as
solicitações em aberto"; a aba Histórico ganhou o título "Histórico das suas
solicitações"; e os dados de exemplo foram ajustados para sempre ter algumas
solicitações "prestes a vencer" (vence hoje/em 1d/em 2d) no gráfico da dashboard, em
vez de aparecerem só como vencidas — as datas de criação de alguns
registros-exemplo agora são calculadas em relação a hoje (`offsetDateStr`), então o
protótipo continua parecendo "vivo" independente de quando for aberto. Ver "O que
mudou na v26" abaixo.

**v27** — processo de exemplo completo: **Service Desk** (categoria TI, ícone de
headset, cor azul), sempre publicado e sempre em primeiro lugar tanto na Home do
Administrador quanto na Central de Processos do Colaborador. Usa praticamente todo
recurso do construtor: formulário com 9 campos (incluindo 2 campos **automáticos**
— Solicitante e Data da solicitação, um recurso novo que não existia antes); 5
etapas (Abertura → Triagem → Em Atendimento → Validação → Finalizado) com
responsável, SLA (inclusive uma etapa com **"Sem SLA"**, outro recurso novo) e
ações próprias em cada uma; campos específicos por etapa (Diagnóstico/Solução/
Tempo gasto só em "Em Atendimento"); e 19 automações cobrindo notificações,
alteração de campos, mudança de etapa e integrações (Webhook, API, Microsoft
Teams, tarefa externa, agente de IA — as 2 últimas são tipos de ação novos no
construtor). 16 solicitações de exemplo espalhadas por todas as etapas. Ver "O que
mudou na v27" abaixo para o detalhe completo, incluindo os pequenos ajustes no
motor do produto que essa demonstração revelou serem necessários.

**v28** — a tabela de "Minhas Solicitações" (visão Colaborador) ganhou o título
"Minhas Solicitações" acima da tabela, no mesmo padrão já usado em "Minhas
Pendências" (v26) e "Histórico" (v26).

**v29** — o formulário do processo **Service Desk** ganhou uma **foto de capa
fixa** (antes estava com "Sem capa"): um banner ilustrado (SVG, sem depender de
imagem externa) com o nome do processo, a descrição e um ícone de headset, nas
cores da identidade visual do processo (gradiente navy → azul). Aparece no
construtor de formulário, na modal "Personalizar formulário" e na tela real de
"Nova solicitação" que o colaborador preenche.

**v30** — a modal "Nova solicitação" (o formulário real que o colaborador
preenche para abrir uma solicitação) reaproveitava, sem querer, a mesma borda
tracejada e o placeholder cinza "Sem capa" da tela de construção do formulário
no Administrador — o que fazia a experiência de preenchimento parecer "um
editor", não um formulário de verdade. Agora a modal de preenchimento tem um
layout próprio, sem borda tracejada, com o título/descrição maiores e mais
espaço antes dos campos; e quando o processo não tem capa configurada, o
espaço reservado para ela simplesmente não aparece (em vez do placeholder
"Sem capa", que era uma dica só para quem está montando o formulário). O
construtor de formulário do Administrador continua com a borda tracejada,
já que ali faz sentido parecer uma área de montagem.

**v31** — mudança estrutural pedida direto: a visão **Colaborador** deixou de
usar o mesmo shell (sidebar + topbar) da visão Administrador e virou uma
**intranet de verdade**, no estilo de um exemplo de referência enviado
(header horizontal, sem sidebar). O construtor de processos continua sendo,
como sempre, coisa da visão Administrativa — só o "invólucro" ao redor da
experiência do Colaborador mudou.

- **Novo header de intranet** — logo à esquerda, menu horizontal (Página
  Inicial, Processos, Institucional, Gente & Gestão, Conteúdos, "..."), e à
  direita o mesmo seletor Administrador/Colaborador, tema, busca, sino de
  notificações (com contador) e avatar de sempre — só reorganizados num
  cabeçalho, sem a coluna lateral.
- **Nova "Página Inicial"** — a página que a visão Colaborador mostra por
  padrão agora é uma home de intranet de verdade, no mesmo espírito visual do
  exemplo enviado: banner de boas-vindas, Aniversariantes, Links (com ícones,
  sem emoji — os únicos ícones usados são os do próprio sistema de ícones SVG
  do protótipo), PodCast (card ilustrativo), Calendário (grade real do mês
  atual), Novos Contratados e Calendário de Férias, e Outros conteúdos
  (Notícias/Comunicados). Todo o conteúdo é fictício/ilustrativo — o objetivo
  é só mostrar como o módulo de Processos se encaixaria dentro de uma
  intranet real.
- **Item "Processos" no menu** — clicar nele abre exatamente a Central de
  Processos que já existia (Todos os processos / Minhas Solicitações /
  Minhas Pendências / Histórico, Kanban, List etc.) — nada dessa parte
  mudou, só passou a viver dentro do novo cabeçalho em vez da sidebar.
- A visão **Administrador** não foi tocada — sidebar, topbar e o construtor
  de processos continuam idênticos a antes; só o `renderShell()` interno
  passou a escolher entre os dois "invólucros" (sidebar-shell vs.
  intranet-shell) de acordo com o modo selecionado, e a recriar o shell só
  quando o modo realmente muda (evitando re-render desnecessário a cada
  clique).

**v32** — logo real da Hywork no lugar do quadradinho "H": um ícone circular
em degradê (laranja → azul, nas mesmas cores já usadas no resto do produto)
mais a marca "hywork" em dois tons (hy em navy, work em azul), como um SVG
embutido — sem depender de nenhuma imagem externa. Aparece nos dois lugares
onde havia só o quadrado com "H": no topo da sidebar da visão Administrador e
no cabeçalho da intranet da visão Colaborador.

## Como abrir

`index.html` é um arquivo único e autocontido (HTML + CSS + JS, fonte Montserrat
embutida via `@font-face`/base64, sem build, sem dependências externas) — dá para
abrir direto no navegador ou hospedar em qualquer lugar estático. Estado é mantido em
memória (não persiste ao recarregar), o que é suficiente para navegar a jornada
completa e testar as interações.

## Por que um protótipo estático em vez de código de produção

Este repositório ainda não tem uma aplicação Next.js/React para o admin da Hywork —
só existia o `README.md`. Como o pedido era um *protótipo navegável de alta fidelidade*
para validar fluxo, arquitetura da informação e linguagem visual antes de qualquer
investimento de engenharia, optei por um artefato de design (HTML/CSS/JS vanilla) em
vez de tentar adivinhar/recriar uma stack de produção inexistente. A seção
"Da prototipagem à produção" no fim deste documento mapeia cada tela para os tokens
e componentes descritos no `README_DESIGN_SYSTEM.md` fornecido.

## O que mudou na v2

Duas rodadas de feedback moveram este protótipo para bem mais perto do produto real:

**1. Identidade visual.** Um vídeo do conceito real do produto mostrou que a fonte é
Montserrat e o acento é um vermelho-terracota único (`#D74326`, amostrado por pixel
direto do vídeo), não o laranja mais claro e a paleta multicolor que eu tinha usado.
Ajustei: fonte Montserrat embutida, um único acento de marca para toda a cromia da
interface (botões, estados ativos, foco), cards mais enxutos (ícone + badge + título +
descrição + CTA, sem linha de métricas), e sidebar com texto preto e barra vermelha
fina no item ativo em vez de pílula colorida. A cor por processo (do wizard) continua
existindo — ela tinge só o ícone daquele processo — mas não influencia mais a cromia
geral da interface.

**2. O modelo de construção do workflow foi refeito do zero.** A v1 exigia navegar
etapa → aba Ações → ação → drawer com 4 sub-abas (Resultado/Condições/Interface/
Automações) só para dizer "se o valor for menor que X, vai para a etapa Y e notifica
alguém". Isso é exatamente o tipo de navegação que o feedback pediu para eliminar.
Na v2, cada etapa tem uma seção **"O que acontece depois"** com uma ou mais
**regras de saída**, e cada regra é um cartão único e plano contendo tudo:

- condição (`SE [campo] [operador] [valor]`, ou "sempre" se for a regra padrão/senão);
- destino — um select com as etapas existentes **e** um atalho "+ Nova" que cria e
  nomeia uma etapa nova ali mesmo, sem sair do cartão da regra;
- automações da própria regra (notificar e-mail, push, atualizar campo...), adicionadas
  inline com um mini-formulário de duas colunas, sem modal;
- uma frase em português gerada ao vivo — *"Se Valor total for menor ou igual a
  R$ 5.000,00, vai para Análise do Financeiro e notificar e-mail (Financeiro)."* —
  para confirmar em linguagem natural o que a regra faz.

O painel da etapa também deixou de ter sub-abas (Geral/Responsável/SLA/Campos/Ações):
agora é um painel único, rolável, com seções empilhadas — só o que faz sentido para o
tipo daquela etapa (Aprovação, Tarefa ou Condição) aparece. E o próprio nó no canvas
mostra um resumo das regras (`↳ Aprovar · Valor total ≤ R$5.000,00 → Análise do
Financeiro`), então dá para entender a lógica de todo o fluxo só olhando o canvas,
sem clicar em nada.

Também reduzi as abas do topo do editor de 5 para 4 (Fluxo, Formulário, Indicadores,
Permissões) — "Geral" virou um popover de edição rápida a partir de um ícone de lápis
ao lado do nome do processo, em vez de uma aba inteira — e adicionei **Testar fluxo**:
um drawer com 1-2 cenários de exemplo que simula o caminho percorrido pela solicitação
etapa a etapa, sem publicar nada.

## O que mudou na v3

A Home foi refeita para seguir um mock específico enviado ("Central de Processos"),
substituindo o grid de cards + KPIs + filtros da v2 por:

- **Botão "Criar do 0"** (dark) no lugar de "Novo Processo" — abre o mesmo wizard de
  sempre.
- **Caixa "Inicie por aqui com o HyA Builder"** — um campo de texto com borda em
  gradiente (estética de IA) e botão de enviar. **É mockado de propósito**: digitar e
  apertar Enter (ou clicar no botão) só mostra um toast avisando que o HyA Builder
  ainda não está implementado neste protótipo — não há geração real de processo por
  trás. O gancho de UI existe para quando a geração via IA for construída de verdade.
- **"Comece a partir de modelos"** — 3 templates (Solicitações de Férias, Solicitações
  de Reembolso, Chamados) que, ao serem clicados, abrem o wizard de criação já
  pré-preenchido com nome, descrição, categoria, ícone e cor sugeridos — economiza a
  etapa de preencher do zero para os casos mais comuns.
- **"Seus Processos" como lista**, não mais grade de cards: cada linha tem um badge
  colorido com as iniciais do processo (mesmo padrão visual do "SF" roxo da tela de
  workflow do produto real), nome, e um toggle **Ativo** por processo (independente do
  status rascunho/publicado — pausa um processo publicado sem editar nada nele).
  Rascunhos mostram um badge "Rascunho" no lugar do toggle.

Os KPIs agregados e os filtros por status da v2 foram removidos para bater com o mock
exatamente como enviado; posso trazê-los de volta como um bloco opcional se fizerem
falta na prática.

## O que mudou na v4

A configuração de etapa saiu do painel lateral fixo (v2/v3) e virou uma **modal**,
seguindo pedido explícito: ao clicar em qualquer etapa do canvas, abre uma modal com
cinco abas (etapas do sistema mostram só quatro, sem "Regras de saída"):

- **Geral** — nome, descrição, tipo de etapa (Aprovação/Tarefa/Condição) e dois
  toggles novos: **Etapa inicial do processo** e **Etapa final do processo**. Marcar
  uma etapa como inicial desmarca automaticamente qualquer outra (só existe um ponto
  de entrada); "final" pode ser marcado em várias etapas ao mesmo tempo (um processo
  pode terminar de formas diferentes — aprovado, reprovado etc.). O canvas reflete os
  dois estados com badges "ETAPA INICIAL" (vermelho) e "ETAPA FINAL" (verde).
- **Responsável** — tipos alinhados ao vocabulário pedido: **Estrutura Organizacional**,
  **Usuários específicos**, **Grupos de usuários** e **Vínculo do colaborador** (ex:
  gestor direto). Trocar o tipo já ajusta as opções disponíveis no campo seguinte.
- **SLA** — prazo, unidade e ação automática ao vencer, isolado numa aba própria.
- **Campos** — rótulos atualizados para o vocabulário pedido: **Ocultar**, **Só
  exibir**, **Editar**. Continuam vindo por padrão dos campos do formulário inicial,
  ajustáveis por etapa.
- **Regras de saída** — o mecanismo inline (condição + destino + automação numa
  mesma regra, com criação de etapa nova sem sair da tela) da v2 continua exatamente
  igual, agora dentro da aba "Regras de saída" da modal em vez de sempre visível no
  painel lateral.

O canvas do Fluxo agora ocupa a largura toda (sem painel lateral fixo), já que toda
edição acontece na modal.

De quebra, corrigi um bug visual: as abas do editor (Fluxo/Formulário/Indicadores/
Permissões) apareciam com uma caixa cinza ao redor de cada uma porque o reset de
`button` no CSS nunca zerava `border`/`background` — o navegador aplicava o estilo
padrão de botão por baixo do sublinhado. Corrigido na base, auditei os demais botões
da interface para confirmar que nenhum outro dependia do estilo padrão do navegador.

## O que mudou na v5

Simplificação direta da modal de etapa, a pedido:

- **Removida a aba "Regras de saída"** da modal. A modal agora tem só quatro abas
  (Geral, Responsável, SLA, Campos) — inclusive para etapas do sistema, que já tinham
  esse número. O dado de regras (condição → destino → automação) continua existindo
  por baixo — ainda aparece no resumo de cada etapa no canvas do Fluxo e é usado pelo
  "Testar fluxo" para traçar o caminho — só não há mais uma tela dedicada para editá-lo
  dentro da modal.
- **Removido o seletor "Tipo de etapa"** (Aprovação/Tarefa/Condição) da aba Geral. O
  tipo agora só é escolhido no momento da criação (modal "Nova etapa"), fica fixo
  depois — a aba Geral ficou só com nome, descrição e os dois toggles de
  inicial/final.
- **Campos ganhou "Campos adicionais desta etapa"**, com funcionamento real: um botão
  "+ Adicionar campo desta etapa" abre um formulário inline (nome + tipo, reaproveitando
  o mesmo catálogo de tipos do construtor de formulário) que cria um campo novo,
  guardado só naquela etapa (`step.camposExtras`) — não aparece no formulário inicial
  nem em outras etapas. Serve para dados que só fazem sentido durante aquela análise
  (ex: "Nº da ordem de pagamento" na etapa Financeiro, já incluído como exemplo). Dá
  para excluir cada campo extra individualmente; tudo persiste no estado da sessão
  como qualquer outro dado do protótipo.

## O que mudou na v6

Nova aba de topo **Automações**, a partir de um modelo de referência enviado
(canvas com nó de gatilho, botão "+" levando a Condição/Ação, painel lateral
contextual, e sub-abas "Automação" / "Logs de Auditoria"). As abas do editor foram
reordenadas para **Formulário, Fluxo, Automações, Indicadores, Permissões**.

A aba tem duas telas:

- **Lista de automações** — cards com nome, resumo em uma linha (evento + nº de
  condições + nº de ações), toggle Ativo/Inativo e exclusão. "+ Nova Automação" cria
  uma automação em branco (gatilho padrão "Item Criado") e já abre o editor.
- **Editor de uma automação** — canvas vertical no mesmo estilo do Fluxo: o nó
  **QUANDO** (gatilho) no topo, seguido pelos blocos que você for adicionando via um
  botão "+" circular, que oferece **Condição** ou **Ação**. Cada bloco adicionado vira
  um nó **SE** (condição) ou **ENTÃO** (ação) no canvas, clicável, com um painel à
  direita que muda conforme o que está selecionado:
  - **Gatilho**: nome da automação + lista de eventos — Item Criado, Campo Alterado,
    Item Excluído, **Item entrou na etapa** (escolhe qual etapa do Fluxo), **Ação
    executada** (escolhe entre as ações/rótulos já configurados nas regras de saída do
    Fluxo, ex: "Aprovar (Análise do Gestor)"), Usuário Atribuído, Data Alcançada.
  - **Condição**: linhas de campo + operador (maior que, maior ou igual a, menor que,
    menor ou igual a, igual a) + valor, combinadas com E; dá para adicionar mais de
    uma.
  - **Ação**: Enviar notificação (destinatário + mensagem), Mudar etapa (escolhe a
    etapa do Fluxo), Solicitar preenchimento, Atualizar campo, Criar tarefa, Webhook,
    Chamar API — cada uma com os campos relevantes ao tipo.
  - O resumo de cada bloco no canvas e no card da lista é gerado ao vivo a partir da
    configuração real (ex: "Quando o item entrar em Análise do Financeiro · 1 condição
    · 1 ação").
- **Logs de Auditoria** — tabela mockada (não gerada por execuções reais, já que este
  protótipo não roda o processo de verdade) mostrando como ficaria o histórico de
  disparos de uma automação, incluindo o caso "ignorada — condição não atendida".

Incluí uma automação já configurada de exemplo em "Solicitação de Férias": *Avisar
Financeiro em valores altos* — dispara quando o item entra em "Análise do
Financeiro", só segue se o Valor total for ≥ R$ 5.000,00, e então notifica o
Financeiro.

## O que mudou na v7

A modal de etapa recebeu de volta uma aba **Ações** (agora a modal tem cinco abas:
Geral, Responsável, SLA, Campos, Ações — etapas do sistema continuam sem ela), a
pedido explícito: "quais ações o responsável dessa etapa pode ter?". Diferente da
antiga "Regras de saída" da v2-v4 (um cartão genérico de condição+destino+automação),
a v7 parte de **quatro tipos fixos de ação**, cada um com sua própria configuração:

- **Aprovar** — só pede para qual etapa avançar ("Avançar para a etapa", qualquer
  etapa do processo, com atalho "+ Nova" para criar uma na hora) e, opcionalmente, uma
  condição (`SE campo operador valor`) escondida atrás de um link "Adicionar condição
  (opcional)" — só aparece quando preenchida, para não poluir o caso comum de "aprovar
  sempre avança para X".
- **Reprovar** — tem um switch **"Exigir justificativa/motivo"** (pede um texto
  explicando a reprovação antes de concluir) e um seletor **"Mudar automaticamente
  para a etapa final"**, restrito às etapas marcadas como `final` do processo (cai para
  todas as etapas caso nenhuma esteja marcada como final ainda); também aceita a mesma
  condição opcional do Aprovar.
- **Mover Etapa** — não tem nenhuma configuração de destino: o card é só informativo
  ("o responsável escolhe, no momento de agir, para qual etapa mover"), porque a
  escolha do destino é feita pela pessoa executando a etapa, não por quem constrói o
  processo.
- **Devolver para o Solicitante** — destino fixo e somente leitura (sempre a etapa
  "Formulário enviado"), sem seletor nem condição, já que o comportamento é sempre o
  mesmo.

Cada tipo tem um chip próprio ("+ Aprovar", "+ Reprovar", "+ Mover Etapa", "+ Devolver
para o Solicitante") acima da lista de ações — clicar já cria a ação com um destino
padrão sensato (Aprovar aponta para a próxima etapa do fluxo; Reprovar para a primeira
etapa final encontrada; Devolver para o início). Cada cartão também mostra, ao vivo,
uma frase resumo (ex: *"Se Valor total for menor ou igual a R$ 5.000,00, a solicitação
é aprovada e avança para Análise do Financeiro."*) — o mesmo princípio de "a lógica é
visível sem clicar" das versões anteriores, agora com frases específicas por tipo de
ação em vez de um template único.

Continua existindo um botão genérico **"+ Adicionar ação personalizada"** (ou
"+ Adicionar regra", em etapas sem responsável humano) para os casos que não se
encaixam nos quatro tipos fixos — mantém o editor antigo completo (nome livre,
condição, destino, criação de etapa nova) como escape hatch.

## O que mudou na v8

Ajustes direto de feedback, em duas frentes: Automações e a aba de etapas.

**Em Automações:**

- **Campos de qualquer etapa nas condições e eventos.** Os seletores de campo (no
  evento "Campo Alterado", nas condições de um bloco "Se", e nas ações "Solicitar
  preenchimento"/"Atualizar campo") agora listam **todos os campos do processo** —
  os do formulário inicial **e** os campos específicos criados dentro de qualquer
  etapa (`camposExtras`) — não só os do formulário inicial. Um campo criado só na
  etapa "Análise do Financeiro", por exemplo, já aparece disponível para condicionar
  uma automação.
- **Botão "Salvar automação".** Fica fixo no topo do editor de automação, ao lado de
  "Voltar para Automações", e confirma com um toast ("Automação salva.") ao ser
  clicado.
- **Evento vira dropdown.** A antiga listagem com um cartão por evento (Item Criado,
  Campo Alterado, Item Excluído...) foi substituída por um único campo do tipo
  seleção (`<select>`), com a descrição do evento escolhido logo abaixo. Isso deixa
  claro, de forma compacta, o que precisa ser respondido para aquele evento
  específico (ex: qual campo, qual etapa, qual ação) sem uma lista longa sempre
  aberta ocupando o painel.
- **Grupos condicionais com E/OU.** Um bloco "Se" deixou de ter uma lista simples de
  condições sempre combinadas com E. Agora existem **grupos de condições**: dentro de
  um grupo, todas as condições continuam sendo combinadas com E; entre um grupo e o
  próximo, é possível escolher **E ou OU** através de um seletor visual entre os
  grupos (ex: *(Valor total ≥ R$ 5.000 E Departamento = Financeiro) OU (Tipo de
  solicitação = Urgente)*). Dá para adicionar quantos grupos forem necessários e
  remover qualquer um deles.

**Na aba de etapas:**

- **Renomeada de "Fluxo" para "Etapas"** no menu do editor do processo.
- **Visão kanban.** As etapas deixaram de ficar empilhadas verticalmente com setas de
  conexão e passaram a ser exibidas como **caixas lado a lado, na horizontal**, com
  rolagem lateral quando não cabem todas na tela — a mesma leitura da esquerda para a
  direita de um quadro kanban, mais fácil de comparar etapas entre si.
- **Ícones de tipo removidos.** Cada caixinha de etapa não mostra mais o ícone de
  Aprovação/Tarefa/Condição — só as etapas do sistema (Formulário enviado, Finalizado)
  mantêm seu ícone de identificação. O campo de tipo continua existindo internamente
  (ele decide se a etapa tem responsável humano, SLA e aba de Ações), só não é mais
  exposto visualmente no card.
- **Seletor de tipo removido da criação de etapa.** A modal "Nova etapa" agora só
  pede o nome; toda etapa nova nasce como uma etapa com responsável humano (o caso
  mais comum), sem exigir essa decisão antecipada de quem está montando o processo.

## O que mudou na v9

Dois ajustes na aba **Ações** da etapa, a partir de feedback direto sobre os quatro
tipos de ação introduzidos na v7:

- **"Devolver para o Solicitante" ganhou "Exigir justificativa/motivo".** Antes só a
  ação Reprovar tinha esse switch; agora Devolver para o Solicitante também tem o seu
  próprio (independente do de Reprovar), já que devolver para correção também costuma
  exigir uma explicação do que precisa ser ajustado.
- **"Ação personalizada" pode exigir o preenchimento de um campo.** Além de mover a
  solicitação para outra etapa, uma ação personalizada agora pode também — ou só —
  **exigir que o responsável preencha um campo específico do processo** antes de
  concluir a ação. Um novo switch "Exigir preenchimento de campo" revela um seletor
  com todos os campos do processo (formulário inicial + campos criados em qualquer
  etapa); combinado com a condição já existente do cartão, dá para montar exatamente
  o cenário pedido: *"Se Tipo de solicitação for Compra de equipamento, o responsável
  precisa preencher o campo Centro de custo"*. O destino de etapa continua existindo,
  mas agora é opcional ("Não mudar de etapa…") — uma ação personalizada pode só exigir
  o campo, sem mover a solicitação.

## O que mudou na v10

**No Formulário:**

- **Clicar num campo abre uma modal**, no lugar do painel de inspeção que ficava fixo
  à direita do canvas. O canvas agora ocupa a largura toda (paleta + canvas, sem a
  terceira coluna); o rótulo, texto de ajuda, obrigatoriedade e visibilidade
  condicional do campo continuam exatamente os mesmos, só que dentro de uma modal com
  "Excluir campo" e "Concluído" no rodapé — o mesmo padrão já usado na modal de etapa.
  Arrastar um novo campo da paleta para o canvas já abre a modal dele direto, para
  configurar na hora.
- **Botão "Personalizar formulário"**, no cabeçalho do construtor, abre uma modal com:
  **Nome** e **Descrição** do formulário (o que a pessoa que for preencher vê no
  topo); **Capa** — upload real de uma imagem (via `FileReader`, sem precisar de
  backend: a imagem é lida como data URL e já aparece de verdade no canvas, não é um
  mockup); e **Posição do formulário**, com dois layouts à escolha — **Cabeçalho**
  (capa em largura total, no topo, formulário abaixo) e **Lateral** (capa fixa ao
  lado, formulário rolando ao lado dela) — o canvas do construtor já muda de layout
  de verdade ao trocar a opção, refletindo como o formulário ficaria.

**Nas Etapas:**

- **Menu de três pontinhos em cada card** (etapas que não são do sistema), com
  **Editar Etapa** (abre a mesma modal de configuração de sempre) e **Excluir Etapa**
  (remove direto, sem precisar abrir a modal primeiro).
- **Cor personalizável por etapa**, configurada na aba Geral da modal: paleta com as
  cores da marca, uma opção "Sem cor" e um seletor de **cor personalizada** (abre o
  color picker nativo do navegador). A cor escolhida aparece no próprio card, como uma
  barra na borda esquerda — dá para diferenciar etapas visualmente à primeira vista,
  sem abrir nada.
- **Mais espaço antes da barra de rolagem horizontal** do kanban de etapas — o
  scroll estava colado nas caixinhas; agora há um respiro bem maior entre elas e a
  barra.

## O que mudou na v11

A maior mudança desta rodada: o protótipo deixou de terminar no botão "Publicar" e
passou a mostrar, de verdade, como o processo publicado se comporta.

**Loading animado ao publicar.** Clicar em "Publicar" (com o checklist já confirmado)
não aplica o status na hora — abre uma tela cheia com uma sequência de três estágios,
cada um com ~1s: *"Montando as etapas do workflow…"* (as etapas reais do processo
aparecem uma a uma, com transição), *"Definindo responsáveis por etapa…"* (avatares
com as iniciais de cada responsável configurado surgem por baixo das etapas) e
*"Publicando o processo…"* (barra de progresso preenchendo). Ao terminar, o processo é
publicado de fato e o admin já cai direto na visão do processo.

**Visão do processo publicado**, acessível pelo botão "Ver processo" (ao lado de
"Testar fluxo"/"Publicar", só aparece para processos já publicados) ou automaticamente
após o loading:

- **Header** — capa do formulário (a mesma configurada em "Personalizar formulário";
  sem capa, mostra um gradiente de marca), nome e descrição.
- **Aba Kanban** — uma coluna por etapa do processo (incluindo "Formulário enviado" e
  "Finalizado"), com a cor configurada na etapa aparecendo na borda superior da
  coluna, e um card por solicitação parada ali. Rola horizontalmente como um quadro
  Pipefy/Kissflow.
- **Aba List** — as mesmas solicitações em formato de tabela (solicitante, etapa
  atual, data de criação, valor), para quem prefere uma visão densa em vez de colunas.
- **Aba Dashboard** — reaproveita os indicadores configurados na aba Indicadores do
  construtor, em modo somente leitura (sem os botões de adicionar/remover daqui).

**Modal de detalhes da solicitação**, ao clicar em qualquer card (Kanban ou List):

- **Coluna principal** — os valores enviados no formulário inicial (rótulo + valor,
  read-only), o histórico de atividades (quem fez o quê, em ordem cronológica reversa)
  e os anexos da solicitação (mockados).
- **Coluna lateral** — a etapa atual em destaque e, logo abaixo, **as ações
  configuradas para essa etapa** (as mesmas Aprovar / Reprovar / Mover Etapa /
  Devolver para o Solicitante / Ação personalizada configuradas na aba Ações da
  etapa) — cada uma já com a configuração certa: Aprovar mostra para onde avança
  (resolvendo automaticamente qual das regras condicionais se aplica ao valor real da
  solicitação, do mesmo jeito que o "Testar fluxo" já fazia); Reprovar e Devolver para
  o Solicitante pedem a justificativa quando configurado assim; Mover Etapa pede que
  quem está executando escolha a etapa de destino ali mesmo; e uma Ação personalizada
  com "Exigir preenchimento de campo" mostra o campo direto na lateral para preencher
  antes de confirmar. Se a etapa tiver campos específicos dela (`camposExtras`), eles
  também aparecem editáveis na lateral, acima das ações.
- **As ações funcionam de verdade** — confirmar uma ação move a solicitação para a
  etapa de destino (refletido na hora no Kanban/List), registra uma entrada no
  histórico e, se o destino for uma etapa final, fecha a modal sozinha. Confirmar sem
  preencher o que é obrigatório (justificativa, destino ou campo) mostra um toast de
  erro em vez de executar.

Foram incluídas seis solicitações de exemplo (`solicitacoes` em `richProcessData`)
distribuídas por etapas diferentes — incluindo uma já finalizada como reprovada, com
motivo registrado no histórico — para o Kanban/List não começarem vazios.

## O que mudou na v12

Até aqui, o protótipo cobria só o Administrador. Esta rodada adiciona a visão de quem
usa os processos no dia a dia — o Colaborador, pela Intranet.

**Seletor Administrador / Colaborador.** Um controle no topo (ao lado do tema
claro/escuro) alterna o modo do protótipo. Em modo Colaborador, o item "Usuários" do
menu (exclusivo de administração) fica oculto, e clicar em "Processos" no menu lateral
leva para a Central de Processos do Colaborador em vez do construtor.

**Central de Processos (Colaborador)** — nova Home, inspirada num mock específico
enviado (banner escuro com busca, abas e grade de processos):

- **Abas: Todos os processos, Minhas Solicitações, Minhas Pendências (com contador),
  Histórico.** "Todos os processos" lista só os processos **publicados e ativos** (o
  que o administrador habilitou), com busca por nome; as outras três mostram
  solicitações reais (do "usuário atual" simulado, `Luiza Vieira`, no caso de Minhas
  Solicitações; pendentes de decisão em Minhas Pendências; ou já numa etapa final em
  Histórico) numa tabela, agrupando todos os processos. Como o protótipo não modela
  login/permissão por pessoa, "Minhas Pendências" mostra todas as solicitações
  pendentes do workspace, não só as "do usuário atual" — documentado aqui para não
  parecer bug caso o número pareça alto.
- **"Iniciar Solicitação"** em cada card de processo abre uma modal com o **formulário
  de verdade** — os mesmos campos criados no construtor, respeitando a personalização
  configurada (nome, descrição, capa, layout Cabeçalho/Lateral). Campos obrigatórios
  bloqueiam o envio com um toast até serem preenchidos.
- **Ao enviar, mostra um tracker do processo** — uma modal de confirmação com todas as
  etapas em sequência, a atual em destaque e as já percorridas marcadas com check,
  além de um atalho "Ver quadro" para o Kanban daquele processo.

**Quadro do processo no modo Colaborador** (mesmo Kanban/List usados pelo
Administrador, agora sensíveis ao papel de quem está vendo):

- **Só Kanban e List** — a aba Dashboard não aparece para o Colaborador.
- **Sem foto de capa na página do Kanban** — a capa do formulário (quando configurada)
  só aparece nas abas List/Dashboard; na página do Kanban ela ficava visualmente
  poluída ao lado das colunas, então foi removida especificamente dali (para os dois
  papéis, Administrador e Colaborador).
- **Cards no estilo Pipefy** — cada card mostra até dois campos do formulário com
  ícone + rótulo em caixa alta + valor (em vez de uma linha única de meta-dados), e o
  cabeçalho de cada coluna usa a cor da etapa (quando configurada) tanto na borda
  quanto no texto do nome — mais fácil de escanear visualmente, como no quadro Kanban
  do Pipefy usado como referência.
- **Modal de detalhes sem ações para o Colaborador** — ao abrir uma solicitação nesse
  modo, a lateral mostra o tracker de progresso e a etapa atual, mas não os botões de
  ação (Aprovar/Reprovar/...), já que essas ações pertencem ao responsável da etapa,
  não a quem apenas solicitou. O Administrador continua vendo as ações normalmente.

## O que mudou na v14

**No Formulário:**

- **Layout de colunas (1 ou 2)** — nova opção em "Personalizar formulário", ao lado da
  posição Cabeçalho/Lateral. Com "2 colunas" selecionado, o canvas do construtor passa
  a mostrar duas zonas de soltar lado a lado; arrastar um campo da paleta para a da
  direita já cria o campo na coluna 2. Campos existentes também podem trocar de coluna
  pelo próprio modal de configuração do campo (novo seletor "Coluna", só aparece
  quando o formulário está em 2 colunas). O formulário real que o Colaborador preenche
  ("Iniciar Solicitação") respeita esse mesmo layout de colunas.
- **Capa/banner bem mais alta** — de 96px para 200px no construtor e no formulário de
  envio, e de 110px para 180px na pré-visualização da modal "Personalizar formulário".
- **Seção do formulário** — o tipo "Divisor de seção" (que já existia na paleta, grupo
  "Estrutura") agora tem funcionamento próprio: ao soltá-lo no canvas, abre uma modal
  só com **Título** e **Descrição** da seção (em vez do inspetor genérico de campo,
  que não faria sentido aqui). No canvas, uma seção aparece como um divisor com título
  em destaque e descrição abaixo, sempre ocupando a largura toda (mesmo em formulários
  de 2 colunas) — os campos antes e depois dela formam blocos de coluna independentes.
  Seções também aparecem no formulário real de envio e no resumo "Formulário enviado"
  da modal de detalhes da solicitação, mas nunca contam como campo preenchível (não
  entram em condições de automação/ação, nem na validação de campos obrigatórios).

**No geral:**

- **Fundo branco** — o módulo Processos usava um cinza muito claro (`#FAFAFA`) como
  fundo de página, o que deixava tudo com uma aparência acinzentada. Trocado para
  branco puro (`#FFFFFF`) no tema claro; o tema escuro não foi alterado. Superfícies
  internas que usam tons de cinza de propósito (hover, badges, cabeçalho de tabela,
  colunas do Kanban) continuam como estavam — a mudança foi só no fundo geral da
  página.

## O que mudou na v15

**No geral:**

- **Fundo das áreas de canvas (Etapas e Automações)** — as duas telas com fundo
  pontilhado (o quadro kanban de Etapas e o editor visual de Automações) ganharam um
  fundo cinza bem claro puxado para azul (`#F3F6FA` no tema claro) por baixo da grade
  de pontos, para se diferenciarem do resto do módulo, que continua branco puro desde a
  v14. O tema escuro ganhou um tom equivalente (`#191E26`).

**No Formulário:**

- **"Adicionar nova Seção" com editor inline** — abaixo dos campos do formulário, o
  construtor agora sempre mostra um botão "+ Adicionar nova Seção". Clicar nele cria a
  seção e abre, na hora, um editor expandido embutido no próprio canvas: campos de
  **Nome da seção** e **Descrição**, e uma fileira de botões de atalho — um por tipo de
  campo — para já adicionar campos direto dentro daquela seção, sem precisar arrastar
  da paleta e sem passar pela modal genérica de campo. Um botão "Concluir seção" fecha
  o editor e a seção volta a aparecer como o divisor compacto (título + descrição) já
  existente desde a v14. Seções já configuradas continuam abrindo a modal de
  configuração ao serem clicadas, como antes — o editor inline só aparece logo depois
  de criar a seção. Campos adicionados pelos atalhos são inseridos logo após a seção
  correspondente (e antes da próxima seção, se houver), não sempre no fim do
  formulário.

## O que mudou na v16

**Visão do processo publicado (Kanban/List/Dashboard):**

- **Redesenho do Kanban** — colunas passaram a mostrar uma bolinha colorida (a cor da
  etapa, quando definida) + nome + contador, num cabeçalho mais limpo; para
  administradores, um botão "..." em cada coluna abre "Editar etapa", que leva direto
  para a etapa correspondente na aba Etapas do construtor. Os cards ganharam: selo da
  etapa atual (colorido) no topo, os campos configurados do formulário, uma linha
  "Solicitante:" com avatar de iniciais, data de criação, um selo de prioridade (a
  partir do campo "Tipo de solicitação", quando existir no formulário) e um rodapé com
  contadores de atividades, anexos e campos preenchidos.
- **Busca e filtro** — Kanban e List ganharam um campo de busca (por nome do
  solicitante) e um filtro por etapa, ambos na barra logo abaixo das abas.
- **Agrupar e Ordenar** — no Kanban dá para agrupar por Etapa (padrão) ou por
  Solicitante (uma coluna por pessoa); Kanban e List têm Ordenar por Mais recentes
  (padrão) ou Solicitante (A-Z).
- **Personalizar visualização (só administrador)** — um ícone de engrenagem na barra
  abre uma modal para escolher quais campos do formulário aparecem nos cards do Kanban
  ou como colunas extras na List, além do agrupamento e ordenação padrão. Essas
  escolhas ficam salvas no processo e valem para quem mais acessar aquela visão.
- **Sem banner, ícone do processo no cabeçalho** — a foto de capa foi removida de todas
  as abas (antes só não aparecia no Kanban; agora também não aparece na List nem no
  Dashboard). No lugar dela, o cabeçalho mostra o mesmo selo colorido com o ícone do
  processo usado na tela de construção.

**Colaborador:**

- **Sem acesso ao Kanban** — a aba Kanban não aparece mais para o colaborador (só
  List); o botão "Ver quadro" no rastreador de solicitação enviada foi removido, e o
  ícone de atalho no card do processo na Central de Processos agora abre direto a List
  ("Ver solicitações").

## O que mudou na v17

- **Modal de detalhes bem maior** — de 960px para até 1400px de largura (quase a tela
  toda em telas maiores), reorganizada em 3 colunas em vez de duas, inspirada num
  layout de referência estilo Pipefy:
  - **Formulário Inicial** (esquerda, coluna mais larga) — todos os campos enviados no
    formulário e os anexos. Sem mudança de conteúdo, só reorganizado.
  - **Fase atual** (meio) — o progresso de todas as etapas (o que antes era
    "Progresso"), o selo com o nome da etapa atual (usando a cor da etapa, se
    configurada) e os campos específicos daquela etapa, quando existirem.
  - **Ações disponíveis** (direita, coluna fixa de 300px) — as ações da etapa atual,
    agora cada uma com uma cor própria: Aprovar em verde, Reprovar em vermelho,
    Devolver para o Solicitante em âmbar, Mover Etapa em azul e Ação personalizada em
    tom neutro. O botão "Confirmar" de cada ação usa a mesma cor, em formato de
    pílula.
  - **Histórico de atividades** virou uma faixa de rodapé com largura total, abaixo
    das 3 colunas, em vez de ficar empilhado dentro da coluna da esquerda.
  - Para o Colaborador, a coluna da direita continua mostrando só o status (sem ações),
    como antes.

## O que mudou na v18

- **Cabeçalho com identidade do processo** — o ícone colorido do processo (o mesmo da
  tela de construção) passou a aparecer ao lado do título e da descrição do processo no
  topo da modal; o nome do solicitante e a data de envio viraram uma linha de metadados
  menor logo abaixo ("Solicitação de X · Enviada em dd/mm/aaaa").
- **Ações disponíveis mais minimalistas** — os cards de ação perderam o fundo colorido
  por tipo (verde/vermelho/âmbar/azul); agora usam o mesmo fundo neutro para todos, com
  só o ícone do topo e o botão "Confirmar" mantendo a cor de cada tipo de ação.
- **Progresso horizontal no topo** — a faixa de progresso das etapas saiu da coluna do
  meio e virou uma barra horizontal logo abaixo do cabeçalho, ocupando a largura toda da
  modal (etapas lado a lado com bolinha + linha conectora, em vez de uma lista vertical).
- **Aba de Comentários** — a faixa de rodapé (antes só o Histórico de atividades) agora
  tem duas abas: "Histórico de atividades" e "Comentários", esta última com a lista de
  comentários (autor, data e texto) e um campo para escrever e enviar um novo
  comentário.
- **"Fase atual" → "Etapa atual"** — só o texto do rótulo na coluna do meio, sem mudança
  de comportamento.

## O que mudou na v20

- **De 3 para 2 colunas** — a modal de detalhes, que na v17 tinha ganhado 3 colunas
  lado a lado (Formulário Inicial / Etapa atual / Ações disponíveis), voltou a ter só
  2, num layout inspirado numa referência de painel de detalhes com lista compacta à
  esquerda e conteúdo mais largo à direita:
  - **Esquerda** — Formulário Inicial (campos enviados) e Anexos, como antes.
  - **Direita** — Etapa atual (selo + campos específicos da etapa) e, logo abaixo,
    separado por uma linha divisória, Ações disponíveis — as duas seções que antes
    ocupavam colunas próprias agora ficam empilhadas na mesma coluna, mais larga.
  - Nenhuma funcionalidade foi removida: cabeçalho com ícone/título/descrição do
    processo, progresso horizontal no topo e as abas Histórico de
    atividades/Comentários no rodapé continuam iguais à v18/v19.

## O que mudou na v22

- **Botões de ação no tamanho do texto** — o botão "Confirmar" de cada ação (Aprovar,
  Reprovar, Mover Etapa, Devolver, personalizada) não estica mais 100% da largura do
  card; agora tem o tamanho do próprio texto, como um botão normal.
- **Responsável pela etapa atual** — a seção "Etapa atual" na coluna da direita passou
  a mostrar quem é responsável por ela: um avatar com iniciais e o nome/vínculo
  configurado na etapa (ex.: "Gestor direto do solicitante", "Financeiro"). Não
  aparece em etapas de sistema, que não têm responsável configurado.
- **"Formulário Inicial" com resumo** — o título da coluna esquerda ficou maior e em
  preto; logo abaixo dele agora aparece "Solicitação de X · Enviada em dd/mm/aaaa"
  (esse texto saiu do cabeçalho da modal, que ficou só com ícone, nome e descrição do
  processo).
- **Painel de Automações mais largo** — o painel lateral "Se... / Então..." do
  construtor de Automações cresceu de 392px para 460px, para a linha de condição
  (campo + operador + valor) parar de ficar espremida.

## O que mudou na v23

**List da visão do processo (mais interativa, inspirada num quadro de referência):**

- **Etapa atual como badge** — a coluna deixou de mostrar só o nome da etapa em texto
  simples; agora é um badge colorido (usa a cor da etapa, quando configurada), igual
  ao selo já usado nos cards do Kanban.
- **Coluna Responsável** — mostra um avatar com iniciais + o nome/vínculo configurado
  na etapa atual (ex.: "Gestor direto do solicitante", "Financeiro"). Fica "—" para
  etapas de sistema, que não têm responsável configurado.
- **Coluna Progresso** — uma barrinha colorida (na cor da etapa atual) + "N/total"
  mostrando quantas etapas já foram percorridas até a conclusão do processo.
- **Agrupar também na List** — o menu "Agrupar" (que já existia no Kanban) passou a
  funcionar na List também, com uma terceira opção que só faz sentido em lista:
  **Etapa**, **Solicitante** ou **Responsável**. Cada grupo vira uma linha de
  cabeçalho dentro da própria tabela, com contador e seta para recolher/expandir —
  clicar no cabeçalho do grupo esconde ou mostra as linhas dele.

**Central de Processos (Home):**

- **Clicar num processo publicado abre o Kanban direto** — antes, clicar em qualquer
  processo na lista "Seus Processos" (ou nos cards) sempre caía na tela de edição.
  Agora, processos **publicados** abrem direto na visão do processo (aba Kanban);
  **rascunhos** continuam abrindo a edição normalmente, já que ainda não têm nada
  publicado para visualizar. O botão "Editar processo" dentro da visão do processo
  continua disponível para voltar à edição a qualquer momento.

## O que mudou na v24

A List (v23) usava a mesma tabela com bordas da aba Permissões (`.perm-table`), o que
ficou visualmente pesado para uma lista agrupada — redesenhada do zero, sem reusar
aquele componente, com um visual mais próximo de ferramentas como Linear/Notion:

- **Sem bordas de tabela** — linhas e cabeçalhos agora são divs em grid, não uma
  `<table>`; a única "borda" visível é o hover sutil (fundo cinza) ao passar o mouse
  numa linha.
- **Barra de grupo colorida e com ícone** — o cabeçalho de cada grupo tem um fundo
  levemente tingido na cor da etapa (ou neutro, quando agrupado por Solicitante/
  Responsável) e um ícone que muda de acordo com o tipo de agrupamento: relógio para
  etapas intermediárias, check verde para a etapa final, documento para a etapa
  inicial, e um ícone de pessoa/organização para os agrupamentos por Solicitante ou
  Responsável.
- **Cabeçalho de colunas repetido por grupo** — em vez de uma única linha de
  cabeçalho fixa no topo da tabela inteira, cada grupo tem o seu próprio cabeçalho de
  colunas logo abaixo da barra — mesmo padrão do quadro de referência usado.
- **Nova coluna Prioridade** — a partir do campo "Tipo de solicitação" do formulário,
  quando existir (mesmo badge colorido já usado nos cards do Kanban e na modal de
  detalhes); mostra "Não definido" quando o processo não tem esse campo.
- **Coluna Etapa atual condicional** — como a etapa já vira o próprio cabeçalho do
  grupo quando o agrupamento é por Etapa, a coluna "Etapa atual" some nesse caso (pra
  não repetir a mesma informação duas vezes) e volta a aparecer normalmente quando o
  agrupamento é por Solicitante ou Responsável.
- O menu "..." (editar etapa, visível só para administradores) migrou da antiga linha
  de grupo da tabela para a nova barra de grupo, mantendo o mesmo comportamento.

## O que mudou na v25

Rodada de ajustes pedidos direto sobre a visão Administrador (4 itens) e a visão
Colaborador (3 itens):

**Administrador**

- **Modal "Criar processo" maior** — passou a usar uma classe própria
  (`modal-wizard`, 820px em vez dos 480px padrão), com mais espaço entre o
  formulário e o preview do card, e a grade de ícones/cores reorganizada para caber
  confortavelmente no novo tamanho.
- **Emojis → ícones SVG em todo o protótipo** — o seletor de ícone do processo (na
  criação e na edição), os ícones dos 6 processos-exemplo, os 3 modelos prontos, os
  ícones de início/fim nas Etapas e a coluna "Processo" da Intranet usavam emoji
  (🏖️💰🖥️🛒🎓📝 etc); tudo migrou para o mesmo sistema de ícones SVG (`ic()`,
  estilo heroicons outline) já usado no resto da interface — foram adicionados 6
  ícones novos (carrinho, lâmpada, caixa, pasta, porta, chave de fenda) para cobrir
  os processos-exemplo sem repetir ícone.
- **Uma barra de rolagem só nas Etapas/Automações** — o layout `.wf-layout` não tinha
  altura definida, então tanto o canvas quanto o painel lateral cresciam com o
  conteúdo e empurravam a tela inteira para rolar, além de cada um rolar por conta
  própria — resultado: duas barras visíveis ao mesmo tempo. Agora `.wf-layout` tem
  altura fixa (`calc(100vh - 320px)`) e cada painel interno rola de forma
  independente (`min-height:0` nos containers flex intermediários), então só existe
  uma barra — a do painel que realmente precisa dela.
- **Cards de etapa com altura igual** — o board de Etapas trocou
  `align-items:flex-start` por `align-items:stretch`, então todos os cards da fileira
  ocupam a altura do maior (o botão "Adicionar Etapa" continua alinhado ao topo).
- **Removida a linha "v2 · última edição por Mariana Rocha (RH)"** do cabeçalho do
  editor — informação de versionamento mockada que não agregava e poluía o header.

**Colaborador**

- **Dashboard em "Minhas Pendências"** — 4 KPIs (Pendentes, Atendidas — total
  finalizado em todos os processos —, Urgentes — pendentes com o campo "Tipo de
  solicitação" contendo "urgente" — e Tempo médio de espera, em dias desde a
  criação) mais 2 gráficos: **Solicitações prestes a vencer** (as pendentes mais
  próximas do prazo da etapa atual, calculado a partir do SLA de cada etapa, com
  badge "vence hoje" / "vence em Xd" / "vencida há Xd" colorido por urgência) e
  **Todas as solicitações em aberto** (contagem de solicitações não finalizadas,
  agrupadas por processo, em gráfico de barras). A tabela de pendências continua
  logo abaixo do dashboard, sem perder a navegação por clique já existente.
- **"Minhas Solicitações" e "Histórico" viraram uma tabela com cores e filtros** —
  no mesmo estilo sem bordas da List administrativa (v24): colunas Processo (com
  ícone e cor do processo), Solicitante, Etapa atual (badge na cor da etapa),
  Prioridade (badge a partir de "Tipo de solicitação", quando existir) e Criado em;
  com **Filtrar** (por processo, via checkboxes) e **Ordenar** (mais recentes ou
  Solicitante A-Z) no mesmo padrão de dropdown já usado na List do Administrador.
- **Modal de confirmação pós-envio com abas** — a modal que aparecia só com a
  trilha de etapas ganhou duas abas: **Status** (badge com a etapa atual, a trilha
  de etapas e o histórico de atividades da solicitação) e **Formulário** (os
  valores exatamente como foram enviados no formulário inicial), reaproveitando os
  mesmos componentes já usados na modal de detalhes da solicitação.

## O que mudou na v26

Três ajustes pontuais pedidos direto sobre a v25, todos na visão Colaborador:

- **Título "Todas as solicitações em aberto"** acima da tabela que fica logo abaixo
  do dashboard em "Minhas Pendências" — antes a tabela aparecia sem nenhum título
  próprio, só com a barra de Filtrar/Ordenar.
- **Título "Histórico das suas solicitações"** acima da tabela da aba Histórico,
  pelo mesmo motivo.
- **Solicitações de exemplo "prestes a vencer"** — os dados de exemplo tinham datas
  de criação fixas (`24/07/2026` etc.), então, conforme o tempo passava, todo mundo
  ia ficando com o prazo vencido há vários dias e o gráfico "Solicitações prestes a
  vencer" nunca mostrava nada realmente "prestes a vencer" (só "vencida há Xd").
  Quatro solicitações-exemplo por processo agora usam datas calculadas em relação a
  hoje (`offsetDateStr(0)`, `offsetDateStr(-1)`) — o gráfico sempre mostra uma
  mistura de "vence hoje", "vence em 1d" e "vence em 2d", não só itens vencidos. Como
  o gráfico pegava sempre os 6 itens mais urgentes (e a maioria das cópias do
  processo virava o mesmo prazo), troquei a amostragem por uma seleção espaçada ao
  longo da lista ordenada (em vez de só os 6 primeiros), pra sempre aparecer uma
  variedade de prazos no cartão, não só repetições do mesmo dia.

## O que mudou na v27

Missão: usar o construtor de processos já existente para montar um processo de
**Service Desk** completo, preenchendo o máximo possível das configurações
disponíveis — um exemplo de referência para apresentações e validação de UX.
Ele é publicado por padrão e sempre aparece em primeiro lugar (tanto na lista de
processos do Administrador quanto na Central de Processos do Colaborador), então
qualquer pessoa que abrir o protótipo já vê o exemplo mais completo assim que
entra.

**Processo**

- Nome **Service Desk**, categoria **TI** (nova categoria — antes só existia
  "Tecnologia"), ícone de **headset** (novo ícone) em **azul**, descrição
  "Processo utilizado para abertura, atendimento e resolução de chamados
  internos."

**Formulário — 9 campos**

- Título do chamado (texto curto, obrigatório), Categoria (seleção única:
  Hardware/Software/Rede/Acesso a Sistemas/Outros, obrigatório), Prioridade
  (seleção única: Baixa/Média/Alta/Crítica, obrigatório), Descrição (texto longo,
  obrigatório), Anexos (campo de anexo, opcional), Unidade e Departamento (seleção
  única, obrigatórios) — obrigatoriedade configurada só onde faz sentido.
- **Solicitante** e **Data da solicitação** como campos **automáticos** — um tipo
  de campo novo no construtor (`auto:true`), que aparece na paleta com uma badge
  "Automático", some do formulário de preenchimento (o solicitante não precisa
  digitar o próprio nome) e mostra o valor real (`sol.solicitante`/`sol.criadoEm`)
  em qualquer lugar que exiba os campos do formulário — modal de detalhes, aba
  Formulário do tracker pós-envio etc.

**Etapas — 5, com responsável, SLA, campos e ações próprias**

- **Abertura** — responsável Solicitante (via um novo vínculo "Solicitante" em
  Vínculo do colaborador), **sem SLA** (`slaNone:true` — um novo estado que a aba
  SLA da etapa sabe exibir como "esta etapa não tem SLA definido", em vez de cair
  no prazo padrão de 1 dia) e a ação "Enviar Solicitação".
- **Triagem** — responsável "Equipe de Service Desk" (novo grupo), SLA de 2 horas,
  Categoria e Prioridade liberadas para edição nesta etapa (as demais continuam só
  para visualização, que é o padrão), ações "Encaminhar Atendimento" e "Cancelar
  Chamado" (reprova direto para Finalizado, com justificativa obrigatória).
- **Em Atendimento** — responsável "Técnico de TI" (novo grupo), SLA de 8 horas,
  três campos específicos desta etapa (Diagnóstico, Solução, Tempo gasto — só
  existem aqui, exatamente como o mecanismo de "campos da etapa" já suportava) e
  o campo Anexos liberado para edição; ações "Resolver Chamado" (exige o
  preenchimento de Solução antes de concluir), "Solicitar Informações" e
  "Transferir Atendimento" (usando o tipo **Mover Etapa**, que nenhum processo do
  protótipo usava até agora).
- **Validação** — responsável Solicitante, SLA de 3 dias, ações "Confirmar
  Solução" e "Reabrir Chamado".
- **Finalizado** — etapa do sistema, responsável "Sistema", sem SLA, sem ações.

**Separação Ações × Automações**

Seguindo a instrução explícita do pedido: as 5 ações que avançam de etapa
("Enviar Solicitação", "Encaminhar Atendimento", "Resolver Chamado", "Confirmar
Solução", "Reabrir Chamado") **não têm destino direto configurado nelas** — cada
uma é só o botão que o responsável vê. Quem move a solicitação de fato é uma
automação do tipo "Ação executada → Mudar etapa" para cada uma. Isso expôs duas
frases confusas no construtor quando uma ação personalizada não tem destino
direto (mostravam "→ a definir", como se estivesse mal configurada) — corrigidas
para "→ via automação" no card compacto das Etapas e "conclui a ação — o destino
é definido por uma automação deste processo" na frase completa dentro da modal
da etapa.

**Automações — 19, cobrindo as 4 categorias pedidas**

- *Notificações*: novo chamado → equipe de TI; técnico atribuído → notificação
  para ele; "Solicitar Informações" executada → e-mail ao solicitante; item entra
  em Finalizado → pesquisa de satisfação.
- *Alteração de campos*: Prioridade = Crítica → acelera o SLA para 1 hora;
  Categoria = Hardware → grupo responsável Infraestrutura; Categoria = Software →
  grupo responsável Sistemas.
- *Mudança de etapa*: as 5 automações "ação executada → mudar etapa" descritas
  acima.
- *SLA*: lembrete 30 min antes do vencimento; notificação ao gestor da equipe
  quando o SLA vence.
- *Integrações*: Webhook, Chamar API, Mensagem no Teams, Criar tarefa (sistema
  externo) e Executar agente de IA.

Duas dessas integrações não existiam no construtor — **Mensagem no Teams** e
**Executar agente de IA** foram adicionadas como novos tipos de ação (junto com
**Atualizar SLA** e **Definir responsável**, usados nas automações de alteração
de campos), cada uma com seus próprios campos de configuração no painel lateral
("Então...").

**Dados de exemplo** — 16 solicitações reais espalhadas pelas 5 etapas (2 em
Abertura, 3 em Triagem, 4 em Em Atendimento, 2 em Validação, 5 em Finalizado),
com nomes, categorias, prioridades, unidades e departamentos variados, histórico
narrando a passagem por cada etapa/ação, e os campos Diagnóstico/Solução/Tempo
gasto preenchidos nos chamados que já passaram por atendimento. Indicadores (3
KPIs + 2 gráficos) e Permissões (4 grupos, incluindo Equipe de Service Desk e
Técnico de TI) também configurados.

**Ajuste que beneficia todos os processos** — o badge de "Prioridade" no
Kanban/List do Administrador e nas tabelas do Colaborador procurava só um campo
chamado exatamente "Tipo de solicitação"; como o Service Desk usa "Prioridade"
como nome do próprio campo, o badge ficava sempre "Não definido". Agora ele cai
para um campo chamado "Prioridade" quando "Tipo de solicitação" não existe, e a
cor do badge passou a diferenciar "Crítica" (vermelho) e "Alta" (âmbar), além de
"Urgente" (que já existia) — sem mudar nada para os processos que já usavam
"Tipo de solicitação".

## O que está implementado

**Central de Processos (Home)** — botão "Criar do 0", caixa do HyA Builder (mockada),
atalhos de modelos prontos, e a lista "Seus Processos" com busca, badge em monograma e
toggle de ativo/inativo por linha.

**Wizard de criação** — modal com Nome, Descrição, Categoria, Ícone e Cor, com
pré-visualização ao vivo do card final. Ao continuar, o processo nasce como rascunho e
o admin já entra direto no construtor de formulário.

**Editor do processo** — cabeçalho fixo com identidade do processo (nome e descrição
editáveis via popover), status, "Testar fluxo" e "Publicar", e cinco abas: Formulário,
Etapas, Automações, Indicadores, Permissões.

- **Formulário** — construtor drag-and-drop: paleta à esquerda, canvas central com
  pré-visualização de capa/nome/descrição (Cabeçalho ou Lateral); clicar num campo
  abre uma modal de configuração.
- **Etapas** — etapas em caixas lado a lado (kanban) com resumo de regras visível em
  cada card, ocupando a largura toda com rolagem lateral. Clicar numa etapa abre uma
  modal com abas Geral / Responsável / SLA / Campos / Ações (incluindo campos
  específicos daquela etapa e as quatro ações estruturadas — Aprovar, Reprovar, Mover
  Etapa, Devolver para o Solicitante — descritas em "O que mudou na v7"). As regras de
  saída de cada etapa aparecem no resumo do card e no "Testar fluxo".
- **Automações** — evento → condição → ação para todo o processo (não por etapa),
  num canvas com nó de gatilho e blocos adicionáveis, evento como dropdown, grupos de
  condições com E/OU e botão "Salvar automação". Ver "O que mudou na v6" e
  "O que mudou na v8".
- **Indicadores** — KPIs e gráficos simples de funil/barras, adicionáveis via galeria.
- **Permissões** — tabela de grupos/cargos × (Criar, Visualizar, Editar, Administrar,
  Acompanhar).

**Testar fluxo** — cenários de exemplo com valores de campo diferentes, mostrando o
caminho (etapa por etapa, com a regra que disparou) que a solicitação percorreria.

**Publicação** — drawer com checklist de prontidão antes de confirmar, seguido de um
loading animado e da visão do processo publicado (Kanban / List / Dashboard + modal de
detalhes da solicitação com ações funcionais). Ver "O que mudou na v11".

## Decisões de UX

- **Nada de BPM tradicional.** Vocabulário sempre do processo de negócio ("etapa",
  "responsável", "regra"), nunca "nó", "transição de estado" ou "engine".
- **Uma regra, um lugar.** Condição, destino e automação vivem no mesmo cartão — não
  há mais navegação entre etapa/aba/ação/drawer só para montar uma ponta do fluxo.
- **A lógica é visível sem clicar.** O resumo das regras aparece no próprio nó do
  canvas; não é preciso abrir o painel para entender para onde o fluxo vai.
- **Estados vazios como professor.** Canvas de formulário e workflow de um processo
  novo mostram instruções diretas em vez de ficarem em branco.
- **Indicadores são claramente opcionais** no checklist de publicação.

## Paleta e tipografia

Fonte: **Montserrat** (400/500/600/700/800), embutida como `@font-face` em base64
(subset Latin, ~14KB por peso) para funcionar offline e dentro de sandboxes com CSP
restritiva. Cor de marca: `#D74326` (vermelho-terracota, amostrado por pixel de um
vídeo do produto real), usada como único acento de ação/estado-ativo em toda a
interface — coerente com a paleta oficial da Hywork (`#D44D1C`/`#E9501B` na mesma
família). Cores semânticas (sucesso, aviso, erro, info) ficam à parte do acento de
marca para não colidir com ele. Raio padrão 6–13px, espaçamento em múltiplos de 4px,
corpo de texto em 13–14px — alinhado ao `README_DESIGN_SYSTEM.md` fornecido. Light e
dark mode suportados nativamente via `prefers-color-scheme` e `data-theme`.

## Da prototipagem à produção

Ao portar para a aplicação Next.js real, cada seção deste protótipo mapeia assim:

| Tela do protótipo | Componentes do Design System |
|---|---|
| Home / lista de processos | `PageLayout`, `Grid`, cards com `bg-card border-border rounded-md` |
| Wizard de criação | Modal + `Stack` + `Input` |
| Construtor de formulário | Layout de 3 colunas com `Container`; drag-and-drop via `@dnd-kit` (a avaliar) |
| Fluxo (canvas + painel + regras) | Canvas customizado; painel lateral como `Sheet`/drawer; cartão de regra como componente próprio reutilizável |
| Testar fluxo | Drawer + motor de avaliação de condições (reaproveitável do backend de execução real) |
| Indicadores | `Grid` de cards de indicador, gráficos via lib a definir |
| Permissões | Tabela com `checkbox`, `Section` |

Estado hoje é local (objeto JS em memória); numa implementação real, cada processo,
formulário, etapa, regra e permissão vira uma entidade persistida (provavelmente via
API própria do módulo Processos), com o front consumindo/mutando via camada de dados
já usada nos demais módulos da plataforma. O avaliador de condições usado em
"Testar fluxo" (`traceFlow`/`condPasses` no código) é propositalmente simples — numa
implementação real ele seria o mesmo motor de regras usado para rotear solicitações
de verdade, não uma simulação à parte.
