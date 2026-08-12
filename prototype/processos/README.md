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

**v33** — rodada de ajustes pedida direto sobre a visão Colaborador, o
construtor de processos e o caso de uso Service Desk:

- **Minhas Pendências** agora só lista solicitações paradas numa etapa com
  pelo menos uma ação configurada (`filaAprovacao()` passou a exigir
  `step.regras.length>0`) — etapas de backlog sem ação, como a nova
  "Abertura" do Service Desk, não aparecem mais como pendência de ninguém.
- As linhas de **"Solicitações prestes a vencer"** no dashboard de Minhas
  Pendências agora são clicáveis e abrem a modal de detalhes da solicitação
  (com a coluna de ações da etapa atual), em vez de serem só texto estático.
- **Histórico** passou a mostrar só as solicitações finalizadas do próprio
  usuário logado (Luiza Vieira), não mais todas as solicitações finalizadas
  da organização — a função `historicoFinalizadas()` continua compartilhada
  (o KPI "Atendidas" do dashboard permanece organizacional), só a aba
  Histórico ganhou um filtro extra por `solicitante`. Foram adicionadas
  solicitações de exemplo com Luiza Vieira como solicitante (uma em
  andamento, duas finalizadas) para a aba deixar de aparecer vazia.
- **Todos os processos**: o botão de "Ver solicitações" no card de cada
  processo voltou a usar o ícone de quadro (grid/board) em vez do ícone de
  documento. A visão do processo publicado deixou de restringir o
  Colaborador à aba **List** — agora ele também vê Kanban e Dashboard, como
  o Administrador.
- **Permissões** do construtor de processos foram reduzidas de 5 para 3
  colunas (Criar, Editar, Administrar — "Visualizar" e "Acompanhar" saíram
  do modelo), cada uma com tooltip explicando o que ela libera: Criar
  ("Podem criar novas solicitações e acompanhar suas solicitações"), Editar
  ("Podem editar visualizações de quadros, lists, dashboard") e Administrar
  ("Podem administrar a construção de processos").
- **"Comece a partir de modelos"**, na Home do construtor: clicar num card
  de template não abre mais o wizard direto — agora mostra antes uma modal
  de prévia no estilo **HyStore** (o marketplace de templates), com badge
  "HyStore", ícone/título/categoria do template, descrição, um espaço de
  prévia em vídeo/imagem (placeholder visual, sem mídia real) e um botão
  "Iniciar contratação" que só então segue para o wizard já pré-preenchido.
- **Caso de uso Service Desk**: a etapa "Abertura" virou um backlog puro sem
  nenhuma ação configurada (era uma ação "Enviar Solicitação" que não fazia
  sentido nela), e a etapa de sistema **"Formulário enviado"** passou a vir
  antes dela — a ordem correta agora é Formulário enviado → Abertura →
  Triagem → Em Atendimento → Validação → Finalizado. A automação que tirava
  o chamado do backlog foi adaptada de "ação executada" para "entrou na
  etapa Abertura", já que não existe mais uma ação ali. Também foi corrigido
  um bug (pré-existente, exposto pelo Service Desk por ser o primeiro
  processo a usar bastante "Ação personalizada") em que ações sem condição
  real configurada mostravam o editor de condição vazio em vez do link
  opcional "+ Adicionar condição" — agora todas as ações do Service Desk
  (Resolver Chamado, Solicitar Informações, Confirmar Solução, Reabrir
  Chamado etc.) exibem o card de configuração corretamente, sem blocos de
  condição vazios.

**v34** — dois ajustes pedidos direto:

- Na modal de detalhes da solicitação, as respostas do formulário inicial
  (coluna "Formulário Inicial") deixaram de aparecer em negrito.
- A etapa **Triagem** do Service Desk ganhou uma **"Devolver para o
  Solicitante"** (retorna para "Formulário enviado", com justificativa
  obrigatória) ao lado de "Encaminhar Atendimento" e "Cancelar Chamado". A
  ação "Encaminhar Atendimento" agora exige o preenchimento de três campos
  antes de confirmar — **Categoria**, um novo campo de texto **"Detalhes da
  triagem"** e um novo **"Checklist de triagem"** (3 itens, todos precisam
  estar marcados) — exibidos diretamente dentro do card da própria ação.
  Isso exigiu generalizar o mecanismo de "Exigir preenchimento de campo"
  das Ações personalizadas: antes só suportava **um** campo obrigatório por
  ação (`campoPreenchimentoId`), agora suporta uma **lista** de campos
  (`camposPreenchimentoIds`), escolhidos por uma checklist no editor em vez
  de um único dropdown. Também foi adicionado um novo tipo de campo,
  **Checklist**, ao construtor de formulário/campos de etapa (renderizado
  como uma lista de caixas de seleção; "preenchido" significa todos os itens
  marcados).

**v35** — mudança de arquitetura pedida direto: a visão **Colaborador**
deixou de ter uma **Central/Catálogo de Processos** única, compartilhada
entre todos os processos. Agora, cada processo publicado vira o seu próprio
**Aplicativo** dentro da Intranet — nada da lógica de workflow, automações,
regras de ação ou permissões foi alterado, só a forma como o Colaborador
navega até essas telas.

- **"Processos" virou um dropdown** no topo da Intranet, listando cada
  processo publicado (e ativo) como um item clicável com ícone — exatamente
  como já acontecia com "Institucional"/"Gente & Gestão", só que agora
  funcional e alimentado pela lista real de processos.
- **Cada Aplicativo tem sua própria tela**, com cabeçalho (ícone, nome,
  descrição do processo) e uma barra de abas fixa: **Minhas Solicitações**
  (página inicial do app), **Minhas Pendências** e **Meu Histórico** —
  visíveis a qualquer colaborador — seguidas de **Dashboard**, **Kanban** e
  **Todas as Solicitações** (reaproveitando 100% as telas de Kanban/List/
  Dashboard que já existiam na visão do processo publicado) e **Configurar
  Processo**, que abre o construtor já existente. Essas últimas 4 abas
  ganharam uma etiqueta "Administrador" — no protótipo, sem um motor de
  papel/permissão por usuário, elas ficam visíveis para todo mundo (mesma
  simplificação já usada desde a v26), só sinalizadas visualmente.
- **Minhas Solicitações, Minhas Pendências e Meu Histórico agora são
  filtradas por processo** — antes essas páginas existiam uma única vez,
  somando todos os processos; agora cada Aplicativo mostra só os dados dele
  (`minhasSolicitacoesFor`, `filaAprovacaoFor`, `historicoFinalizadasFor`,
  `openSolicitacoesFor`). A tabela desses painéis perdeu a coluna
  "Processo" e o filtro "Filtrar por processo" (redundantes agora que já se
  está dentro de um processo só), e o gráfico "Solicitações em aberto" do
  painel de Minhas Pendências passou a agrupar por **etapa** em vez de por
  processo.
