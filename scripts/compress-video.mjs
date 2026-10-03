import ffmpeg from 'ffmpeg-static';
import { execFileSync } from 'child_process';
import fs from 'fs';

const inputVideo = './public/videos/hero-original.mp4';
const outputVideo = './public/videos/hero-optimized.mp4';

console.log('Optimizing hero video for fast mobile & web loading...');

// Encode 720p (or 960 width for ultra-lightweight mobile performance)
// -crf 30 -b:v 450k -maxrate 600k -bufsize 1200k -vf scale=960:-2 -an -movflags +faststart
const args = [
  '-i', inputVideo,
  '-an',
  '-c:v', 'libx264',
  '-profile:v', 'main',
  '-crf', '31',
  '-maxrate', '550k',
  '-bufsize', '1100k',
  '-preset', 'slow',
  '-vf', 'scale=960:-2',
  '-movflags', '+faststart',
  '-y',
  outputVideo
];

execFileSync(ffmpeg, args, { stdio: 'inherit' });

const outputStats = fs.statSync(outputVideo);
console.log('Ultra-optimized video size:', (outputStats.size / (1024 * 1024)).toFixed(2), 'MB');
fs.copyFileSync(outputVideo, './public/videos/hero.mp4');
fs.unlinkSync(outputVideo);
console.log('public/videos/hero.mp4 updated successfully!');
