# CSS 语法相关

## 滚动条样式

```css
/* 滚动条 */
::-webkit-scrollbar {
  /* 纵向 */
  width: 8px;
  /* 横向 */
  height: 8px;
  background-color: #ededed;
}
/* 滚动条上的按钮(上下箭头) */
::-webkit-scrollbar-button {
  display: none;
}
/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background-color: #ededed;
}
/* 滚动条轨道，没有滑块 */
::-webkit-scrollbar-track-piece {
  background-color: #ededed;
}
/* 垂直滚动条和水平滚动条交汇的部分 */
::-webkit-scrollbar-corner {
  background-color: #ededed;
}
/* 滚动条上的滚动滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #d6d6d6;
}
/* 右下角拖动块 */
::-webkit-resizer {
  display: none;
}
```
# 常用 SCSS 宏

## 显示省略号

```scss
// 单行省略号
@mixin ellipsis() {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// 多行省略号
@mixin ellipsis-multi($line) {
  display: -webkit-box;
  -webkit-line-clamp: $line;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## 滚动

```scss
@mixin scroll($type: 'y') {
  @if $type == 'x' {
    overflow-x: auto;
    overflow-y: hidden;
  } @else if $type == 'y' {
    overflow-x: hidden;
    overflow-y: auto;
  } @else {
    overflow: auto;
  }
  -webkit-overflow-scrolling: touch;
}
```
# CSS 奇淫技巧

## 识别 HTML 字符中的 \n

> `white-space` CSS 属性是用来设置如何处理元素中的 空白

```css
white-space: pre;
```

|    属性值    | 换行符 | 空格和制表符 | 文字换行 |
| :----------: | :----: | :----------: | :------: |
|    normal    |  合并  |     合并     |   换行   |
|    nowrap    |  合并  |     合并     |  不换行  |
|     pre      |  保留  |     保留     |  不换行  |
|   pre-wrap   |  保留  |     保留     |   换行   |
|   pre-line   |  保留  |     合并     |   换行   |
| break-spaces |  保留  |     保留     |   换行   |
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)