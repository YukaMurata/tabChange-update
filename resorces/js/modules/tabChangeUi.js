var $ = require('jquery');

class TabChangeUi {
    constructor() {
        this.$button = $('.button');

    }

    attachEvent() {
        var _this = this;
        this.$button.on('click', function (e) {
            _this.onClick(e);
        });
    }

    onClick(e) {
        var _this = this;
        this.target = $(e.currentTarget).attr('data');
        this.$button.parent().children('.button').removeClass('on');
        $(e.currentTarget).addClass('on');
        _this.getData(this.target);
    }

    getData(target) {
        $('.content').hide();
        $('.content[data="' + target + '"]').show();
    }

}
module.exports = TabChangeUi;