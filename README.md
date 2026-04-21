<p align="center">
  <img alt="Spindle" src="./docs/images/spindle-logo.png" width="400">
</p>

# Spindle

Sumzap Design System

- [Spindle Tokens](packages/spindle-tokens) (Design tokens)
- [Spindle Icons](packages/spindle-icons) (SVG and PDF icons)
- [Spindle UI](packages/spindle-ui) (UI components)
- [Spindle Hooks](packages/spindle-hooks) (React Hooks)
- [Spindle Syntax Themes](packages/spindle-syntax-themes) (Syntax themes with Spindle color palette)
- [Spindle MCP Server](packages/spindle-mcp-server) (MCP Server)

## インストール

Spindleの各パッケージは[GitHub Packages](https://github.com/orgs/sumzap/packages)で公開されています。インストール前に以下の認証設定が必要です。

### 認証設定

プロジェクトルートまたはホームディレクトリの `.npmrc` に以下を追加します。

```
@sumzap:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

`YOUR_GITHUB_TOKEN` は `read:packages` スコープを持つ [GitHub Personal Access Token](https://github.com/settings/tokens) に置き換えてください。CI 環境では `GITHUB_TOKEN` をそのまま利用できます。

### パッケージのインストール

認証設定後、通常通りインストールできます。

```bash
npm install @sumzap/spindle-ui
# or
pnpm add @sumzap/spindle-ui
```

## License

Spindle is licensed under MIT License, but Icon files in [Spindle Icons](https://github.com/sumzap/spindle/tree/main/packages/spindle-icons#%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9) and [Spindle UI](https://github.com/sumzap/spindle/tree/main/packages/spindle-ui#%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9) are licensed under Creative Commons BY-NC-ND 4.0.
