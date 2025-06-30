# Bullet-Journal
=======
# 📝 Bullet Journal Digital

Um bullet journal digital simples e funcional, construído com HTML, CSS, JavaScript, Node.js e Python. O projeto segue boas práticas de organização, DevOps e modularização desde o início.

---

## 🚀 Funcionalidades do MVP

- [x] Criar e visualizar tarefas
- [x] Registrar notas
- [x] Visualizar calendário básico
- [x] Estrutura modular com Express
- [x] Ambiente Python isolado para scripts auxiliares
- [x] ESLint e Prettier configurados
- [x] GitHub Actions para lint e testes

---

## 🛠️ Tecnologias Utilizadas

**Frontend:**
- HTML5, CSS3, JavaScript

**Backend:**
- Node.js, Express
- Python (scripts auxiliares)
- ESLint + Prettier

**DevOps:**
- GitHub Actions
- Ambiente virtual Python (`venv`)
- Variáveis de ambiente com `.env`

---

## 📁 Estrutura do Projeto
Bullet-Journal-main/ 
├── frontend/ 
│   ├── index.html 
│   ├── css/ 
│   ├── js/
├── backend/ 
│   ├── app.js 
│   ├── server.js 
│   ├── routes/ 
│   ├── controllers/ 
│   ├── models/ 
│   ├── utils/ 
│   └── python/ 
├── .env.example 
├── .editorconfig 
├── .gitignore 
└── README.md

---

## 🧪 Como Rodar o Projeto

### Backend (Node.js)

```bash
cd backend
npm install
npm run dev

cd backend/python
python -m venv venv
source venv/Scripts/activate  # ou venv\Scripts\activate no Windows
pip install -r requirements.txt