#!/usr/bin/env node
import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Optimize edilecek klasör
const PUBLIC_DIR = join(__dirname, '..', 'public');

// Desteklenen formatlar
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];

// Maksimum boyut (genişlik)
const MAX_WIDTH = 1200;

// Kalite ayarları
const QUALITY = {
  jpg: 85,
  png: 90,
  webp: 85
};

async function getFileSize(filePath) {
  const stats = await stat(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2); // MB cinsinden
}

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const fileName = basename(filePath);
  
  if (!SUPPORTED_FORMATS.includes(ext)) {
    return;
  }

  try {
    const originalSize = await getFileSize(filePath);
    
    // Resmi yükle ve metadata al
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Eğer resim çok büyükse resize et
    let processedImage = image;
    
    if (metadata.width > MAX_WIDTH) {
      processedImage = processedImage.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Formata göre optimize et
    if (ext === '.png') {
      processedImage = processedImage.png({ 
        quality: QUALITY.png,
        compressionLevel: 9 
      });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      processedImage = processedImage.jpeg({ 
        quality: QUALITY.jpg,
        progressive: true 
      });
    } else if (ext === '.webp') {
      processedImage = processedImage.webp({ 
        quality: QUALITY.webp 
      });
    }
    
    // Optimize edilmiş resmi kaydet
    await processedImage.toFile(filePath + '.tmp');
    
    // Dosyayı değiştir
    await sharp(filePath + '.tmp').toFile(filePath);
    
    // Geçici dosyayı sil
    await import('fs/promises').then(fs => fs.unlink(filePath + '.tmp'));
    
    const optimizedSize = await getFileSize(filePath);
    const savedPercentage = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${fileName}: ${originalSize}MB → ${optimizedSize}MB (${savedPercentage}% azaldı)`);
  } catch (error) {
    console.error(`✗ ${fileName}: Hata - ${error.message}`);
  }
}

async function processDirectory(dir) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const fileStat = await stat(filePath);
    
    if (fileStat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      await optimizeImage(filePath);
    }
  }
}

console.log('🖼️  Resim optimizasyonu başlıyor...\n');
await processDirectory(PUBLIC_DIR);
console.log('\n✅ Tüm resimler optimize edildi!');
