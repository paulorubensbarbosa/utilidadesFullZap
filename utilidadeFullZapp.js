function inserirBotaoComDropdownImagemCircular() {
    const targetParentDiv = document.querySelector('.flex.items-center.pt-2\\.5.border-t'); // Seleciona a div pai

    if (targetParentDiv) {
        const targetChildDiv = targetParentDiv.querySelector('.flex'); // Seleciona a div filha específica

        if (targetChildDiv) {
            // Verifica se o botão já foi inserido
            if (!targetParentDiv.querySelector('.meu-botao-imagem-dropdown')) {
                // Criação do botão com imagem circular
                const container = document.createElement('div');
                container.style.position = 'relative';
                container.style.marginLeft = '10px'; // Espaço entre os botões
                
                const button = document.createElement('button');
                button.className = 'meu-botao-imagem-dropdown'; // Classe identificadora
                button.style.width = '30px'; // Largura do botão circular
                button.style.height = '30px'; // Altura do botão circular
                button.style.backgroundColor = '#ffffff';
                //button.style.border = '2px solid #ccc'; // Borda ao redor
                button.style.borderRadius = '50%'; // Faz o botão ser um círculo
                button.style.cursor = 'pointer';
                button.style.display = 'flex';
                button.style.alignItems = 'center';
                button.style.justifyContent = 'center'; // Centraliza a imagem
                button.style.transition = 'background-color 0.2s ease-in-out';

                // Adiciona evento hover para mudar a cor de fundo
                button.addEventListener('mouseenter', () => {
                    button.style.backgroundColor = '#f0f0f0'; // Cinza claro no hover
                });
                button.addEventListener('mouseleave', () => {
                    button.style.backgroundColor = '#ffffff'; // Branco padrão
                });

                // Adiciona a imagem ao botão
                const img = document.createElement('img');
                img.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpc3QiPjxwYXRoIGQ9Ik0zIDEyaC4wMSIvPjxwYXRoIGQ9Ik0zIDE4aC4wMSIvPjxwYXRoIGQ9Ik0zIDZoLjAxIi8+PHBhdGggZD0iTTggMTJoMTMiLz48cGF0aCBkPSJNOCAxOGgxMyIvPjxwYXRoIGQ9Ik04IDZoMTMiLz48L3N2Zz4=' // Substitua pelo caminho da imagem desejada
                img.alt = 'Ícone do Botão'; // Texto alternativo para a imagem
                img.style.width = '24px';
                img.style.height = '24px';
                button.appendChild(img);

                // Criação do dropdown
                const dropdown = document.createElement('div');
                dropdown.style.display = 'none';
                dropdown.style.position = 'absolute';
                dropdown.style.bottom = '110%'; // Abre para cima
                dropdown.style.left = '0';
                dropdown.style.backgroundColor = 'white';
                dropdown.style.border = '1px solid #ccc';
                dropdown.style.borderRadius = '5px';
                dropdown.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                dropdown.style.zIndex = '1000';
                dropdown.style.padding = '10px';
                dropdown.style.width = '150px';

                // Opções do dropdown
                ['Enquete', 'Localização', 'StatusTexto', 'Contato', 'Botão'].forEach(optionText => {
                    const option = document.createElement('div');
                    option.textContent = optionText;
                    option.style.padding = '5px 10px';
                    option.style.cursor = 'pointer';
                    option.style.borderBottom = '1px solid #eee';

                    // Última opção sem borda
                    if (optionText === 'Botão') {
                        option.style.borderBottom = 'none';
                    }

                    // Evento de clique na opção
                    option.addEventListener('click', () => {
                        const textArea = document.querySelector('textarea#text-message');
                        if (textArea) {
                            // Simula o comportamento do chip (inserindo texto no final)
                            const inputEvent = new InputEvent('input', {
                                bubbles: true,
                                cancelable: true,
                            });
                            //Condição aqui
                            if (optionText == 'Enquete') {
                                textArea.value += `
@Enquete📊: 
Nome: []
Opções: []
Multiplas Respostas(1): [0]`;
                                textArea.dispatchEvent(inputEvent); // Dispara o evento de input
                                textArea.focus();
                            }
                            else if(optionText == 'Localização'){
                                textArea.value += `
@Localização🌎: 
Título: []
latitude: []
longitude: []`;
                                textArea.dispatchEvent(inputEvent);
                                textArea.focus();
                            }
                            else if(optionText == 'StatusTexto'){
                                textArea.value+=`
StatusTexto🟢📝:
Texto: []
Cor de Fundo: [#000000]
Contatos: []`;
                                textArea.dispatchEvent(inputEvent);
                                textArea.focus();
                            }
                            else if(optionText == 'Contato'){
                                textArea.value+=`
@Contato📬:
Nome do Contato: []
Organização: []
Numero: []`;
                                textArea.dispatchEvent(inputEvent);
                                textArea.focus();
                            }
                            else if(optionText == 'Botão'){
                                textArea.value+=`
@Botão📍:
Cabeçalho: []
Corpo: []
Rodapé: []
URL da Imagem: []

Botões:
1. [reply] - Texto: []
2. [call] - Texto: [], Extra: []
3. [url] - Texto: [], Extra: []`;
                                textArea.dispatchEvent(inputEvent);
                                textArea.focus();
                            }                                                                                         
                            else {
                                textArea.value += `${optionText} `; // Adiciona o texto no final
                                textArea.dispatchEvent(inputEvent); // Dispara o evento de input
                                textArea.focus();
                            }
                             // Garante que a área de texto receba foco
                        } else {
                            console.error('Textarea não encontrada!');
                        }
                        dropdown.style.display = 'none'; // Fecha o dropdown após seleção
                    });

                    dropdown.appendChild(option);
                });

                // Evento de clique no botão para mostrar/esconder o dropdown
                button.addEventListener('click', () => {
                    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                });

                // Adiciona o botão e o dropdown ao contêiner
                container.appendChild(button);
                container.appendChild(dropdown);

                // Insere o contêiner ao lado da div com a classe "flex"
                targetParentDiv.insertBefore(container, targetChildDiv.nextSibling);

                console.log('Botão com imagem circular e dropdown inserido ao lado da div com a classe "flex"!');
            }
        } else {
            console.log('Div filha com a classe "flex" não encontrada dentro da div alvo!');
        }
    } else {
        console.log('Div pai com a classe "flex items-center pt-2.5 border-t" não encontrada!');
    }
}

// Observa mudanças no DOM para detectar a div alvo e garantir a presença do botão
const observer = new MutationObserver(inserirBotaoComDropdownImagemCircular);
observer.observe(document.body, { childList: true, subtree: true });

// Ou aguarda o carregamento total do DOM como segunda opção
document.addEventListener('DOMContentLoaded', inserirBotaoComDropdownImagemCircular);
