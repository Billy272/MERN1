//using imperatives on codes 
const Browser = function(tabs,history,bookmarks,extensions) {
    this.tabs = tabs;
    this.history = history;
    this.bookmarks = bookmarks;
    this.extensions = extensions;
}

Browser.prototype.join = function(otherBrowser) {
    this.tabs = this.tabs.concat(otherBrowser.tabs);
    this.history = this.history.concat(otherBrowser.history);
    this.bookmarks = this.bookmarks.concat(otherBrowser.bookmarks);
    this.extensions = this.extensions.concat(otherBrowser.extensions);
    return this;
}

Browser.prototype.tabOpen = function(tab) {
    this.tabs.push('http://www.' + tab + '.com');
    return this;
}

Browser.prototype.tabClose = function(tab) {
    if (this.tabs.indexOf(tab) !== -1) {
        this.tabs.splice(this.tabs.indexOf(tab), 1);
    } else {
        console.log('Tab not found');
    }
}

Browser.prototype.openHistory = function(history) {
    this.history.push(history);
    return this;
}

Browser.prototype.closeHistory = function(history) {
    if (this.history.indexOf(history)!== -1) {
        this.history.splice(this.history.indexOf(history), 1)
    }else{
        console.log("History not found.");
    }
}

