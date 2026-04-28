zip.loadAsync(file).then(function(contents) {
    let output = "<strong>スキャン結果:</strong><br><ul style='text-align:left;'>";
    
    // filesオブジェクトの中身をすべてループで回す
    Object.keys(contents.files).forEach(function(filename) {
        const fileData = contents.files[filename];
        
        // フォルダかファイルかを判定
        if (fileData.dir) {
            output += `<li style="color: blue;">📁 ${filename} (フォルダ)</li>`;
        } else {
            // ファイルの場合はサイズも表示
            const size = (fileData._data.uncompressedSize / 1024).toFixed(2);
            output += `<li>📄 ${filename} (${size} KB)</li>`;
        }
    });
    
    output += "</ul>";
    status.innerHTML = output;
}).catch(function(err) {
    status.innerText = "エラー: " + err.message;
});
