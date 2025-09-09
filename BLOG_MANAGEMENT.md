# ブログ管理システム
## 数字ベースの管理
ブログ記事は3桁の数字IDで管理（001, 002, 003...）

## ディレクトリ構造
```
src/content/blog/
├── 001/index.md
├── 002/index.md
└── 003/index.md

public/images/
├── 001/cover.jpg, origami.jpg
├── 002/cover.jpg, origami.jpg
└── 003/cover.jpg, origami.jpg
```

## 新記事の追加
### 1. ディレクトリ作成
```bash
mkdir -p src/content/blog/005
mkdir -p public/images/005
```

### 2. 記事ファイル作成
`src/content/blog/005/index.md`:
```markdown
---
id: "005"
title: "記事タイトル"
author: "著者名"
date: "2024-01-01"
coverImage: "/images/005/cover.jpg"
origamiImage: "/images/005/origami.jpg"
category: "折り紙"
tags: ["タグ1", "タグ2"]
description: "記事の説明文"
---

# 本の感想
[記事内容]
```

### 3. 画像配置
- `public/images/005/cover.jpg` - 本の表紙
- `public/images/005/origami.jpg` - 折り紙作品

## URL構造
- 記事001: `/blog/001`
- 記事002: `/blog/002`

## 画像レイアウト
- **本の表紙**: 縦長、中央配置
- **折り紙作品**: 横長、中央配置
- **配置**: 縦並び

## ルール
- 折り紙の出典（作品名・作者・参考文献）を明記する  
  - 例: `鶴（伝承作品）｜参考：『〇〇折り紙大全』`  
- オリジナルでない作品は「自作」と書かない  
- 本の写真は表紙のみを基本とし、本文は写さない  
- 折り紙と本を自然に並べて撮影するのはOK  
- 書籍情報（タイトル・著者・出版社・出版年）を明記する  
- 本文の大量引用や図案のスキャンは避ける  
- 写真や文章は自分で撮影・執筆したものを使う  
