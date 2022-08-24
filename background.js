// listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(id, info, tab) {
  if(tab.url.toLowerCase().indexOf("conforama.fr") > -1){
	chrome.pageAction.show(tab.id);
  } else if(tab.url.toLowerCase().indexOf("allobebe.fr") > -1){
	chrome.pageAction.show(tab.id);
  }  else if(tab.url.toLowerCase().indexOf("laredoute.fr") > -1){
  chrome.pageAction.show(tab.id);
  } else if(tab.url.toLowerCase().indexOf("leroymerlin.fr") > -1){
	chrome.pageAction.show(tab.id);
  } else if(tab.url.toLowerCase().indexOf("kiabi.com") > -1){
	chrome.pageAction.show(tab.id);
  } else if(tab.url.toLowerCase().indexOf("tikamoon.com") > -1){
	chrome.pageAction.show(tab.id);
  } else if(tab.url.toLowerCase().indexOf("manomano.fr") > -1){
	chrome.pageAction.show(tab.id);
  } else if(tab.url.toLowerCase().indexOf("zalando.fr") > -1){
	chrome.pageAction.show(tab.id);
  } else if(tab.url.toLowerCase().indexOf("vente-unique.com") > -1){
	chrome.pageAction.show(tab.id);
  } else if(tab.url.toLowerCase().indexOf("darty.com") > -1){
	chrome.pageAction.show(tab.id);
  } else if(tab.url.toLowerCase().indexOf("ubaldi.com") > -1){
	chrome.pageAction.show(tab.id);
  } else if(tab.url.toLowerCase().indexOf("cdiscount.com") > -1){
	chrome.pageAction.show(tab.id);
  } else if(tab.url.toLowerCase().indexOf("amazon.fr") > -1){
  chrome.pageAction.show(tab.id);
  } else if(tab.url.toLowerCase().indexOf("veepee.fr") > -1){
  chrome.pageAction.show(tab.id);
  } else {
      chrome.pageAction.show(tab.id);
  }
});