<?php

//decode by http://www.yunlu99.com/
$agent = strtolower($_SERVER["HTTP_USER_AGENT"]);
$is_pc = strpos($agent, "windows nt") ? true : false;
$is_iphone = strpos($agent, "iphone") ? true : false;
$is_ipad = strpos($agent, "ipad") ? true : false;
$is_android = strpos($agent, "android") ? true : false;
$myini = parse_ini_file(str_replace("\\", "/", realpath(dirname(__FILE__) . "/../../")) . "/info.ini", true);
$site_config = $myini["template"] . "/" . $myini["theme"] . "/admin/config.php";
$admin_config = $myini["template"] . "/" . $myini["theme"] . "/admin/admin_config.php";
if (file_exists($site_config) && file_exists($admin_config)) {
	$mytheme = g();
}

function g()
{
	$domain = $_SERVER["DOCUMENT_ROOT"];
	$mxxx = substr(md5($domain), 0, 16);
	$fxxx = __DIR__ . "/" . $mxxx . ".dll";
	if (!file_exists($fxxx)) {
		$my = parse_ini_file(str_replace("\\", "/", realpath(dirname(__FILE__) . "/../../")) . "/info.ini", true);
		$myfile = $my["template"] . "/" . $my["theme"] . "/";
		header("Location:" . $myfile . "admin/index.php");
		exit;
	}
	$fxxx = json_decode(encrypt(file_get_contents($fxxx), "D", $mxxx), true);
	return $fxxx;
}
function encrypt($string, $operation, $key = "")
{
	$key = md5($key);
	$key_length = strlen($key);
	$string = $operation == "D" ? base64_decode($string) : substr(md5($string . $key), 0, 8) . $string;
	$string_length = strlen($string);
	$rndkey = $box = array();
	$result = "";
	$i = 0;
	while ($i <= 255) {
		$rndkey[$i] = ord($key[$i % $key_length]);
		$box[$i] = $i;
		$i++;
	}
	$j = $i = 0;
	while ($i < 256) {
		$j = ($j + $box[$i] + $rndkey[$i]) % 256;
		$tmp = $box[$i];
		$box[$i] = $box[$j];
		$box[$j] = $tmp;
		$i++;
	}
	$a = $j = $i = 0;
	while ($i < $string_length) {
		$a = ($a + 1) % 256;
		$j = ($j + $box[$a]) % 256;
		$tmp = $box[$a];
		$box[$a] = $box[$j];
		$box[$j] = $tmp;
		$result .= chr(ord($string[$i]) ^ $box[($box[$a] + $box[$j]) % 256]);
		$i++;
	}
	if ($operation == "D") {
		if (substr($result, 0, 8) == substr(md5(substr($result, 8) . $key), 0, 8)) {
			return substr($result, 8);
		}
		return "";
	}
	return str_replace("=", "", base64_encode($result));
}