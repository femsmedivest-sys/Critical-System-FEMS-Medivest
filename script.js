const hospitalData = [
    // Pastikan URL di sini adalah URL Apps Script yang betul
    // Jika tiada URL, biarkan string kosong seperti ini: ''
    //---N9-------
    { name: "Hospital Tuanku Ja'afar, Seremban", id: "TUANKU-JAAFAR", sheetsUrl: "https://script.google.com/macros/s/AKfycbw6nwHbWfRtgEbu2w7BgD6ip6Xbd4G5XA6UnFc57LFJzYcQ_mnkJe9BJMUKTvuthJNG/exec" },
    //{ name: "Hospital Tuanku Ja'afar, Seremban", id: "HTJS-SBN", sheetsUrl: "" },
    { name: "Hospital Tuanku Ampuan Najihah, Kuala Pilah", id: "HTAN-KUALA-PILAH", sheetsUrl: "" },
    { name: "Hospital Jempol", id: "HJ-JEMPOL", sheetsUrl: "https://script.google.com/macros/s/AKfycbyf746jLISfC08pgK0q5R2vTkYjI3TX-Bt89dfdovoYrPZv8aJYcD7DzAEV7vV4FwAO/exec" },
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
];

const criticalSystems = [
    { name: "ELECTRICAL SUPPLY", id: "ELECTRICAL SUPPLY" },
    { name: "GENERATOR SET", id: "GENERATOR SET" },
    { name: "WATER SUPPLY SYSTEM", id: "WATER SUPPLY SYSTEM" },
    { name: "AUTOCLAVE", id: "AUTOCLAVE" },
    { name: "MEDICAL GAS PIPELINE SYSTEM", id: "MEDICAL GAS PIPELINE SYSTEM" },
    { name: "VERTICAL TRANSPORTATION", id: "LIFT" },
    { name: "AHU & HVAC", id: "AHU" },
    { name: "BAS SYSTEM", id: "BAS SYSTEM" },
    { name: "CHILLER & COOLING TOWER", id: "CHILLER-COOLING-TOWER" },
    { name: "FIRE PROTECTION SYSTEM", id: "FIRE PROTECTION SYSTEM" },
];

const submissionForms = {
    'TUANKU-JAAFAR_ELECTRICAL SUPPLY': 'https://forms.gle/FGrMdiZeQqaK65Ay7',
    'TUANKU-JAAFAR_GENERATOR SET': 'https://forms.gle/mjACBCEG8qQbxyy66',
    'TUANKU-JAAFAR_AUTOLCAVE': 'https://forms.gle/DvrKQB1jiSueznyw7',
    'TUANKU-JAAFAR_LIFT': 'https://forms.gle/j9Qtte6Esvife31Q8',
    'TUANKU-JAAFAR_FIRE PROTECTION SYSTEM': 'https://forms.gle/NBs6XQrdcfdt6xdZA',
    'TUANKU-JAAFAR_CHILLER-COOLING-TOWER': 'https://forms.gle/BVVG8sKYg3ZUHuE1A',
};

// Fungsi untuk mengemas kini kad hospital sedia ada di halaman utama
function updateHospitalCards() {
    const fetchPromises = [];
    const loadingSpinner = document.getElementById('loading-spinner');

    if (loadingSpinner) {
        loadingSpinner.style.display = 'block';
    }

    hospitalData.forEach(hospital => {
        // Cari elemen kad yang sedia ada
        const cardElement = document.getElementById(`card-${hospital.id}`);
        if (cardElement && hospital.sheetsUrl) {
            const fetchPromise = fetch(hospital.sheetsUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const functioningCount = data.filter(item => item.Status && item.Status.trim().toUpperCase() === 'FUNCTIONING').length;
                    const notFunctioningCount = data.filter(item => item.Status && item.Status.trim().toUpperCase() === 'NOT FUNCTIONING').length;

                    // Cari span dalam kad dan kemas kini nilainya
                    const functioningSpan = cardElement.querySelector('.status-FUNCTIONING');
                    const notFunctioningSpan = cardElement.querySelector('.status-NOT-FUNCTIONING');

                    if (functioningSpan) {
                        functioningSpan.textContent = `FUNCTIONING: ${functioningCount}`;
                    }
                    if (notFunctioningSpan) {
                        notFunctioningSpan.textContent = `NOT FUNCTIONING: ${notFunctioningCount}`;
                    }
                })
                .catch(error => {
                    console.error(`Error fetching data for ${hospital.name}:`, error);
                    const statusContainer = cardElement.querySelector('.status-container');
                    if (statusContainer) {
                        statusContainer.innerHTML = '<p style="color:red; font-size: 0.8em; margin: 0; padding: 0;">Data not available</p>';
                    }
                });
            fetchPromises.push(fetchPromise);
        } else if (cardElement) {
             const statusContainer = cardElement.querySelector('.status-container');
             if (statusContainer) {
                 statusContainer.innerHTML = '<p style="color:red; font-size: 0.8em; margin: 0; padding: 0;">No URL API provided</p>';
             }
        }
    });

    Promise.all(fetchPromises.map(p => p.catch(e => e))).finally(() => {
        if (loadingSpinner) {
            loadingSpinner.style.display = 'none';
        }
    });
}

// Fungsi untuk mengambil data dari Google Sheets API
async function fetchAssetData(sheetsUrl, systemId) {
    try {
        const response = await fetch(sheetsUrl);
        const data = await response.json();
        const filteredData = data.filter(item => (item['Type of System'] || '').trim().toUpperCase() === (systemId || '').trim().toUpperCase());
        return filteredData;
    } catch (error) {
        console.error('Error fetching data from Google Apps Script:', error);
        return [];
    }
}

