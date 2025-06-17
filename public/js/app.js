// Script principal pour l'interface utilisateur
document.addEventListener('DOMContentLoaded', function() {
    // Éléments DOM
    const servicesList = document.getElementById('services-list');
    const statusInfo = document.getElementById('status-info');
    
    // Fonction pour charger les services
    async function loadServices() {
        try {
            const response = await fetch('/api/services');
            const data = await response.json();
            
            if (data.status === 'success') {
                // Vider l'indicateur de chargement
                servicesList.innerHTML = '';
                
                // Afficher chaque service
                data.data.forEach(service => {
                    const serviceCard = document.createElement('div');
                    serviceCard.className = 'service-card';
                    serviceCard.innerHTML = `
                        <h3>${service.name}</h3>
                        <p>${service.description}</p>
                        <p class="service-price">Prix: 
${service.price}</p>
                    `;
                    servicesList.appendChild(serviceCard);
                });
            } else {
                servicesList.innerHTML = '<p>Impossible de charger les 
services.</p>';
            }
        } catch (error) {
            console.error('Erreur lors du chargement des services:', 
error);
            servicesList.innerHTML = '<p>Erreur lors du chargement des 
services.</p>';
        }
    }
    
    // Fonction pour charger le statut
    async function loadStatus() {
        try {
            const response = await fetch('/api/status');
            const data = await response.json();
            
            // Formater la date
            const timestamp = new Date(data.timestamp).toLocaleString();
            
            // Formater le temps d'activité
            const uptime = Math.floor(data.uptime);
            const hours = Math.floor(uptime / 3600);
            const minutes = Math.floor((uptime % 3600) / 60);
            const seconds = uptime % 60;
            const formattedUptime = `${hours}h ${minutes}m ${seconds}s`;
            
            // Afficher les informations de statut
            statusInfo.innerHTML = `
                <div class="status-item">
                    <span class="status-label">État:</span>
                    <span class="status-${data.status}">${data.status === 
'online' ? 'En ligne' : 'Hors ligne'}</span>
                </div>
                <div class="status-item">
                    <span class="status-label">Dernière mise à 
jour:</span>
                    <span>${timestamp}</span>
                </div>
                <div class="status-item">
                    <span class="status-label">Temps d'activité:</span>
                    <span>${formattedUptime}</span>
                </div>
                <div class="status-item">
                    <span class="status-label">Version:</span>
                    <span>${data.version}</span>
                </div>
                <div class="status-item">
                    <span class="status-label">Environnement:</span>
                    <span>${data.environment}</span>
                </div>
            `;
        } catch (error) {
            console.error('Erreur lors du chargement du statut:', error);
            statusInfo.innerHTML = '<p>Erreur lors du chargement du 
statut.</p>';
        }
    }
    
    // Charger les données au chargement de la page
    loadServices();
    loadStatus();
    
    // Rafraîchir le statut toutes les 30 secondes
    setInterval(loadStatus, 30000);
});
