# Módulo Processos — Protótipo (visão do Administrador)

Protótipo navegável de alta fidelidade da experiência de **construção** de processos
internos na Hywork Cloud (férias, reembolso, compras, chamados, onboarding, aprovações
etc). Cobre apenas a jornada do **Administrador**; as telas do Colaborador e do
Responsável pela etapa ficam para uma segunda fase, conforme escopo do briefing.

**v2** — revisado a partir de um vídeo de referência do produto real e de feedback
direto sobre a lógica de construção do workflow. Ver "O que mudou na v2" abaixo.

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

## O que está implementado

**Home do módulo** — lista enxuta de processos em cards (ícone, badge de status,
título, descrição, CTA), filtros (Todos/Publicados/Rascunhos), busca e KPIs gerais do
módulo. CTA "Novo Processo" sempre visível.

**Wizard de criação** — modal com Nome, Descrição, Categoria, Ícone e Cor, com
pré-visualização ao vivo do card final. Ao continuar, o processo nasce como rascunho e
o admin já entra direto no construtor de formulário.

**Editor do processo** — cabeçalho fixo com identidade do processo (nome e descrição
editáveis via popover), status, "Testar fluxo" e "Publicar", e quatro abas:

- **Fluxo** — canvas vertical de etapas com resumo de regras visível em cada nó, e um
  painel lateral único (sem sub-abas) que abre ao clicar numa etapa: tipo, responsável
  e prazo (se aplicável), **regras de saída** (o coração da tela) e campos visíveis
  (recolhido por padrão). Etapas novas podem ser criadas direto de dentro de uma regra.
- **Formulário** — construtor drag-and-drop: paleta à esquerda, canvas central,
  inspetor de configuração à direita.
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
