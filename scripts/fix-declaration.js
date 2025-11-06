import path from 'path';
import fs from 'fs';
import packageJson from '../package.json' with { type: 'json' };

const declarationFilePath = path.join(import.meta.dirname, '../index.d.ts');
fs.writeFileSync(
  declarationFilePath,
  fs
    .readFileSync(declarationFilePath)
    .toString()
    .replace('declare module "index"', `declare module "${packageJson.name}"`)
    .replace(
      /declare module "(\.\/)?lib\//g,
      `declare module "${packageJson.name}_internal_do_not_import/`,
    )
    .replace(
      /from\s+"(\.\/)?lib\//g,
      `from "${packageJson.name}_internal_do_not_import/`,
    )
    .replace(/\.js/g, ''),
);
