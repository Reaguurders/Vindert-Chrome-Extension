$(".desknav ul").append(function () {
	return $('<li><a href="#" id="vindert"><img src="' + chrome.runtime.getURL("images/logo.png") + '" /></a></li>');
});