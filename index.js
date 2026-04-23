const { execSync } = require('child_process');
const fs = require('fs');

const activities = ["Refactor logic", "Update docs", "Minor fix", "Sync metadata"];

function makeCommit() {
    const now = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
    const msg = activities[Math.floor(Math.random() * activities.length)];
    const logMessage = `[${now}] - ${msg}\n`;

    try {
        // 1. Update file log
        fs.appendFileSync('activity_log.txt', logMessage);

        // 2. Setup Git Identity (Pakai Env Variable Railway)
        const token = process.env.GH_TOKEN;
        const repoUrl = `https://amalinars:${token}@github.com/amalinars/rismana.git`;

        // 3. Eksekusi Git Commands
        execSync(`git config user.name "amalinars"`);
        execSync(`git config user.email "keymarlin28@gmail.com"`);
        execSync(`git remote set-url origin ${repoUrl}`);
        execSync(`git add activity_log.txt`);
        execSync(`git commit -m "auto: ${msg} ${now}"`);
        execSync(`git push origin main`);

        console.log(`✅ Berhasil push: ${msg} pada ${now}`);
    } catch (error) {
        console.error('❌ Gagal commit:', error.message);
    }
}

// Jalankan tiap 5 menit (300.000 milidetik)
console.log("Bot Node.js dimulai...");
makeCommit(); // Jalanin sekali pas start
setInterval(makeCommit, 300000);