- A visão **Administrador** (sidebar, o Home com a lista de processos para
  criar/editar/publicar, o construtor, a visão Kanban/List/Dashboard do
  processo aberto a partir dali) não teve nenhuma regra alterada nesta
  rodada — só o "invólucro" da experiência do Colaborador mudou. (A v36,
  logo abaixo, trouxe o mesmo conceito de Aplicativo para dentro do menu
  do Administrador também.)

**v36** — dois ajustes pedidos direto sobre a v35: o menu lateral do
**Administrador** também passou a gerar automaticamente um item por
processo publicado, e o menu foi reorganizado em grupos por tipo.

- **Cada processo publicado agora também aparece no menu do Administrador**
  — dentro de um novo grupo **"Processos"**, logo abaixo de "Central de
  Processos" (que continua sendo a lista de gerenciamento/criação). Clicar
  num processo abre exatamente o mesmo **Aplicativo** (`appHTML()`) usado
  pelo Colaborador — a tela é agnóstica de shell, então funciona idêntica
  dentro da sidebar do Administrador ou do topbar da Intranet, sem nenhum
  código novo de renderização.
- **O menu lateral foi reorganizado em grupos "por tipo"**: Geral (Home,
  Analytics), Processos (Central de Processos + cada Aplicativo),
  Comunicação (Conteúdos, TV Corporativa, Fórum, Assinatura de Email),
  Pessoas & Cultura (Reconhecimentos, Academy, Integração RH/HCM),
  Ferramentas (Modelos, Integrações de Documentos, Dados) e Administração
  (Usuários) — antes era uma lista única, sem seções.
- Como consequência de abrir o construtor tanto a partir da Central de
  Processos quanto de dentro de um Aplicativo, o botão "Voltar para
  Processos" do construtor precisou aprender **para onde voltar**: agora
  guarda isso em `state.editorReturnTo` (`'home'` ou `'app'`, setado no
  momento em que se entra no construtor por cada caminho) — clicar em
  "Configurar Processo" a partir de um Aplicativo e depois em "Voltar"
  retorna para aquele mesmo Aplicativo, em vez de cair na Central de
  Processos.

**v37** — dois ajustes pedidos direto sobre como o Aplicativo se comporta
dentro do menu do Administrador:

- **O Aplicativo aberto a partir do menu do Administrador não mostra mais
  as páginas pessoais** (Minhas Solicitações, Minhas Pendências, Meu
  Histórico) — essas continuam existindo só na Intranet, onde fazem
  sentido (são sobre "as minhas solicitações", e o Administrador está ali
  para gerenciar o processo, não para usá-lo como solicitante). Pelo menu
  do Administrador, o Aplicativo já abre direto na visão de gestão (antes
  caía em "Minhas Solicitações", que nem aparecia mais pra ele). O
  cabeçalho também troca o botão "Iniciar Solicitação" por "Editar
  processo" nesse contexto. (Na v38 essa visão de gestão ficou ainda mais
  direta — ver abaixo.)
- **Dashboard, Kanban e Todas as Solicitações deixaram de ser 3 abas
  separadas** e viraram **uma abinha só** ("Todas as Solicitações"), com um
  seletor interno de Kanban/List/Dashboard dentro dela — reaproveitando a
  mesma barra de sub-abas que a visão de processo do Administrador já usava
  antes de existir o conceito de Aplicativo. Isso vale tanto para o
  Aplicativo aberto pelo menu do Administrador (2 abas: Todas as
  Solicitações + Configurar Processo) quanto para o mesmo Aplicativo aberto
  pela Intranet do Colaborador (5 abas: as 3 pessoais + Todas as
  Solicitações "Administrador" + Configurar Processo "Administrador").

**v38** — ajuste pedido direto: na visão administrativa, a barra de abas
"Todas as Solicitações / Configurar Processo" da v37 era redundante — o
Aplicativo aberto pelo menu do Administrador não tem mais páginas pessoais
mesmo, então só sobrava uma aba de conteúdo (mais "Configurar Processo",
que já tem o próprio botão "Editar processo" no cabeçalho). Agora, quando
o Aplicativo é aberto pelo menu do Administrador, ele pula direto para o
seletor Kanban/List/Dashboard, sem essa barra de abas por cima — a mesma
tela aberta pela Intranet do Colaborador continuava com as 5 abas normais
(3 pessoais + Todas as Solicitações/Configurar Processo marcadas
"Administrador") — ver a v39 logo abaixo para o ajuste feito nessa parte.

**v39** — três ajustes pedidos direto sobre as abas do Aplicativo na visão
do Colaborador:

- **"Todas as Solicitações" foi para a frente de "Minhas Solicitações"**
  — a ordem das abas agora é Todas as Solicitações, Minhas Solicitações,
  Minhas Pendências, Meu Histórico.
- **A etiqueta "Administrador" saiu** das abas — "Todas as Solicitações"
  aparece igual às outras, sem nenhuma marcação.
- **A aba "Configurar Processo" saiu da visão do Colaborador** — ela
  continua existindo, mas só como o botão "Editar processo" no cabeçalho
  do Aplicativo quando aberto pelo menu do Administrador (`open-app-configurar`
  não mudou, só parou de ser exposta como aba na Intranet).

**v40** — dois ajustes visuais pedidos direto, só na Intranet (visão
Colaborador):

- **O menu superior da Intranet (`.itn-topnav`) ficou branco** em vez do
  cinza (`--shell-bg`) que também é usado pela sidebar/topbar do
  Administrador — antes os dois compartilhavam a mesma cor; agora só o
  menu da Intranet usa `var(--surface)` (branco), sem alterar o
  Administrador.
- **As páginas da visão Colaborador ganharam um fundo bem clarinho**
  (`var(--canvas-bg)`, o mesmo azul-acinzentado já usado no canvas do
  construtor de workflow) atrás dos cards/widgets — antes o fundo era
  branco puro, igual aos próprios cards, sem nenhum contraste. O seletor
  usado (`.itn-topnav + .screen-root`) garante que só as telas dentro do
  shell da Intranet mudam — o Administrador continua com fundo branco.

**v41** — depois do fundo clarinho da v40, alguns elementos dentro dos
Aplicativos ficaram "apagados" por não terem fundo próprio (antes eles
sentavam sobre uma página branca, então não precisavam de destaque):

- **`.pv-hero`** (cabeçalho do Aplicativo, com ícone/nome/descrição do
  processo) ganhou fundo branco (`var(--surface)`), borda e sombra leve —
  agora se destaca como um cartão em vez de flutuar sobre o canvas.
- **`.intranet-tabs`** (a barra de abas Todas as Solicitações/Minhas
  Solicitações/Minhas Pendências/Meu Histórico) ganhou o mesmo tratamento
  de cartão branco.
- **As tabelas (`.pv-list`)** — usadas em Minhas Solicitações, Minhas
  Pendências, Meu Histórico e na sub-view List de Todas as Solicitações —
  ganharam fundo branco com borda, em vez de ficarem sem nenhum fundo
  (só a linha em hover tinha `background:var(--muted)` antes).
