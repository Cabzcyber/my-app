const fs = require('fs');
const path = require('path');

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/'#232323'/g, "'var(--bg-primary)'");
  content = content.replace(/"#232323"/g, '"var(--bg-primary)"');
  
  content = content.replace(/'white'/g, "'var(--text-primary)'");
  content = content.replace(/"white"/g, '"var(--text-primary)"');
  content = content.replace(/'#fff'/g, "'var(--text-primary)'");
  content = content.replace(/'#ffffff'/g, "'var(--text-primary)'");
  
  content = content.replace(/'#e0e0e0'/g, "'var(--text-primary)'");
  content = content.replace(/'#ccc'/g, "'var(--text-secondary)'");
  content = content.replace(/'#aaa'/g, "'var(--text-muted)'");
  content = content.replace(/'#888'/g, "'var(--text-muted)'");
  
  content = content.replace(/'rgba\(255,\s*255,\s*255,\s*0\.03\)'/g, "'var(--card-bg)'");
  content = content.replace(/'rgba\(255,255,255,0.03\)'/g, "'var(--card-bg)'");
  
  content = content.replace(/'1px solid rgba\(255,\s*255,\s*255,\s*0\.05\)'/g, "'1px solid var(--card-border)'");
  content = content.replace(/'1px solid rgba\(255,255,255,0.05\)'/g, "'1px solid var(--card-border)'");
  content = content.replace(/'rgba\(255,\s*255,\s*255,\s*0\.05\)'/g, "'var(--card-border)'");
  content = content.replace(/'rgba\(255,255,255,0.05\)'/g, "'var(--card-border)'");

  content = content.replace(/'rgba\(255,\s*255,\s*255,\s*0\.1\)'/g, "'var(--hover-bg)'");
  content = content.replace(/'rgba\(255,255,255,0.1\)'/g, "'var(--hover-bg)'");
  content = content.replace(/'1px solid rgba\(255,255,255,0.1\)'/g, "'1px solid var(--hover-bg)'");
  
  content = content.replace(/'rgba\(255,\s*255,\s*255,\s*0\.15\)'/g, "'var(--hover-border)'");
  content = content.replace(/'rgba\(255,255,255,0.15\)'/g, "'var(--hover-border)'");
  
  // Specific replacements for topo and mini player
  content = content.replace(/fill="#222"/g, 'fill="var(--topo-fill)"');
  content = content.replace(/stroke="#333"/g, 'stroke="var(--topo-stroke)"');
  content = content.replace(/'rgba\(25, 25, 25, 0.6\)'/g, "'var(--glass-bg)'");

  fs.writeFileSync(filePath, content);
};

const dirs = ['components', 'app'];
dirs.forEach(dir => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (file.endsWith('.tsx')) {
      replaceInFile(path.join(dir, file));
    }
  });
});
