# jyulpg20010717.github.io

這是一個以 GitHub Pages 部署的靜態企業官網專案，目的是展示今元由實業有限公司的瓦斯供應、分裝、驗瓶與安全服務內容。

## 專案內容

- `index.html`：網站主頁面
- `styles.css`：整體視覺與響應式設計
- `script.js`：導覽與互動效果
- `assets/`：公司與服務示意圖素材

## 本地預覽

在專案根目錄執行：

```bash
python -m http.server 8000
```

瀏覽器開啟：

```text
http://localhost:8000
```

## GitHub Pages 部署

1. 將本機專案推送到 GitHub
2. 進入 GitHub repo
3. 點選 Settings
4. 左側選單點 Pages
5. Source 選擇 Deploy from a branch
6. Branch 選 main
7. Folder 選 /root
8. 儲存後，GitHub 會自動部署

## 網站網址

這個 repo 的 GitHub Pages 網址會是：

```text
https://jyulpg20010717.github.io/
```

## Git 維護流程

### 初始化

```bash
git init
git add .
git commit -m "Initial website commit"
```

### 綁定遠端

```bash
git remote add origin https://github.com/jyulpg20010717/jyulpg20010717.github.io.git
git branch -M main
```

### 推送

```bash
git push -u origin main
```

### 每次更新

```bash
git add .
git commit -m "更新網站內容"
git push origin main
```

## 維護建議

- 修改內容請直接更新 `index.html`
- 修改版型與顏色請更新 `styles.css`
- 增加互動請更新 `script.js`
- 更換圖片請更新 `assets/` 內檔案

## 注意事項

- 這是純靜態網站，不需要資料庫
- GitHub Pages 只負責前端顯示
- 若要接收表單資料，通常需要額外串接 Formspree、Google Forms 或後端 API

## 16. 建議你現在直接執行的流程

```bash
git init
git add .
git commit -m "建立官方網站第一版"
git remote add origin https://github.com/你的帳號/你的儲存庫名稱.git
git branch -M main
git push -u origin main
```

接著在 GitHub 設定 Pages 即可。
