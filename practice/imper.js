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

Browser.prototype.addBookmark = function(bookmark) {
    this.bookmarks.push(bookmark);
    return this;
}

Browser.prototype.removeBookmark = function(bookmark) {
    if (this.bookmarks.indexOf(bookmark) !== -1) {
        this.bookmarks.splice(this.bookmarks.indexOf(bookmark), 1);
    }else{
        console.log("Bookmark not found.");
    }
}

Browser.prototype.availableExtensions = function(extension) {
    this.extensions.push(extension);
    return this;
}


const chrome = new Browser(['http://www.google.com', 'http://www.facebook.com'],
                 ['http://www.youtube.com'],
                  ['http://www.github.com'],
                   ['http://www.wakatime.com']);

const brave = new Browser(['http://www.twitter.com', 'http://www.instagram.com']);

chrome.join(brave);
console.log(chrome);