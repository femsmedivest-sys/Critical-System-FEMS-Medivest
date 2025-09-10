// Gantikan URL ini dengan URL Apps Script yang anda terbitkan
const googleSheetsApiUrl = 'https://script.google.com/macros/s/AKfycbw6nwHbWfRtgEbu2w7BgD6ip6Xbd4G5XA6UnFc57LFJzYcQ_mnkJe9BJMUKTvuthJNG/exec';

// Fungsi untuk mengambil data dari Google Sheets API
async function fetchAssetData(systemId) {
    try {
        const response = await fetch(googleSheetsApiUrl);
        const data = await response.json(); 

        // Tapis data mengikut 'Type of System' yang sepadan
        const filteredData = data.filter(item => item['Type of System'].trim() === systemId.trim());
        return filteredData;

    } catch (error) {
        console.error('Error fetching data from Google Sheets API:', error);
        return [];
    }
}

// Data hospital
const hospitals = [
    { name: "Hospital Melaka", id: "MKA" },
    { name: "Hospital Sultanah Aminah", id: "HSA" },
    { name: "Hospital Sultan Ismail", id: "HSI" },
    { name: "Hospital Enche' Besar Hajjah Khalsom", id: "KLN" },
    { name: "Hospital Tuanku Ja'afar, Seremban", id: "HTJ" },
    { name: "Hospital Tuanku Ampuan Najihah", id: "KPL" },
    { name: "Hospital Pakar Sultanah Fatimah ", id: "MUR" },
    { name: "Hospital Sultanah Nora Ismail", id: "BPH" },
    { name: "Hospital Jelebu", id: "JLB" },
    { name: "Hospital Jempol", id: "JMP" },
    { name: "Hospital Port Dickson", id: "PDX" },
    { name: "Hospital Tampin", id: "TMP" },
    { name: "Hospital Permai", id: "PER" },
    { name: "Hospital Segamat", id: "SGT" },
    { name: "Hospital Pontian", id: "PON" },
    { name: "Hospital Kota Tinggi", id: "KTG" },
    { name: "Hospital Mersing", id: "MER" },
    { name: "Hospital Tangkak", id: "TGK" },
    { name: "Hospital Temenggong Seri Maharaja Ibrahim", id: "KUL" },
    { name: "Hospital Jasin", id: "JSN" },
    { name: "Hospital Alor Gajah", id: "AGJ" },
    { name: "Makmal Kesihatan Awam Johor", id: "MKJ" },
];

function createHospitalCards() {
    const cardGrid = document.querySelector('.card-grid');
    if (!cardGrid) return;

    hospitals.forEach(hospital => {
        const card = document.createElement('a');
        card.classList.add('card');
        card.href = `hospital-page.html?hosp=${hospital.id}`;
        
        const hospitalName = document.createElement('h3');
        hospitalName.textContent = hospital.name;
        
        card.appendChild(hospitalName);
        cardGrid.appendChild(card);
    });
}

