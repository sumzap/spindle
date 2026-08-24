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

プロジェクトルートまたはホームディレクトリの `.npmrc` に以下を追加します。トークンは環境変数から渡すため、`.npmrc` に直接書き込む必要はありません。

```
@sumzap:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

各パッケージは public として公開しているため、Organization を問わず利用できます。ただし GitHub Packages の npm レジストリは public パッケージでも未認証アクセスを許可していないため、トークンの設定自体は必須です。

#### ローカル環境

[GitHub CLI](https://cli.github.com/) のトークンを利用します。personal access token を発行する必要はありません。

```bash
export NODE_AUTH_TOKEN=$(gh auth token)
```

GitHub Packages の npm レジストリは fine-grained personal access token に対応しておらず、personal access token による認証は classic token に限られます。GitHub CLI が発行するのは OAuth token（`gho_`）のため、personal access token を発行せずに認証できます。

#### CI（GitHub Actions）

`.npmrc` をリポジトリに配置し、`NODE_AUTH_TOKEN` にデフォルトの `GITHUB_TOKEN` を渡します。personal access token は不要です。

```yaml
- run: pnpm install
  env:
    NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

別 Organization のリポジトリからでも認証できます。

### パッケージのインストール

認証設定後、通常通りインストールできます。

```bash
npm install @sumzap/spindle-ui
# or
pnpm add @sumzap/spindle-ui
```

## License

Spindle is licensed under MIT License, but Icon files in [Spindle Icons](https://github.com/sumzap/spindle/tree/main/packages/spindle-icons#%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9) and [Spindle UI](https://github.com/sumzap/spindle/tree/main/packages/spindle-ui#%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9) are licensed under Creative Commons BY-NC-ND 4.0.
