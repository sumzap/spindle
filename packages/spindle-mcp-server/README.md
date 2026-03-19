# Spindle MCP Server

SumzapデザインシステムSpindleに関するデータを[Model Context Protocol(MCP)](https://modelcontextprotocol.io/introduction)を通じて提供します。

## MCPサーバーの設定

MCPクライアントの設定をします。SpindleのMCPサーバーを利用するにはローカル環境にあらかじめ[nodejs](https://nodejs.org/)がインストールされている必要があります。

### Claude Code CLIでの設定

[Claude Code CLI](https://github.com/anthropics/claude-code)を使用する場合は、以下のコマンドで設定します。

#### npxを使用する場合（npmに公開済みの場合）

```bash
claude mcp add sumzap-spindle -- npx -y @sumzap/spindle-mcp-server@latest
```

#### ローカルビルドを使用する場合

npmに未公開の場合は、リポジトリをクローンしてビルドしたものを使用します。

```bash
git clone https://github.com/sumzap/spindle.git
cd spindle
pnpm install --frozen-lockfile
pnpm build
```

```bash
claude mcp add sumzap-spindle -- node /path/to/spindle/packages/spindle-mcp-server/dist/index.js
```

> **Note**: `/path/to/spindle` はクローンしたリポジトリの絶対パスに置き換えてください。`spindle-ui` や `spindle-tokens` が更新された場合は、再度 `pnpm build` を実行してください。

#### 設定の確認

設定が正しく追加されたか、以下のコマンドで確認します。

```bash
claude mcp get sumzap-spindle
```

### Cursorでの設定

[Cursor](https://www.cursor.com/)を使用する場合は、設定ファイルに以下を追加します。

#### Cursorでnpxを使用する場合（npmに公開済みの場合）

```json
{
  "mcpServers": {
    "sumzap-spindle": {
      "command": "npx",
      "args": [
        "-y",
        "@sumzap/spindle-mcp-server@latest"
      ]
    }
  }
}
```

#### Cursorでローカルビルドを使用する場合

npmに未公開の場合は、上記「ローカルビルドを使用する場合」の手順でビルドした上で、以下を設定します。`/path/to/spindle` はクローンしたリポジトリの絶対パスに置き換えてください。

```json
{
  "mcpServers": {
    "sumzap-spindle": {
      "command": "node",
      "args": [
        "/path/to/spindle/packages/spindle-mcp-server/dist/index.js"
      ]
    }
  }
}
```

## 機能

SpindleのMCPサーバーでは以下の機能が提供されています。

### Tool

- `get_components`: 利用可能なコンポーネントの一覧を取得します
- `get_component_info`: 指定されたコンポーネントの詳細情報を取得します。コンポーネントを利用する際にはこのツールが呼び出される必要があります。LLMが自動的に呼び出さない場合は、明示的に呼び出してください
- `get_design_tokens`: 定義されたデザイントークン(CSS)一覧を取得します。
- `get_design_token`: 指定した種類のデザイントークン(CSS)を取得します。
- `get_icons`: アイコンの一覧を取得します。
- `get_icon_info`: 指定したアイコンの詳細情報を取得します。アイコンを利用する際にはこのツールが呼び出される必要があります。LLMが自動的に呼び出さない場合は、明示的に呼び出してください
- `get_accessibility_docs`: Spindleコンポーネントを作成する際に使うアクセシビリティチェックリストを取得します。チェックリストは[Sumzap Accessibility Guidelines](https://a11y-guidelines.ameba.design/)をもとに作成されています
- `get_component_design_doc_templete`: Spindleコンポーネントを作成する際のDesign Docテンプレートを取得します

### ユースケース

SpindleのMCPサーバーは以下のような利用法が想定されています。

- 「Sumzap Spindleで使えるコンポーネントを教えて」
- 「Spindleで、Dialogコンポーネントは実装されていますか」
- 「デザイントークンにはどんな種類がありますか」
- 「この実装をSpindleに書き換えて」
- 「(Figmaやスクリーンショットを添えて)できる限りSumzap Spindleを使って実装して」
- 「(Figmaやスクリーンショットを添えて)コンポーネントのDesign Docを作成して」

## 利用にあたる注意点

本MCPサーバーは、詳細な調整を行わずに情報を提供しているため、コンテキストウィンドウに大きな影響を及ぼす可能性があります。ご利用の際は注意が必要です。今後、調整を行っていく予定です。

## 開発方法

SpindleのMCPサーバーの開発には以下の手順が必要です。

### 前提条件

- Node.jsがインストールされていること
- このリポジトリのルートディレクトリで `pnpm install --frozen-lockfile` を実行して依存関係をインストール済みであること

### 開発手順

1. 依存パッケージのインストール

```bash
pnpm install --frozen-lockfile
```

2. ビルド

```bash
pnpm build
```

3. 生成されたファイルを利用して動作確認

```
{
  "mcpServers": {
    "sumzap-spindle": {
      "command": "node",
      "args": [
        "/PATH_TO_PACKAGE/spindle/packages/spindle-mcp-server/dist/index.js"
      ]
    }
  }
}
```

4. テスト

```bash
pnpm test
```

### 注意事項

- **アセットファイルの更新**: `spindle-ui` や `spindle-tokens` パッケージのファイルが更新された場合は、`npm run copy-assets` を実行してアセットファイルを再コピーしてください
- **開発時のファイル監視**: `npm run dev` はTypeScriptファイルの変更のみを監視します。アセットファイルを更新した場合は手動で再コピーが必要です
