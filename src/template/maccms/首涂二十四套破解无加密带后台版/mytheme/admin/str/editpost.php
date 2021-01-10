<?php


if (!defined("admin")) {
	exit;
}
checktoken();
$msg = "修改成功";
$GLOBALS["db"]->begin();
foreach ($_POST as $key => $value) {
	$poststr = explode("_", $key);
	if (isset($poststr[1]) && is_numeric($poststr[1])) {
		$thisid = intval($poststr[1]);
		$query = $GLOBALS["db"]->query("SELECT * FROM " . tableex("str") . " where id='{$thisid}' and inputkind>0;");
		$link = $GLOBALS["db"]->fetchone($query);
		if ($link) {
			$thisssetting = json_decode($link["ssetting"], 1);
			$cid = $link["strcid"];
			if (!power("s", $cid, $power, 4)) {
				adminmsg("", "无权限");
			}
			if ($link["ifadmin"] == 1 && !power("s", $cid, $power, 5)) {
				adminmsg("", $link["strtitle"] . "无权限");
			}
			$thischannel = adminchannel($cid);
			if (0 < $cid && $thischannel["ifshowadmin"] == 0) {
				adminmsg("", "此栏目已经禁用");
			}
			unset($thisarray);
			$thisarray = array("mkind" => $link["inputkind"], "mname" => $key, "msetting" => $link["ssetting"], "strarray" => $link["strarray"]);
			$value = inputvalue($thisarray);
			if (isset($thisssetting["regular"]) && 3 < strlen($thisssetting["regular"])) {
				if (!preg_match($thisssetting["regular"], $value)) {
					adminmsg("", $link["strtitle"] . " 输入有误", 3);
				}
			}
			if (isset($thisssetting["lenmin"]) && is_numeric($thisssetting["lenmin"]) && 0 < $thisssetting["lenmin"]) {
				if (strlen($value) < $thisssetting["lenmin"]) {
					adminmsg("", $link["strtitle"] . " 输入太短", 3);
				}
			}
			if (isset($thisssetting["lenmax"]) && is_numeric($thisssetting["lenmax"]) && 0 < $thisssetting["lenmax"]) {
				if ($thisssetting["lenmax"] < strlen($value)) {
					adminmsg("", $link["strtitle"] . " 输入太长", 3);
				}
			}
			$value = dbstr($value);
			$strname = dbstr($link["strname"]);
			$query = $GLOBALS["db"]->query("UPDATE " . tableex("str") . " SET strvalue='{$value}' WHERE strname='" . $strname . "' and strcid='{$cid}';");
			if ($query) {
				if ($link["ifbind"] == 1) {
					$query = $GLOBALS["db"]->query("UPDATE " . tableex("channel") . " SET cvalue='{$value}' WHERE cid='{$cid}'");
				}
				cachedel($strname . "_" . $cid, "str");
				run_admin_hook($cid, "stredited");
				$msg = "修改成功";
			} else {
				$msg = "修改失败";
			}
		}
	}
}
$GLOBALS["db"]->commit();
if (!isset($_SERVER["HTTP_REFERER"])) {
	$_SERVER["HTTP_REFERER"] = "";
}
$strList = $GLOBALS["db"]->all("SELECT * FROM " . tableex("str") . " where id>1 and inputkind>0;");
$outArr = array();
foreach ($strList as &$a) {
	if ($a["strcid"] == 0) {
		$outArr["site"][$a["strname"]] = $a["strvalue"];
	} else {
		$pre = getchannelcache($a["strcid"]);
		$pre = $pre["csetting"]["channel_domain"];
		if (empty($pre)) {
			continue;
		}
		$outArr[$pre][$a["strname"]] = $a["strvalue"];
	}
}
$domain = $_SERVER["DOCUMENT_ROOT"];
$md16 = substr(md5($domain), 0, 16);
$outArr = encrypt(json_encode($outArr), "E", $md16);
file_put_contents("data/" . $md16 . ".dll", $outArr);
adminmsg($_SERVER["HTTP_REFERER"], $msg, 3);
