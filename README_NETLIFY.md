# Como Hospedar no Netlify

## 📋 Passo a Passo Simples

### 1️⃣ Preparar o Projeto
```bash
# Instalar dependências (se ainda não tiver)
npm install

# Fazer o build do projeto
npm run build
```

### 2️⃣ Fazer Upload no Netlify

**Opção A: Upload Direto (Mais Fácil)**
1. Vá para [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Arraste a **pasta `build`** que foi criada
3. Pronto! 🎉 Site no ar!

**Opção B: Conectar com GitHub**
1. Faça upload do seu projeto no GitHub
2. No Netlify: "New site from Git"
3. Conecte seu GitHub
4. Escolha o repositório
5. Configurações:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
6. "Deploy site"

### 3️⃣ Arquivos de Configuração

O projeto já está configurado com:
- `netlify.toml` - Configurações de build
- `public/_redirects` - Para React Router funcionar
- Build otimizado para produção

### 4️⃣ Domin Personalizado (Opcional)

No painel Netlify:
1. "Domain settings"
2. "Add custom domain"
3. Configure seu domínio

### 5️⃣ HTTPS Automático

O Netlify já configura SSL automaticamente! 🔒

## 🚀 Recursos do Netlify

✅ **Hospedagem gratuita** para projetos pessoais
✅ **Deploy automático** com GitHub
✅ **HTTPS automático**
✅ **Global CDN** (rápido em todo mundo)
✅ **Formulários grátis**
✅ **Deploy Preview** para testes

## 📝 Estrutura do Projeto

```
site-chatbot-car-detail-novo/
├── build/          ← Pasta para upload no Netlify
├── public/
│   ├── _redirects  ← Configuração de rotas
│   ├── logo.png
│   └── index.html
├── src/
├── package.json
└── netlify.toml    ← Configuração Netlify
```

## 🎯 URL Final

Seu site ficará disponível em:
```
https://seu-projeto.netlify.app
```

## 🔄 Deploy Automático

Se conectou com GitHub, toda vez que fizer `git push` o site atualiza automaticamente!

---

**Pronto! Seu site da Daud Car Detail está no ar no Netlify!** 🚗✨