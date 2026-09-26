# Treinamento de Intercessão e Oração — Web App Premium

Aplicativo web completo, responsivo e funcional entregue como produto digital para compradores do treinamento **"Treinamento de Intercessão e Oração"**.

---

## 🌟 Visão Geral do Produto

Transformação completa do conteúdo do treinamento em uma **Plataforma Pessoal de Oração e Intercessão**, permitindo ao usuário:

1. **Estudo dos 12 Módulos**: leitor digital premium com versículo chave, seções didáticas, caixas de destaque teológico, exercícios práticos e oração final.
2. **Biblioteca de Orações (70+ Orações)**: catalogadas por situações (Família, Filhos, Casamento, Finanças, Saúde, Crise, Manhã, Noite, etc.) com busca rápida, referências bíblicas, cópia e contador de orações realizadas.
3. **100 Promessas Bíblicas**: organizadas em 12 categorias vitais, com referências autênticas, aplicações práticas para orar e botão direto "Orar com esta promessa".
4. **Diário de Oração Interativo**: registro de pedidos por pessoas/situações, linha do tempo de atualizações e classificação por status (*Em oração*, *Respondido*, *Aguardando*, *Agradecimento*).
5. **Memorial de Respostas**: área dedicada às vitórias de oração ("*Até aqui o Senhor nos ajudou* — 1 Samuel 7:12"), com testemunhos da fidelidade divina.
6. **Plano Guiado de 30 Dias**: itinerário devocional com tema diário, versículo bíblico, reflexão, direcionamento prático, oração do dia, bloco de notas pessoal auto-salvo e controle de progresso.
7. **Coleção de Bônus**:
   - Bônus 1: Diário de Oração do Intercessor
   - Bônus 2: 100 Promessas Bíblicas para Decretar
   - Bônus 3: Manual Prático de Guerra Espiritual (abordagem bíblica sóbria e equilibrada)
   - Bônus 4: Plano Guiado de Oração de 30 Dias
   - Bônus 5: Orações para Momentos de Crise (11 situações críticas com acolhimento)
   - Bônus 6: Guia Bíblico de Jejum Cristão (com aviso médico responsável)
   - **Super Bônus**: ⭐ A Oração que Move o Céu (design com acabamento dourado sofisticado e estudo dos grandes intercessores)
8. **Busca Global Instantânea**: localiza tópicos em módulos, orações, promessas, plano de 30 dias e bônus.
9. **Meus Favoritos**: coleção rápida de orações e promessas salvas com um clique.
10. **Privacidade e Persistência**: 100% dos dados salvos no `localStorage` do navegador, com opção de exportação (backup) e importação em arquivo JSON.

---

## 🎨 Paleta Visual Premium

- **Fundo Principal**: `#0D0E11`
- **Fundo Secundário**: `#151619`
- **Cards**: `#1B1C20`
- **Texto Principal**: `#F4F1EA`
- **Texto Secundário**: `#A8A6A0`
- **Dourado Principal**: `#E8C66A`
- **Dourado Claro**: `#F4D98C`
- **Linhas e Bordas**: `#2A2B2F`
- **Tipografia**: *DM Serif Display* (títulos espirituais) e *DM Sans* / *Inter* (interface limpa e legível)

---

## 🛠️ Tecnologias Utilizadas

- **React 18** com **TypeScript**
- **Vite 6** (build ultrarrápido com code splitting)
- **Tailwind CSS 3** (design system customizado)
- **Lucide React** (iconografia moderna)
- **Canvas Confetti** (microinterações celebratórias ao concluir módulos e registrar respostas)

---

## 🚀 Como Executar Localmente

```bash
# Entrar no diretório do projeto
cd app-intercessao

# Instalar dependências (caso não estejam instaladas)
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Pré-visualizar build de produção
npm run preview
```

---

## 📦 Estrutura de Arquivos

```
src/
├── types/              # Definições de tipos TypeScript
├── services/           # Camada de persistência (localStorage e backup JSON)
├── data/               # Dados desacoplados (módulos, 70+ orações, 100 promessas, 30 dias, bônus)
│   ├── modules.ts
│   ├── prayers.ts
│   ├── promises.ts
│   ├── plan30days.ts
│   ├── bonuses.ts
│   └── dailyVerses.ts
├── context/            # Gerenciamento de estado global (AppContext)
├── components/
│   ├── layout/         # Header, Sidebar desktop, MobileNav e Footer
│   └── common/         # Modais (Boas-vindas, Busca, Leitor de oração, Leitor de promessa, Toasts)
├── pages/              # Telas navegáveis da plataforma
└── App.tsx             # Roteamento interno e layout responsivo
```

---

*"Um passo de cada vez. Um dia de cada vez. Uma oração de cada vez."*
