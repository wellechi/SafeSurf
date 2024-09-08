# Block Sites

## Descrição (Português)

A extensão **"Block Sites"** é uma ferramenta simples e eficaz para bloquear o acesso a sites específicos em seu navegador. Ideal para controle parental, produtividade no trabalho ou apenas para evitar distrações, a extensão permite que você defina uma lista de sites a serem bloqueados. Quando um site bloqueado é acessado, o usuário é redirecionado para uma página de bloqueio personalizada.

## Features (English)

The **"Block Sites"** extension is a simple yet effective tool for blocking access to specific websites in your browser. Ideal for parental control, productivity at work, or simply avoiding distractions, the extension allows you to set up a list of blocked sites. When a blocked site is accessed, the user is redirected to a custom block page.

## Funcionalidades (Português)

- **Bloqueio de Sites**: Intercepte e bloqueie sites específicos com base na lista de URLs fornecida.
- **Página de Bloqueio**: Redirecione o usuário para uma página de bloqueio quando um site bloqueado é acessado.
- **Interface de Configuração**: Adicione e remova sites da lista de bloqueio através de uma interface de configuração acessível no popup da extensão.
- **Popup**: Exiba um popup com informações e opções quando o ícone da extensão é clicado.

## Features (English)

- **Site Blocking**: Intercepts and blocks specific sites based on the provided URL list.
- **Block Page**: Redirects the user to a block page when a blocked site is accessed.
- **Configuration Interface**: Add and remove sites from the block list through a configuration interface accessible from the extension's popup.
- **Popup**: Displays a popup with information and options when the extension icon is clicked.

## Estrutura do Projeto (Português)

- **`background/background.js`**: Script de fundo que lida com o bloqueio de sites.
- **`content/content.js`**: (Opcional) Script para interagir diretamente com o conteúdo das páginas.
- **`styles/style.css`**: (Opcional) Arquivo de estilos para a interface da extensão.
- **`pages/block.html`**: Página exibida quando um site bloqueado é acessado.
- **`pages/options.html`**: Página de configuração onde o usuário pode adicionar ou remover sites bloqueados.
- **`pages/popup.html`**: Interface exibida ao clicar no ícone da extensão.
- **`scripts/options.js`**: Script que gerencia a página de opções.

## Project Structure (English)

- **`background/background.js`**: Background script that handles site blocking by intercepting network requests and blocking URLs as per the block list.
- **`content/content.js`**: (Optional) Script to interact directly with page content if needed.
- **`styles/style.css`**: (Optional) Stylesheet for the extension’s interface.
- **`pages/block.html`**: Page displayed when a blocked site is accessed.
- **`pages/options.html`**: Configuration page where users can add or remove blocked sites from the list.
- **`pages/popup.html`**: Interface displayed when clicking the extension icon in the browser toolbar.
- **`scripts/options.js`**: Script that manages the options page logic.

## Instalação (Português)

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seuusuario/block-sites.git
   cd block-sites


Uso (Português)
Adicionar Sites à Lista de Bloqueio:

Clique no ícone da extensão na barra de ferramentas do navegador para abrir o popup.
Na página de opções (options.html), insira o URL do site que deseja bloquear e clique em "Adicionar Site".
Configuração:

Acesse a página de opções (options.html) para visualizar e gerenciar a lista de sites bloqueados. Aqui, você pode adicionar novos sites ou remover sites existentes.
Remover Sites:

Na página de opções, localize o site que deseja remover e utilize as opções fornecidas para removê-lo da lista de bloqueio.
Usage (English)
Add Sites to the Block List:

Click on the extension icon in the browser toolbar to open the popup.
On the options page (options.html), enter the URL of the site you want to block in the input field and click "Add Site".
Configuration:

Access the options page (options.html) to view and manage the block list. Here, you can add new sites or remove existing sites from the list.
Remove Sites:

On the options page, locate the site you wish to remove and use the provided options to delete it from the block list.
Contribuição (Português)
Contribuições são bem-vindas! Se você deseja ajudar a melhorar a extensão, siga estas etapas:

Abra uma Issue: Relate bugs, sugira melhorias ou peça novas funcionalidades.
Faça um Fork do Repositório: Crie uma cópia do projeto para você e faça alterações.
Submeta um Pull Request: Proponha suas alterações para revisão e inclusão no projeto principal.
Contributing (English)
Contributions are welcome! If you wish to help improve the extension, please follow these steps:

Open an Issue: Report bugs, suggest enhancements, or request new features.
Fork the Repository: Create a copy of the project to work on and make changes.
Submit a Pull Request: Propose your changes for review and inclusion in the main project.
Licença (Português)
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes sobre a licença e direitos autorais.

License (English)
This project is licensed under the MIT License. See the LICENSE file for more details on the license and copyright information.

Contato (Português)
Para dúvidas ou suporte, entre em contato com wellechi03@gmail.com

Contact (English)
For questions or support, contact wellechi03@gmail.com

Obrigado por usar a extensão "Block Sites"! Esperamos que ela ajude você a gerenciar e controlar o acesso a sites indesejados.

Thank you for using the "Block Sites" extension! We hope it helps you manage and control access to unwanted sites.