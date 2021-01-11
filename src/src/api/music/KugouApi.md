# 酷狗API接口大全（40+个）

##  歌单分类部分

* 获取精选专区所有分类 <http://mobilecdnbj.kugou.com/api/v3/tag/list?pid=0&apiver=2&plat=0>

* 获取热门推荐分类 <http://mobilecdnbj.kugou.com/api/v3/tag/recommend?showtype=3&apiver=2&plat=0/>

* 获取分类详细信息 <http://mobilecdnbj.kugou.com/api/v3/tag/info?&id=68&apiver=2/>

* 获取分类歌单信息 <http://mobilecdnbj.kugou.com/api/v3/tag/specialList?plat=0&page=1&tagid=12&pagesize=30&ugc=1&id=68&sort=2/>

* 歌单 <http://mobilecdnbj.kugou.com/api/v3/rank/list?version=9108&plat=0&showtype=2&parentid=0&apiver=6&area_code=1&withsong=1&with_res_tag=1>

* 热门歌单 <http://mobilecdnbj.kugou.com/api/v5/special/recommend?recommend_expire=0&sign=52186982747e1404d426fa3f2a1e8ee4&plat=0&uid=0&version=9108&page=1&area_code=1&appid=1005&mid=286974383886022203545511837994020015101&_t=1545746286>


## 新歌部分

* 华语新歌 1 <http://mobilecdnbj.kugou.com/api/v3/rank/newsong?version=9108&plat=0&with_cover=1&pagesize=100&type=1&area_code=1&page=1&with_res_tag=1>

* 欧美新歌 2 <http://mobilecdnbj.kugou.com/api/v3/rank/newsong?version=9108&plat=0&with_cover=1&pagesize=100&type=2&area_code=1&page=1&with_res_tag=1>

* 日韩新歌 3 <http://mobilecdnbj.kugou.com/api/v3/rank/newsong?version=9108&plat=0&with_cover=1&pagesize=100&type=3&area_code=1&page=1&with_res_tag=1>

## 歌曲部分

* 歌曲下载链接(通过album_id) <http://trackercdnbj.kugou.com/i/v2/?album_audio_id=99121191&behavior=play&cmd=25&album_id=6960309&hash=b5a2d566c9de70422f5e5e7203054219&userid=0&pid=2&version=9108&area_code=1&appid=1005&key=407732fc325852538ca836581fe4e370&pidversion=3001&with_res_tag=1 http://trackercdnbj.kugou.com/i/v2/?album_audio_id=53214003&behavior=play&module=&mtype=0&cmd=26&token=&album_id=1952211&userid=0&hash=34c7777fffdd4fdf04e02af1f6857ca4&pid=2&vipType=65530&version=9108&area_code=1&appid=1005&mid=286974383886022203545511837994020015101&key=0c68167f46e46ed953bd489f6fdc9120&pidversion=3001&with_res_tag=1>

## 排行榜部分

* 排行榜所有分类 <http://mobilecdnbj.kugou.com/api/v3/rank/list?version=9108&plat=0&showtype=2&parentid=0&apiver=6&area_code=1&withsong=1&with_res_tag=1>

* 排行榜期数 <http://mobilecdnbj.kugou.com/api/v3/rank/vol?ranktype=2&plat=0&rankid=6666&with_res_tag=1>

* 排行榜 http://mobilecdnbj.kugou.com/api/v3/rank/song?version=9108&ranktype=2&plat=0&pagesize=100&area_code=1&page=1&volid=35050&rankid=6666&with_res_tag=1

## MV部分

* MV信息 <http://mobilecdnbj.kugou.com/api/v3/mv/detail?area_code=1&plat=0&mvhash=556bd0885e6e2daaf51abf1229a85c1a&with_res_tag=1>

* MV分类 <http://mobileservice.kugou.com/api/v5/video/recommend_channel?version=9108&plat=0&type=2>

* MV分类列表<http://mobilecdnbj.kugou.com/api/v5/video/list?version=9108&plat=0&pagesize=20&id=0&page=1&sort=4&short=0>

## 歌手部分的接口

* 热门歌手 <http://mobilecdnbj.kugou.com/api/v5/singer/list?version=9108&showtype=1&plat=0&sextype=0&sort=1&pagesize=100&type=0&page=1&musician=0>

* 飙升歌手 <http://mobilecdnbj.kugou.com/api/v5/singer/list?version=9108&showtype=1&plat=0&sextype=0&sort=2&pagesize=100&type=0&page=1&musician=0>

* 歌手信息 <http://mobilecdnbj.kugou.com/api/v3/singer/info?singerid=86747&with_res_tag=1> 

* 歌手歌曲 <http://mobilecdnbj.kugou.com/api/v3/singer/song?sorttype=2&version=9108&identity=3&plat=0&pagesize=100&singerid=86747&area_code=1&page=1&with_res_tag=1>

* 歌手专辑 <http://mobilecdnbj.kugou.com/api/v3/singer/album?version=9108&plat=0&pagesize=20&singerid=86747&category=1&area_code=1&page=1&show_album_tag=0>

* 歌手MV <http://mobilecdnbj.kugou.com/api/v3/singer/mv?singername=%E9%A3%8E%E5%B0%8F%E7%AD%9D&pagesize=20&singerid=86747&page=1&with_res_tag=1>

* 相似歌手 <http://kmr.service.kugou.com/v1/author/similar>

## 搜索部分的接口

* 搜索歌曲 <http://msearchcdn.kugou.com/api/v3/search/song?showtype=14&highlight=em&pagesize=30&tag_aggr=1&tagtype=全部&plat=0&sver=5&keyword=你好&correct=1&api_ver=1&version=9108&page=1&area_code=1&tag=1&with_res_tag=1>

* 搜索歌单 <http://mobilecdnbj.kugou.com/api/v3/search/special?version=9108&highlight=em&keyword=你好&pagesize=20&filter=0&page=1&sver=2&with_res_tag=1>

* 搜索MV <http://msearch.kugou.com/api/v3/search/mv?version=9108&highlight=em&keyword=你好&pagesize=20&page=1&sver=2&with_res_tag=1>

* 搜索专辑 <http://msearch.kugou.com/api/v3/search/album?version=9108&iscorrection=1&highlight=em&plat=0&keyword=你好&pagesize=20&page=1&sver=2&with_res_tag=1>

* 搜索K歌 <http://ksongsearch.kugou.com/ksong_search?tag=em&iscorrection=1&keyword=你好&userid=0&pagesize=20&page=1>

* 搜索歌词 <http://mobileservice.kugou.com/api/v3/lyric/search?version=9108&highlight=1&keyword=你好&plat=0&pagesize=20&area_code=1&page=1&with_res_tag=1>

* 搜索联想词 <http://msearchcdn.kugou.com/new/app/i/search.php?student=0&cmd=302&keyword=你好&with_res_tag=1>

* 热门搜索 <http://msearchcdn.kugou.com/api/v3/search/hot?count=20&plat=0&with_res_tag=1>

* 直播推荐列表 <http://bjacshow.kugou.com/show7/json/v2/cdn/index/live/list?platform=1&sign=0e2e8fb44383458f&version=9108&pageSize=50&gaodeCode=0371&channel=10&page=1&longitude=113.69&std_plat=5&latitude=34.8>

* 专辑信息 <http://mobilecdn.kugou.com/api/v3/album/song?version=9108&albumid=11790366&plat=0&pagesize=100&area_code=1&page=1&with_res_tag=1>