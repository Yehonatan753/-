const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\User\\Downloads";

const tomerDirs = [
    "תומר פרידמן",
    "תומר פרידמן\\זיכרון",
    "תומר פרידמן\\SKILLS",
    "תומר פרידמן\\אתר",
    "תומר פרידמן\\פרוייקטים מזדמנים"
];

const hayDirs = [
    "החיי והצומח",
    "החיי והצומח\\זיכרון",
    "החיי והצומח\\SKILLS",
    "החיי והצומח\\פרוייקטים מזדמנים",
    "החיי והצומח\\אתר" // Or leave 'אתר החיי והצומח' as is, but we'll create this anyway
];

[...tomerDirs, ...hayDirs].forEach(dir => {
    const fullPath = path.join(baseDir, dir);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`Created: ${fullPath}`);
    }
});

// Now let's move some files into these folders
const moveFile = (fileName, targetDir) => {
    const src = path.join(baseDir, fileName);
    const dest = path.join(baseDir, targetDir, fileName);
    if (fs.existsSync(src)) {
        try {
            fs.renameSync(src, dest);
            console.log(`Moved ${fileName} to ${targetDir}`);
        } catch (e) {
            console.error(`Failed to move ${fileName}: ${e.message}`);
        }
    }
}

// Tomer files
const tomerFiles = [
    "tomer-quiz-recurring-clients.html",
    "tomer-quiz.html",
    "tomer-quiz-final.html",
    "tomer-quiz-final_1.html",
    "tomer-quiz-final.pdf",
    "tomer-quiz-concept.pdf",
    "tomer-quiz-concept (1).pdf",
    "tomer_battlecard.md",
    "tomer_battlecard_1.md",
    "tomer_battlecard_2.md",
    "tomer_battlecard.pdf",
    "tomer_call_13h00.md",
    "tomer_call_13h00_1.md",
    "tomer_call_13h00_2.md",
    "tomer_call_13h00_3.md",
    "tomer_call_13h00.pdf",
    "tomer_call_prep.md",
    "tommy-quiz-concept.html",
    "tommy-quiz-concept (1).html",
    "Client Compass.pdf",
    "CCA 2.0 Outreach & Follow-Up Tracker.xlsx",
    "Copy of 15 Day First Client Challenge Perfect Prospects Example.xlsx"
];

tomerFiles.forEach(f => moveFile(f, "תומר פרידמן\\פרוייקטים מזדמנים"));

// Other things that seem like learning/skills
const skillFiles = [
    "1. Copywriting 101 (Fundamentals) - Econolearn.com.ts",
    "1. Intro to Prompt Engineering - Econolearn.com.ts",
    "1. Welcome - Econolearn.com.ts",
    "2. How to Get the Most From This Course - Econolearn.com.ts",
    "2. The S.I.M.P Framework (Live Demonstration) - Econolearn.com.ts",
    "18  Which No-Code Platform to use -  AI Foundations  AI Automations by Jack.html",
    "04  Tools -  AI Foundations  AI Automations by Jack.html",
    "145  Prompt Engineering Google.pdf",
    "High-Ticket_Profit_Engine.pdf",
    "High-Ticket_Profit_Engine (1).pdf",
    "ChatGPT Playbook.pdf",
    "GPT Blueprint.pdf",
    "GPT Blueprint (1).pdf",
    "GPT Swipe File.pdf",
    "@APEXCOURSEVIP _4D Avatar Guidebook.pdf",
    "@APEXCOURSEVIP _4D Copywriting Dictionary.docx",
    "@APEXCOURSEVIP _4D_AI_Copywriting_Master-Guide.pdf",
    "@APEXCOURSEVIP _4D_Free_Value_Writing_Guide.pdf",
    "@APEXCOURSEVIP _4D_Power_Words_Catalog.pdf",
    "@APEXCOURSEVIP _4D_Structure_Dictionary.pdf",
    "@APEXCOURSEVIP _4_Keys_to_Craft_a_Converting_CTA.pdf",
    "@APEXCOURSEVIP _7_Universal_Copywriting_Angles.pdf",
    "@APEXCOURSEVIP _Email_Sequence_Template_Pack.pdf",
    "@APEXCOURSEVIP _Sales_Page_Headlines_Template_Pack.pdf",
    "@APEXCOURSEVIP _The_Secrets_of_Storytelling.pdf",
    "@APEXCOURSEVIP _The_Supreme_Art_Of_Intrigue.pdf",
    "Tyson 4D Academy 2.0 resources .docx"
];

skillFiles.forEach(f => moveFile(f, "תומר פרידמן\\SKILLS")); // Assuming Skills are mostly AI and copywriting

// Leads/pilot files - probably Tomer? Let's put in occasional projects
const leadFiles = [
    "100_Male_Leads_Pilot_Detailed.xlsx",
    "100_Male_Leads_Pilot_No_Payers.xlsx",
    "100_Pure_Leads_Male_Pilot.xlsx",
    "100_Pure_Leads_Pilot.xlsx",
    "קובץ נתוני לקוחות ולידים - 06.02.2026.xlsx",
    "Data_Revival_Strategic_Growth.pdf",
    "02  AI Automations Roadmap Draft.pdf"
];

leadFiles.forEach(f => moveFile(f, "תומר פרידמן\\פרוייקטים מזדמנים"));

// Installers and unrelated stuff - leave in Downloads.
