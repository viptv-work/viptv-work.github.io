<?php
define("cookiehash", substr(md5(SiteHash), 0, 6));
$common_channel = array();
$common_moudle = array(array(1, "title", "标题"), array(1, "keywords", "关键词"), array(2, "description", "描述"), array(9, "shijian", "时间"), array(7, "aorder", "排序"), array(5, "pic", "图片"), array(6, "pics", "多图"), array(4, "content", "内容"), array(1, "url", "网址"), array(26, "ifcheck", "勾选框"), array(11, "fid", "列表框"), array(10, "fids", "多选框"), array(16, "color", "颜色"));
$common_var = array(array(1, "栏目标题"), array(1, "栏目关键词"), array(2, "栏目描述"), array(5, "栏目图片"), array(4, "内容"));
$ext_arr = array("image" => array("gif", "jpg", "jpeg", "png", "bmp", "blob", "psd", "webp", "ico"), "flash" => array("swf"), "media" => array("flv", "mp3", "mp4", "wav", "wma", "wmv", "mid", "avi", "mpg", "asf", "rm", "rmvb"), "file" => array("doc", "docx", "xls", "xlsx", "ppt", "txt", "zip", "rar", "gz", "bz2", "pdf", "rar", "tar", "torrent", "apk", "ipa"));