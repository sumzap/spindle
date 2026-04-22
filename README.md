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

#### 他リポジトリの CI（GitHub Actions）からのアクセス

デフォルトの `GITHUB_TOKEN` は発行元リポジトリに対してのみ `read:packages` を持ちます。そのため、**sumzap Organization 内の別リポジトリ**の GitHub Actions から Spindle パッケージをインストールするには、Organization 管理者による一度の設定が必要です。

以下の各パッケージ設定ページで操作を行います：

| パッケージ | 設定ページ |
| --- | --- |
| `@sumzap/spindle-ui` | <https://github.com/orgs/sumzap/packages/npm/spindle-ui/settings> |
| `@sumzap/spindle-tokens` | <https://github.com/orgs/sumzap/packages/npm/spindle-tokens/settings> |
| `@sumzap/spindle-hooks` | <https://github.com/orgs/sumzap/packages/npm/spindle-hooks/settings> |
| `@sumzap/spindle-mcp-server` | <https://github.com/orgs/sumzap/packages/npm/spindle-mcp-server/settings> |

各ページで：

1. 「Manage Actions access」セクションの **「Add Repository」** をクリック
2. アクセスを許可したいリポジトリ（例: `sumzap/ai-app`）を検索して追加
3. ロールを **「Read」** に設定
4. 「Save」

設定後は、対象リポジトリの CI で `GITHUB_TOKEN`（デフォルト）を使って認証できるようになります。

### パッケージのインストール

認証設定後、通常通りインストールできます。

```bash
npm install @sumzap/spindle-ui
# or
pnpm add @sumzap/spindle-ui
```

## License

Spindle is licensed under MIT License, but Icon files in [Spindle Icons](https://github.com/sumzap/spindle/tree/main/packages/spindle-icons#%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9) and [Spindle UI](https://github.com/sumzap/spindle/tree/main/packages/spindle-ui#%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9) are licensed under Creative Commons BY-NC-ND 4.0.
