<?php


require "config.php";
require "chk.php";
if (power("alevel") != 3) {
	exit("error");
}
$settingfile = 0;
if (isset($_GET["cid"])) {
	$cid = intval($_GET["cid"]);
	$fidchannel = getchannelcache($cid);
	if ($fidchannel["ckind"] == 5) {
		$settingfile = 1;
	} elseif ($fidchannel["ckind"] == 1) {
		$settingfile = 3;
	} elseif ($fidchannel["ckind"] == 2) {
		$settingfile = 3;
	} else {
		$settingfile = 1;
	}
} else {
	$cid = 0;
	$settingfile = 1;
}
$sitetime = date("YmdHis");
$filename = $sitetime . ".json";
$encoded_filename = urlencode($filename);
$encoded_filename = str_replace("+", "%20", $encoded_filename);
header("Content-Type: application/octet-stream");
if (preg_match("/MSIE/", $_SERVER["HTTP_USER_AGENT"])) {
	header("Content-Disposition:  attachment; filename=\"" . $encoded_filename . "\"");
} elseif (preg_match("/Firefox/", $_SERVER["HTTP_USER_AGENT"])) {
	header("Content-Disposition: attachment; filename*=\"utf8" . $filename . "\"");
} else {
	header("Content-Disposition: attachment; filename=\"" . $filename . "\"");
}
$result = array();
$result["str"] = $GLOBALS["db"]->getAllRes("SELECT id,strvalue FROM `sm_str`");
$result["channel"] = $GLOBALS["db"]->getAllRes("SELECT cid,cname FROM `sm_channel`");
print_r(json_encode($result));
