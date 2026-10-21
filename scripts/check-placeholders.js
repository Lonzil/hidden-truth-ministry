// scripts/check-placeholders.js
import fs from 'fs';
import path from 'path';

const DIST_DIR = './dist';
const PLACEHOLDER_TAG = '[PLACEHOLDER:';

function checkDirectory(directory) {
  let foundPlaceholder = false;
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (checkDirectory(filePath)) foundPlaceholder = true;
    } else if (file.endsWith('.html')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes(PLACEHOLDER_TAG)) {
        console.error(`❌ ERROR: Unresolved placeholder found in ${filePath}`);
        foundPlaceholder = true;
      }
    }
  }
  return foundPlaceholder;
}

if (!fs.existsSync(DIST_DIR)) {
  console.error('❌ dist directory not found. Run "npm run build" first.');
  process.exit(1);
}

console.log('Checking production build for unresolved placeholders...');
const hasPlaceholders = checkDirectory(DIST_DIR);

if (hasPlaceholders) {
  console.error('\n❌ Build failed: Unresolved placeholders were found in the public output.');
  console.error('You must replace all [PLACEHOLDER: ...] tags with real content before deploying to production.\n');
  process.exit(1); // This crashes the script and fails the npm command
} else {
  console.log('✅ Success: No unresolved placeholders found in the production build.');
}