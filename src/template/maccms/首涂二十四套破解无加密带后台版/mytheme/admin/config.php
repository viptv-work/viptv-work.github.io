<?php

$my = parse_ini_file(dirname(dirname(__FILE__)) . "/info.ini", true);
date_default_timezone_set("Asia/Shanghai");
ini_set("display_errors", "On");
error_reporting(E_ALL);
define("SystemRoot", dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR);
define("IncDir", SystemRoot . "inc" . DIRECTORY_SEPARATOR);
define("CacheDir", SystemRoot . "/admin/cache" . DIRECTORY_SEPARATOR);
define("SystemDir", "/");
define("SystemDomain", "");
define("AdminDir", "admin");
define("Product", "MACCMS149");
define("UploadDir", "statics");
define("TemplateDir", "template");
define("UrlRewrite", 0);
define("IndexFile", "index.php");
define("WapOpen", 0);
define("WapDomain", "");
define("DbError", 0);
define("MysqlEngine", "MyISAM");
define("TableEx", "sm_");
define("ArticleTable", TableEx . "article");
define("SiteHash", "d296bf4053251a53f56e");
define("SiteCache", 1);
define("TemplateTime", 0);
define("TemplateStart", "{");
define("TemplateEnd", "}");
define("TemplateDebug", 0);
define("IndexCache", 0);
define("AdminOpenid", 0);
define("AdminFileedit", 1);
define("version", "1.0");
$site_db = array("database" => "sqlitepdo", "dbfile" => "data/50ef74f1ea787652.db");
require "func.php";
if (!defined("NoDb") && !isset($GLOBALS["db"])) {
	$GLOBALS["db"] = new db();
	$GLOBALS["db"]->connect($site_db);
}
_stripslashes();
error_reporting(0);