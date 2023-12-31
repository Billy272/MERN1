//using imperatives on codes 
const Browser = function(tabs,history,bookmarks,extensions) {
    this.tabs = tabs;
    this.history = history;
    this.bookmarks = bookmarks;
    this.extensions = extensions;
}

Browser.prototype.join = function() {
    this.tabs = this.tabs.concat();
    return this;
}