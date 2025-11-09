const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateLogo() {
  // Rozmiar 3x większy
  const canvas = createCanvas(900, 180);
  const ctx = canvas.getContext('2d');
  
  // Tło transparentne
  ctx.fillStyle = 'transparent';
  ctx.fillRect(0, 0, 900, 180);
  
  // Załaduj logo
  const logoPath = path.join(__dirname, 'logo.png');
  const logo = await loadImage(logoPath);
  
  // Logo: 40px -> 120px (3x)
  ctx.drawImage(logo, 0, 30, 120, 120);
  
  // Gap: 10px -> 30px (3x)
  const textX = 150;
  
  // Font - 3x większy: 16px -> 48px
  ctx.font = '400 48px serif';
  ctx.textBaseline = 'top';
  
  // CHAMELEON - biały (#FFFFFF)
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('CHAMELEON', textX, 30);
  
  // SWAP - teal (#76CFC1)
  ctx.fillStyle = '#76CFC1';
  ctx.fillText('SWAP', textX, 90);
  
  // DOCUMENTATION - mniejsza czcionka (9px -> 27px), szary (#888888), z paddingiem
  ctx.font = '400 27px Arial, sans-serif';
  ctx.fillStyle = '#888888';
  ctx.fillText('DOCUMENTATION', textX, 153);
  
  // Zapisz jako PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(__dirname, 'logo-with-text.png'), buffer);
  console.log('Logo wygenerowane (3x większe): logo-with-text.png');
}

generateLogo().catch(console.error);

