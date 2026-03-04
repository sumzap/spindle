const checkList = `チェック内容,重要度,該当ガイドライン,ガイドラインURL
装飾ではない画像やアイコンは、代替テキストで説明している,基本必須,画像に代替テキストを提供する,https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html
装飾目的の画像は代替テキストが空、または背景画像になっている,基本必須,画像に代替テキストを提供する,https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html
音声ファイルに、キャプションや書き起こしテキストがある,基本必須,収録済みの動画に代替コンテンツを提供する,https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html
動画・アニメーションに、内容を説明するテキストがある,基本必須,収録済みの動画に代替コンテンツを提供する,https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html
マシンリーダブルに実装している。表や見出し、リスト、画像、フォーム要素など、ブラウザ／アプリ標準の要素や要素間の関係性を適切に実装している,基本必須,情報や関係性を明確にする,https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html
HTMLの順序と表示順序を一致させる（※その順序に意味がある場合）,基本必須,意味のある順序でコンテンツを表現する,https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html
端末を横向きにしても、適切に文字が折り返されレイアウトが変わり、コンテンツが見切れていない,できれば,表示の向きを固定しない,https://www.w3.org/WAI/WCAG21/Understanding/orientation.html
端末の向きが縦向き（portrait）を前提としたデザインになっていない,できれば,表示の向きを固定しない,https://www.w3.org/WAI/WCAG21/Understanding/orientation.html
ブラウザ／アプリの自動補完機能が最大限活用できている（type属性、autocomplete属性等の利用）,できれば,入力目的を特定できる,https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html
自動補完可能な入力内容が、一般的な単位で区切られて入力できる（郵便番号、電話番号は1つの入力フィールドにするなど）,できれば,入力目的を特定できる,https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html
色だけでコンテンツを区別していない（グラフ、カレンダーUI、「赤字は必須」など）,基本必須,色だけで伝えない,https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html
音声を自動で再生していない,厳守,音声を制御できるようにする,https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html
"SpindleのカラーパレットのTheme Colorsを適切に使い分け、コントラスト比を確保している（Text 4.5:1, Object 3:1）",基本必須,テキストや文字画像のコントラストを確保する,https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、情報が欠落していない,基本必須,テキストサイズを拡大縮小できる,https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html
段落の幅は80文字以内（全角40文字以内）になっている,できれば,テキストの可読性を担保する,https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html
画面を400%まで拡大しても、画面幅に合わせて画像や要素のサイズが変動し、テキストは適切に折り返される（レスポンシブデザイン）,できれば,リフローできる,https://www.w3.org/WAI/WCAG21/Understanding/reflow.html
マウスホバー・キーボードフォーカスで表示したコンテンツは、(1)クリック・Escキーで非表示にでき(2)追加コンテンツにマウスホバーでき(3)自動で消えない,基本必須,ホバーまたはフォーカスで表示されるコンテンツを制御できる,https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html
すべての機能がキーボードのTab、上下左右、EnterまたはSpaceキーで操作できる,基本必須,キーボード、タッチデバイスで操作できる,https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html
モーダル・iframeなどのComponentから、TabキーまたはEscキーだけでキーボードフォーカスを移動することができる（キーボードトラップなし）,厳守,キーボード操作を可能にする,https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html
コンテンツに時間制限がない。または20秒前に通知し、簡単に解除か延長ができる,基本必須,コンテンツに制限時間を設けない,https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html
動画やアニメーションを自動で再生しない。自動再生する場合、5秒以内に停止するか、停止できる。,厳守,動く、自動更新するコンテンツに配慮する,https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html
点滅（1秒に3回以上）している動画・アニメーションがない,厳守,画面の点滅を防止する,https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html
パララックスなど、スクロールやクリックで起きる「移動・拡大縮小・回転のアニメーション」は、「視差効果を減らす」で削除・軽減できる,基本必須,ユーザー操作で起きるアニメーションを無効にできる,https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html
パララックスなど、スクロールやクリックで起きる「移動・拡大縮小・回転のアニメーション」がなくてもコンテンツが利用できる,基本必須,ユーザー操作で起きるアニメーションを無効にできる,https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html
メインコンテンツをmain要素でマークアップする。または、メインコンテンツの先頭にh1要素またはh2要素の見出しがある,基本必須,重複する情報をスキップできるようにする,https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html
キーボード操作の順序が、見た目の順序と一致している,基本必須,適切なフォーカス順序にする,https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html
リンクテキストがリンク先のページタイトルと一致している。または、リンクテキストからリンク先のページの内容を推測できる。,基本必須,リンクの目的を理解できるようにする,https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html
操作可能なUIは、フォーカスの状態が見える,基本必須,フォーカスを見えるようにする,https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html
サービス内の現在位置がわかるようなナビゲーションを利用できる（パンくず、サイトマップなど）,できれば,現在位置を確認できる,https://www.w3.org/WAI/WCAG21/Understanding/location.html
ナビゲーションは現在位置をマシンリーダブルに実装している,できれば,現在位置を確認できる,https://www.w3.org/WAI/WCAG21/Understanding/location.html
ジェスチャーだけでしか操作できない機能がない（スワイプ、ピンチイン・アウト、ドラッグ＆ドロップなどには他の操作方法がある),基本必須,ポインタジェスチャを必須としない,https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html
ボタンやリンクなどにmousedownやtouchstartしても、別の場所で離せばキャンセルできる,基本必須,ポインタ操作のキャンセルができる,https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html
表示ラベルとAccessibility Nameが一致、または前方一致している,基本必須,表示するラベルが実装上のテキストに含まれている,https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html
タップエリアは44px × 44px以上確保している（余白込みも可）,できれば,ターゲットのサイズを理解する,https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
UIラベリング - コンテンツ | Spindleに則ったラベリングの定義ができている。,できれば,難しい文章表現を避ける,https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html
キーボードフォーカス時に、ページ遷移・レイアウト変更・ダイアログの表示・フォーカスの移動をしていない,基本必須,フォーカス時にコンテンツを大きく変更しない,https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html
フォーム要素は、入力・選択時に予測できない変化を起こさない（セレクトボックスを上下キーで移動すると決定される、入力するとフォーカスが移動するなど）,基本必須,入力時に予測できない変化を起こさない,https://www.w3.org/WAI/WCAG21/Understanding/on-input.html
新規タブを開くリンクは、新規タブを開くことがわかるデザイン・実装である,できれば,要求による変化,https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html
エラーのある入力項目にエラー内容を表示している,基本必須,エラーを特定できる,https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html
入力欄には入力内容を示すラベルがある（placeholderをラベルに使っていない）,基本必須,入力項目にラベルまたは説明をつける,https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html
エラー原因が機械的に検出できる場合、修正方法をユーザーに提示している,基本必須,エラーの修正を提案する,https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html
HTML仕様に準拠した実装をしている,基本必須,HTMLを正しく記述する,https://www.w3.org/WAI/WCAG21/Understanding/parsing.html
カスタムコントロール（ブラウザ標準でない独自のUIコンポーネント）を実装する場合、AccessibilityNameとrole、WAI-ARIA属性を適切に設定している,基本必須,カスタムコントロールの操作性を担保する,https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html
カスタムコントロールは、スクリーンリーダーでも機能落ちがなく、読み上げが過不足なく行われている,基本必須,カスタムコントロールの操作性を担保する,https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html
スクリーンリーダー利用時に、フォーカスしなくてもステータスメッセージが通知される,できれば,コンテンツの変更をユーザーに知らせる,https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html
`;

export async function getAccessibilityDocs() {
  return {
    checkList,
  };
}
