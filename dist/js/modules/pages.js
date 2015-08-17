define(function (require) {
    "use strict";

    var currentPage;
    function createPage(type, params) {
        try {
            removeCurrentPage();
            require(['pages/'+type], function (Page) {
                currentPage = (new Page(params)).render();
            })
        } catch (error) {
            throw new Error('Unknown Page - ' + type);
        }
    }
    function removeCurrentPage() {
        if (currentPage) {
            currentPage.trigger('removePage');
        }
    }
    return {
        create: createPage
    }
});