var $ = require('jquery');

class TabChange {
    constructor() {
        this.target = $(this.hash);
        this.newTab = this.target.attr('id');
        this.openTab = $('.content:visible').attr("id");
    }

    contentChange() {
        if (this.newTab !== this.openTab) {
            return true;
        }
    }
}

module.exports = TabChange;