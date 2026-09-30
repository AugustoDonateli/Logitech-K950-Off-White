<div align="center">

# ⌨️ Logitech K950 — landing conceito

**Página de produto com vídeo controlado pela rolagem.**

[![Ver a página](https://img.shields.io/badge/ver_a_p%C3%A1gina-GitHub_Pages-222?style=for-the-badge&logo=github)](https://augustodonateli.github.io/conceito-logitech-k950/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

<img src="hero.png" alt="Topo da landing do teclado K950" width="820">

</div>

---

> Projeto de estudo, sem relação com a Logitech. Nome e produto são usados só como tema.

## A ideia

Landing de produto no estilo das páginas da Apple: conforme você rola, o vídeo do
teclado avança quadro a quadro, e as seções de recursos e especificações entram em
seguida.

## Como funciona

- **`js/video-scroll.js`** liga a posição da rolagem ao `currentTime` do vídeo.
- Só calcula quando o vídeo está visível na tela e ignora mudanças mínimas, o que
  reduz o trabalho no celular.
- O vídeo é pré-carregado para a busca de quadros não travar.
- Layout em Tailwind, responsivo do celular ao desktop.

## Rodando localmente

O vídeo precisa ser servido por HTTP para a rolagem funcionar (abrir o arquivo
direto no navegador não deixa buscar quadros):

```bash
python -m http.server 8000
# abra http://localhost:8000
```

---

<div align="center">

Feito por [Augusto Donateli](https://github.com/AugustoDonateli)

</div>
