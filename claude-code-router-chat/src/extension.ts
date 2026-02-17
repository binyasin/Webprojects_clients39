import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'claude-code-router-chat.start',
    () => {
      vscode.window.showInformationMessage('Claude Code Router Chat activated');
    },
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
