# Plano de Implementação: E-commerce "Loja Minimalista"

Este documento descreve o plano inicial para a construção da loja virtual, consolidando os elementos de design gerados via Stitch nos projetos Mobile e Desktop.

## 1. Visão Geral

O objetivo é criar uma loja e-commerce moderna, responsiva e de alta conversão. O design será "Mobile-First", utilizando a base detalhada gerada para mobile e adaptando para desktop com os conceitos de checkout minimalista.

### Projetos Base (Stitch)

- **Mobile (Principal):** _Streamlined Shopping Cart_ (ID: ...629)
  - Telas: Home, Detalhes do Produto, Carrinho, Checkout.
  - Estética: Clean, "Round Eight", Fonte Inter.
- **Desktop (Referência):** _Minimalist Checkout Flow_ & _Streamlined Checkout Page_
  - Foco: Experiência de pagamento sem distrações em telas grandes.

## 2. Identidade Visual (Design System)

Será criado um arquivo `design-system.css` global.

- **Tipografia:** `Inter` (Google Fonts).
- **Paleta de Cores:**
  - _Primária (Ação/Brand):_ **#0df2df** (Cyan/Teal - vindo do Mobile) e **#13ec78** (Green - vindo do Checkout).
  - _Sugestão de Uso:_ Usar o Cyan para branding/logos e detalhes decorativos, e o Green especificamente para botões de "Finalizar Compra" e "Pagar" (alta conversão).
  - _Fundo:_ Light Mode (Branco puro #FFFFFF e Cinzas muito claros #F8F9FA).
  - _Texto:_ Preto Profundo (#1A1A1A) para contraste.
- **Formas:**
  - Bordas arredondadas (8px a 12px) consistente com "Round Eight".
  - Inputs e Cards com sombras suaves (Glassmorphism sutil onde apropriado).

## 3. Estrutura do Site (Sitemap)

### A. Página Inicial (Home)

_Baseada na tela "Modern Minimalist Home"_

- **Header:** Logo, Busca Expandível, Ícone de Carrinho (com contador badge).
- **Hero Section:** Banner rotativo ou estático com CTA (Call to Action).
- **Categorias:** Grid com ícones ou imagens circulares.
- **Vitrine:** Seção "Trending" ou "Destaques" com cards de produtos (Imagem + Nome + Preço).
- **Bottom Navigation (Mobile):** Menu fixo inferior para acesso rápido.

### B. Página de Produto (PDP)

_Baseada na tela "Sleek Product Details"_

- **Galeria:** Slider de imagens (swipe em mobile, grid/zoom em desktop).
- **Info:** Título grande, Preço em destaque, Avaliações (Estrelas).
- **Selecão:** Variantes de Tamanho e Cor (pílulas selecionáveis).
- **Ações:** Botão flutuante ou fixo "Adicionar ao Carrinho".
- **Descrição:** Texto expansível e lista de características.

### C. Carrinho de Compras

_Baseada na tela "Streamlined Shopping Cart"_

- **Lista:** Itens com imagem miniatura, controle de quantidade (+/-) e botão remover de fácil acesso.
- **Resumo:** Subtotal, Frete estimado e Total final.
- **Cupom:** Campo discreto para código promocional.

### D. Checkout (Fluxo de Pagamento)

_Baseada em "Ultra-Clean Checkout" e Projetos Desktop_

- **Layout Limpo:** Cabeçalho reduzido (apenas logo e "Voltar").
- **Etapas:**
  1.  Identificação (Email).
  2.  Entrega (Endereço).
  3.  Pagamento (Cartão/Pix).
- **Resumo Fixo:** Em desktop, o resumo do pedido ficará fixo na lateral direita.

## 4. Stack Tecnológico

Seguindo as diretrizes de desenvolvimento ágil e robusto:

- **Core:** HTML5 Semântico + JavaScript (ES6 Modules).
- **Estilização:** CSS Vanilla Moderno (Variáveis CSS `:root`, Flexbox, Grid).
  - _Nota:_ Evitar frameworks pesados como Bootstrap. Usar CSS puro para performance máxima e fidelidade ao design.
- **Gerenciamento de Estado:**
  - `CartManager.js`: Classe para gerenciar adição/remoção de itens e persistência no `localStorage`.
- **Dados:** Arquivo JSON local (`products.json`) ou integração futura simulada.
- **Ícones:** Biblioteca leve (ex: Phosphor Icons ou Heroicons SVG).

## 5. Implementação (Roadmap)

1.  **Setup & Assets:** Configurar projeto, baixar imagens dos protótipos Stitch para usar como placeholders, configurar variáveis CSS.
2.  **Home & Componentes Base:** Criar Header, Cards de Produto e Footer.
3.  **Fluxo de Produto:** Criar página de detalhes e lógica de seleção de variantes.
4.  **Lógica do Carrinho:** Implementar adicionar/remover e persistência.
5.  **Checkout Visual:** Construir as telas de finalização com foco na UX minimalista.
6.  **Polimento:** Animações de transição, estados de hover e responsividade fina.