const criticalSystems = [
    { name: "ELECTRICAL SUPPLY", id: "ELECTRICAL SUPPLY" },
    { name: "WATER SUPPLY SYSTEM", id: "WATER SUPPLY SYSTEM" },
    { name: "AUTOCLAVE", id: "AUTOCLAVE" },
    { name: "GENERATOR SET", id: "GENERATOR SET" },
    { name: "MEDICAL GAS PIPELINE SYSTEM", id: "MEDICAL GAS PIPELINE SYSTEM" },
    { name: "VERTICAL TRANSPORTATION", id: "LIFT" },
    { name: "AHU & HVAC (coming soon include)", id: "AHU & HVAC" }, //blom ada fail gform
    { name: "BAS SYSTEM (coming soon include)", id: "BAS SYSTEM" }, //blom ada fail gform
    { name: "CHILLER & COOLING TOWER", id: "CHILLER-COOLING-TOWER" },
    { name: "FIRE PROTECTION SYSTEM", id: "FIRE PROTECTION SYSTEM" },
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const hospitalId = urlParams.get('hosp');
    const systemId = urlParams.get('sys');

    const mainContent = document.querySelector('main');
    const headerTitle = document.getElementById('header-title');
    const backButton = document.getElementById('back-button');

    if (systemId) {
        if (backButton) {
            backButton.style.display = 'inline-block';
            backButton.href = `hospital-page.html?hosp=${hospitalId}`;
        }
        
        const currentSystem = criticalSystems.find(system => system.id === systemId);
        
        if (currentSystem) {
            headerTitle.textContent = currentSystem.name;
        } else {
            headerTitle.textContent = systemId; 
        }

        mainContent.innerHTML = '<p>Sabar yeeee hehehehehehe😂, akan cuba solve untuk automatik pop up , still program the code ☠️🚀🔥</p>';

        fetchAssetData(systemId)
            .then(data => {
                mainContent.innerHTML = '';
                const locations = {};

                data.forEach(item => {
                    const location = item['Location']; 
                    if (!locations[location]) {
                        locations[location] = [];
                    }
                    locations[location].push(item);
                });

                for (const location in locations) {
                    const locationSection = document.createElement('section');
                    locationSection.className = 'location-section';
                    
                    const locationTitle = document.createElement('h2');
                    locationTitle.textContent = location;
                    locationSection.appendChild(locationTitle);
                    
                    const cardGrid = document.createElement('div');
                    cardGrid.className = 'card-grid';

                    locations[location].forEach(item => {
                        let statusClass = '';
                        const itemStatus = item['Status'] ? item['Status'].trim().toUpperCase() : '';

                        if (itemStatus === 'FUNCTIONING') {
                            statusClass = 'status-FUNCTIONING';
                        } else if (itemStatus === 'NOT FUNCTIONING') {
                            statusClass = 'status-NOT-FUNCTIONING';
                        }
                        
                        // Kod baharu untuk memformatkan tarikh
                        const rawDate = item['Last Update'];
                        let formattedDate = '';
                        if (rawDate) {
                            try {
                                const dateObj = new Date(rawDate);
                                const day = String(dateObj.getDate()).padStart(2, '0');
                                const month = String(dateObj.getMonth() + 1).padStart(2, '0');
                                const year = dateObj.getFullYear();
                                const hours = String(dateObj.getHours()).padStart(2, '0');
                                const minutes = String(dateObj.getMinutes()).padStart(2, '0');
                                const seconds = String(dateObj.getSeconds()).padStart(2, '0');
                                formattedDate = `${day}-${month}-${year}, ${hours}:${minutes}:${seconds}`;
                            } catch (e) {
                                console.error('Failed to parse date:', rawDate);
                                formattedDate = rawDate; // Fallback jika gagal
                            }
                        } else {
                            formattedDate = 'N/A';
                        }

                        const card = document.createElement('div');
                        card.className = 'asset-card';
                        card.innerHTML = `
                            <h3>${item['Asset']}</h3>
                            <p><strong>Status:</strong> <span class="status-box ${statusClass}">${item['Status']}</span></p>
                            <p><strong>Remark:</strong> ${item['Remark']}</p>
                            <p><strong>Action:</strong> ${item['Action']}</p>
                            <p class="last-update">Last Update: ${formattedDate}</p>
                        `;
                        cardGrid.appendChild(card);
                    });
                    
                    locationSection.appendChild(cardGrid);
                    mainContent.appendChild(locationSection);
                }
            })
            .catch(error => {
                 mainContent.innerHTML = `<p style="color:red;">Failed to load data. Please check your console for errors.</p>`;
                 console.error(error);
            });

    } else if (hospitalId) {
        if (backButton) {
            backButton.style.display = 'none';
        }
        
        headerTitle.textContent = `CRITICAL SYSTEM HOSPITAL- ${hospitalId}`;
        mainContent.innerHTML = '';

        const cardGrid = document.createElement('div');
        cardGrid.className = 'card-grid';
        
        criticalSystems.forEach(system => {
            const card = document.createElement('a');
            card.className = 'card';
            card.href = `hospital-page.html?hosp=${hospitalId}&sys=${system.id}`;
            const systemName = document.createElement('h3');
            systemName.textContent = system.name;
            card.appendChild(systemName);
            cardGrid.appendChild(card);
        });
        mainContent.appendChild(cardGrid);
    }
});

if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
    document.addEventListener('DOMContentLoaded', createHospitalCards);
}