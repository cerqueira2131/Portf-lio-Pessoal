# Portfolio Landing Page

Modelo de landing page profissional com design moderno e responsivo.

## Recursos

- Design glassmorphism inspirado em empresas como Apple, Stripe e Vercel
- Modo escuro/claro
- Totalmente responsivo (smartphones, tablets, notebooks, ultrawide)
- Animações suaves (Scroll Reveal, Fade In, Hover Effects)
- Navegação por teclado acessível
- SEO básico implementado
- Performance otimizada

## Estrutura de Arquivos

```
/landing-page
  /assets
    /images
    /icons
    /videos
  index.html
  style.css
  script.js
  README.md
```

## Personalização

### 1. Informações Pessoais

Edite o arquivo `index.html`:

- **Nome**: Procure por `Seu Nome` e substitua pelo seu nome
- **Título/Bio**: Edite a seção hero com seu título profissional
- **Localização**: Procure por `São Paulo, SP` e substitua
- **Redes sociais**: Adicione seus links nos botões do footer

### 2. Seções do Portfolio

O template inclui as seguintes seções:

- **Hero**: Apresentação inicial com badge de disponibilidade
- **Sobre**: Bio e informações pessoais
- **Habilidades**: Tecnologias com barras de progresso
- **Projetos**: Cards de projetos com imagem e links
- **Certificados**: Lista de certificações
- **Experiência**: Timeline profissional
- **Contato**: Formulário e informações de contato

### 3. Projetos de Exemplo

Substitua os projetos fictícios em `index.html` com seus projetos reais:

```html
<article class="projeto-card reveal">
    <div class="projeto-image">
        <img src="caminho/para/imagem-do-projeto.jpg" alt="Nome do Projeto">
        <div class="projeto-overlay">
            <a href="URL_DO_DEMO" class="btn-icon" aria-label="Ver demo">
                <!-- ícone -->
            </a>
            <a href="URL_DO_GITHUB" class="btn-icon" aria-label="Ver código">
                <!-- ícone -->
            </a>
        </div>
    </div>
    <div class="projeto-content">
        <h3 class="projeto-title">Nome do Projeto</h3>
        <p class="projeto-desc">Descrição do projeto...</p>
        <div class="projeto-tech">
            <span class="tech-tag">HTML5</span>
            <span class="tech-tag">CSS3</span>
            <span class="tech-tag">JavaScript</span>
        </div>
    </div>
</article>
```

### 4. Imagens

Substitua as imagens de placeholder:

- `hero-image`: Foto do perfil
- `projeto-image`: Imagens dos projetos

Recomenda-se usar imagens de:
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)

### 5. Cores e Estilos

Edite o arquivo `style.css` na seção `:root` para personalizar cores:

```css
:root {
    --primary: #6366f1;        /* Cor principal */
    --primary-light: #818cf8;
    --primary-dark: #4f46e5;
    --secondary: #ec4899;       /* Cor secundária */
    --accent: #06b6d4;          /* Cor de destaque */
    --bg-dark: #0f0f1a;         /* Fundo escuro */
}
```

### 6. Habilidades

Edite a seção habilidades, ajustando os valores de progresso:

```html
<div class="skill-bar">
    <div class="skill-progress" data-progress="95"></div>
</div>
<span class="skill-level">95%</span>
```

### 7. Certificados e Experiência

Adicione seus certificados e experiência profissional nos blocos correspondentes.

### 8. Formulário de Contato

O formulário é visual (demo). Para torná-lo funcional, você pode:

**Opção 1 - Formspree (simples):**
```html
<form class="contato-form reveal" action="https://formspree.io/f/SEU_ID" method="POST">
```

**Opção 2 - Netlify Forms (hospedagem Netlify):**
```html
<form class="contato-form reveal" name="contact" method="POST" data-netlify="true">
```

**Opção 3 - Backend próprio:**
Conecte com API de sua preferência.

## Hospedagem

O site pode ser hospedado gratuitamente em:

- **GitHub Pages**: Hospedagem estática gratuita
- **Vercel**: Deploy automático com GitHub
- **Netlify**: Drag and drop ou GitHub integration
- **Hostinger**: Hospedagem compartilhada com PHP/MySQL

## Performance

O template já inclui:

- Fontes do Google Fonts com preconnect
- Imagens otimizadas via Unsplash CDN
- CSS e JS minificados na versão de produção
- Lazy loading de imagens

## Acessibilidade

Recursos de acessibilidade implementados:

- Estrutura semântica HTML5
- Contraste adequado de cores
- Navegação por teclado funcional
- Alt text em todas as imagens
- Labels em elementos de formulário
- Focus states visíveis

## Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

---

Feito com ❤️ e muito café