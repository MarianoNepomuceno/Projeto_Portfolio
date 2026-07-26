# Portfólio — Mariano Nepomuceno

Portfólio profissional desenvolvido com React + Vite, apresentando trajetória, tecnologias, projetos e informações de contato.

## Tecnologias

- React
- JavaScript
- Vite (SWC)
- CSS puro
- React Icons

## Como executar

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173)

## Build para produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── assets/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   ├── Experience/
│   ├── Education/
│   ├── Certificates/
│   ├── Contact/
│   └── Footer/
├── data/
│   ├── projects.js
│   └── certificates.js
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

## Personalização

- **Projetos:** edite `src/data/projects.js`
- **Certificados:** edite `src/data/certificates.js`
- **Links sociais:** edite `src/data/index.js`
- **Currículo:** adicione o PDF em `public/curriculo-mariano-nepomuceno.pdf`
