// Data hospital dan pautan Google Sheets
const hospitalData = [
    // Pastikan URL di sini adalah URL Apps Script yang betul
    { name: "Hospital Tuanku Ja'afar, Seremban", id: "TUANKU-JAAFAR", sheetsUrl: "https://script.google.com/macros/s/AKfycbw6nwHbWfRtgEbu2w7BgD6ip6Xbd4G5XA6UnFc57LFJzYcQ_mnkJe9BJMUKTvuthJNG/exec" },
    //{ name: "Hospital Tuanku Ja'afar, Seremban", id: "HTJS-SBN", sheetsUrl: "" },
    { name: "Hospital Tuanku Ampuan Najihah, Kuala Pilah", id: "HTAN-KUALA-PILAH", sheetsUrl: "" },
    { name: "Hospital Jempol", id: "HJ-JEMPOL", sheetsUrl: "" },
    { name: "Hospital Jelebu", id: "HJ-JELEBU", sheetsUrl: "" },
    { name: "Hospital Port Dickson", id: "HPD-PORT-DICKSON", sheetsUrl: "" },
    { name: "Hospital Tampin", id: "HT-TAMPIN", sheetsUrl: "" },

    // --- MELAKA ---
    { name: "Hospital Melaka", id: "HM-MLK", sheetsUrl: "" },
    { name: "Hospital Jasin", id: "HJ-JASIN", sheetsUrl: "" },
    { name: "Hospital Alor Gajah", id: "HAG-ALOR-GAJAH", sheetsUrl: "" },

    // --- JOHOR ---
    { name: "Hospital Sultanah Aminah, Johor Bahru", id: "HSA-JOHOR", sheetsUrl: "" },
    { name: "Hospital Sultan Ismail, Johor Bahru", id: "HSI-JOHOR", sheetsUrl: "" },
    { name: "Hospital Pakar Sultanah Fatimah, Muar", id: "HPSF-MUAR", sheetsUrl: "" },
    { name: "Hospital Kluang", id: "HK-KLUANG", sheetsUrl: "" },
    { name: "Hospital Batu Pahat", id: "HBP-BATU-PAHAT", sheetsUrl: "" },
    { name: "Hospital Pontian", id: "HP-PONTIAN", sheetsUrl: "" },
    { name: "Hospital Segamat", id: "HS-SEGAMAT", sheetsUrl: "" },
    { name: "Hospital Temenggong Seri Maharaja Tun Ibrahim, Kulai", id: "HTSMTI-KULAI", sheetsUrl: "" },
    { name: "Hospital Kota Tinggi", id: "HKT-KOTA-TINGGI", sheetsUrl: "" },
    { name: "Hospital Mersing", id: "HM-MERSING", sheetsUrl: "" },
    { name: "Hospital Tangkak", id: "HT-TANGKAK", sheetsUrl: "" },
    { name: "Makmal Kesihatan Awam Johor", id: "MKAJ-JB", sheetsUrl: "" },
    { name: "Hospital Permai", id: "HT-PERMAI", sheetsUrl: "" },
    // Tambah semua hospital di sini dengan ID dan URL mereka
    // ... hospital lain
];

const criticalSystems = [
    { name: "ELECTRICAL SUPPLY", id: "ELECTRICAL SUPPLY" },
    { name: "WATER SUPPLY SYSTEM", id: "WATER SUPPLY SYSTEM" },
    { name: "AUTOCLAVE", id: "AUTOCLAVE" },
    { name: "GENERATOR SET", id: "GENERATOR SET" },
    { name: "MEDICAL GAS PIPELINE SYSTEM", id: "MEDICAL GAS PIPELINE SYSTEM" },
    { name: "VERTICAL TRANSPORTATION", id: "LIFT" },
    { name: "AHU & HVAC (coming soon include)", id: "AHU & HVAC" },
    { name: "BAS SYSTEM (coming soon include)", id: "BAS SYSTEM" },
    { name: "CHILLER & COOLING TOWER", id: "CHILLER-COOLING-TOWER" },
    { name: "FIRE PROTECTION SYSTEM", id: "FIRE PROTECTION SYSTEM" },
];

// Fungsi untuk menjana kad hospital di halaman utama
function createHospitalCards() {
    const cardGrid = document.querySelector('.card-grid');
    if (!cardGrid) return;

    hospitalData.forEach(hospital => {
        const card = document.createElement('a');
        card.classList.add('card');
        card.href = `hospital-page.html?hosp=${hospital.id}`;
        
        const hospitalName = document.createElement('h3');
        hospitalName.textContent = hospital.name;
        
        card.appendChild(hospitalName);
        cardGrid.appendChild(card);
    });
}

// Fungsi untuk mengambil data dari Google Sheets API
async function fetchAssetData(sheetsUrl, systemId) {
    try {
        const response = await fetch(sheetsUrl);
        const data = await response.json(); 
        const filteredData = data.filter(item => item['Type of System'].trim() === systemId.trim());
        return filteredData;

    } catch (error) {
        console.error('Error fetching data from Google Sheets API:', error);
        return [];
    }
}

// Logik untuk halaman hospital
function setupHospitalPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const hospitalId = urlParams.get('hosp');
    const systemId = urlParams.get('sys');

    const mainContent = document.querySelector('main');
    const headerTitle = document.getElementById('header-title');
    const backButton = document.getElementById('back-button');
    
    // Cari URL Google Sheets yang sepadan
    const currentHospital = hospitalData.find(hosp => hosp.id === hospitalId);
    const sheetsUrl = currentHospital ? currentHospital.sheetsUrl : null;

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

        // Semak jika URL wujud sebelum mengambil data
        if (!sheetsUrl || sheetsUrl === '') {
            mainContent.innerHTML = `<p style="text-align:center; color:red; font-weight:bold;">No data from Google Spreadsheet for this hospital.</p>`;
            return; // Hentikan fungsi di sini
        }

        mainContent.innerHTML = '<p>Sabarrrr yeeee huhuhu, akan cuba solve untuk automatik pop up, still program the code ☠️🚀🔥</p>';

        fetchAssetData(sheetsUrl, systemId)
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
                                formattedDate = rawDate;
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
        
        headerTitle.textContent = `Type of Critical System - ${currentHospital ? currentHospital.name : hospitalId}`;
        mainContent.innerHTML = '';
        
        // Semak jika URL wujud, jika tidak, paparkan mesej yang sesuai
        if (!sheetsUrl || sheetsUrl === '') {
            mainContent.innerHTML = `<p style="text-align:center; color:red; font-weight:bold;">No data from Google Spreadsheet for this hospital. Please contact 011-31234648.</p>`;
            return;
        }

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
}

// Panggil fungsi yang betul berdasarkan halaman
if (window.location.pathname.endsWith('hospital-page.html')) {
    document.addEventListener('DOMContentLoaded', setupHospitalPage);
} else if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
    document.addEventListener('DOMContentLoaded', createHospitalCards);

}