- **O grupo Kanban/List/Dashboard de "Todas as Solicitações"** (o seletor
  de sub-abas + toolbar de busca/filtro/ordenar + o conteúdo) agora fica
  dentro de um único cartão branco (`.pv-todas-card`), em vez de cada
  parte flutuar solta sobre o canvas — isso também resolve o Kanban, cujas
  colunas (`background:var(--muted)`, um cinza bem parecido com o novo
  `--canvas-bg`) quase desapareciam por falta de contraste; dentro do
  cartão branco elas voltam a se destacar como antes da v40.
- Escopo: só o que é renderizado dentro do Aplicativo (`appHTML()`) e
  reaproveitado por ele — não foi mexido em nenhuma regra/fluxo, só em
  CSS e num wrapper (`.pv-todas-card`) ao redor de HTML já existente.

**v42** — revertido o fundo clarinho da v40: as páginas da visão
Colaborador voltaram a ser 100% brancas (removida a regra
`.itn-topnav + .screen-root{background:var(--canvas-bg)}`). O menu
superior branco da v40 e os destaques em cartão branco da v41
(`.pv-hero`, `.intranet-tabs`, `.pv-list`, `.pv-todas-card`) continuam
como estavam — eles já tinham fundo/borda próprios, então funcionam
igual sobre a página branca.

**v43** — removida a borda de `.pv-hero` (cabeçalho do Aplicativo) e
`.intranet-tabs` (barra de abas) — sobre a página já branca, a borda
ficava redundante com o fundo branco do próprio cartão. Mantido o
fundo (`var(--surface)`) e a sombra leve (`var(--shadow-sm)`), que já
bastam para separar visualmente esses elementos da página.

**v44** — mesmo ajuste da v43, agora nos dois cartões restantes: o
cartão do Kanban/List/Dashboard de "Todas as Solicitações"
(`.pv-todas-card`) e as tabelas (`.pv-list`, usadas em Minhas
Solicitações/Minhas Pendências/Meu Histórico) também perderam a borda,
mantendo só fundo branco e sombra leve — consistente com o cabeçalho e
a barra de abas ajustados na v43.

**v45** — corrigido o espaçamento entre o título ("Minhas Solicitações",
"Minhas Pendências", "Meu Histórico") e a tabela logo abaixo, que tinha
um vão grande e injustificado no meio (título → toolbar de
ordenar/filtrar → tabela, cada um com sua própria margem, todas
somadas). O título agora fica dentro da própria barra de
ordenar/filtrar — mesma linha, alinhado à esquerda enquanto "Ordenar:
Recentes" fica à direita — direto acima do cartão da tabela, sem o
vão solto no meio. (`intranetTableHTML`/`intranetTableToolbarHTML`
ganharam um parâmetro `titleText` — o título deixou de ser uma `div`
solta antes da chamada e passou a ser renderizado por dentro da
própria barra de ferramentas da tabela.)

**v46** — reformulada a modal de detalhes da solicitação
(`requestModalHTML`), que estava muito apertada, com tudo empilhado e
sem hierarquia visual clara. Novo layout inspirado numa referência de
ticket estilo Jira, adaptado aos dados que já existem no protótipo
(sem inventar campos como Resolution/Votes/Watchers, que não existem
no nosso modelo):

- **Cabeçalho**: breadcrumb pequeno ("{Processo} › {código do
  chamado}", ex. `SD-017`, gerado só para exibição a partir da posição
  da solicitação na lista — não é um ID novo, o `sol.id` interno
  continua o mesmo) + título grande ("Solicitação de {solicitante}") +
  linha de metadados (data de criação + selo colorido da etapa atual,
  no lugar do texto pequeno que existia antes).
- **Corpo em duas colunas**, cada uma rolando de forma independente:
  - Esquerda — "Descrição e Anexos": os campos do formulário
    (`solFormRowsHTML`) agora renderizam numa grade de 2 colunas
    (rótulo em cima, valor embaixo, ao estilo "Details" da referência)
    em vez da lista de linhas rótulo–valor lado a lado que deixava tudo
    espremido numa única coluna estreita. Os anexos reais da
    solicitação (`sol.anexos`) ganharam um visual de cartão de arquivo
    (ícone + nome + tamanho) em vez do chip de texto corrido. Campos
    específicos da etapa atual (quando existem) aparecem logo abaixo,
    na mesma coluna.
  - Direita — "Pessoas" (solicitante + responsável pela etapa, com
    avatar), depois "Ações disponíveis"/"Status" (os mesmos cartões de
    ação de sempre — Aprovar/Reprovar/Mover Etapa/etc — só que agora
    numa seção própria com mais espaço), e por fim as abas
    Histórico/Comentários — que antes ficavam num rodapé de altura fixa
    (260px) por baixo das duas colunas, e agora vivem dentro da própria
    barra lateral, cada seção separada por uma linha divisória.
- Removido o rodapé fixo (`.request-modal-footer`) — a modal inteira
  agora é só cabeçalho + tracker + as duas colunas roláveis.
- Corrigido de passagem: o campo de formulário do tipo anexo (ex.
  "Anexos" no Service Desk) não aparecia mais como uma linha vazia
  duplicada — `solFormRowsHTML` agora pula campos `type:'attachment'`,
  já que o anexo de verdade tem sua própria seção dedicada.
- Nenhuma regra de fluxo, permissão ou ação mudou — é só reorganização
  visual dos mesmos dados e das mesmas ações (`.req-action-card`,
  `.req-tracker`, `.req-col-info` continuam com a mesma função,
  cobertos pelos mesmos testes de regressão).

**v47** — a v46 ainda não agradou; refeita a modal do zero para seguir
à risca uma segunda referência (print de um design do Figma), dessa
vez em **3 colunas** lado a lado (`.request-modal-3col`) em vez de
2 colunas + rodapé:

- **Cabeçalho simplificado**: só `#{código}` pequeno, título grande
  (agora usa o valor de um campo do formulário cujo rótulo contenha
  "Título" quando o processo tiver um — ex. "Mouse sem fio parou de
  funcionar" no Service Desk — com `p.name` como reserva para
  processos sem esse campo, como Férias), e duas linhas de metadados
  ("Aberto em" e "Solicitante" com avatar), sem o selo de etapa (que
  mudou de lugar, ver abaixo).
- **Coluna 1 "Informações"** (`.req-panel-info`, cartão cinza-claro):
  os campos do formulário inicial agora empilham numa única coluna
  (rótulo em negrito preto, valor cinza logo abaixo — sem grade de
  2 colunas nem caixa alta como na v46) e os comprovantes aparecem
  como pill de arquivo (ícone de pasta + nome) no fim do mesmo cartão.
- **Coluna 2 "Etapa atual"** (`.req-panel-etapa`, cartão branco): o
  selo da etapa (agora em pill arredondado, caixa alta, cor da etapa)
  saiu do cabeçalho e voltou para cá, seguido do responsável pela
  etapa, os campos específicos dela (quando existem) e, depois de uma
  linha divisória, a seção "Ações" com os mesmos cartões de sempre.
