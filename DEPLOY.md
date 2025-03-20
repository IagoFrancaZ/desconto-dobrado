# Guia de Deploy - Desconto Dobrado

Este guia contém instruções para fazer o deploy do site Desconto Dobrado em diferentes plataformas.

## 1. Deploy na Vercel (Recomendado)

A Vercel é a plataforma ideal para projetos Next.js, oferecendo a melhor experiência e desempenho.

### Passos:

1. **Crie uma conta na Vercel**
   - Acesse [vercel.com](https://vercel.com) e crie uma conta gratuita (pode usar GitHub, GitLab ou email)

2. **Conecte seu repositório Git**
   - Clique em "Add New..." → "Project"
   - Conecte ao GitHub/GitLab/Bitbucket onde o código está hospedado
   - Selecione o repositório do projeto Desconto Dobrado

3. **Configure o projeto**
   - A Vercel detectará automaticamente que é um projeto Next.js
   - As configurações padrão geralmente são suficientes
   - Opcionalmente, adicione variáveis de ambiente se necessário

4. **Deploy**
   - Clique em "Deploy"
   - A Vercel fará build e deploy automaticamente
   - Após o deploy, você receberá um URL (ex: desconto-dobrado.vercel.app)

5. **Domínio personalizado (opcional)**
   - Em Project Settings → Domains, você pode adicionar um domínio personalizado
   - Siga as instruções para configurar os registros DNS

### Benefícios da Vercel:
- Deploy automático a cada push no repositório
- Previews para cada pull request
- Otimizações para Next.js pré-configuradas
- CDN global
- Certificados SSL gratuitos
- Analytics básicos incluídos

## 2. Deploy na Netlify

A Netlify é outra excelente opção para hospedar projetos Next.js.

### Passos:

1. **Crie uma conta na Netlify**
   - Acesse [netlify.com](https://netlify.com) e crie uma conta gratuita

2. **Adicione um novo site**
   - Clique em "Add new site" → "Import an existing project"
   - Conecte ao seu repositório Git e selecione o projeto

3. **Configure o build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Adicione uma variável de ambiente `NETLIFY_NEXT_PLUGIN_SKIP=true`

4. **Deploy**
   - Clique em "Deploy site"
   - Após o build, seu site estará disponível em um URL da Netlify

5. **Configurações adicionais**
   - Crie um arquivo `netlify.toml` na raiz do projeto com:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

## 3. Deploy no AWS Amplify

### Passos:

1. **Acesse o AWS Amplify Console**
   - Entre na AWS e vá para Amplify Console
   - Clique em "New app" → "Host web app"

2. **Conecte o repositório**
   - Escolha seu provedor Git e conecte ao repositório

3. **Configure o build**
   - Branch: main (ou sua branch principal)
   - Build settings: use as configurações padrão para Next.js

4. **Verifique as configurações avançadas**
   - Amplify detectará automaticamente que é um projeto Next.js
   - Revise as configurações de build e adicione variáveis de ambiente se necessário

5. **Deploy**
   - Clique em "Save and deploy"
   - AWS Amplify construirá e hospedará seu aplicativo

## 4. Deploy manual em um servidor próprio

Se você preferir hospedar em seu próprio servidor:

1. **Build da aplicação**
   ```bash
   npm run build
   ```

2. **Inicie o servidor Next.js**
   ```bash
   npm start
   ```
   Isso iniciará o servidor na porta 3000

3. **Configuração com PM2 (para manter rodando)**
   ```bash
   npm install -g pm2
   pm2 start npm --name "desconto-dobrado" -- start
   ```

4. **Configuração com Nginx (para proxy reverso)**
   Exemplo de configuração do Nginx:
   ```nginx
   server {
     listen 80;
     server_name seudominio.com www.seudominio.com;
     
     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

## Observações importantes

- Para todos os métodos de deploy, verifique se os links de afiliados estão atualizados no arquivo `app/data/products.ts`
- Ao usar um domínio próprio, lembre-se de atualizar as URLs de compartilhamento no footer e na página Sobre
- Certifique-se de que as imagens estão funcionando corretamente após o deploy
- Teste todos os recursos após o deploy, especialmente o armazenamento local e as opções de compartilhamento 