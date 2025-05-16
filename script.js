function showInfo(service) {
    const infoSection = document.getElementById('service-info');
    let content = '';

    switch(service) {
        case 'formatação':
            content = "<h3>Formatação de Computadores</h3><p>Deixe seu computador rápido e limpo com uma formatação profissional sem perda de dados importantes.</p>";
            break;
        case 'remocao':
            content = "<h3>Remoção de Vírus</h3><p>Eliminamos vírus, malwares e spywares que prejudicam o desempenho e segurança do seu sistema.</p>";
            break;
        case 'instalacao':
            content = "<h3>Instalação de Softwares</h3><p>Instalamos programas essenciais para o seu trabalho ou lazer, garantindo funcionamento perfeito.</p>";
            break;
        case 'manutencao':
            content = "<h3>Manutenção Preventiva</h3><p>Realizamos limpezas físicas e digitais para prolongar a vida útil dos seus equipamentos.</p>";
            break;
        case 'recuperacao':
            content = "<h3>Recuperação de Dados</h3><p>Recuperamos arquivos apagados ou perdidos de HDs, pendrives e cartões de memória.</p>";
            break;
        default:
            content = "";
    }

    infoSection.innerHTML = content;
    infoSection.classList.remove('hidden');
}
