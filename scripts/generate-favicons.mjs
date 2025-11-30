#!/usr/bin/env node
import sharp from 'sharp';
import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, '..', 'public');
const LOGO_PATH = join(PUBLIC_DIR, 'images', 'santeway-logo.png');

// Favicon boyutları
const FAVICON_SIZES = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 180, name: 'apple-touch-icon.png' },
];

async function generateFavicons() {
  console.log('🎨 Favicon oluşturma başlıyor...\n');
  
  try {
    // Logo dosyasını oku
    const logoBuffer = await readFile(LOGO_PATH);
    
    // Her boyut için favicon oluştur
    for (const { size, name } of FAVICON_SIZES) {
      const outputPath = join(PUBLIC_DIR, name);
      
      await sharp(logoBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png({ quality: 100, compressionLevel: 9 })
        .toFile(outputPath);
      
      console.log(`✓ ${name} oluşturuldu (${size}x${size})`);
    }
    
    // favicon.ico oluştur (16x16 ve 32x32 içeren)
    const favicon16 = await sharp(logoBuffer)
      .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toBuffer();
    
    const favicon32 = await sharp(logoBuffer)
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toBuffer();
    
    // 32x32 boyutunu favicon.ico olarak kaydet (basit yaklaşım)
    await writeFile(join(PUBLIC_DIR, 'favicon.ico'), favicon32);
    console.log('✓ favicon.ico oluşturuldu (32x32)');
    
    // site.webmanifest güncelle
    const manifest = {
      name: "Santeway",
      short_name: "Santeway",
      icons: [
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ],
      theme_color: "#1B4332",
      background_color: "#ffffff",
      display: "standalone"
    };
    
    await writeFile(
      join(PUBLIC_DIR, 'site.webmanifest'),
      JSON.stringify(manifest, null, 2)
    );
    console.log('✓ site.webmanifest güncellendi');
    
    console.log('\n✅ Tüm favicon dosyaları başarıyla oluşturuldu!');
    console.log('\n📝 HTML head bölümüne şu satırları ekleyin:');
    console.log(`
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
    `);
    
  } catch (error) {
    console.error('❌ Hata:', error.message);
    process.exit(1);
  }
}

generateFavicons();
