<div align="center">

# 🦷 DenTalk
### Sistema de apoio à Turma do Bem

<img src="https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge" />
<img src="https://img.shields.io/badge/Curso-ADS-blueviolet?style=for-the-badge" />
<img src="https://img.shields.io/badge/Institui%C3%A7%C3%A3o-FIAP-red?style=for-the-badge" />
<img src="https://img.shields.io/badge/Semestre-2%C2%BA-orange?style=for-the-badge" />

</div>

---

## 📋 Descrição

O **DenTalk** é uma plataforma web desenvolvida no curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **FIAP**, com o objetivo de apoiar e digitalizar os processos da **Turma do Bem** — organização que conecta estudantes de Odontologia a comunidades carentes, oferecendo atendimento odontológico gratuito.

O sistema conta com dois perfis de acesso — **Funcionário** e **Voluntário** — e permite o cadastro de pacientes, registro de atendimentos, triagem, monitoramento e prontuários, integrando o front-end em React com uma API REST desenvolvida em Java hospedada no Render.

---

## 🚀 Tecnologias utilizadas

| Tecnologia | Função |
|---|---|
| ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) | Biblioteca principal de UI |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | Tipagem estática do JavaScript |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | Bundler e servidor de desenvolvimento |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | Estilização utilitária |
| ![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white) | API REST (back-end) |
| ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=black) | Hospedagem da API Java |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) | Deploy do front-end |
| ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white) | Prototipagem e design |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) | Controle de versão |
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | Repositório remoto |

---

## 📁 Estrutura de pastas

```
Dentalk/
│
├── public/                        # Arquivos estáticos públicos
│   ├── dentalk.svg
│   ├── favicon.svg
│   ├── home-background.png
│   ├── icons.svg
│   ├── logo.png
│   └── logoDentalk.png
│
├── src/
│   ├── api/                       # Integração com a API Java (REST)
│   │   ├── GetAtendimento.ts      # GET /atendimento
│   │   ├── GetCadastro.ts         # GET /cadastro
│   │   ├── PostAtendimento.ts     # POST /atendimento
│   │   ├── PostCadastro.ts        # POST /cadastro
│   │   └── PostContato.ts         # POST /contato
│   │
│   ├── assets/                    # Imagens e mídias internas
│   │   ├── crono1.png
│   │   ├── crono2.png
│   │   ├── crono3.jpeg
│   │   ├── crono4.jpeg
│   │   └── hero.png
│   │
│   ├── components/                # Componentes reutilizáveis
│   │   ├── Card.tsx
│   │   ├── Carrossel.tsx
│   │   ├── FiltrosBusca.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeaderFuncionario.tsx
│   │   ├── HeaderVoluntario.tsx
│   │   ├── Menu.tsx
│   │   ├── PacienteItem.tsx
│   │   ├── ProgramaCard.tsx
│   │   └── TitlePage.tsx
│   │
│   ├── pages/
│   │   ├── Funcionario/           # Páginas do perfil Funcionário
│   │   │   ├── FacoesEscola.tsx
│   │   │   ├── Fcadastro.tsx
│   │   │   ├── Finicio.tsx
│   │   │   ├── Fmonitoramento.tsx
│   │   │   └── Ftriagem.tsx
│   │   │
│   │   ├── Voluntario/            # Páginas do perfil Voluntário
│   │   │   ├── ProntuarioPaciente.tsx
│   │   │   ├── Vagenda.tsx
│   │   │   ├── Vatendimentos.tsx
│   │   │   ├── Vinicio.tsx
│   │   │   ├── Vmeuspacientes.tsx
│   │   │   └── Vprontuarios.tsx
│   │   │
│   │   ├── Contato.tsx            # Página de contato
│   │   ├── Faq.tsx                # Perguntas frequentes
│   │   ├── Home.tsx               # Página inicial
│   │   ├── IntegranteDetalhe.tsx  # Detalhe de integrante
│   │   ├── Missao.tsx             # Nossa missão
│   │   ├── QuemSomos.tsx          # Quem somos
│   │   ├── Sobre.tsx              # Sobre o projeto
│   │   ├── Tdb.tsx                # Turma do Bem
│   │   └── Valores.tsx            # Nossos valores
│   │
│   ├── App.css
│   ├── App.tsx                    # Componente raiz e rotas
│   ├── index.css
│   └── main.tsx                   # Entry point da aplicação
│
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── vercel.json
└── README.md
```

