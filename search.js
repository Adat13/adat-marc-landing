const fs = require('fs');
const path = require('path');

const searchDirs = [
  'C:\\Users\\HP\\Documents',
  'C:\\Users\\HP\\Downloads',
  'C:\\Users\\HP\\Desktop'
];

const targetFiles = ['adatfondo.gif', 'AdatLogo.svg', 'adat_about.jpg', 'basededatos.png', 'hardware.png', 'software.webp'];

function searchFiles(dir) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          // Skip node_modules and hidden dirs
          if (file !== 'node_modules' && !file.startsWith('.')) {
            searchFiles(fullPath);
          }
        } else {
          if (targetFiles.includes(file)) {
            console.log(`¡ENCONTRADO!: ${fullPath}`);
          }
        }
      } catch (err) {
        // Skip permission errors
      }
    }
  } catch (err) {
    // Skip permission errors
  }
}

console.log("Buscando tus imágenes perdidas, por favor espera un momento...");
for (const dir of searchDirs) {
  if (fs.existsSync(dir)) {
    searchFiles(dir);
  }
}
console.log("Búsqueda finalizada.");
