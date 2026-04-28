const fileInput = document.getElementById('zip-input');
const status = document.getElementById('status');

fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    status.innerText = "解凍中...";

    // JSZipを使ってファイルを読み込む
    const zip = new JSZip();
    zip.loadAsync(file).then(function(contents) {
        status.innerHTML = "<strong>zipの中身:</strong><br>";
        
        // zipの中にあるファイル名をすべてリストアップする
        Object.keys(contents.files).forEach(function(filename) {
            status.innerHTML += filename + "<br>";
        });
    }).catch(function(err) {
        status.innerText = "エラーが発生しました: " + err.message;
    });
});
