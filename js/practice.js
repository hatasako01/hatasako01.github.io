/* ワーク表示非表示 */
function clickBtn(workId){
	var currentElm = document.getElementById(workId);
	var workClsElm = document.getElementsByClassName("works");

	if(currentElm.style.display == "block"){
		currentElm.style.display = "none"
	}else{
		for(var i=0; i < workClsElm.length; i++){
			if(workClsElm[i].style.display=="block"){
				workClsElm[i].style.display="none"
			}
		}

		if (currentElm.style.display == "none" || currentElm.style.display == ""){
				currentElm.style.display = "block";
		}
	}
}

/* マウススクロールイベント */
function test(delta){
// ページ最大枚数
// スクロールスピード
var maxPage = 5;
var speed = 500;

// URLのパラメータを取得
var urlParam = location.hash;

// URLにパラメータが存在する場合
var param = 0
	if(urlParam) {
  	param = Number(urlParam.split("#")[1]);
	}

	if (delta < 0){
			// マウスホイールを下にスクロールしたときの処理を記載
			param = param + 1;

	} else {
			// マウスホイールを上にスクロールしたときの処理を記載
			param = param - 1;
	}

	// ページ最大枚数を超えるなら1ページ目に戻る
	if(maxPage < param){
		param = 1;
	}

	// 最初のページで上スクロールすると最後のページに戻る
	if(param < 1){
		param = 5;
	}

	var nextLocation = param;
	var target = document.getElementById(nextLocation);
	var position = target.offsetTop;
	$("html, body").animate({scrollTop:position}, speed, "swing");

	// urlを書き換える
	history.replaceState("","","#" + String(param));
}
