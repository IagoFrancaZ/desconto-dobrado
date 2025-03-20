# Desconto Dobrado

Site de marketing de afiliados focado em recomendações de produtos tecnológicos de qualidade com design persuasivo e detalhes dos melhores preços.

## 📋 Sobre o Projeto

O Desconto Dobrado é um site de recomendações de produtos tecnológicos com marketing de afiliados, projetado para maximizar cliques e conversões. Com design limpo, direto e chamativo, o site utiliza estratégias de psicologia de marketing como:

- **Valor**: "Produtos de qualidade premium"
- **Confiança**: "Produtos verificados"
- **Prova Social**: "Mais vendido"
- **Preço Especial**: "Economize agora"
- **Cupons Adicionais**: "Alguns produtos com códigos exclusivos de desconto"

## 🚀 Tecnologias Utilizadas

- **Next.js**: Framework React com renderização do lado do servidor, excelente para SEO
- **React**: Para construção de interfaces interativas
- **TypeScript**: Para tipagem estática e melhor desenvolvimento
- **TailwindCSS**: Para estilização rápida e responsiva
- **Headless UI**: Para componentes acessíveis e interativos
- **LocalStorage**: Para armazenamento local de emails capturados na newsletter

## 🔧 Instalação e Uso

### Pré-requisitos

- Node.js (versão 18.x ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/desconto-dobrado.git
   ```

2. Entre na pasta do projeto:
   ```
   cd desconto-dobrado
   ```

3. Instale as dependências:
   ```
   npm install
   ```
   ou
   ```
   yarn install
   ```

4. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```
   ou
   ```
   yarn dev
   ```

5. Acesse `http://localhost:3000` no seu navegador.

## 📂 Estrutura do Projeto

```
desconto-dobrado/
├── app/
│   ├── components/       # Componentes reutilizáveis
│   ├── data/             # Dados dos produtos recomendados
│   ├── categorias/       # Páginas de categorias
│   ├── mais-vendidos/    # Página de produtos mais vendidos
│   ├── sobre/            # Página sobre o site
│   ├── layout.tsx        # Layout principal
│   ├── page.tsx          # Página inicial
│   └── globals.css       # Estilos globais
├── public/               # Arquivos estáticos
├── package.json          # Dependências do projeto
└── tsconfig.json         # Configuração do TypeScript
```

## 📱 Recursos

- Design responsivo e mobile-friendly
- Navegação por categorias
- Filtro por produtos mais vendidos
- Detalhes completos de cada produto
- Alguns produtos com códigos promocionais exclusivos
- Indicadores de estoque limitado e promoções por tempo limitado
- Formulário de newsletter para captura de leads
- Armazenamento local de emails dos inscritos na newsletter
- Compartilhamento do site em redes sociais

## 🔄 Integrando Links de Afiliados

Para integrar links de afiliados reais:

1. Acesse `app/data/products.ts`
2. Substitua o valor `affiliateLink` de cada produto pelo seu link de afiliado correspondente
3. Atualize as informações de cada produto conforme necessário (título, descrição, preços, etc.)

## 📊 Estratégias de Marketing

O site utiliza diversas estratégias para maximizar conversões:

- **Design atrativo**: Layout moderno e visual premium para valorizar os produtos
- **Badges diferenciadas**: Destacam características de cada produto (qualidade verificada, popularidade)
- **CTAs claros e persuasivos**: "COMPRAR COM DESCONTO"
- **Elementos de escassez**: Exibição de estoque limitado em alguns produtos
- **Cupons exclusivos**: Disponíveis em produtos selecionados como benefício adicional
- **Integração de compartilhamento**: Fácil compartilhamento nas redes sociais para ampliar o alcance

## 🚀 Implantação

Para implantar o site em produção:

1. Construa a aplicação:
   ```
   npm run build
   ```
   ou
   ```
   yarn build
   ```

2. Você pode hospedar facilmente em:
   - Vercel (recomendado para Next.js)
   - Netlify
   - GitHub Pages
   - AWS Amplify

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## 📞 Contato

Para mais informações ou sugestões, entre em contato através do email: codeguardgroup@gmail.com
