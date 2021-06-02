# PHP 代理教程
##北斗融媒(辽宁云)PHP
```php
<?php
 $id=$_GET[id];
 
 $ids = array(
    "cctv1" => "cctv1",//CCTV1
    "cctv4" => "cctv4",//CCTV4
    "cctv13" => "cctv13",//CCTV13
    "lnws" => "lntv",//辽宁卫视
    "lnty" => "typd",//辽宁体育
    "lnds" => "dspd",//辽宁都市
    "lnys" => "yspd",//辽宁影视剧
    "lnsh" => "shpd",//辽宁生活
    "lnbf" => "bfpd",//辽北方
    "lnjyqs" => "qspd",//辽宁教育青少
    "yjgw" => "yjgw",//宜家购物
    "yxjj" => "yxjj",//GTV游戏竞技
    "xdm" => "xdm",//新动漫
    );
 $time = time();
 $m3u8 = "http://bdrmtvzb.lnyun.com.cn/bdrm/".$ids[$id].".m3u8?auth_key=".$time."-0-0-".md5("/bdrm/".$ids[$id].".m3u8-".$time."-0-0-dPBxXGs7yIaSZG5m");
 header('Location:'.$m3u8);
 ?>
 ```
## 奥点（广电）云代理php源码
```php
$id=$_GET["id"];
$url="http://1812501212048408.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/node-api.online/node-api/tv/channelInfo?id=".$id."";

$result = file_get_contents($url);
$json = json_decode($result);
$playurl = $json->data->hlsUrl;

header("location: ".$playurl);
```
## 韩国KBS直播代理php源码
```php
<?php
$id=$_GET['id'];
$ids = array(
"1"=>"11",
"2"=>"12",
"3"=>"14",
"4"=>"81",
"5"=>"N91",
"6"=>"N92",
"7"=>"N93",
"8"=>"N94",
"9"=>"N96",
"10"=>"21",
"11"=>"22",
"12"=>"23",
"13"=>"24",
"14"=>"25",
"15"=>"26",
"16"=>"I92",
);
$url = "https://cfpwwwapi.kbs.co.kr/api/v1/landing/live/channel_code/".$ids[$id];
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
$re = curl_exec($ch);
curl_close($ch);
preg_match('|service_url":"(.*?)"|i',$re,$play);
header('Location:'.$play[1]);
?>
```
## txt文本源，批量替换链接，php代码
有时在网上找的代理ID，需要替换代理链接时，不停的使用鼠标粘贴复制。费时费力，在网上找了下资料。特写了php代码批量替换txt文本里的链接。
```php
<?php
//pl.php?url=111.com&url2=222.com&txt=333
//使用方法把111.com换成你123.txt里面的链接，222.com换成需要替换新的链接，333是替换完成后在你服务器生成新的txt名称
$url=$_GET['url'];
$url2=$_GET['url2'];
$txt=$_GET['txt'];
$info=file_get_contents('./123.txt');
$a = str_replace($url,$url2,$info);
echo $a;
	$c= "$a";
	$fp=fopen($txt.'.txt',"a");
	fwrite($fp,$c);
	fclose($fp);
?>
```
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
## 自建企业微信消息推送通知通道接口PHP版
```
<?php
 
$corpid = $_REQUEST['corpid']; //企业id
$corpsecret = $_REQUEST['corpsecret']; //应用secret
$agentid = $_REQUEST['agentid']; //应用id 
//如果就自己用，可以把参数写到这里。
//$corpid = '';
//$corpsecret = '';
//$agentid = ;
 
$title = $_REQUEST['title']; //消息title
$description = $_REQUEST['description']; //消息内容
$description = str_replace(PHP_EOL, '<br>', $description);
$url = $_REQUEST['url']; //消息跳转url
 
if(!$corpid or !$corpsecret or !$agentid){
    exit("canshu buquan");
}
 
//获取access_token
$response = CurlGet("https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=$corpid&corpsecret=$corpsecret","","");
 
$access_token = json_decode($response)->access_token;
if(!$access_token){
    exit("canshu cuowu");
}else{
 
    $json = '{"touser":"@all","msgtype":"textcard","agentid":"","textcard":{"title":"","description":"","url":"","btntxt":"更多"},"safe":1,"enable_id_trans":0,"enable_duplicate_check":0}';
    $json = json_decode($json);
 
    $json->agentid = $agentid;
    $json->textcard->title = $title ? $title : '无标题';
    $json->textcard->description = $description ? $description : '无内容';
    
    $json->textcard->url = $url ? $url : 'URL';
 
    echo CurlPost("https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=$access_token","", json_encode($json));
}
 
function CurlGet($url,$cookies = "",$UserAgent = "")
{
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
        curl_setopt($curl, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );
    curl_setopt($curl, CURLOPT_URL, $url);     
        curl_setopt($curl, CURLOPT_REFERER, '');
        curl_setopt($curl, CURLOPT_COOKIE, $cookies);
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
    if ($UserAgent != "") {
        curl_setopt($curl, CURLOPT_USERAGENT, $UserAgent);
    }
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec($curl);
    curl_close($curl);
    return $response;
}
 
function CurlPost($url, $cookies="", $post_data="", $headers=array(), $refer="", $UserAgent = '')
{
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
        curl_setopt($curl, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );
    curl_setopt($curl, CURLOPT_URL, $url);     
    curl_setopt($curl, CURLOPT_USERAGENT, $UserAgent);
        curl_setopt($curl, CURLOPT_COOKIE, $cookies);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    if ($refer != '') {
        curl_setopt($curl, CURLOPT_REFERER, $refer);
    }
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
    $response = curl_exec($curl);
    curl_close($curl);
    return $response;
}
```
## tvsou 节目指南 xmltv 格式的 php 源码
```
<?php
if(date_default_timezone_get() != "Asia/Shanghai") date_default_timezone_set("Asia/Shanghai");
$fp="epg_tvs.xml";//压缩版本的扩展名后加.gz
$id0=100000;//起始节目编号
 
$cid=array(
    array('42688016','湖南都市'),
    array('34d6b6de','湖南经视'),
    );
 
function compress_html($string) {
    $string = str_replace("\r", '', $string); //清除换行符
    $string = str_replace("\n", '', $string); //清除换行符
    $string = str_replace("\t", '', $string); //清除制表符
    return $string;
}
 
$dt1=date('Ymd');
$dt2=date('Ymd',time()+24*3600);
$w1=date("w");
if ($w1<'1') {$w1=7;}
$w2=$w1+1;
$url0="https://www.tvsou.com/epg/";
$chn="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE tv SYSTEM \"http://api.torrent-tv.ru/xmltv.dtd\">\n<tv generator-info-name=\"tvsou\" generator-info-url=\"www.tvsou.com/epg\">\n";
 
$nid=sizeof($cid);
 
for ($id = 1; $id <= $nid; $id++){
    $t0=array();
    $t1=array();
    $nm=array();
 
    $url=$url0.$cid[$id-1][0].'/w'.$w1;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
    $re = curl_exec($ch);
    curl_close($ch);
    $re=compress_html($re);
    preg_match('|<table class="layui-table c_table"(.*?)layui-tab-item|i',$re,$u);
    preg_match_all('|<tr>([\s\S]+?)<\/tr>|', trim($u[1]), $u);
    $u=$u[1];
    $num=sizeof($u);
    for ($i = 0; $i < $num; $i++) {
        preg_match_all('|_blank\'>(.*?)<\/a>|',$u[$i],$tr);
        $t0[]=$dt1.str_replace(':','',$tr[1][0]).'00 +0800';
        $nm[]=$tr[1][1];
    }
    $url=$url0.$cid[$id-1][0].'/w'.$w2;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
    $re = curl_exec($ch);
    curl_close($ch);
    $re=compress_html($re);
    preg_match('|<table class="layui-table c_table"(.*?)layui-tab-item|i',$re,$u);
    preg_match_all('|<tr>([\s\S]+?)<\/tr>|', trim($u[1]), $u);
    $u=$u[1];
    $num=sizeof($u);
    for ($i = 0; $i < $num; $i++) {
        preg_match_all('|_blank\'>(.*?)<\/a>|',$u[$i],$tr);
        $t0[]=$dt2.str_replace(':','',$tr[1][0]).'00 +0800';
        $nm[]=$tr[1][1];
    }               
 
    $num=sizeof($t0);
    for ($i = 1; $i < $num; $i++) {$t1[]=$t0[$i];}
    $t1[]=$dt2.'235959 +0800';
    $idd=$id0+$id;
    $chn.="<channel id=\"".$idd."\"><display-name lang=\"zh\">".$cid[$id-1][1]."</display-name></channel>\n";
    for ($i = 0; $i < $num; $i++) {
        $chn.="<programme start=\"".$t0[$i]."\" stop=\"".$t1[$i]."\" channel=\"".$idd."\">\n<title lang=\"zh\">".$nm[$i]."</title>\n<desc lang=\"zh\"> </desc>\n</programme>\n";
    }
}
$chn.="</tv>\n";
 
//写入文件。这里一次性写入，可以自己分次写入操作
file_put_contents($fp, $chn);
 
//创建压缩版本
$fn = gzopen ($fp.'.gz', 'w9');
gzwrite($fn, file_get_contents($fp));
gzclose($fn);
 
?>
```
