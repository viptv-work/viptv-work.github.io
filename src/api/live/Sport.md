# 体育直播API接口大全

## 腾迅体育

* 获取分类 https://matchweb.sports.qq.com/matchUnion/cateColumns
* NBA  https://matchweb.sports.qq.com/matchUnion/list?today=2020-01-03&startTime=2019-11-28&endTime=2020-02-27&columnId=100000
* Team https://matchweb.sports.qq.com/team/list?columnId=100000
* 获取liveId：https://matchweb.sports.qq.com/kbs/matchDetail?mid=100002:20208709
* 获取播放地址：http://info.zb.qq.com/?stream=2&cnlid=100202900&sdtfrom=v5030&cmd=2&otype=json

## So米直播接口

* https://wap.17kanjrs.com/v2/pcv2.json
* https://www.17kanjrs.com/api/schedule/all.json
* https://wap.17kanjrs.com/api/schedule/all.json
* https://www.17kanjrs.com/v2/Football.json
* https://www.17kanjrs.com/v2/Basketball.json
* https://www.17kanjrs.com/v2/Dianjing.json
* https://www.17kanjrs.com/api/types.json
* https://www.17kanjrs.com/api/types.json

# 17直播间链接形式

* https://17.live/live/276480
* https://api-dsa.17app.co/api/v1/lives/276480
* https://api.live.bilibili.com/xlive/web-room/v1/index/getRoomPlayInfo?room_id=8018228&play_url=1&mask=1&qn=1&platform=webB8754BFE5C21BD07A034E9387CB85DBF85D66B/h000092baau.qQRm20002.ts.m3u8?ver=4&hlskey=null&sdtfrom=v5028&cost=low

# 获取网易CC的真实流媒体地址。

* https://api.cc.163.com/v1/activitylives/anchor/lives?anchor_ccid={}
* https://cc.163.com/live/channel/?channelids=' + str(channel_id)

# 获取触手直播的真实流媒体地址。

* https://chushou.tv/h5player/video/get-play-url.htm?roomId=26309517&protocols=2&callback=

# 获取抖音直播的真实流媒体地址，默认最高画质。

* https://webcast-hl.amemv.com/webcast/room/reflow/info/?room_id={}&live_id=1

# 获取企鹅电竞的真实流媒体地址。

* https://share.egame.qq.com/cgi-bin/pgg_async_fcgi?param={"key":{"module":"pgg.new_compete_qgc_srf_svr.DefObj","method":"get_compete_live_list","param":{"page_num":1,"page_size":1}}}
* https://share.egame.qq.com/cgi-bin/pgg_live_async_fcgi?param={"key":{"module":"pgg_live_read_ifc_mt_svr","method":"get_pc_live_list","param":{"appid":"lol","page_num":1,"page_size":40,"tag_id":0,"tag_id_str":""}}}**
* https://share.egame.qq.com/cgi-bin/pgg_async_fcgi?param={"key":{"module":"pgg_live_read_svr","method":"get_live_and_profile_info","param":{"anchor_id":"338533319","layout_id":"hot","index":1,"other_uid":0}}}