// Logik untuk halaman hospital
async function setupHospitalPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const hospitalId = urlParams.get('hosp');
    const systemId = urlParams.get('sys');

    const mainContent = document.querySelector('main');
    const headerTitle = document.getElementById('header-title');
    const backButton = document.getElementById('back-button');

    const currentHospital = hospitalData.find(hosp => hosp.id === hospitalId);
    const sheetsUrl = currentHospital ? currentHospital.sheetsUrl : null;

    // --- Logik untuk halaman senarai sistem kritikal ---
    if (!systemId) {
        if (backButton) {
            backButton.style.display = 'none';
        }
        headerTitle.textContent = `Type of Critical System - ${currentHospital ? currentHospital.name : hospitalId}`;
        mainContent.innerHTML = '';

        if (!sheetsUrl || sheetsUrl === '') {
            mainContent.innerHTML = `<p style="text-align:center; color:red; font-weight:bold;">No data from Google Spreadsheet for this hospital. Please contact 011-31234648.</p>`;
            return;
        }

        mainContent.innerHTML = '<div class="loading-spinner"></div><p style="text-align:center; margin-top:10px;">Please wait while we load the data... 😔⏳</p>';

        try {
            const response = await fetch(sheetsUrl);
            const allData = await response.json();

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

                // Kira status untuk sistem ini dari data yang telah diambil
                const systemData = allData.filter(item => (item['Type of System'] || '').trim().toUpperCase() === (system.id || '').trim().toUpperCase());
                const functioningCount = systemData.filter(item => (item.Status || '').trim().toUpperCase() === 'FUNCTIONING').length;
                const notFunctioningCount = systemData.filter(item => (item.Status || '').trim().toUpperCase() === 'NOT FUNCTIONING').length;

                // Tambah status ke kad
                const statusContainer = document.createElement('div');
                statusContainer.className = 'status-container';

                const spanF = document.createElement('span');
                spanF.className = 'status-box status-FUNCTIONING';
                spanF.textContent = `FUNCTIONING: ${functioningCount}`;

                const spanNF = document.createElement('span');
                spanNF.className = 'status-box status-NOT-FUNCTIONING';
                spanNF.textContent = `NOT FUNCTIONING: ${notFunctioningCount}`;

                statusContainer.appendChild(spanF);
                statusContainer.appendChild(spanNF);
                card.appendChild(statusContainer);

                cardGrid.appendChild(card);
            });
            mainContent.appendChild(cardGrid);

        } catch (error) {
            console.error("Fetch error:", error);
            mainContent.innerHTML = `<p style="text-align:center; color:red; font-weight:bold;">Failed to retrieve data. Please check the URL or contact 011-31234648.</p>`;
        }
    }
    // --- Logik untuk halaman butiran aset ---
    else {
        if (backButton) {
            backButton.style.display = 'inline-block';
            backButton.href = `hospital-page.html?hosp=${hospitalId}`;
        }

        const currentSystem = criticalSystems.find(system => system.id === systemId);
        if (currentSystem) {
            headerTitle.textContent = `${currentSystem.name} - ${currentHospital.name}`;
        } else {
            headerTitle.textContent = systemId;
        }

        if (!sheetsUrl || sheetsUrl === '') {
            mainContent.innerHTML = `<p style="text-align:center; color:red; font-weight:bold;">No data from Google Spreadsheet for this hospital.</p>`;
            return;
        }

        mainContent.innerHTML = '<div class="loading-spinner"></div><p style="text-align:center; margin-top:10px;">Please be patient, data is being loaded... 😔⏳</p>';

        const data = await fetchAssetData(sheetsUrl, systemId);
        mainContent.innerHTML = '';

        const formKey = `${hospitalId}_${systemId}`;
        const formUrl = submissionForms[formKey];

        const formButton = document.createElement('a');
        formButton.className = 'form-button';
        formButton.textContent = 'Go to Submission Form';
        formButton.href = formUrl ? formUrl : '#';
        formButton.target = '_blank';
        if (!formUrl) {
            formButton.style.opacity = '0.5';
            formButton.style.cursor = 'not-allowed';
            formButton.textContent = 'Form Not Available';
        }
        mainContent.appendChild(formButton);

        const locations = {};
        data.forEach(item => {
            const location = item['Location'];
            if (!locations[location]) {
                locations[location] = [];
            }
            locations[location].push(item);
        });

        if (Object.keys(locations).length === 0) {
            mainContent.innerHTML += `<p style="text-align:center; color:red; font-weight:bold;">No data found for this system! 😲😤.</p>`;
            return;
        }

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
                        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        const day = String(dateObj.getDate());
                        const month = monthNames[dateObj.getMonth()];
                        const year = String(dateObj.getFullYear()).slice(-2);
                        let hours = dateObj.getHours();
                        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
                        const seconds = String(dateObj.getSeconds()).padStart(2, '0');
                        const ampm = hours >= 12 ? 'PM' : 'AM';
                        hours = hours % 12;
                        hours = hours ? hours : 12;

                        formattedDate = `${day} ${month} ${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
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
    }
}

// Panggil fungsi yang betul berdasarkan halaman
if (window.location.pathname.endsWith('hospital-page.html')) {
    document.addEventListener('DOMContentLoaded', setupHospitalPage);
} else if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
    document.addEventListener('DOMContentLoaded', updateHospitalCards);

}

