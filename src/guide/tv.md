# 电视直播

## 央视频PHP代码
```<?php
  $channels = array(
    'cctv4k'=>'600002264',
    'cctv1'=>'600001859',
    'cctv2'=>'600001800',
    'cctv3'=>'600001801',
    'cctv4'=>'600001814',
    'cctv5'=>'600001818',
    'cctv5p'=>'600001817',
    'cctv6'=>'600001802',
    'cctv7'=>'600004092',
    'cctv8'=>'600001803',
    'cctv9'=>'600004078',
    'cctv10'=>'600001805',
    'cctv11'=>'600001806',
    'cctv12'=>'600001807',
    'cctv13'=>'600001811',
    'cctv14'=>'600001809',
    'cctv15'=>'600001815',
    'cctv17'=>'600001810',
    'zjws'=>'600002520',
    'jsws'=>'600002521',
    'szws'=>'600002481',
    'gdws'=>'600002485',
    'hljws'=>'600002498',
    'dfws'=>'600002483',
    'flws'=>'600002475'
  );
  $pid = $channels[$_GET['pid']];
  if(!$pid){
    die('need pid');
  }
  $lua_cmd =urlencode("
  function main(splash)
    splash:go('https://m.yangshipin.cn/video?type=1&pid=$pid')
    splash:wait(0.5)
    splash:mouse_click(305, 305)
    splash:wait(0.1)
    return splash:har()
  end");
  $source = curl_get_contents("http://splash_api_address/execute?lua_source=$lua_cmd");
  preg_match('/https:\/\/liveinfo(.*?)"/', $source, $output);
  $api_url = str_replace('&defn=&', '&defn=fhd&', 'https://liveinfo'.$output[1]);
  $result = curl_get_contents($api_url);
  preg_match('/"playurl":"(.*?)\?from=player/', $result, $output);
  $play_url = $output[1];
  //header("Content-Type: audio/mpegurl");
  //header("Content-Disposition: attachment; filename=playlist.m3u");
  echo "#EXTM3U\r\n#EXTINF:-1 tvg-name='".$_GET['pid']."', ".$_GET['pid']."\r\n".$play_url;

  function curl_get_contents($url)
  {
    $header = array(
    'authority: liveinfo.yangshipin.cn',
    'user-agent: Mozilla/5.0 (Windows NT 10.2; Win64; x64) AppleWebKit/888.36 (KHTML, like Gecko) Chrome/88',
    'accept: */*',
    'referer: https://m.yangshipin.cn/video?'
    );
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
  }
?>
```

## 视频WAP端网页地址

```

【CCTV】
超高清4K：https://m.yangshipin.cn/video?type=1&vid=2000266303&pid=600002264
CCTV1：https://m.yangshipin.cn/video?type=1&vid=2000210103&pid=600001859
CCTV2：https://m.yangshipin.cn/video?type=1&vid=2000203603&pid=600001800
CCTV3：https://m.yangshipin.cn/video?type=1&vid=2000203803&pid=600001801
CCTV4：https://m.yangshipin.cn/video?type=1&vid=2000204803&pid=600001814
CCTV5：https://m.yangshipin.cn/video?type=1&vid=2000205103&pid=600001818
CCTV5+：https://m.yangshipin.cn/video?type=1&vid=2000204503&pid=600001817
CCTV6：https://m.yangshipin.cn/video?type=1&vid=2000203303&pid=600001802
CCTV7：https://m.yangshipin.cn/video?type=1&vid=2000510003&pid=600004092
CCTV8：https://m.yangshipin.cn/video?type=1&vid=2000203903&pid=600001803
CCTV9：https://m.yangshipin.cn/video?type=1&vid=2000499403&pid=600004078
CCTV10：https://m.yangshipin.cn/video?type=1&vid=2000203503&pid=600001805
CCTV11：https://m.yangshipin.cn/video?type=1&vid=2000204103&pid=600001806
CCTV12：https://m.yangshipin.cn/video?type=1&vid=2000202603&pid=600001807
CCTV13：https://m.yangshipin.cn/video?type=1&vid=2000204603&pid=600001811
CCTV14：https://m.yangshipin.cn/video?type=1&vid=2000204403&pid=600001809
CCTV15：https://m.yangshipin.cn/video?type=1&vid=2000205003&pid=600001815
CCTV16：无
CCTV17：https://m.yangshipin.cn/video?type=1&vid=2000204203&pid=600001810
【卫视】
浙江卫视：https://m.yangshipin.cn/video?type=1&vid=2000295503&pid=600002520
江苏卫视：https://m.yangshipin.cn/video?type=1&vid=2000295603&pid=600002521
深圳卫视：https://m.yangshipin.cn/video?type=1&vid=2000292203&pid=600002481
广东卫视：https://m.yangshipin.cn/video?type=1&vid=2000292703&pid=600002485
黑龙江卫视：https://m.yangshipin.cn/video?type=1&vid=2000293903&pid=600002498
东方卫视：https://m.yangshipin.cn/video?type=1&vid=2000292403&pid=600002483
湖南卫视：https://m.yangshipin.cn/video?type=1&vid=2000296203&pid=600002475

```
	