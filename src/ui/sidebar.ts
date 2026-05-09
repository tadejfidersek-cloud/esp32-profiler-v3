import * as vscode from 'vscode';

export class SidebarProvider implements vscode.WebviewViewProvider {
  constructor(private readonly uri: vscode.Uri) {}

  async resolveWebviewView(view: vscode.WebviewView) {
    view.webview.options = { enableScripts: true };

    view.webview.html = `
    <html>
    <body>
      <h3>ESP32 Profiler</h3>
      <button onclick="run()">Test UI</button>
      <script>
        const vscode = acquireVsCodeApi();
        function run(){
          vscode.postMessage({cmd:"test"});
        }
      </script>
    </body>
    </html>
    `;

    view.webview.onDidReceiveMessage(msg => {
      if (msg.cmd === "test") {
        vscode.window.showInformationMessage("Extension working!");
      }
    });
  }
}
