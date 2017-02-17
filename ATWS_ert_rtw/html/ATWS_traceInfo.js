function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Chart */
	this.urlHashMap["ATWS:7"] = "ATWS.c:19,38,251,263&ATWS.h:31,32,33,34,35,36,39,40";
	/* <S2>:227 */
	this.urlHashMap["ATWS:7:227"] = "ATWS.c:46,145";
	/* <S2>:232 */
	this.urlHashMap["ATWS:7:232"] = "ATWS.c:52,153";
	/* <S2>:230 */
	this.urlHashMap["ATWS:7:230"] = "ATWS.c:66,163";
	/* <S2>:225 */
	this.urlHashMap["ATWS:7:225"] = "ATWS.c:80,173";
	/* <S2>:266 */
	this.urlHashMap["ATWS:7:266"] = "ATWS.c:99,157,167,179,187";
	/* <S2>:310 */
	this.urlHashMap["ATWS:7:310"] = "ATWS.c:103,196";
	/* <S2>:307 */
	this.urlHashMap["ATWS:7:307"] = "ATWS.c:109,203";
	/* <S2>:273 */
	this.urlHashMap["ATWS:7:273"] = "ATWS.c:115,221";
	/* <S2>:277 */
	this.urlHashMap["ATWS:7:277"] = "ATWS.c:123,232";
	/* <S2>:297 */
	this.urlHashMap["ATWS:7:297"] = "ATWS.c:131,243";
	/* <S2>:226 */
	this.urlHashMap["ATWS:7:226"] = "ATWS.c:271";
	/* <S2>:231 */
	this.urlHashMap["ATWS:7:231"] = "msg=rtwMsg_notTraceable&block=ATWS:7:231";
	/* <S2>:228 */
	this.urlHashMap["ATWS:7:228"] = "msg=rtwMsg_notTraceable&block=ATWS:7:228";
	/* <S2>:229 */
	this.urlHashMap["ATWS:7:229"] = "ATWS.c:148";
	/* <S2>:237 */
	this.urlHashMap["ATWS:7:237"] = "ATWS.c:186";
	/* <S2>:233 */
	this.urlHashMap["ATWS:7:233"] = "msg=rtwMsg_notTraceable&block=ATWS:7:233";
	/* <S2>:309 */
	this.urlHashMap["ATWS:7:309"] = "ATWS.c:164";
	/* <S2>:283 */
	this.urlHashMap["ATWS:7:283"] = "ATWS.c:154";
	/* <S2>:284 */
	this.urlHashMap["ATWS:7:284"] = "ATWS.c:180";
	/* <S2>:242 */
	this.urlHashMap["ATWS:7:242"] = "ATWS.c:185";
	/* <S2>:279 */
	this.urlHashMap["ATWS:7:279"] = "ATWS.c:158,168";
	/* <S2>:306 */
	this.urlHashMap["ATWS:7:306"] = "ATWS.c:198";
	/* <S2>:312 */
	this.urlHashMap["ATWS:7:312"] = "ATWS.c:197";
	/* <S2>:271 */
	this.urlHashMap["ATWS:7:271"] = "ATWS.c:237";
	/* <S2>:268 */
	this.urlHashMap["ATWS:7:268"] = "ATWS.c:226";
	/* <S2>:311 */
	this.urlHashMap["ATWS:7:311"] = "ATWS.c:210";
	/* <S2>:308 */
	this.urlHashMap["ATWS:7:308"] = "ATWS.c:204";
	/* <S2>:276 */
	this.urlHashMap["ATWS:7:276"] = "ATWS.c:209";
	/* <S2>:298 */
	this.urlHashMap["ATWS:7:298"] = "ATWS.c:215";
	/* <S2>:299 */
	this.urlHashMap["ATWS:7:299"] = "ATWS.c:244";
	/* <S2>:227:1 */
	this.urlHashMap["ATWS:7:227:1"] = "ATWS.c:47";
	/* <S2>:232:1 */
	this.urlHashMap["ATWS:7:232:1"] = "ATWS.c:53,56,59,62";
	/* <S2>:230:1 */
	this.urlHashMap["ATWS:7:230:1"] = "ATWS.c:67,70,73,76";
	/* <S2>:225:1 */
	this.urlHashMap["ATWS:7:225:1"] = "ATWS.c:81,85,88";
	/* <S2>:225:3 */
	this.urlHashMap["ATWS:7:225:3"] = "ATWS.c:91,94";
	/* <S2>:310:1 */
	this.urlHashMap["ATWS:7:310:1"] = "ATWS.c:104";
	/* <S2>:307:1 */
	this.urlHashMap["ATWS:7:307:1"] = "ATWS.c:110";
	/* <S2>:273:1 */
	this.urlHashMap["ATWS:7:273:1"] = "ATWS.c:116,119";
	/* <S2>:277:1 */
	this.urlHashMap["ATWS:7:277:1"] = "ATWS.c:124,127";
	/* <S2>:297:1 */
	this.urlHashMap["ATWS:7:297:1"] = "ATWS.c:132,135";
	/* <S2>:229:1 */
	this.urlHashMap["ATWS:7:229:1"] = "ATWS.c:146,147";
	/* <S2>:228:1 */
	this.urlHashMap["ATWS:7:228:1"] = "ATWS.c:174,175";
	/* <S2>:242:1 */
	this.urlHashMap["ATWS:7:242:1"] = "ATWS.c:181,182";
	/* <S2>:276:1 */
	this.urlHashMap["ATWS:7:276:1"] = "ATWS.c:205,206";
	/* <S2>:268:1 */
	this.urlHashMap["ATWS:7:268:1"] = "ATWS.c:222,223";
	/* <S2>:271:1 */
	this.urlHashMap["ATWS:7:271:1"] = "ATWS.c:233,234";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "ATWS"};
	this.sidHashMap["ATWS"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "ATWS:1"};
	this.sidHashMap["ATWS:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "ATWS:7"};
	this.sidHashMap["ATWS:7"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<Root>/ATWS"] = {sid: "ATWS:1"};
	this.sidHashMap["ATWS:1"] = {rtwname: "<Root>/ATWS"};
	this.rtwnameHashMap["<S1>/CentralUnlockSw"] = {sid: "ATWS:21"};
	this.sidHashMap["ATWS:21"] = {rtwname: "<S1>/CentralUnlockSw"};
	this.rtwnameHashMap["<S1>/Chart"] = {sid: "ATWS:7"};
	this.sidHashMap["ATWS:7"] = {rtwname: "<S1>/Chart"};
	this.rtwnameHashMap["<S1>/HazardLiOn"] = {sid: "ATWS:23"};
	this.sidHashMap["ATWS:23"] = {rtwname: "<S1>/HazardLiOn"};
	this.rtwnameHashMap["<S2>:227"] = {sid: "ATWS:7:227"};
	this.sidHashMap["ATWS:7:227"] = {rtwname: "<S2>:227"};
	this.rtwnameHashMap["<S2>:232"] = {sid: "ATWS:7:232"};
	this.sidHashMap["ATWS:7:232"] = {rtwname: "<S2>:232"};
	this.rtwnameHashMap["<S2>:230"] = {sid: "ATWS:7:230"};
	this.sidHashMap["ATWS:7:230"] = {rtwname: "<S2>:230"};
	this.rtwnameHashMap["<S2>:225"] = {sid: "ATWS:7:225"};
	this.sidHashMap["ATWS:7:225"] = {rtwname: "<S2>:225"};
	this.rtwnameHashMap["<S2>:266"] = {sid: "ATWS:7:266"};
	this.sidHashMap["ATWS:7:266"] = {rtwname: "<S2>:266"};
	this.rtwnameHashMap["<S2>:310"] = {sid: "ATWS:7:310"};
	this.sidHashMap["ATWS:7:310"] = {rtwname: "<S2>:310"};
	this.rtwnameHashMap["<S2>:307"] = {sid: "ATWS:7:307"};
	this.sidHashMap["ATWS:7:307"] = {rtwname: "<S2>:307"};
	this.rtwnameHashMap["<S2>:273"] = {sid: "ATWS:7:273"};
	this.sidHashMap["ATWS:7:273"] = {rtwname: "<S2>:273"};
	this.rtwnameHashMap["<S2>:277"] = {sid: "ATWS:7:277"};
	this.sidHashMap["ATWS:7:277"] = {rtwname: "<S2>:277"};
	this.rtwnameHashMap["<S2>:297"] = {sid: "ATWS:7:297"};
	this.sidHashMap["ATWS:7:297"] = {rtwname: "<S2>:297"};
	this.rtwnameHashMap["<S2>:226"] = {sid: "ATWS:7:226"};
	this.sidHashMap["ATWS:7:226"] = {rtwname: "<S2>:226"};
	this.rtwnameHashMap["<S2>:231"] = {sid: "ATWS:7:231"};
	this.sidHashMap["ATWS:7:231"] = {rtwname: "<S2>:231"};
	this.rtwnameHashMap["<S2>:228"] = {sid: "ATWS:7:228"};
	this.sidHashMap["ATWS:7:228"] = {rtwname: "<S2>:228"};
	this.rtwnameHashMap["<S2>:229"] = {sid: "ATWS:7:229"};
	this.sidHashMap["ATWS:7:229"] = {rtwname: "<S2>:229"};
	this.rtwnameHashMap["<S2>:237"] = {sid: "ATWS:7:237"};
	this.sidHashMap["ATWS:7:237"] = {rtwname: "<S2>:237"};
	this.rtwnameHashMap["<S2>:233"] = {sid: "ATWS:7:233"};
	this.sidHashMap["ATWS:7:233"] = {rtwname: "<S2>:233"};
	this.rtwnameHashMap["<S2>:309"] = {sid: "ATWS:7:309"};
	this.sidHashMap["ATWS:7:309"] = {rtwname: "<S2>:309"};
	this.rtwnameHashMap["<S2>:283"] = {sid: "ATWS:7:283"};
	this.sidHashMap["ATWS:7:283"] = {rtwname: "<S2>:283"};
	this.rtwnameHashMap["<S2>:284"] = {sid: "ATWS:7:284"};
	this.sidHashMap["ATWS:7:284"] = {rtwname: "<S2>:284"};
	this.rtwnameHashMap["<S2>:242"] = {sid: "ATWS:7:242"};
	this.sidHashMap["ATWS:7:242"] = {rtwname: "<S2>:242"};
	this.rtwnameHashMap["<S2>:279"] = {sid: "ATWS:7:279"};
	this.sidHashMap["ATWS:7:279"] = {rtwname: "<S2>:279"};
	this.rtwnameHashMap["<S2>:306"] = {sid: "ATWS:7:306"};
	this.sidHashMap["ATWS:7:306"] = {rtwname: "<S2>:306"};
	this.rtwnameHashMap["<S2>:312"] = {sid: "ATWS:7:312"};
	this.sidHashMap["ATWS:7:312"] = {rtwname: "<S2>:312"};
	this.rtwnameHashMap["<S2>:271"] = {sid: "ATWS:7:271"};
	this.sidHashMap["ATWS:7:271"] = {rtwname: "<S2>:271"};
	this.rtwnameHashMap["<S2>:268"] = {sid: "ATWS:7:268"};
	this.sidHashMap["ATWS:7:268"] = {rtwname: "<S2>:268"};
	this.rtwnameHashMap["<S2>:311"] = {sid: "ATWS:7:311"};
	this.sidHashMap["ATWS:7:311"] = {rtwname: "<S2>:311"};
	this.rtwnameHashMap["<S2>:308"] = {sid: "ATWS:7:308"};
	this.sidHashMap["ATWS:7:308"] = {rtwname: "<S2>:308"};
	this.rtwnameHashMap["<S2>:276"] = {sid: "ATWS:7:276"};
	this.sidHashMap["ATWS:7:276"] = {rtwname: "<S2>:276"};
	this.rtwnameHashMap["<S2>:298"] = {sid: "ATWS:7:298"};
	this.sidHashMap["ATWS:7:298"] = {rtwname: "<S2>:298"};
	this.rtwnameHashMap["<S2>:299"] = {sid: "ATWS:7:299"};
	this.sidHashMap["ATWS:7:299"] = {rtwname: "<S2>:299"};
	this.rtwnameHashMap["<S2>:227:1"] = {sid: "ATWS:7:227:1"};
	this.sidHashMap["ATWS:7:227:1"] = {rtwname: "<S2>:227:1"};
	this.rtwnameHashMap["<S2>:232:1"] = {sid: "ATWS:7:232:1"};
	this.sidHashMap["ATWS:7:232:1"] = {rtwname: "<S2>:232:1"};
	this.rtwnameHashMap["<S2>:230:1"] = {sid: "ATWS:7:230:1"};
	this.sidHashMap["ATWS:7:230:1"] = {rtwname: "<S2>:230:1"};
	this.rtwnameHashMap["<S2>:225:1"] = {sid: "ATWS:7:225:1"};
	this.sidHashMap["ATWS:7:225:1"] = {rtwname: "<S2>:225:1"};
	this.rtwnameHashMap["<S2>:225:3"] = {sid: "ATWS:7:225:3"};
	this.sidHashMap["ATWS:7:225:3"] = {rtwname: "<S2>:225:3"};
	this.rtwnameHashMap["<S2>:310:1"] = {sid: "ATWS:7:310:1"};
	this.sidHashMap["ATWS:7:310:1"] = {rtwname: "<S2>:310:1"};
	this.rtwnameHashMap["<S2>:307:1"] = {sid: "ATWS:7:307:1"};
	this.sidHashMap["ATWS:7:307:1"] = {rtwname: "<S2>:307:1"};
	this.rtwnameHashMap["<S2>:273:1"] = {sid: "ATWS:7:273:1"};
	this.sidHashMap["ATWS:7:273:1"] = {rtwname: "<S2>:273:1"};
	this.rtwnameHashMap["<S2>:277:1"] = {sid: "ATWS:7:277:1"};
	this.sidHashMap["ATWS:7:277:1"] = {rtwname: "<S2>:277:1"};
	this.rtwnameHashMap["<S2>:297:1"] = {sid: "ATWS:7:297:1"};
	this.sidHashMap["ATWS:7:297:1"] = {rtwname: "<S2>:297:1"};
	this.rtwnameHashMap["<S2>:229:1"] = {sid: "ATWS:7:229:1"};
	this.sidHashMap["ATWS:7:229:1"] = {rtwname: "<S2>:229:1"};
	this.rtwnameHashMap["<S2>:228:1"] = {sid: "ATWS:7:228:1"};
	this.sidHashMap["ATWS:7:228:1"] = {rtwname: "<S2>:228:1"};
	this.rtwnameHashMap["<S2>:242:1"] = {sid: "ATWS:7:242:1"};
	this.sidHashMap["ATWS:7:242:1"] = {rtwname: "<S2>:242:1"};
	this.rtwnameHashMap["<S2>:276:1"] = {sid: "ATWS:7:276:1"};
	this.sidHashMap["ATWS:7:276:1"] = {rtwname: "<S2>:276:1"};
	this.rtwnameHashMap["<S2>:268:1"] = {sid: "ATWS:7:268:1"};
	this.sidHashMap["ATWS:7:268:1"] = {rtwname: "<S2>:268:1"};
	this.rtwnameHashMap["<S2>:271:1"] = {sid: "ATWS:7:271:1"};
	this.sidHashMap["ATWS:7:271:1"] = {rtwname: "<S2>:271:1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