---

## 🔌 API REST (Back-end Java)

O front-end consome uma API REST desenvolvida em **Java**, hospedada no **Render**.

**Base URL:** `https://vercel-java.onrender.com`

| Método | Endpoint | Descrição |
|---|---|---|
| `GET` | `/cadastro` | Lista todos os pacientes cadastrados |
| `POST` | `/cadastro` | Cadastra novo paciente |
| `GET` | `/atendimento` | Lista atendimentos registrados |
| `POST` | `/atendimento` | Registra novo atendimento |
| `POST` | `/contato` | Envia mensagem de contato |

---

## 🖥️ Como Usar

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm ou yarn
- Git

### Instalação e execução local

```bash
# Clone o repositório
git clone https://github.com/Moonnax/Dentalk.git

# Acesse a pasta do projeto
cd Dentalk

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Script

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |

### 🔗 Links do projeto

| Recurso | Link |
|---|---|
| 📂 Repositório GitHub | [github.com/Moonnax/Dentalk](https://github.com/Moonnax/Dentalk/tree/sprint-3-react) |
| 🎥 Vídeo no YouTube | [https://youtu.be/7ytNrczFcTE](https://youtu.be/7ytNrczFcTE) |
| ☁️ Deploy na Vercel | [https://dentalk-khaki.vercel.app](https://dentalk-khaki.vercel.app) |

---

## 🖼️ Imagens do projeto

<div align="center">

| Home | Área do voluntário |
|:---:|:---:|
| <img width="1335" height="620" alt="Image" src="https://github.com/user-attachments/assets/dba34ced-3495-490b-b696-873ddeee16e9"/> | <img width="1346" height="623" alt="Image" src="https://github.com/user-attachments/assets/372f3ec1-c925-431b-84c5-1748e8c55526" /> |

| Área do funcionário | Triagem |
|:---:|:---:|
| <img width="1342" height="622" alt="Image" src="https://github.com/user-attachments/assets/7884f5e1-d363-461c-863c-6718364a36dc" /> | <img width="1345" height="621" alt="Image" src="https://github.com/user-attachments/assets/7594413a-599c-47ca-8566-0b9f4f888de1" /> |

</div>

---

## 👥 Autores e créditos

Projeto desenvolvido por estudantes do **2º semestre de Análise e Desenvolvimento de Sistemas na FIAP**.

<br>

<table align="center">
  <tr>
    <td align="center">
      <img width="452" height="452" alt="Image" src="https://github.com/user-attachments/assets/43a61b7d-51d5-4331-aec0-b4b7dbc46ca0" />
      <b>Isabely Marques da Silva</b><br/>
      RM 566663<br/><br/>
      <a href="https://www.linkedin.com/in/isabely-marques/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" />
      </a>
      <a href="https://github.com/ismrqs">
        <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" />
      </a>
    </td>
    <td align="center">
      <img width="460" height="460" alt="Image" src="https://github.com/user-attachments/assets/786e9762-5d32-463a-8d53-b89100c59705" />
      <b>Luana Alves de Oliveira</b><br/>
      RM 566621<br/><br/>
      <a href="https://www.linkedin.com/in/luana-oliveira-moonnax/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" />
      </a>
      <a href="https://github.com/Moonnax">
        <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" />
      </a>
    </td>
    <td align="center">
      <img width="452" height="452" alt="Image" src="https://github.com/user-attachments/assets/45ec17f9-9e13-4401-be09-095cb59b5547" />
      <b>Mateus Ribeiro Azevedo</b><br/>
      RM 566630<br/><br/>
      <a href="https://www.linkedin.com/in/mateus-ribeiro-azevedo-a39a13269/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" />
      </a>
      <a href="https://github.com/mateus-ribeiro-dev">
        <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" />
      </a>
    </td>
  </tr>
</table>

---

## 📬 Contato

Tem dúvidas, sugestões ou quer saber mais sobre o projeto?

- 💼 LinkedIn de cada integrante (links acima)
- 🐙 GitHub do projeto: [github.com/Moonnax/Dentalk](https://github.com/Moonnax/Dentalk/tree/sprint-3-react)

---

<div align="center">

Desenvolvido com 💙 pela equipe DenTalk — FIAP ADS 2º Semestre

</div>