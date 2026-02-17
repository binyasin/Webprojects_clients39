import * as vscode from 'vscode';

export class ChatPanel {
  private readonly panel: vscode.WebviewPanel;

  constructor(extensionUri: vscode.Uri) {
    this.panel = vscode.window.createWebviewPanel(
      'claudeChat',
      'Claude Code Chat',
      vscode.ViewColumn.One,
      { enableScripts: true },
    );

    this.panel.webview.html = this.getHtml();
  }

  private getHtml(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Claude Code Chat</title>
</head>
<body>
  <h1>Claude Code Chat</h1>
  <div id="chat-container"></div>
</body>
</html>`;
  }

  dispose() {
    this.panel.dispose();
  }
}
