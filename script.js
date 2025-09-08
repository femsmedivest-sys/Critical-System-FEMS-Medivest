// --- KOD UNTUK MENJANA DROPDOWN HOSPITAL DI HALAMAN UTAMA (index.html) ---

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
    // ... data hospital lain
];

function createHospitalDropdown() {
    const dropdown = document.getElementById('hospital-dropdown');
    if (!dropdown) return;

    hospitals.forEach(hospital => {
        const option = document.createElement('option');
        option.value = hospital.id;
        option.textContent = hospital.name;
        dropdown.appendChild(option);
    });

    // Tambah event listener untuk mengendalikan perubahan pilihan
    dropdown.addEventListener('change', (event) => {
        const selectedHospitalId = event.target.value;
        if (selectedHospitalId) {
            window.location.href = `hospital-page.html?hosp=${selectedHospitalId}`;
        }
    });
}

// Panggil fungsi hanya pada halaman utama
if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
    document.addEventListener('DOMContentLoaded', createHospitalDropdown);
}

// ... kekalkan kod yang selebihnya untuk halaman hospital-page.html

// Call the function only on the main page
if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
    document.addEventListener('DOMContentLoaded', createHospitalCards);
}

// --- KOD UNTUK MENGENDALIKAN HALAMAN HOSPITAL DAN Critical System ---

// Data Critical System (boleh diubah untuk dipaparkan secara dinamik dari Google Sheets)
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
        headerTitle.textContent = `${systemId.replace(/_/g, ' ')}`;
        mainContent.innerHTML = ''; // Clear existing content

        // Tambah butang "Kembali ke Senarai Sistem"
        const backButtonDiv = document.createElement('div');
        backButtonDiv.className = 'back-button-container';
        const backButton = document.createElement('a');
        backButton.href = `hospital-page.html?hosp=${hospitalId}`;
        backButton.className = 'back-button';
        backButton.textContent = 'Return to System List:';
        backButtonDiv.appendChild(backButton);
        mainContent.appendChild(backButtonDiv);
        
        ////////////////////////////////////////////////Data mockup untuk setiap Critical System///////////////////////////////////////////
        const assetData = {
            "ELECTRICAL_SUPPLY": [
                { location: "Bilik LV", name: "VCB 1", status: "FUNCTIONING", remark: "Dalam keadaan normal", action: "tetapi kadan-kadang panel akan menjadi gila", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 2", status: "NOT FUNCTIONING", remark: "Bunyi bising", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 3", status: "NOT FUNCTIONING", remark: "Leaking", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 4", status: "FUNCTIONING", remark: "Mechanism rosak", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 5", status: "FUNCTIONING", remark: "Mechanism rosak", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 6", status: "NOT FUNCTIONING", remark: "Mechanism rosak", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 7", status: "FUNCTIONING", remark: "Mechanism rosak", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 8", status: "FUNCTIONING", remark: "Mechanism rosak", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 9", status: "NOT FUNCTIONING", remark: "Mechanism rosak", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 10", status: "NOT FUNCTIONING", remark: "Mechanism rosak", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 11", status: "FUNCTIONING", remark: "Mechanism rosak", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "HT SWITCH ROOM", name: "TRIP CABLE 1", status: "FUNCTIONING", remark: "Dalam keadaan normal", action: "N/A", lastUpdate: "2025-09-25" },
                { location: "HT SWITCH ROOM", name: "TRIP CABLE 2", status: "FUNCTIONING", remark: "Dalam keadaan normal", action: "N/A", lastUpdate: "2025-09-25" },
                { location: "HT SWITCH ROOM", name: "TRIP CABLE 3", status: "NOT FUNCTIONING", remark: "Dalam keadaan normal", action: "N/A", lastUpdate: "2025-09-25" },
                { location: "HT SWITCH ROOM", name: "TRIP CABLE 4", status: "FUNCTIONING", remark: "Dalam keadaan normal", action: "N/A", lastUpdate: "2025-09-25" },
                { location: "HT SWITCH ROOM", name: "TRIP CABLE 5", status: "FUNCTIONING", remark: "Dalam keadaan normal", action: "N/A", lastUpdate: "2025-09-25" },
                { location: "HT SWITCH ROOM", name: "TRIP CABLE 6", status: "NOT FUNCTIONING", remark: "Dalam keadaan normal", action: "N/A", lastUpdate: "2025-09-25" },
                { location: "HT SWITCH ROOM", name: "TRIP CABLE 7", status: "FUNCTIONING", remark: "Dalam keadaan normal", action: "N/A", lastUpdate: "2025-09-25" },
                { location: "HT SWITCH ROOM", name: "TRIP CABLE 8", status: "FUNCTIONING", remark: "Dalam keadaan normal", action: "N/A", lastUpdate: "2025-09-25" },
                { location: "HT SWITCH ROOM", name: "TRIP CABLE 9", status: "FUNCTIONING", remark: "Dalam keadaan normal", action: "N/A", lastUpdate: "2025-09-25" },

            ],
            "GENERATOR_SET": [
                { location: "Bilik LV", name: "VCB 1", status: "FUNCTIONING", remark: "Dalam keadaan normal", action: "N/A", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 2", status: "NOT FUNCTIONING", remark: "Bunyi bising", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 3", status: "NOT FUNCTIONING", remark: "Leaking", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "Bilik LV", name: "VCB 4", status: "FUNCTIONING", remark: "Mechanism rosak", action: "Laporan", lastUpdate: "2025-09-25" },
                { location: "HT SWITCH ROOM", name: "TRIP CABLE 1", status: "FUNCTIONING", remark: "Dalam keadaan normal", action: "N/A", lastUpdate: "2025-09-25" },
            ]
            ////////// Tambah data untuk sistem lain di sini, KALAU NAMA SISTEM ADA PERKATAAN KENE ADA (_)
        };

        const data = assetData[systemId] || [];
        let currentSection = null;

        data.forEach(item => {
            if (!currentSection || currentSection.querySelector('h2').textContent !== item.location) {
                currentSection = document.createElement('section');
                currentSection.className = 'location-section';
                currentSection.innerHTML = `<h2>${item.location}</h2><div class="card-grid"></div>`;
                mainContent.appendChild(currentSection);
            }
            const cardGrid = currentSection.querySelector('.card-grid');
            const card = document.createElement('div');
            card.className = 'asset-card';

            // Tambah logik ini untuk menetapkan kelas warna
            let statusClass='';
            if (item.status === 'FUNCTIONING') {
                statusClass='status-FUNCTIONING';
            } else if (item.status === 'NOT FUNCTIONING') {
                statusClass='status-NOT-FUNCTIONING';
            }

            card.innerHTML = `
                <h3>${item.name}</h3>
                <p><strong>Status:</strong> <span class="status-box ${statusClass}">${item.status}</span></p>
                <p><strong>Remark:</strong> ${item.remark}</p>
                <p><strong>Action:</strong> ${item.action}</p>
                <p class="last-update">Last Update: ${item.lastUpdate}</p>
            `;
            cardGrid.appendChild(card);
        });

    // Paparkan butang Critical System jika parameter 'hosp' wujud
    } else if (hospitalId) {
        headerTitle.textContent = `Critical System - Hospital ${hospitalId}`;
        mainContent.innerHTML = ''; // Kosongkan kandungan sedia ada

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

