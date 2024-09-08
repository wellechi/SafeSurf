// Lista de sites que serão bloqueados
const blockedSites = []; 

// Função que é chamada sempre que uma nova URL é carregada no navegador.
chrome.webRequest.onBeforeRequest.addListener(
    function(details){
        const url = new URL(details.url); //Lista de sites que serão bloqueados

        // Se o domínio da URL estiver na lista de bloqueio, redireciona para uma página bloqueada.
        if(blockedSites.includes(url.hostname)){
            return {redirectUrl: chrome.runtime.getURL("block.html")}; // Redireciona para uma página local de bloqueio.
        }
    },
    {urls: ["<all_urls>"]}, // Filtro para escutar qualquer URL acessada.
    ["blocking"] //Permite bloquear a requisição
);