- **Coluna 3 "Atividades"** (`.req-panel-ativ`, cartão branco): as
  abas viraram "Histórico"/"Conversa" (era "Comentários"), cada uma
  com ícone; a conversa agora é um balão de chat de verdade — avatar
  + nome + data acima, texto numa bolha branca abaixo, dentro de um
  fundo cinza-azulado com uma linha tracejada conectando um autor ao
  próximo — e o campo de novo comentário virou uma barra arredondada
  fixa no rodapé da coluna (ícone de clipe + input + botão de enviar
  circular laranja), só visível na aba Conversa.
- `.req-col-info` (classe da v46) virou `.req-panel-etapa` —
  `check_v33.js` foi atualizado para checar a classe nova.
- De novo, nenhuma regra mudou — mesmos dados, mesmas ações
  (`.req-action-card`, `.req-tracker`), só reorganizados visualmente
  para bater com a referência.

**v48** — dois ajustes finos pedidos direto sobre a v47:

- **Removida a barra de etapas** (o tracker horizontal
  "Formulário enviado → Abertura → ... → Finalizado") que ficava entre
  o cabeçalho e as 3 colunas — a etapa atual já aparece no selo colorido
  dentro do painel "Etapa atual", então a barra ficava redundante.
  `check_v12.js` foi atualizado: agora confirma que `.req-tracker` NÃO
  aparece mais dentro da modal de detalhes (o tracker continua existindo
  normalmente na modal de confirmação pós-envio, que é outra tela).
- **O fundo das 3 colunas (`.request-modal-3col`) virou branco**
  (`var(--surface)`) em vez do cinza-azulado (`var(--canvas-bg)`) —
  o painel "Informações" (cinza-claro) e os painéis com borda
  continuam se destacando normalmente contra o branco.

**v49** — dois pedidos sobre o **fluxo do Service Desk** e sobre o
**editor de Ações** (ambos vindos de testar a modal nova):

- **A etapa "Abertura" (o backlog inicial) ganhou ações manuais** —
  antes era o único passo do fluxo sem nenhuma ação configurada
  (`regras:[]`), então a modal mostrava a seção "Ações" vazia. Agora
  tem **Aprovar** ("Encaminhar para Triagem", avança manualmente para
  Triagem — hoje isso já acontece sozinho quando o chamado entra na
  etapa, via automação; esta é uma opção manual complementar) e
  **Reprovar** ("Cancelar Chamado", com justificativa obrigatória,
  move para Finalizado — útil para chamado duplicado ou aberto por
  engano).
- **As ações que já existiam mas não tinham destino real corrigidas**:
  "Encaminhar Atendimento" (Triagem), "Resolver Chamado" (Em
  Atendimento), "Confirmar Solução" e "Reabrir Chamado" (Validação)
  tinham `destinoStepId:null` — a automação correspondente (ex.
  "Resolver Chamado avança para Validação") existia só como
  configuração/documentação no motor de automações, que neste protótipo
  não é o que executa de fato quando o botão é clicado (isso já era
  assim antes, é uma limitação conhecida e documentada do protótipo).
  Como resultado, clicar nesses botões não movia o chamado de etapa de
  verdade. Agora o `destinoStepId` de cada um foi setado diretamente
  (Triagem→Em Atendimento, Em Atendimento→Validação, Validação→
  Finalizado/Em Atendimento), então clicar neles move o chamado de
  verdade, com o texto de histórico correto.
- **"Confirmar Solução" virou tipo `aprovar`** (antes era
  `personalizada` sem nenhum campo obrigatório, então a troca de tipo
  não perde nada) e **"Reabrir Chamado" virou tipo `reprovar`** (com
  justificativa obrigatória) — ambas ganham a cor/ícone padrão de
  aprovar/reprovar em vez do genérico "Ação personalizada".
  "Encaminhar Atendimento" e "Resolver Chamado" continuam
  `personalizada`, pois dependem do "Exigir preenchimento de campo"
  que só esse tipo suporta.
- **No editor, dentro de "Ações" de uma etapa: removida a possibilidade
  de adicionar novas ações personalizadas** — o botão "Adicionar ação
  personalizada" foi removido; só os 4 tipos presetados (Aprovar,
  Reprovar, Mover Etapa, Devolver para o Solicitante) continuam
  adicionáveis pelos chips do topo. Ações personalizadas já existentes
  (como as do Service Desk citadas acima) continuam funcionando e
  editáveis normalmente — só não dá mais para criar uma nova.
- **Removidas as condicionais de cada ação** — o link "Adicionar
  condição (opcional)" que aparecia em cada cartão de ação (Aprovar,
  Reprovar, ação personalizada) foi removido, junto com o editor de
  condição (campo/operador/valor) que ele abria. Ações continuam
  podendo ter um destino, campos obrigatórios etc. — só não é mais
  possível condicionar quando a ação se aplica.
- `check_v11c.js` foi reescrito: a parte que criava uma ação
  personalizada pelo editor foi trocada por um teste ao vivo usando a
  ação "Resolver Chamado" já existente no Service Desk, e passou a
  confirmar que o botão de adicionar personalizada e o link de condição
  não aparecem mais. `check_v27.js` foi atualizado (Abertura agora tem
  2 ações configuradas, não mais 0).

**v50** — dois ajustes nos Aplicativos disponíveis:

- **"Service Desk" foi renomeado para "Solicitações para TI"** — o
  nome do processo (`p_sd`) mudou em toda a plataforma: Central de
  Processos, sidebar do Administrador, dropdown "Processos" da
  Intranet, cabeçalho do Aplicativo etc. O nome do formulário
  (`formConfig.nome`, antes "Abertura de Chamado — Service Desk") e a
  imagem de capa embutida (que tinha "Service Desk" desenhado dentro
  do próprio SVG) também foram atualizados/removidos para não ficarem
  com o nome antigo em nenhum lugar. Nenhum ID interno mudou (o
  processo continua sendo `p_sd`), só o nome de exibição.
- **O app "Chamados de TI" foi removido** — era um processo à parte
  (`p3`, com dados genéricos de exemplo, sem o fluxo detalhado do
  Service Desk/Solicitações para TI) que aparecia como um 4º item nos
  Aplicativos. Removido inteiramente da lista de processos seedados —
  deixou de aparecer na Central de Processos, na sidebar do
  Administrador e no dropdown de Apps da Intranet.
- Testes atualizados: todas as ocorrências de "Service Desk" em
  `check_v11c.js`, `check_v24.js`, `check_v27.js`, `check_v31.js`,
  `check_v33.js` e `check_v35.js` viraram "Solicitações para TI"; a
  contagem de Apps no dropdown em `check_v35.js` passou de 5 para 4
  (published+active).

