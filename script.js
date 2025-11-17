// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* === FUNGSI DROPDOWN ABOUT US === */
document.addEventListener('DOMContentLoaded', function() {
    // Pastikan kita merujuk butang dropdown yang betul
    const dropbtn = document.querySelector('.about-dropbtn'); 
    const dropdownContent = document.getElementById("aboutDropdown");

    if (dropbtn && dropdownContent) {
        // ... (Kekalkan kod fungsi toggle dan window.onclick sedia ada)
        dropbtn.addEventListener('click', function(event) {
            event.stopPropagation(); 
            dropdownContent.classList.toggle("show");
        });

        // Logik untuk menutup dropdown bila klik di luar
        window.onclick = function(event) {
            if (!event.target.matches('.about-dropbtn')) {
                const openDropdowns = document.getElementsByClassName("dropdown-content");
                let i;
                for (i = 0; i < openDropdowns.length; i++) {
                    const openDropdown = openDropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    }
});


const hospitalData = [
    // Pastikan URL di sini adalah URL Apps Script yang betul
    // Jika tiada URL, biarkan string kosong seperti ini: ''
    //---N9-------
    { name: "Hospital Tuanku Ja'afar, Seremban", 
        id: "TUANKU-JAAFAR", sheetsUrl: "https://script.google.com/macros/s/AKfycbyURuTW-q5YGseD763PXLfWP198nBg-DLToJxPJ3FciH7pQ12gebbU0xL0WEcrhkHiH/exec" },
    { name: "Hospital Tuanku Ampuan Najihah, Kuala Pilah", 
        id: "KPL-KUALA-PILAH", sheetsUrl: "" },
    { name: "Hospital Jempol", 
        id: "JMP-JEMPOL", sheetsUrl: "https://script.google.com/macros/s/AKfycbyu-9HxaLzE__60qiYYsHcPcjhFDvaLywQvSCrR97_7A9IwvknRko5z_NdiFER-NmGx/exec" },
    { name: "Hospital Jelebu",
        id: "JLB-JELEBU", sheetsUrl:"https://script.google.com/macros/s/AKfycbzBh0WwZg5l35cSwuhJ26IinlJtGPcyuAP75PCTpx4A5nbzThj_WfFEl1vwSFAfZz80ng/exec" },
    { name: "Hospital Port Dickson", 
        id: "PDX-PORT-DICKSON", sheetsUrl:"https://script.google.com/macros/s/AKfycbzEqrZI2uaMrzFo52BXS5bzj2WmKlUjEaJSog-08TCfAqZNigdysGHDRVB_0msmzzI/exec"},
    { name: "Hospital Tampin", 
        id: "TMP-TAMPIN", sheetsUrl: "https://script.google.com/macros/s/AKfycbxwKWMWIV-flIYJOWXdQf0egPCXMK2VAGMAOYfa68M9t9C8h8WHyY_DoKsTA3pD33EupQ/exec" },

    // --- MELAKA ---
    { name: "Hospital Melaka", 
        id: "MKA-MLK", sheetsUrl: ""},
    { name: "Hospital Jasin", 
        id: "JSN-JASIN", sheetsUrl: "" },
    { name: "Hospital Alor Gajah", 
        id: "AGJ-ALOR-GAJAH", sheetsUrl: "https://script.google.com/macros/s/AKfycbw2qjTumpYARgSe0E0IrRZq7g5RrISPBedT96ItkAySjiy-ARH_nSpQwS_5LE8JOHTn/exec" },

    // --- JOHOR ---
    { name: "Hospital Sultanah Aminah, Johor Bahru", 
        id: "HSA-JOHOR", sheetsUrl: "" },
    { name: "Hospital Sultan Ismail, Johor Bahru", 
        id: "HSI-JOHOR", sheetsUrl: "" },
    { name: "Hospital Pakar Sultanah Fatimah, Muar", 
        id: "HPSF-MUAR", sheetsUrl: "https://script.google.com/macros/s/AKfycbwr4glm_HZtke2nkD5LgsGl20G_gD_hZSWIQqX_Q3mKIW_k368sXrqpGXWzsvtjK3un/exec" },
    { name: "Hospital Kluang", 
        id: "KLN-KLUANG", sheetsUrl: "" },
    { name: "Hospital Batu Pahat", 
        id: "BPH-BATU-PAHAT", sheetsUrl: "" },
    { name: "Hospital Pontian", 
        id: "PON-PONTIAN", sheetsUrl: "https://script.google.com/macros/s/AKfycbyTPjnBYxZ2asURDlZUplLz2g-zD1ddsFNKoOkBmicKaY0COS_ODdo3OHzTkUuRG60V/exec" },
    { name: "Hospital Segamat", 
        id: "SEG-SEGAMAT", sheetsUrl: "" },
    { name: "Hospital Temenggong Seri Maharaja Tun Ibrahim, Kulai", 
        id: "HTSMTI-KULAI", sheetsUrl: "https://script.google.com/macros/s/AKfycbxbZ55Q_vo-MuMvxbKGlcRZVvwMSfQonOUVS4BjDU6S5EIX-VWwazRK3viR9f7zm647CA/exec" },
    { name: "Hospital Kota Tinggi", 
        id: "KTG-KOTA-TINGGI", sheetsUrl: "" },
    { name: "Hospital Mersing", 
        id: "MER-MERSING", sheetsUrl: "https://script.google.com/macros/s/AKfycbwkVr2WnVB_Ow1AttIXH4psBmSQ8m_OdaN-z3_JgUmq7mmrtYfogZUVPLl_t7QdrWV8/exec" },
    { name: "Hospital Tangkak", 
        id: "TGK-TANGKAK", sheetsUrl: "https://script.google.com/macros/s/AKfycbxNNdAZ7uOam6IljzwGJWFBd7VY9j-Ehu3QzgtnTo7bUltKg80aqSrE7NRh-dnDE8SQ/exec" },
    { name: "Makmal Kesihatan Awam Johor", 
        id: "MKAJ-JB", sheetsUrl: "" },
    { name: "Hospital Permai", 
        id: "PER-PERMAI", sheetsUrl: "" },
    // Tambah semua hospital di sini dengan ID dan URL mereka
];

const criticalSystems = [
    { name: "ELECTRICAL SUPPLY", id: "ELECTRICAL SUPPLY"},
    { name: "GENERATOR SET", id: "GENERATOR SET"},
    { name: "WATER SUPPLY SYSTEM", id: "WATER SUPPLY SYSTEM"},
    { name: "AUTOCLAVE", id: "AUTOCLAVE"},
    { name: "MEDICAL GAS PIPELINE SYSTEM", id: "MEDICAL GAS PIPELINE SYSTEM"},
    { name: "VERTICAL TRANSPORTATION", id: "LIFT"},
    { name: "AHU", id: "AHU"},
    { name: "BAS SYSTEM", id: "BAS SYSTEM"},
    { name: "CHILLER & COOLING TOWER", id: "CHILLER AND COOLING TOWER" },
    { name: "FIRE PROTECTION SYSTEM", id: "FIRE PROTECTION SYSTEM" },
];

//---------------------------------link submission form--------------------------------------------------
const submissionForms = {
    //NEGERI SEMBILAN
    'TUANKU-JAAFAR_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    'TUANKU-JAAFAR_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    'TUANKU-JAAFAR_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    'TUANKU-JAAFAR_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    'TUANKU-JAAFAR_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    'TUANKU-JAAFAR_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    'TUANKU-JAAFAR_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    'TUANKU-JAAFAR_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    'TUANKU-JAAFAR_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    'TUANKU-JAAFAR_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',

    'JMP-JEMPOL_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    'JMP-JEMPOL_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    'JMP-JEMPOL_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    'JMP-JEMPOL_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    'JMP-JEMPOL_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    'JMP-JEMPOL_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    'JMP-JEMPOL_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    'JMP-JEMPOL_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    'JMP-JEMPOL_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    'JMP-JEMPOL_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',

    'TMP-TAMPIN_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    'TMP-TAMPIN_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    'TMP-TAMPIN_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    'TMP-TAMPIN_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    'TMP-TAMPIN_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    'TMP-TAMPIN_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    'TMP-TAMPIN_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    'TMP-TAMPIN_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    'TMP-TAMPIN_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    'TMP-TAMPIN_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',

    'PDX-PORT-DICKSON_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    'PDX-PORT-DICKSON_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    'PDX-PORT-DICKSON_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    'PDX-PORT-DICKSON_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    'PDX-PORT-DICKSON_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    'PDX-PORT-DICKSON_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    'PDX-PORT-DICKSON_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    'PDX-PORT-DICKSON_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    'PDX-PORT-DICKSON_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    'PDX-PORT-DICKSON_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',

    'JLB-JELEBU_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    'JLB-JELEBU_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    'JLB-JELEBU_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    'JLB-JELEBU_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    'JLB-JELEBU_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    'JLB-JELEBU_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    'JLB-JELEBU_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    'JLB-JELEBU_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    'JLB-JELEBU_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    'JLB-JELEBU_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',

    'KPL-KUALA-PILAH_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    'KPL-KUALA-PILAH_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    'KPL-KUALA-PILAH_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    'KPL-KUALA-PILAH_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    'KPL-KUALA-PILAH_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    'KPL-KUALA-PILAH_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    'KPL-KUALA-PILAH_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    'KPL-KUALA-PILAH_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    'KPL-KUALA-PILAH_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    'KPL-KUALA-PILAH_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    
    //MELAKA
    'MKA-MLK_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    'MKA-MLK_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    'MKA-MLK_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    'MKA-MLK_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    'MKA-MLK_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    'MKA-MLK_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    'MKA-MLK_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    'MKA-MLK_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    'MKA-MLK_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    'MKA-MLK_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',

    'AGJ-ALOR-GAJAH_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/AGJ.html',

    'JSN-JASIN_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    'JSN-JASIN_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    'JSN-JASIN_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    'JSN-JASIN_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    'JSN-JASIN_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    'JSN-JASIN_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    'JSN-JASIN_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    'JSN-JASIN_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    'JSN-JASIN_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    'JSN-JASIN_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',

    //JOHOR DARUL TAKZIM (JDT)
    'HSA-JOHOR_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    'HSA-JOHOR_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    'HSA-JOHOR_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    'HSA-JOHOR_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    'HSA-JOHOR_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    'HSA-JOHOR_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    'HSA-JOHOR_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    'HSA-JOHOR_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    'HSA-JOHOR_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    'HSA-JOHOR_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',

    'HSI-JOHOR_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    'HSI-JOHOR_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    'HSI-JOHOR_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    'HSI-JOHOR_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    'HSI-JOHOR_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    'HSI-JOHOR_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    'HSI-JOHOR_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    'HSI-JOHOR_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    'HSI-JOHOR_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    'HSI-JOHOR_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',

    'HPSF-MUAR_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    'HPSF-MUAR_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    'HPSF-MUAR_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    'HPSF-MUAR_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    'HPSF-MUAR_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    'HPSF-MUAR_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    'HPSF-MUAR_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    'HPSF-MUAR_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    'HPSF-MUAR_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    'HPSF-MUAR_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',

    'KLN-KLUANG_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    'KLN-KLUANG_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    'KLN-KLUANG_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    'KLN-KLUANG_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    'KLN-KLUANG_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    'KLN-KLUANG_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    'KLN-KLUANG_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    'KLN-KLUANG_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    'KLN-KLUANG_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    'KLN-KLUANG_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',

    'BPH-BATU-PAHAT_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    'BPH-BATU-PAHAT_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    'BPH-BATU-PAHAT_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    'BPH-BATU-PAHAT_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    'BPH-BATU-PAHAT_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    'BPH-BATU-PAHAT_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    'BPH-BATU-PAHAT_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    'BPH-BATU-PAHAT_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    'BPH-BATU-PAHAT_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    'BPH-BATU-PAHAT_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',

    'PON-PONTIAN_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    'PON-PONTIAN_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    'PON-PONTIAN_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    'PON-PONTIAN_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    'PON-PONTIAN_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    'PON-PONTIAN_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    'PON-PONTIAN_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    'PON-PONTIAN_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    'PON-PONTIAN_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    'PON-PONTIAN_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',

    'SEG-SEGAMAT_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/SEG.html',
    'SEG-SEGAMAT_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/SEG.html',
    'SEG-SEGAMAT_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/SEG.html',
    'SEG-SEGAMAT_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/SEG.html',
    'SEG-SEGAMAT_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/SEG.html',
    'SEG-SEGAMAT_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/SEG.html',
    'SEG-SEGAMAT_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/SEG.html',
    'SEG-SEGAMAT_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/SEG.html',
    'SEG-SEGAMAT_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/SEG.html',
    'SEG-SEGAMAT_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/SEG.html',

    'HTSMTI-KULAI_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    'HTSMTI-KULAI_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    'HTSMTI-KULAI_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    'HTSMTI-KULAI_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    'HTSMTI-KULAI_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    'HTSMTI-KULAI_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    'HTSMTI-KULAI_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    'HTSMTI-KULAI_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    'HTSMTI-KULAI_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    'HTSMTI-KULAI_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',

    'KTG-KOTA-TINGGI_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    'KTG-KOTA-TINGGI_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    'KTG-KOTA-TINGGI_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    'KTG-KOTA-TINGGI_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    'KTG-KOTA-TINGGI_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    'KTG-KOTA-TINGGI_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    'KTG-KOTA-TINGGI_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    'KTG-KOTA-TINGGI_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    'KTG-KOTA-TINGGI_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    'KTG-KOTA-TINGGI_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',

    'MER-MERSING_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    'MER-MERSING_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    'MER-MERSING_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    'MER-MERSING_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    'MER-MERSING_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    'MER-MERSING_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    'MER-MERSING_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    'MER-MERSING_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    'MER-MERSING_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    'MER-MERSING_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',

    'TGK-TANGKAK_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    'TGK-TANGKAK_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    'TGK-TANGKAK_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    'TGK-TANGKAK_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    'TGK-TANGKAK_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    'TGK-TANGKAK_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    'TGK-TANGKAK_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    'TGK-TANGKAK_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    'TGK-TANGKAK_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    'TGK-TANGKAK_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',

    'MKAJ-JB_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/MKAJ.html',
    'MKAJ-JB_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/MKAJ.html',
    'MKAJ-JB_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/MKAJ.html',
    'MKAJ-JB_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/MKAJ.html',
    'MKAJ-JB_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MKAJ.html',
    'MKAJ-JB_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/MKAJ.html',
    'MKAJ-JB_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MKAJ.html',
    'MKAJ-JB_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/MKAJ.html',
    'MKAJ-JB_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MKAJ.html',
    'MKAJ-JB_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/MKAJ.html',

    'PER-PERMAI_ELECTRICAL SUPPLY': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    'PER-PERMAI_GENERATOR SET': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    'PER-PERMAI_AUTOCLAVE': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    'PER-PERMAI_LIFT': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    'PER-PERMAI_FIRE PROTECTION SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    'PER-PERMAI_CHILLER AND COOLING TOWER': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    'PER-PERMAI_WATER SUPPLY SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    'PER-PERMAI_AHU': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    'PER-PERMAI_MEDICAL GAS PIPELINE SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    'PER-PERMAI_BAS SYSTEM': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
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
        // Jangan hapuskan kandungan utama HTML hospital-page.html jika ia mengandungi struktur menu, 
        // tetapi kita akan ganti dengan grid yang dijana JS jika dataSheets ada.

        if (!sheetsUrl || sheetsUrl === '') {
            mainContent.innerHTML = `<p style="text-align:center; color:red; font-weight:bold;">No data from Google Spreadsheet for this hospital. Please contact (011-31234648).</p>`;
            return;
        }

        mainContent.innerHTML = '<div class="loading-spinner"></div><p style="text-align:center; margin-top:10px;">Please wait while the system load the data...</p>';

        try {
            const response = await fetch(sheetsUrl);
            const allData = await response.json();

            // Sediakan tajuk
            mainContent.innerHTML = `<h2 class="main-title"></h2>`;
            const cardGrid = document.createElement('div');
            cardGrid.className = 'system-grid'; 

            // --- PETA LALUAN GAMBAR (MAP) ---
            const systemImageMap = {
                "GENERATOR SET": "Gambar-System/genset.webp", 
                "ELECTRICAL SUPPLY": "Gambar-System/ElectricalSupply.webp",
                "WATER SUPPLY SYSTEM": "Gambar-System/WSS.webp",
                "AUTOCLAVE": "Gambar-System/autoclave.webp",
                "MEDICAL GAS PIPELINE SYSTEM": "Gambar-System/MGPS.webp",
                "LIFT": "Gambar-System/lift.webp",
                "AHU": "Gambar-System/AHU.webp",
                "BAS SYSTEM": "Gambar-System/BAS.webp",
                "CHILLER AND COOLING TOWER": "Gambar-System/CHILLER.webp", 
                "FIRE PROTECTION SYSTEM": "Gambar-System/FPS.webp", 
            };


            criticalSystems.forEach(system => {
                const card = document.createElement('a');
                card.className = 'system-card'; 
                card.href = `hospital-page.html?hosp=${hospitalId}&sys=${system.id}`;

                // --- START: TAMBAH OVERLAY ---
                const overlay = document.createElement('div');
                overlay.className = 'card-overlay';
                card.appendChild(overlay);
                // --- END: TAMBAH OVERLAY ---

                // KOD GAMBAR
                const img = document.createElement('img');
                const imageSrc = systemImageMap[system.id] || "Gambar/default.webp"; 
                img.src = imageSrc;
                img.alt = system.name;
                img.className = 'card-image';
                card.appendChild(img);

                // 3. TAMBAH TAJUK (z-index: 2)
                const systemName = document.createElement('span');
                systemName.className = 'card-title';
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
        // Pautan butang "Back"
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

        mainContent.innerHTML = '<div class="loading-spinner"></div><p style="text-align:center; margin-top:10px;">Please be patient, data is being loaded</p>';

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
} else if (window.location.pathname === '/' || window.location.pathname.endsWith('Critical-System.html')) {
    document.addEventListener('DOMContentLoaded', updateHospitalCards);
}