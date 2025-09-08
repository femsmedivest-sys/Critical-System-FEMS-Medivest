// --- KOD UNTUK MENJANA BUTANG HOSPITAL DI HALAMAN UTAMA (index.html) ---

// Data hospital yang akan digunakan untuk menjana butang
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
    if (!cardGrid) return; // Exit if the element doesn't exist

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

// Call the function only on the main page
if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
    document.addEventListener('DOMContentLoaded', createHospitalCards);
}

// --- KOD UNTUK MENGENDALIKAN HALAMAN HOSPITAL DAN SISTEM KRITIKAL ---

// Data sistem kritikal
const criticalSystems = [
    { name: "ELECTRICAL SUPPLY", id: "ELECTRICAL_SUPPLY" },
    { name: "WATER SUPPLY SYSTEM", id: "WATER_SUPPLY_SYSTEM" },
    { name: "AUTOCLAVE", id: "AUTOCLAVE" },
    { name: "CHILLER & COOLING TOWER", id: "CHILLER_COOLING_TOWER" },
    { name: "GENERATOR SET", id: "GENERATOR_SET" },
    { name: "MEDICAL GAS PIPELINE SYSTEM", id: "MEDICAL_GAS_PIPELINE" },
    { name: "VERTICAL TRANSPORTATION", id: "VERTICAL_TRANSPORTATION" },
    { name: "AHU & HVAC", id: "AHU_HVAC" },
    { name: "BAS SYSTEM", id: "BAS_SYSTEM" },
    { name: "FIRE PROTECTION SYSTEM", id: "FIRE_PROTECTION" },
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const hospitalId = urlParams.get('hosp');
    const systemId = urlParams.get('sys');

    const mainContent = document.querySelector('main');
    const headerTitle = document.getElementById('header-title');
    const backButton = document.getElementById('back-button');

    // Paparkan butiran aset jika parameter 'sys' wujud
    if (systemId) {
        if (backButton) {
            backButton.style.display = 'block';
            backButton.href = `hospital-page.html?hosp=${hospitalId}`;
        }
        
        headerTitle.textContent = `${systemId.replace(/_/g, ' ')}`;
        mainContent.innerHTML = '';
        
        const assetData = {
            "ELECTRICAL_SUPPLY": [
                { location: "Bilik LV", name: "VCB 1", status: "FUNCTIONING", remark: "Dalam keadaan normal", action: "N/A", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 2", status: "NOT-FUNCTIONING", remark: "Bunyi bising", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 3", status: "NOT-FUNCTIONING", remark: "Leaking", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 4", status: "FUNCTIONING", remark: "Mechanism rosak", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "HT SWITCH ROOM", name: "TRIP CABLE 1", status: "FUNCTIONING", remark: "Dalam keadaan normal", action: "N/A", lastUpdate: "2025-09-25" },
            ],
            // Tambah data untuk sistem lain di sini
        };

        const data = assetData[systemId] || [];
        const locations = {};

        data.forEach(item => {
            if (!locations[item.location]) {
                locations[item.location] = [];
            }
            locations[item.location].push(item);
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
                if (item.status === 'FUNCTIONING') {
                    statusClass = 'status-FUNCTIONING';
                } else if (item.status === 'NOT-FUNCTIONING') {
                    statusClass = 'status-NOT-FUNCTIONING';
                }
                
                const card = document.createElement('div');
                card.className = 'asset-card';
                card.innerHTML = `
                    <h3>${item.name}</h3>
                    <p><strong>Status:</strong> <span class="status-box ${statusClass}">${item.status}</span></p>
                    <p><strong>Remark:</strong> ${item.remark}</p>
                    <p><strong>Action:</strong> ${item.action}</p>
                    <p class="last-update">Last Update: ${item.lastUpdate}</p>
                `;
                cardGrid.appendChild(card);
            });
            
            locationSection.appendChild(cardGrid);
            mainContent.appendChild(locationSection);
        }

    // Paparkan butang sistem kritikal jika parameter 'hosp' wujud
    } else if (hospitalId) {
        if (backButton) {
            backButton.style.display = 'none';
        }
        
        headerTitle.textContent = `Sistem Kritikal - Hospital ${hospitalId}`;
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