**v51** — corrigido o desalinhamento à esquerda entre o cabeçalho do
Aplicativo, a barra de abas, o título e a tabela — cada um tinha um
recuo esquerdo diferente (`.pv-hero` 20px, `.intranet-tabs` 14px, o
título da tabela 0px, e o texto das linhas 22px = 8px do `.pv-list` +
14px da própria linha), então o conteúdo ficava "serrilhado" em vez de
formar uma linha reta. Unificado tudo em 20px: `.intranet-tabs` foi de
14px para 20px, a barra de ordenar/filtrar (`intranetTableToolbarHTML`)
ganhou `padding: 0 20px 12px` (antes não tinha nenhum), e `.pv-list`
foi de 8px para 6px de padding (6+14=20, igual ao resto). O cartão de
Kanban/List/Dashboard (`.pv-todas-card`) não foi afetado — já tinha seu
próprio padding interno consistente.

**v52** — nova página **Aplicativos**, dentro do grupo "Administração" da barra
lateral (junto de "Usuários"). Lista os aplicativos instalados no workspace via
HyStore — Academy, Fórum, Integrações RH, Solicitações de T.I, Solicitações de
Reembolso, Solicitações de Férias, TV Corporativa, Assinatura de Email,
Integrações de Documentos, Reconhecimentos e Dados — cada um com ícone, categoria
e badge "Instalado". A página tem um filtro por categoria (Todas / Recursos
Humanos / Tecnologia / Financeiro / Comunicação / Produtividade) via chips, um
campo de busca por nome, e um banner de destaque no topo com CTA "Explorar a
HyStore". Novo estado `state.appsCategory`/`state.appsSearch`, catálogo
`APPS_CATALOG`/`APP_CATEGORIES`, e tela `apps-admin` (só visível no modo
Administrador — some do menu ao trocar para Colaborador, como o restante do
grupo "Administração").

**v53** — reposicionado o item **Aplicativos** na barra lateral: em vez de
ficar no grupo "Administração" (fim do menu), agora fica logo abaixo de
"Home", no topo do grupo "Geral", como pedido.

