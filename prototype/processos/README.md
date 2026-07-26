# Módulo Processos — Protótipo (visão do Administrador)

Protótipo navegável de alta fidelidade da experiência de **construção** de processos
internos na Hywork Cloud (férias, reembolso, compras, chamados, onboarding, aprovações
etc). Cobre apenas a jornada do **Administrador**; as telas do Colaborador e do
Responsável pela etapa ficam para uma segunda fase, conforme escopo do briefing.

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

## O que está implementado

**Central de Processos (Home)** — botão "Criar do 0", caixa do HyA Builder (mockada),
atalhos de modelos prontos, e a lista "Seus Processos" com busca, badge em monograma e
toggle de ativo/inativo por linha.

**Wizard de criação** — modal com Nome, Descrição, Categoria, Ícone e Cor, com
pré-visualização ao vivo do card final. Ao continuar, o processo nasce como rascunho e
o admin já entra direto no construtor de formulário.

**Editor do processo** — cabeçalho fixo com identidade do processo (nome e descrição
editáveis via popover), status, "Testar fluxo" e "Publicar", e cinco abas: Formulário,
Fluxo, Automações, Indicadores, Permissões.

- **Formulário** — construtor drag-and-drop: paleta à esquerda, canvas central,
  inspetor de configuração à direita.
- **Fluxo** — canvas vertical de etapas com resumo de regras visível em cada nó,
  ocupando a largura toda. Clicar numa etapa abre uma modal com abas Geral /
  Responsável / SLA / Campos / Ações (incluindo campos específicos daquela etapa e as
  quatro ações estruturadas — Aprovar, Reprovar, Mover Etapa, Devolver para o
  Solicitante — descritas em "O que mudou na v7"). As regras de saída de cada etapa
  aparecem no resumo do nó e no "Testar fluxo".
- **Automações** — evento → condição → ação para todo o processo (não por etapa),
  num canvas com nó de gatilho e blocos adicionáveis. Ver "O que mudou na v6".
- **Indicadores** — KPIs e gráficos simples de funil/barras, adicionáveis via galeria.
- **Permissões** — tabela de grupos/cargos × (Criar, Visualizar, Editar, Administrar,
  Acompanhar).

**Testar fluxo** — cenários de exemplo com valores de campo diferentes, mostrando o
caminho (etapa por etapa, com a regra que disparou) que a solicitação percorreria.

**Publicação** — drawer com checklist de prontidão antes de confirmar.

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
