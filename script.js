// --- KOD UNTUK MENJANA BUTANG HOSPITAL DI HALAMAN UTAMA (index.html) ---

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
    console.log("Creating hospital cards...");
    const cardGrid = document.querySelector('.card-grid');
    if (!cardGrid) {
        console.warn("⚠️ Tiada .card-grid dijumpai dalam page ini.");
        return;
    }

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

// Pastikan function dipanggil bila DOM dah siap
document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ DOM Loaded, checking page...");
    if (document.querySelector('.card-grid')) {
        createHospitalCards();
    }
});

// --- KOD UNTUK HALAMAN HOSPITAL & SISTEM KRITIKAL ---

const criticalSystems = [
    { name: "ELECTRICAL SUPPLY", id: "ELECTRICAL_SUPPLY" },
    { name: "WATER SUPPLY SYSTEM", id: "WATER_SUPPLY_SYSTEM" },
    { name: "AUTOCLAVE", id: "AUTOCLAVE" },
    { name: "CHILLER & COOLING TOWER", id: "CHILLER_COOLING_TOWER" },
    { name: "GENERATOR SET", id: "GENERATOR_SET" },
    { name: "MEDICAL GAS PIPELINE SYSTEM", id: "MEDIC
