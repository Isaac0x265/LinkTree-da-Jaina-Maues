# LinkTree para Jaina Maués - Harmonização Facial

Este é um site no estilo LinkTree para a profissional de harmonização facial Jaina Maués. O site apresenta um design moderno e elegante com animações suaves, efeitos visuais e responsividade para dispositivos móveis.

## Características

- Design elegante e profissional com tema roxo/lilás
- Animações suaves de entrada e interação
- Efeitos visuais como partículas flutuantes e efeito de ondulação ao clicar
- Layout responsivo que funciona em dispositivos móveis e desktop
- Seção de serviços com ícones
- Perfil com foto e informações profissionais

## Como Personalizar

### Alterar Informações de Perfil

No arquivo `index.html`, você pode alterar:

1. Nome e descrição do profissional na seção `profile-info`
2. Foto de perfil substituindo o link do placeholder por uma imagem real
3. Links para redes sociais e serviços na seção `links`
4. Serviços oferecidos na seção `service-grid`
5. Informações de rodapé

### Personalizar Cores

As cores do site podem ser facilmente alteradas modificando as variáveis CSS no início do arquivo `style.css`:

```css
:root {
  --primary-color: #9c27b0; /* Cor principal */
  --primary-light: #d05ce3; /* Versão mais clara da cor principal */
  --primary-dark: #6a0080; /* Versão mais escura da cor principal */
  --secondary-color: #f5f5f5; /* Cor secundária/de fundo */
  --text-color: #333; /* Cor do texto principal */
  --card-bg: rgba(255, 255, 255, 0.9); /* Fundo dos cartões */
  --card-shadow: rgba(156, 39, 176, 0.2); /* Sombra dos cartões */
  --gradient-start: #9c27b0; /* Início do gradiente */
  --gradient-end: #d05ce3; /* Fim do gradiente */
}
```

### Modificar Links

Para adicionar, remover ou modificar links, edite a seção `links` no arquivo `index.html`. Cada link segue este formato:

```html
<a href="#URL_AQUI" class="link-card">
  <i class="ICONE_AQUI"></i>
  <span>TEXTO_DO_LINK</span>
</a>
```

Para os ícones, o site usa a biblioteca Font Awesome. Você pode encontrar outros ícones em [Font Awesome](https://fontawesome.com/icons).

### Alterar Serviços

Para modificar os serviços oferecidos, edite a seção `service-grid` no arquivo `index.html`. Cada serviço usa este formato:

```html
<div class="service-item">
  <div class="service-icon">
    <i class="ICONE_AQUI"></i>
  </div>
  <h3>NOME_DO_SERVIÇO</h3>
</div>
```

## Como Usar

1. Substitua a imagem de perfil por uma foto real da profissional
2. Atualize todos os links para apontar para as redes sociais e canais de contato reais
3. Personalize os serviços oferecidos com base nos tratamentos realmente disponíveis
4. Ajuste as cores se necessário para corresponder à identidade visual existente
5. Faça upload dos arquivos para seu serviço de hospedagem

## Arquivos Incluídos

- `index.html` - Estrutura principal do site
- `style.css` - Estilos e design visual
- `script.js` - Funcionalidades interativas e animações
- `README.md` - Este arquivo de instruções

## Recursos Adicionais

Para melhorar ainda mais o site, considere:

1. Adicionar um formulário de contato
2. Incluir uma galeria de fotos "antes e depois"
3. Adicionar depoimentos de clientes
4. Implementar um sistema de agendamento online

---

Desenvolvido com ❤️ para Jaina Maués
