# Mercapeças Casa do Mercedes

Este projeto é um website institucional e catálogo de peças para caminhões Mercedes-Benz linha pesada. Ele foi desenvolvido com foco em alta performance, interfaces modernas e limpas, e uma arquitetura escalável e de fácil manutenção baseada em React, TypeScript e Vite.

---

## 🚀 Como Clonar e Executar o Projeto

Siga os passos abaixo para configurar e rodar o projeto localmente em sua máquina:

### 1. Clonar o Repositório
Abra o seu terminal no diretório desejado e execute o seguinte comando:
```bash
git clone https://github.com/MoisesAzevedo/mercapecas-site.git
```

### 2. Navegar para a Pasta do Projeto
```bash
cd mercapecas-site
```

### 3. Instalar as Dependências
O projeto utiliza o `npm` como gerenciador de pacotes padrão. Execute:
```bash
npm install
```

### 4. Rodar o Servidor de Desenvolvimento
Inicie o servidor local com o Vite:
```bash
npm run dev
```
Após o início do servidor, a aplicação estará disponível para acesso no navegador em `http://localhost:5173`.

### 5. Compilar para Produção (Build)
Para gerar os arquivos estáticos e otimizados para produção:
```bash
npm run build
```
Os arquivos gerados serão salvos na pasta `/dist`. Para testar a versão de produção localmente, você pode executar:
```bash
npm run preview
```

---

## 🏗️ Arquitetura do Sistema

A estrutura de arquivos do projeto está organizada sob a pasta `/src` visando maximizar a modularidade e a legibilidade:

```
src/
├── assets/          # Recursos estáticos globais (imagens, logos, ícones)
├── components/      # Componentes da interface React
│   ├── globals/     # Componentes compartilhados e globais (ex: WhatsAppButton, Container)
│   ├── sections/    # Seções de layout estruturadas de páginas (ex: About, Hero, Header)
│   └── ui/          # Elementos e primitivos atômicos e reutilizáveis (ex: button, sidebar)
├── hooks/           # Custom Hooks de React compartilhados globalmente
├── interfaces/      # Tipos e definições de contratos globais do TypeScript
├── lib/             # Arquivos de configurações de bibliotecas de terceiros (ex: tailwind/utils)
├── pages/           # Páginas principais que agregam as seções e controllers
├── App.tsx          # Componente raiz que envelopa a árvore de componentes
└── main.tsx         # Ponto de entrada do React que monta o DOM da aplicação
```

### 📦 Estrutura Modular Local e Encapsulamento

Para manter o projeto limpo e evitar a poluição de diretórios globais (como `/src/hooks` ou `/src/interfaces`), **devemos adotar a Regra de Localidade**:

> [!IMPORTANT]
> Se um recurso (seja um Custom Hook, um arquivo de constantes, uma interface de tipos ou um componente auxiliar) é utilizado por **apenas um único componente ou tela**, este recurso deve ser localizado **dentro da pasta desse próprio componente**.
>
> Apenas promova um hook ou tipo TypeScript para as pastas globais `/src/hooks` ou `/src/interfaces` se ele for comprovadamente compartilhado por **dois ou mais componentes independentes**.

#### Exemplo de Estrutura Modular (SRP no nível de pastas):
O componente `ChatButton` ilustra essa estrutura modular local onde cada arquivo tem uma única responsabilidade:
```
src/components/globals/ChatButton/
├── constants/
│   └── config.ts             # Armazena APENAS a configuração do widget
├── hooks/
│   └── use-agilize-chat.ts   # Cuida APENAS do ciclo de vida e carregamento do script
├── ChatButton.tsx            # Componente visual que chama o hook
└── index.tsx                 # Barrel file (entrada) que apenas re-exporta o ChatButton
```

---

## 🛠️ Princípios de Desenvolvimento e Qualidade de Código

### 1. DRY (Don't Repeat Yourself)
Evite código duplicado. Se uma mesma regra de negócio, comportamento ou estilo for usada em múltiplos lugares, centralize essa lógica em um utilitário comum, hook global ou componente compartilhado.

### 2. SOLID
* **S (Single Responsibility Principle / Princípio da Responsabilidade Única):** Cada classe, função, hook ou arquivo deve ter apenas um motivo para mudar. No nível de diretórios, cada arquivo da subestrutura modular deve resolver apenas uma fatia específica de problema (ex: separar lógica de hooks das configurações ou estilos).
* **O (Open/Closed Principle / Princípio Aberto/Fechado):** Extensibilidade de comportamento por meio de composição e propriedades (props) sem a necessidade de modificar o código interno já testado do componente.
* **L (Liskov Substitution Principle / Princípio da Substituição de Liskov):** Garanta que componentes ou abstrações que implementam a mesma interface possam ser substituídos uns pelos outros sem quebrar o comportamento esperado.
* **I (Interface Segregation Principle / Princípio da Segregação de Interfaces):** Evite prop-drilling de objetos gigantes desnecessários. Crie contratos de props curtos e específicos para o que cada componente de fato consome.
* **D (Dependency Inversion Principle / Princípio da Inversão de Dependências):** Componentes devem depender de abstrações e configurações (ex: interfaces, arquivos de constantes), e não de instâncias acopladas hardcoded.

### 3. Arquivos Curtos e Legíveis
Para facilitar revisões de código, reduzir conflitos de mesclagem (merge conflicts) e acelerar a compreensão:
- Mantenha os arquivos React, TypeScript e de estilo **curtos** (idealmente **menos de 150 linhas** por arquivo).
- Se um arquivo começar a crescer demais, divida a lógica em hooks locais, subcomponentes locais ou funções auxiliares.

---

## 📌 Convenção de Commits

Para manter o histórico de commits organizado e legível, adotamos a seguinte padronização baseada em Commits Semânticos:

| Tipo | Quando usar | Exemplo |
| :--- | :--- | :--- |
| **feat** | Nova funcionalidade | `feat: adiciona autenticação com Google` |
| **fix** | Correção de bug | `fix: corrige validação do formulário` |
| **docs** | Alterações na documentação | `docs: atualiza README com instruções de instalação` |
| **style** | Mudanças de formatação (sem alterar comportamento) | `style: aplica prettier ao projeto` |
| **refactor** | Refatoração sem corrigir bug ou adicionar funcionalidade | `refactor: simplifica lógica de autenticação` |
| **test** | Adição ou alteração de testes | `test: adiciona testes para LoginForm` |
| **chore** | Tarefas de manutenção | `chore: atualiza dependências` |

