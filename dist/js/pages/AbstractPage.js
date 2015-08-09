define([
    'backbone',
    'views/pages/PageTitle'
], function (Backbone, PageTitleView) {

    var AbstractPage;
    AbstractPage = Backbone.View.extend({
        changeTitle: function (title) {
            document.querySelector('title').firstChild.nodeValue = title;
        },
        initialize: function () {
            var self = this;
            this.components = [];
            this.components.push(
                new PageTitleView({data: {
                    title: self.title
                }})
            );
            this.listenTo(this, 'removePage', this.removePage);
            this.changeTitle(this.title);
            $('.js-page').append(this.el);
        },
        render: function () {
            this.$el.append(this.renderComponents());
            return this;
        },
        renderComponents: function () {
            var components = this.components,
                $html = $();
            for (var i = 0; i < components.length; i++) {
                var component = components[i];
                $html = $html.add(component.render().$el);
            }
            return $html;
        },
        removePage: function () {
            var components = this.components;
            for (var i = 0; i < components.length; i++) {
                var component = components[i];
                component.remove();
            }
            this.remove();
        }
    });

    return AbstractPage;
});