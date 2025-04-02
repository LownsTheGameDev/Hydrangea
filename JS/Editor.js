// Tải Monaco Editor
require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.35.0/min/vs' } });

// Tạo Monaco Editor
require(['vs/editor/editor.main'], function() {
  var editor = monaco.editor.create(document.getElementById('editor-container'), {
    value: `<!DOCTYPE html>
<html>
<head>
<title>My website</title>
</head>
<body>
</body>
</html>`,
    language: 'html',
    theme: 'vs-dark',
    automaticLayout: true,
  });

  // Chạy mã HTML khi nhấn nút
  document.getElementById('runButton').addEventListener('click', function() {
    const code = editor.getValue();
    const newWindow = window.open();
    newWindow.document.write(code);
    newWindow.document.close();
  });
});

// // Đổi theme
var darkButton = document.getElementById('dark-mode')
var lightButton = document.getElementById('light-mode')
// var Editor = document.getElementByClass('editor-container')
// function darkMode() {
//   Editor.theme = "vs-light"

// }

document.getElementById('light-mode').addEventListener('click', function() {
    monaco.editor.setTheme('vs-light');
    lightButton.style.backgroundColor = '#b593f5';
    darkButton.style.backgroundColor = '#272e3d';

});

document.getElementById('dark-mode').addEventListener('click', function() {
    monaco.editor.setTheme('vs-dark');
    darkButton.style.backgroundColor = '#b593f5';
    lightButton.style.backgroundColor = '#272e3d';

});