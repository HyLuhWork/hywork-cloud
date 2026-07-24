# Módulo Processos — Protótipo (visão do Administrador)

Protótipo navegável de alta fidelidade da experiência de **construção** de processos
internos na Hywork Cloud (férias, reembolso, compras, chamados, onboarding, aprovações
etc). Cobre apenas a jornada do **Administrador**; as telas do Colaborador e do
Responsável pela etapa ficam para uma segunda fase, conforme escopo do briefing.

## Como abrir

`index.html` é um arquivo único e autocontido (HTML + CSS + JS, sem build, sem
dependências externas) — dá para abrir direto no navegador ou hospedar em qualquer
lugar estático. Estado é mantido em memória (não persiste ao recarregar), o que é
suficiente para navegar a jornada completa e testar as interações.

## Por que um protótipo estático em vez de código de produção

Este repositório ainda não tem uma aplicação Next.js/React para o admin da Hywork —
só existia o `README.md`. Como o pedido era um *protótipo navegável de alta fidelidade*
para validar fluxo, arquitetura da informação e linguagem visual antes de qualquer
investimento de engenharia, optei por um artefato de design (HTML/CSS/JS vanilla)
em vez de tentar adivinhar/recriar uma stack de produção inexistente. A seção
"Da prototipagem à produção" no fim deste documento mapeia cada tela para os tokens
e componentes descritos no `README_DESIGN_SYSTEM.md` fornecido, para facilitar a
implementação real quando a base Next.js existir.

## O que está implementado

**Home do módulo** — lista de processos em cards (ícone, cor, categoria, status,
solicitações em aberto), filtros (Todos/Publicados/Rascunhos), busca e KPIs gerais do
módulo. CTA "Novo Processo" sempre visível.

**Wizard de criação (Etapa 1)** — modal com Nome, Descrição, Categoria, Ícone e Cor,
com pré-visualização ao vivo do card final. Ao continuar, o processo nasce como
rascunho e o admin já entra direto no construtor de formulário — o "vazio" do
formulário e do workflow funciona como onboarding natural (ensina construindo).

**Editor do processo** (abre para qualquer processo, novo ou existente) — cabeçalho
fixo com identidade do processo, status e ações (Visualizar, Publicar), e cinco abas:

- **Geral** — os mesmos campos do wizard, editáveis a qualquer momento.
- **Formulário** — construtor drag-and-drop: paleta de componentes à esquerda
  (campos básicos, avançados, estrutura), canvas central, inspetor de configuração
  à direita (rótulo, ajuda, placeholder, obrigatório, visibilidade condicional).
- **Workflow** — a tela mais importante do módulo. Canvas com o fluxo vertical de
  etapas (Formulário enviado → etapas configuráveis → Finalizado) e um painel lateral
  que abre ao clicar numa etapa, com sub-abas Geral / Responsável / SLA / Campos /
  Ações. Cada ação (Aprovar, Reprovar, Solicitar Ajuste...) abre um drawer de
  configuração com Resultado (destino, texto do botão, encerra o processo),
  Condições (regras condicionais), Interface (comentário, anexos, campos extras) e
  Automações (e-mail, push, atualizar campo, IA, webhook, API, microflow).
- **Dashboard** — indicadores do processo (KPIs e gráficos simples de funil/barras),
  adicionáveis via galeria de widgets.
- **Permissões** — tabela de grupos/cargos x (Criar, Visualizar, Editar, Administrar,
  Acompanhar).

**Publicação** — drawer com checklist de prontidão (formulário, workflow, ações,
permissões configurados; indicadores marcados como opcionais) antes de confirmar.

## Decisões de UX

- **Nada de BPM tradicional.** Sem terminologia técnica de motor de workflow — o
  vocabulário é sempre do processo de negócio ("etapa", "responsável", "ação"), nunca
  "nó", "transição de estado" ou "engine".
- **Drawers e painéis, não novas páginas.** Configurar uma etapa ou uma ação nunca
  tira o admin do contexto visual do fluxo — o canvas permanece visível atrás do
  painel/drawer.
- **Estados vazios como professor.** O canvas de formulário e o fluxo de workflow de
  um processo novo mostram instruções diretas ("Arraste um componente aqui",
  "Selecione uma etapa") em vez de ficarem em branco.
- **Indicadores são claramente opcionais** no checklist de publicação — não bloqueiam
  o lançamento de um processo simples.

## Paleta e tokens usados

A paleta segue a marca real da Hywork (guia de cores em anexo: laranja `#EA7623` como
cor primária/ação, tons de azul-marinho `#104A74`/`#092938` como identidade e
apoio) combinada com a estrutura de tokens do `README_DESIGN_SYSTEM.md` (raio padrão
8–10px em componentes do Admin, escala de espaçamento em múltiplos de 4px, tipografia
com corpo em ~13–14px). Cores semânticas (sucesso, aviso, erro, info) foram definidas
à parte da cor de marca para não colidir com o laranja de ação. Light e dark mode são
suportados nativamente via `prefers-color-scheme` e `data-theme`.

## Da prototipagem à produção

Ao portar para a aplicação Next.js real, cada seção deste protótipo mapeia assim:

| Tela do protótipo | Componentes do Design System |
|---|---|
| Home / lista de processos | `PageLayout`, `Grid`, cards com `bg-card border-border rounded-md` |
| Wizard Etapa 1 | Modal + `Stack` + `Input` |
| Construtor de formulário | Layout de 3 colunas com `Container`; drag-and-drop via `@dnd-kit` (a avaliar) |
| Workflow (canvas + painel) | Canvas customizado; painel lateral como `Sheet`/drawer |
| Drawer de ação | Drawer sobreposto com `Tabs` internas |
| Dashboard | `Grid` de cards de indicador, gráficos via lib a definir |
| Permissões | Tabela com `checkbox`, `Section` |

Estado hoje é local (objeto JS em memória); numa implementação real, cada processo,
formulário, workflow, ação e permissão vira uma entidade persistida (provavelmente via
API própria do módulo Processos), com o front consumindo/mutando via camada de dados
já usada nos demais módulos da plataforma.
