import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface DesignTokens {
  tokenList: Record<string, object>;
  documentation: string;
}

function parseCssCustomProperties(cssContent: string): object {
  const properties: Record<string, string> = {};
  const regex = /--([^:]+):\s*([^;]+);/g;
  let match: RegExpExecArray | null = regex.exec(cssContent);

  while (match !== null) {
    const [, name, value] = match;
    properties[name.trim()] = value.trim();
    match = regex.exec(cssContent);
  }

  return properties;
}

export function getCssDesignToken(tokenType: string): object | null {
  if (tokenType === 'color') {
    return parseCssCustomProperties(sumzapColorPaletteCss);
  }

  const tokenPath = path.join(
    __dirname,
    '../assets/spindle-tokens/dist/css',
    `spindle-tokens-${tokenType}.css`,
  );
  if (!fs.existsSync(tokenPath)) {
    return null;
  }

  const content = fs.readFileSync(tokenPath, 'utf-8');
  return parseCssCustomProperties(content);
}

export function getAllCssDesignTokens(): DesignTokens {
  const cssDir = path.join(__dirname, '../assets/spindle-tokens/dist/css');
  const files = fs
    .readdirSync(cssDir)
    .filter(
      (file) => file.startsWith('spindle-tokens-') && file.endsWith('.css'),
    );

  const tokenList: Record<string, object> = {};

  files.forEach((file) => {
    const tokenType = file.replace('spindle-tokens-', '').replace('.css', '');
    try {
      const token = getCssDesignToken(tokenType);
      if (token) {
        tokenList[tokenType] = token;
      }
    } catch (error) {
      console.error(`Failed to load CSS ${tokenType} tokens:`, error);
    }
  });

  // All apps use the sumzap color palette instead of the css tokens
  tokenList.color = parseCssCustomProperties(sumzapColorPaletteCss);

  const readmePath = path.join(__dirname, '../../spindle-tokens/README.md');
  const readmeContent = fs.readFileSync(readmePath, 'utf-8');

  const documentation = `
## カラートークンについて

カラートークンを利用するには、Sumzapカラーパレットを利用してください。

## カラー以外のデザイントークンについて

${readmeContent}
  `;

  return {
    tokenList,
    documentation,
  };
}

// Sumzap Color Palette for Spindle (Design System)
const sumzapColorPaletteCss = `
/* custom properties https://www.w3.org/TR/css-variables/ */
:root {
  /**
   * Sumzap Color Palette from Spindle (Design System)
   */

  /* Brand Colors */
  --color-brand-black: #000000;
  --color-brand-yellow: #FFF100;
  --color-brand-white: #ffffff;
  --color-brand-off-white: #F7F8F8;
  --color-brand-charcoal: #32373c;
  --color-brand-cyan-blue: #0693e3;
  --color-brand-purple: #9b51e0;
}
`;
