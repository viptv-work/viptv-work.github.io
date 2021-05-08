# PHP 代理教程
 
## 掌上南昌PHP代理源码
获取所有频道信息：http://zsnc.nctv.net.cn/api/contents/list?category_id=469&page_size=20&page=1
算法有点复杂。
```php
<?php
error_reporting(0); 
$_id = $_GET['id']; // 1 2 3 4 
//http://zsnc.nctv.net.cn/api/contents/list?category_id=469&page_size=20&page=1  获取所有频道信息
//http://zsnc.nctv.net.cn/api/contents/info?id=126786  
$channel_id = array('jw22cAZ','LfqghkO','an6J0sz','22zqwYf'); // 126784  126785 126786 126787 
$_id = $channel_id [intval($_id)-1];
$md52 = md5($_id.'Tidenctvzsncapp');
$str3 = time();
$sb = '';
$sb = $sb.substr($md52,0,2);
$sb = $sb.substr($md52,4,4);
$sb = $sb.substr($md52,14,1);
$sb = $sb.substr($md52,13,1);
$sb = $sb.substr($md52,12,1);
$sb = $sb.substr($md52,25,4);
$sb = $sb.substr($md52,30,1);
$sb = $sb.substr($md52,29,1);
$sb = $sb.substr($md52,28,1);
$sb = $sb.substr($md52,27,1);
$sb = $sb.substr($md52,26,1);
$md53 = md5('tide'.$str3.$sb);
$replace = 't='.$str3.'&c='.$_id.'&a=nctvzsncapp'.'&v='.substr($md53,4,1).substr($md53,16,1).substr($md53,31,1).substr($md53,17,1).substr($md53,8,1);
$replace = base64_encode($replace);
$replace = str_replace('=','|',$replace);
preg_match_all('/[1-9]/',$replace,$trim);
 
$trim = array_unique($trim[0]); 
 $str4 = $replace;

for($i=0;$i<count($trim);$i++)
{
    $intval = intval($trim[$i]);
    if($intval % 2 == 0)
    {
         
        $string2 = substr($replace,$intval-1,1);
        if(stripos('abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ',$string2)>=0)
        {
            $indexOf = (strpos('abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ',$string2) + ($intval * $intval)) % 52;
             
 
            $str4 = replaceSomeWhere($str4, substr('abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ',$indexOf,1),$intval);
        }
     
    }
    else
    {
        $string3 = substr($replace,$intval-1,1);
        if(stripos('abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ',$string3)>=0)
        {
            $indexOf2 = (strpos('abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ',$string3) + $intval ) % 52;
            $str4 = replaceSomeWhere($str4 , substr('abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ',$indexOf2,1),$intval);
        }
     
    }
}
 
$bstrURL = 'http://mediaapi.nctv.net.cn/apiv3.2.3/m3u8.php?token='.$str4;
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $bstrURL);          
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
curl_setopt($ch, CURLOPT_USERAGENT, "User-Agent: Dalvik/2.1.0 (Linux; U; Android 6.0; 1505-A01 Build/MRA58K)");
$data = curl_exec($ch);
curl_close($ch);
$data = substr($data,3,strlen($data)-2); // 妈的。这个地方恶心到我了。无敌！！！
$obj = json_decode($data);
if($obj->status == 1)
{
    header('location:'.$obj->address);
}
else
{
    header("Refresh:0");    // 因为有个特别恶心的点，可能会出现token过期，所以让它刷新再获取。
}
 
function replaceSomeWhere($str,$str2,$i) // What the fuck!
{
    $str3 = '';
    $str4 = '';
    if ($i !=1)
    {
        $str4 = substr($str,0,$i-1);
        $str3 = substr($str,$i);
    }
    else
    {
        $str4 = '';
        $str3 = substr($str,$i);
    }
    return $str4.$str2.$str3 ;
}
 
?>
```

## 广电云长沙电视台节目源PHP代理
访问地址格式：http://自己的服务器地址/hncs.php?id=XXX
id 频道
346 长沙新闻频道
348 长沙政法频道
349 长沙女性频道
350 长沙影视频道
354 长沙磁浮电视
355 长沙地铁电视
356 长沙嘉丽购物
357 长沙移动电视
```php
<?php
$id=$_GET[id];
$url = 'https://1812501212048408.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/node-api.online/node-api/tv/channelInfo?id='.$id;
$data = file_get_contents($url);
preg_match('/playUrl":"(.*?)"/',$data,$m);
header('location:'.urldecode($m[1]));
?>
```
## 2021最新湖北电视台节目源PHP代理源码
强调下这需要要 PHP 服务器来运行代码，奈何世人只爱鱼，不爱渔。自己动手对大部分人还是一个坎。

id 频道
439 湖北美嘉购物
438 湖北垄上
437 湖北教育
436 湖北生活
435 湖北影视
434 湖北公共新闻
433 湖北综合
432 湖北经视
431 湖北卫视

代理格式举例：http://你的服务器地址/hbtv.php?id=XXX
```php
<?php
//id=439湖北美嘉购物 438湖北垄上 437湖北教育 436湖北生活 435湖北影视 434湖北公共新闻 433湖北综合 432湖北经视 431湖北卫视
//by 老伙计-laoguy.com
$id=$_GET[id];
$url = 'http://app.cjyun.org/video/player/streamlist?site_id=10008&live_type=1';
$ch=curl_init();
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
$data=curl_exec($ch);
curl_close($ch);
for($a=0;$a<100;$a++){
    if(json_decode($data)->data[$a]->id==$id){
        $json=json_decode($data)->data[$a]->play_url;
        break;
    }
}
header('location:'.$json);
?>
```