**v54** — reestruturação grande do menu lateral do Administrador, reduzido
para exatamente o pedido: **Geral** (Home, Aplicativos, Analytics, Modelos),
**Comunicação** (Conteúdos), **Pessoas & Cultura** (Reconhecimentos) e
**Administração** (Usuários, Dados, Configurações — novo item, decorativo
como os demais). Saíram do menu o grupo "Processos" (com "Central de
Processos" e a lista dinâmica de Aplicativos publicados), TV Corporativa,
Fórum, Assinatura de Email, Academy, Integração RH/HCM e Integrações de
Documentos — todos continuam existindo como cartões na página
**Aplicativos**, só que sem atalho próprio na barra lateral. Como
consequência, "Home" virou o único link da barra lateral para a
Central de Processos (agora renomeada **Process Builder** — pedido
separado — junto com o cartão equivalente na aba Tecnologia de
Aplicativos, ambos com `data-action="go-home"`), então esse nav-item
deixou de ser decorativo (era sempre `noop`) e passou a navegar de
verdade, com `id="nav-home-link"`/`id="nav-apps-link"` e uma nova
`updateAdminNavActive()` chamada a cada `render()` para manter o
destaque correto — a versão anterior computava o `active` só na primeira
montagem da barra lateral (que só é reconstruída ao trocar de
Administrador/Colaborador), então clicar em Aplicativos deixava "Home"
preso como destacado.

Dentro de **Aplicativos**, a categoria Tecnologia ganhou o cartão
**Process Builder** (clicável, abre a Central de Processos/construtor).
Os aplicativos publicados no construtor (`enabledProcesses()`) agora
também aparecem como cartões clicáveis na grade — cada um abre o
Aplicativo correspondente (`data-action="open-app"`), reaproveitando a
categoria do processo (`TI` vira `Tecnologia`). Como os processos
publicados por padrão (Solicitações para TI / Solicitação de Férias /
Reembolso de Despesas) já representavam três entradas estáticas do
catálogo da v52, essas três (`ti`, `reembolso`, `ferias`) foram
removidas do `APPS_CATALOG` para não duplicar o mesmo aplicativo em
duas versões (uma decorativa, outra funcional) lado a lado.

**v55** — nova funcionalidade na configuração de etapa: aba **Campos** ganhou
a seção "Fonte de dados vinculada", com botão **Vincular fonte de dados**.
Abre uma modal (`dsLinkModalHTML`) que primeiro pede a fonte
(`<select data-bind="dslink.fonte">`, catálogo `DATA_SOURCES` — por ora
"Cadastro de Equipamento" e "Cadastro de Fornecedor", cada um com seus
próprios campos) e, ao escolher, lista os campos daquela fonte como
checkboxes (todos marcados por padrão) em "Campos que o responsável deverá
preencher". Confirmando ("Vincular formulário"), a etapa passa a guardar
`step.dataSourceLink = {fonteId, camposIds}`; o cartão já vinculado mostra
nome da fonte + campos escolhidos, com "Editar vínculo" (reabre a mesma
modal pré-preenchida) e um ícone de lixeira para remover.

Na execução do processo, a modal da solicitação (`requestModalHTML`) passou
a renderizar, só para quem está atuando na etapa (não para o solicitante:
`state.processViewRole==='colaborador'` esconde a seção inteira), um bloco
**Formulário complementar** logo depois dos campos extras da etapa — nome
da fonte vinculada + os campos escolhidos como inputs de verdade
(`data-bind="sol.dscampo"`, valores em `sol.dsValores`, um objeto novo e
independente de `sol.valores` porque esses campos não pertencem ao
formulário do processo) e um botão "Salvar informações" que valida os
campos obrigatórios da fonte antes de confirmar — é importante frisar que
isso não cria uma nova solicitação: é só uma atividade complementar da
etapa atual, preenchendo dados de uma estrutura que existe fora do
processo.

Como cenário de exemplo pedido, a etapa **Em Atendimento** do processo
Solicitações para TI já nasce com o vínculo à fonte "Cadastro de
Equipamento" (todos os 5 campos selecionados) — ao abrir qualquer chamado
que esteja nessa etapa (ex: "Instalação do pacote Office", #SPT-008), o
técnico vê o formulário complementar pedindo para cadastrar o equipamento
envolvido no atendimento.

**v56** — duas páginas novas na Administração, inspiradas em prints da
plataforma real: **Dados** e **Automações**.

`DATA_SOURCES` deixou de ser um catálogo estático (só usado para o vínculo
de etapa da v55) e virou `state.dataSources`, uma coleção de verdade
(`seedDataSources()`), com `records:[]` e `createdAt` em cada fonte —
Cadastro de Equipamento e Cadastro de Fornecedor continuam lá, e entraram
Sugestões de Ideias (6 campos, 5 registros — a mesma vista no print),
Abertura de Chamado, Eventos e FAQ.

A página **Dados** (`dadosHTML`) lista todas as fontes (Nome/Registros/
Campos/Criado em, busca, "+ Nova Fonte de Dados"); clicar numa fonte abre
o detalhe (`fonteDetailHTML`) — tabela de registros com colunas dinâmicas
vindas de `fonte.fields`, busca, botão **Campos** (abre/fecha campos da
fonte, com o mesmo padrão de "adicionar campo" já usado em Formulário/
Etapas) e **+ Adicionar** (novo registro, formulário gerado a partir dos
campos da fonte, validando obrigatórios). Sem nenhuma automação, a fonte
mostra um ícone de raio (`.ds-automate-trigger`) ao lado de **Campos**/
**Adicionar**; clicando nele abre um popover **"Automatize sua fonte de
dados"** (`dsAutomatePopoverHTML`) com ilustração e CTA "Criar nova
automação" (v57); com automações, vira uma lista com "+ Nova Automação".

O construtor de automação é nova (`ds*`), inspirada no
evento→condição→ação que o processo já tinha, mas dessacoplada de um
processo específico — vive em `state.dsAutomacoes` (lista global, cada
automação com `fonteId`), reaproveitando 100% do CSS do canvas de
automação existente (`.auto-node`, `.wf-panel`, `.cond-*`, `.action-tpl`).
Eventos: `DS_EVENTO_TYPES` (Item criado / Campo Alterado / Item Excluído /
Usuário Atribuído / Data Alcançada, os 5 do print); "Campo Alterado" mostra
um seletor do campo da fonte e, se for de seleção única, chips com as
opções ("Quando o valor mudar para:", igual ao print). Ações:
`DS_ACOES` (Enviar notificação / Atualizar campo / Webhook / Chamar API /
Executar agente de IA). O painel sempre mostra "Fonte de Dados" no topo —
pode ser trocada a qualquer momento, o que reinicia o evento configurado.

A nova página **Automações** (`automacoesAdminHTML`, nav item logo abaixo
de Dados) lista todas as automações de todas as fontes, cada uma com o
nome da fonte + resumo, toggle ativo/inativo e exclusão; "+ Nova
Automação" abre o mesmo construtor, começando na primeira fonte da lista.

**v57** — o CTA "Automatize sua fonte de dados" saiu do rodapé da tela
(banner fixo abaixo da tabela) e virou um ícone de raio no cabeçalho da
fonte, ao lado de **Campos**/**Adicionar** — só aparece quando a fonte
ainda não tem automação. Clicar nele abre um popover ancorado ao ícone
(`.ds-automate-popover`), fiel ao print de referência: painel duotone,
metade esquerda com gradiente pêssego e uma ilustração (linhas com
"contas" coloridas conectando a um anel cônico multicolor), metade
direita com título/texto/CTA "Criar nova automação". Fecha ao clicar no
X, ao clicar fora (mesmo padrão dos outros menus de toolbar do
protótipo, `pv-toolbar-menu-wrap`) ou ao criar a automação.

**v58** — nova seção **Engajamento** na barra lateral do Admin, entre
Pessoas & Cultura e Administração: **Campanhas**, **Desafios** (com
submenu **Todos os desafios** / **Aprovações de desafios**), **Badges**
e **Sistema de Pontos**. É só estrutura de menu por enquanto — todos os
itens usam `data-action="noop"`, sem página atrelada, no mesmo padrão já
usado por outros itens de placeholder do menu (Analytics, Modelos,
Conteúdos, Reconhecimentos, Configurações).

Desafios é o único item com filhos, então reaproveitou (recriou) o
padrão `.nav-subitem` que tinha sido removido na v36 por estar sem uso —
agora com um comportamento novo: `.nav-item-toggle` com chevron que gira
(`.nav-item-chevron`), controlando um `.nav-subgroup` que expande/recolhe
(`state.navDesafiosOpen`, ação `toggle-nav-desafios`). Como a sidebar do
Admin só é reconstruída quando o modo (Admin/Colaborador) muda —
`renderShell()` reaproveita o mesmo `<aside>` entre renders e só
sincroniza estado via funções pontuais tipo `updateAdminNavActive()` —,
o toggle segue esse mesmo padrão: `updateNavDesafiosGroup()`, chamada a
cada `render()`, adiciona/remove a classe `.open` no `#nav-desafios-group`
em vez de reconstruir o HTML da sidebar inteira.

**v59** — reforma grande dos dois construtores de automação (Processos e
Fontes de Dados), a partir de prints de referência de um concorrente
(fluxo com bloco "Galhos" e modal "Selecione uma ação"):

- **Modal "Selecione uma ação"** (`actionPickerModalHTML`) substitui a
  lista simples de 5–11 botões que existia dentro do painel "Então...".
  Busca, categorias à esquerda (Mais usados/IA/Comunicação/Dados/Lógica/
  Processo — a última só para automações de Processo) e duas colunas à
  direita: **Nativo do Hywork** (ações de verdade, filtráveis por
  categoria/busca) e **Integrações** (grade decorativa — Slack, Airtable,
  Google Sheets, OpenAI etc. — com badge "Em breve"; clicar mostra um
  toast, não finge que funciona). Abre ao clicar no "+" do canvas (que
  agora tem tooltip "Adicionar uma nova ação" no hover, via
  `.auto-add-circle::after`) ou no botão "Trocar" do painel de uma ação
  já existente (`open-action-picker-replace`, muda o tipo no lugar em vez
  de criar um bloco novo).
- **Bloco "Galhos"** — condição multi-caminho (switch/case): vários ramos
  em paralelo, cada um com nome e condição próprios, desenhados no canvas
  como um fork com colunas lado a lado (`.wf-branches`, linhas
  tracejadas). Foi a mudança mais profunda: um bloco deixou de viver só
  numa lista plana (`auto.blocos`) e passou a poder ser uma árvore — um
  bloco `kind:'galhos'` tem `ramos:[{id, nome, grupos, blocos}]`, e cada
  ramo tem sua própria condição (mesmo formato `{grupos}` de um bloco
  "condicao" — um ramo nunca tem `.kind`, o que o distingue nas buscas) e
  sua própria cadeia de blocos (que pode, recursivamente, conter outro
  "Galhos"). `findBlocoDeep`/`removeBlocoDeep` (compartilhadas entre os
  dois construtores) buscam/removem por id em qualquer profundidade da
  árvore; `chainHTML`/`galhosForkHTML` (também compartilhadas) renderizam
  qualquer cadeia — tronco principal ou o conteúdo de um ramo — de forma
  recursiva. O painel de um bloco "Galhos" lista os ramos com avatar de
  letra (A, B, C…) e um atalho "Condicional" para a condição de cada um
  (`dsGalhosPanelHTML`/`automacaoGalhosPanelHTML`); o painel de um ramo é
  o mesmo editor de condições de sempre, só que com um campo extra para
  renomear o ramo no topo.
- Ícone novo para "Condição" (losango, `condition`) para não colidir mais
  com o ícone de "Galhos" (que passou a usar o antigo ícone de fork de
  3 nós, mais coerente para "múltiplos caminhos").

Tudo isso é código genuinamente compartilhado entre os dois construtores
(não duplicado como o resto do arquivo) — `chainHTML`, `galhosForkHTML`,
`ramoCondSummaryText`, `apAddButtonHTML`, `autoBlocoNodeHTML`,
`actionPickerModalHTML` e as funções de busca/remoção recebem um `ctx`
(ou o `scope`, `'ds'` ou `'automacao'`) com as diferenças de cada
construtor (qual ação de seleção/exclusão disparar, onde buscar a
automação atual, etc.) em vez de existirem em duas cópias quase-iguais.

**v60** — catálogo de eventos e ações ampliado a partir do PDF de
referência "Hywork microflows", fornecido pelo usuário:

- **Eventos (gatilhos)** — o seletor "Evento — quando dispara" da
  automação de Fonte de Dados (`DS_EVENTO_GROUPS`) passou a listar os
  ~28 eventos do PDF, agrupados por `<optgroup>` nas 6 entidades da
  intranet: **Páginas** (`pages.published`/`pages.viewed`), **Feed** (post
  publicado/visualizado, reação adicionada/removida, comentário criado/
  removido, voto em enquete, post compartilhado), **Dados** (registro
  criado/atualizado — os únicos que ainda mostram o seletor de **Fonte de
  Dados**, escondido para as demais categorias já que não fazem sentido
  para "Colaborador cadastrado" ou "Notícia publicada"), **Colaboradores**
  (cadastrado, aniversário hoje, aniversário de casa hoje, status
  alterado, evento adicionado à timeline), **Notícias** (publicada,
  visualizada, reação adicionada/removida, comentário criado/removido,
  tag recebida) e **Documentos (HyDrive)** (visualizado, baixado,
  compartilhado, comentário adicionado). O antigo catálogo de 5 eventos
  específicos de fonte de dados (Item criado/Campo Alterado/etc.) saiu —
  os dois primeiros equivalem a `data.record.created`/`data.record.updated`
  do PDF. `EVENTO_TYPES` (gatilhos de automação de **Processo** — Item
  Criado, Entrou na etapa, Ação executada etc.) não mudou: são sobre o
  ciclo de vida de uma solicitação, um domínio diferente do PDF.
- **Step types (ações)** — os 9 tipos de passo do PDF (seção "Step
  types") agora existem nos dois construtores: **Enviar mensagem**
  (Destinatário, Canal — Feed/E-mail/Push —, Mensagem, Anexos/links,
  Template com variáveis, Agendamento), **Criar, atualizar ou deletar
  registro** (Entidade, Ação — Criar/Atualizar/Deletar, esconde Campo/
  Novo valor quando é "Deletar" —, Condições, Origem), **Consultar
  informação**, **Aguardar um tempo** (alterna entre Intervalo e Data/
  hora exata, mais Jitter e cancelamento por condição), **Condição**
  (já existia), **Interação humana** (quem responde, tipo de interação,
  prazo/SLA, lembretes, rota de timeout, reatribuição), **Utilizar
  agente** (era "Executar agente de IA"), **Adicionar evento à
  timeline** e **Parar fluxo** — os últimos dois são novos. Os tipos
  específicos de Processo que o PDF não cobre (Mudar etapa, Solicitar
  preenchimento, Atualizar SLA, Definir responsável, Criar tarefa,
  Webhook, Chamar API, Mensagem no Teams) continuam existindo ao lado
  dos novos, sem conflito — automação de Processo é a união dos dois
  catálogos, automação de Fonte de Dados usa só o do PDF.
  Bloco `acao` ganhou um dicionário livre `campos:{chave:valor}`
  (`makeDsBloco`/`makeAutomacaoBloco`) para guardar os campos extras de
  cada step type sem precisar de uma propriedade nomeada por campo;
  `campoVal(bloco, key)` lê, e um bind genérico `dsautomacao.acaoCampo`/
  `automacao.acaoCampo` (com `data-key`) grava — registrado tanto no
  listener de `change` (selects/checkboxes) quanto no de `input` (texto/
  textarea). `acaoExtraFieldsHTMLGeneric(scope, auto, bloco, campos,
  destinatarioOpts, entidadeOpts)` é a função compartilhada que desenha
  os campos extras de cada tipo — os dois construtores chamam a mesma
  função, só passando suas próprias listas de opções (Destinatário/
  Entidade variam um pouco entre Processo e Fonte de Dados); os tipos
  exclusivos de Processo continuam com painéis próprios, sem passar por
  essa função. Ícones novos: `timeline`, `stop`, `download`.

**v61** — "Nova Automação"/"Criar nova automação" (nos quatro pontos de
entrada: página global Automações, dentro de uma Fonte de Dados, e na
aba Automações de um Processo) deixou de criar a automação na hora e
abrir direto o editor com um evento padrão — agora abre primeiro a modal
**"Selecione um gatilho"** (`triggerPickerModalHTML`), a partir de um
print de referência (Softr): busca, seções empilhadas à esquerda (Mais
usados, Embutido, e por entidade) e uma coluna "Integrações" à direita,
mesmo estilo visual da modal "Selecione uma ação" da v59 (reaproveita
`.ap-modal`/`.ap-head`/`.ap-search`/`.ap-col`/`.ap-tile`), mas sem barra
lateral de categorias — todas as seções ficam empilhadas e roláveis na
coluna esquerda, mais fiel ao print. Escolher um gatilho cria a
automação com esse evento já selecionado e abre o editor direto no
painel do gatilho — daí o pedido: "já vem com o gatilho selecionado".

`triggerSectionsFor(scope, search)` monta as seções: automação de Fonte
de Dados usa `DS_EVENTO_GROUPS` (as 6 entidades do PDF da v60, evento
por evento); automação de Processo usa `EVENTO_TYPES`. Os itens com
`maisUsado:true` só aparecem na seção "Mais usados" — ficam de fora da
própria seção de origem para não duplicar (bug pego em teste: sem esse
filtro "Colaborador cadastrado" aparecia duas vezes na tela). Nova
seção **"Embutido"**, a partir da linha do PDF "Triggers: para o MVP
Eventos e Cron. (Webhook, mcp trigger posteriormente)": `TRIGGER_BUILTIN`
tem **Agendamento único** e **Cronograma recorrente** (selecionáveis de
verdade — são o "Cron" do MVP) e **Webhook**/**Trigger MCP** (com badge
"Em breve", clicam para toast em vez de selecionar — são o "posteriormente"
do PDF). `dsEventoMeta`/`eventoMeta` ganharam fallback para
`TRIGGER_BUILTIN`, e os `<select>` de evento nos dois painéis de gatilho
ganharam um `<optgroup>` "Embutido" — sem isso o dropdown mostrava a
primeira opção da lista em vez do Cron de verdade escolhido na modal
(bug pego em teste, corrigido antes de publicar). A coluna "Integrações"
reaproveita `INTEGRATION_TILES` (mesmo catálogo decorativo da v59).

**v62** — pedido do usuário ("sinto falta de você usar esse background
cinza em outros lugares", sobre o cartão cinza do grupo de condições):
`.wf-panel-section` — usado só dentro dos painéis dos construtores de
automação (gatilho, condição, ação, galhos — nenhum outro lugar do
protótipo usa essa classe) — ganhou o mesmo tratamento visual do
`.cond-group` (fundo `var(--muted)`, borda, `border-radius`, padding),
então todo campo/grupo de campos do painel lateral (Evento, Fonte de
Dados, Destinatário, Canal, Mensagem, Tipo de ação etc.) agora aparece
no próprio cartão cinza, em vez de flutuar solto contra o fundo branco
do painel. Uma exceção: o wrapper que envolve os grupos de condição
("Se...") não podia ganhar o mesmo fundo, porque already contém os
cartões `.cond-group` dentro dele — um cartão cinza dentro de outro
cartão cinza perderia a borda; esse wrapper ganhou a classe modificadora
`.wf-panel-section-plain` (remove fundo/borda/padding, mantém só o
espaçamento) para voltar a ficar "solto" como antes. O painel de Galhos,
que não usava `.wf-panel-section`, passou a usar — e as linhas de ramo
(`.galho-row`) ganharam `background:var(--surface)` explícito para não
se misturar com o cinza do cartão que passou a envolvê-las.

**v63** — pedido do usuário ("o background da parte do flow precisa ser mais
clarinho, tá mt forte o azul"): `--canvas-bg` (fundo do canvas de automação,
`.wf-canvas-wrap`) no tema claro foi clareado de `#F3F6FA` para `#F9FAFB` —
o azulado ficava forte demais atrás dos nós do fluxo. O `--canvas-bg` do tema
escuro (`#191E26`) não foi alterado.

**v64** — pedido do usuário ("coloque o título do flow no header igual no
print... e o ícone pra voltar"), com print de referência mostrando um ícone
de casinha, o nome do fluxo e um toggle numa barra fina com borda inferior:
o header do editor de automação (`.back-link` "← Voltar para Automações" +
botão "Salvar automação") virou uma `.wf-topbar` — ícone de casa
(`.wf-home-btn`, ainda navega de volta para a lista) + nome da automação
(`.wf-topbar-title`, refletindo `auto.nome` ao vivo enquanto o campo "Nome
da automação" do painel é editado, via `setText('#wf-topbar-title', …)`
nos binds `dsautomacao.nome`/`automacao.nome`) à esquerda, e o toggle
Ativo/Inativo (reaproveitando a ação `toggle-ds-automacao-ativo`/
`toggle-automacao-ativo` que já existia na listagem) + "Salvar automação"
à direita. Aplicado nos dois construtores (`ds` e `automacao`).

**v65** — pedido do usuário ("incluir possibilidade de alterar o nome da
automação", sobre o print da `.wf-topbar`): o nome da automação já podia ser
editado pelo campo "Nome da automação" no painel lateral, mas agora também é
editável direto no header — `.wf-topbar-title` deixou de ser um `<div>` e
virou um `<input>` (`.wf-topbar-title-input`: transparente e sem borda em
repouso, ganha fundo/borda no hover e no foco, "Clique para renomear" como
`title`), com Enter chamando `.blur()`. Os dois campos (header e painel)
compartilham o mesmo bind (`dsautomacao.nome`/`automacao.nome`) e ficam
sincronizados ao vivo nos dois sentidos via `syncAutoTitleInputs(el, val)`
— edita em um, o outro atualiza junto, sem perder o cursor de quem está
digitando.

**v66** — bug reportado pelo usuário ("quando tem um galho tá ficando
quebrado", com print mostrando as colunas de um bloco Galhos sobrepostas):
`.wf-branch-col` tinha `width:300px`, mas os nós renderizados dentro dela
(`.auto-node`, incluindo o chip de condição e o cartão "Então...") usam
`width:380px` — 80px mais largos que a coluna. Como o flex column só
centraliza (`align-items:center`) em vez de conter o excesso, cada nó
vazava 40px para cada lado da sua coluna lógica, e com `gap:36px` entre
colunas os cartões de ramos vizinhos ficavam se sobrepondo (o da direita
por cima do da esquerda). Corrigido igualando `.wf-branch-col` a
`width:380px` (mesma largura de `.auto-node`, então chip/rótulo/cartões
ficam exatamente do tamanho da coluna, sem vazar) e reduzindo o `gap` de
36px para 28px. Testado com 2 e 3 ramos, textos longos de condição/ação e
nos dois temas — sem sobreposição em nenhum caso.

**v67** — pedido do usuário ("na fonte de dados ao clicar em nova automação,
eu não quero mais esse formato de workflow... eu quero ações simples dentro
de uma fonte de dados", com prints de referência de um construtor no estilo
Pipefy "Sempre que.../Faça isso..."): as automações de **Fontes de Dados**
deixaram de usar o canvas/construtor visual em árvore (gatilho → condição →
galhos → ações encadeadas) — isso continua existindo só para automações de
**Processos**. No lugar, cada automação de fonte de dados agora tem no
máximo **um gatilho e uma ação**, escolhidos numa tela de duas colunas
("Sempre que..." / "Faça isso...") ligadas por um conector com dois pontos,
igual ao print de referência:
- **Gatilhos** (`DS_TRIGGERS`): Ao criar um novo item, Ao alterar algum
  campo (pede o campo), Agendamento a partir de um campo (pede o campo de
  data + "Antes/Depois" + valor + unidade).
- **Ações** (`DS_ACOES_SIMPLES`): Envie uma notificação por email
  (destinatário + assunto + mensagem), Envie um push (destinatário +
  mensagem), Envie um post no feed (mensagem), Atualizar campo (campo +
  novo valor).
- Cada coluna mostra a lista de opções até algo ser escolhido; depois vira
  um cartão com "Trocar" (reaproveita `.action-tpl`) + os campos daquele
  tipo, dentro de um `.wf-panel-section` (mesmo cartão cinza usado em
  outros lugares do app). O gatilho ganhou também um bloco opcional
  "E também siga estas condições" (lista simples de campo/operador/valor,
  sem os grupos E/OU da versão antiga) — reaproveita `.cond-row`.
- O header do editor (ícone de casa, nome editável, toggle Ativo/Inativo,
  "Salvar automação") continua o mesmo da v64/v65.

Removido (só existia para o construtor antigo de Fontes de Dados, sem uso
depois desta mudança): `DS_EVENTO_GROUPS`/`DS_EVENTO_TYPES`/`dsEventoMeta`
(catálogo de ~28 eventos por entidade do PDF), `DS_ACOES` (10 tipos de
ação com campos avançados), `DS_CHAIN_CTX`/`dsBlocoOptsFor`, o modal
"Selecione um gatilho" e o modal "Selecione uma ação" deixaram de ser
usados no escopo `ds` (continuam servindo só o construtor de Processos),
e a árvore de blocos (`galhos`/`condicao` aninhados) some do lado das
Fontes de Dados. Nada disso foi tocado no construtor de **Processos**, que
continua idêntico (canvas, Galhos, condições em grupos E/OU, o catálogo
completo de ações do PDF) — as duas automações eram construídas com o
mesmo motor de blocos e passaram a divergir por pedido do usuário: Processo
é workflow de verdade (várias etapas, aprovações), Fonte de Dados é regra
simples de notificação/atualização.

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
