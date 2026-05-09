import * as vscode from 'vscode';
import { SidebarProvider } from './ui/sidebar';

export function activate(context: vscode.ExtensionContext) {
  const provider = new SidebarProvider(context.extensionUri);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider("esp32Sidebar", provider)
  );
}
