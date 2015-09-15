define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["AboutPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "\r\n    <div class=\"col-md-8 col-md-offset-2\">\r\n        <h1>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n    </div>\r\n    <div class=\"col-md-8 col-md-offset-2\">\r\n        <img src=\"http://placehold.it/750x250\" alt=\"about\">\r\n        <p class=\"lead text-justify\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur possimus voluptatum! Aut\r\n            cumque distinctio nam reiciendis, sint ut voluptates. Commodi corporis dolores ducimus eius incidunt magni\r\n            maiores mollitia, nam natus nesciunt numquam officiis placeat provident qui vitae? Aliquam aliquid amet\r\n            animi asperiores beatae culpa dolores earum, eius eligendi esse facere fugit, hic id ipsa ipsam iusto labore\r\n            laudantium neque nostrum optio perferendis quas quidem rem, similique sunt tempore temporibus unde voluptate\r\n            voluptatem voluptatum. Asperiores enim laboriosam mollitia repellat rerum suscipit vitae? Aliquid assumenda\r\n            at autem, beatae dolore doloremque doloribus ducimus eaque esse est eum eveniet excepturi facere facilis\r\n            fugiat harum hic labore laudantium molestiae nesciunt nobis omnis perspiciatis quam rem repellat repellendus\r\n            tempore totam ullam, unde velit voluptas voluptate voluptatem voluptates. Architecto, dignissimos\r\n            exercitationem quam quia rem repellendus. Dignissimos eius eos esse incidunt nemo nobis qui reiciendis.\r\n            Corporis delectus dicta fuga illo illum itaque laboriosam molestias quos vitae. Aliquid corporis deserunt\r\n            doloribus dolorum ducimus excepturi exercitationem nisi, nobis numquam odio placeat possimus provident quia\r\n            rerum sit unde ut voluptatem! Consequatur dignissimos earum id magni odio ratione? Ab accusamus accusantium\r\n            adipisci amet aperiam blanditiis consectetur consequuntur delectus dolores doloribus dolorum ea earum\r\n            eligendi esse exercitationem illum impedit incidunt iste mollitia nisi, optio, perspiciatis placeat\r\n            provident quasi quia quo reiciendis repellat sapiente sint suscipit ut vel, veritatis voluptatum. Aliquid\r\n            consectetur consequatur consequuntur cumque deserunt dignissimos dolore earum eius eos esse expedita\r\n            explicabo facilis illum ipsa iste magnam magni natus nobis odio possimus praesentium quaerat quas quasi\r\n            quidem recusandae, reprehenderit sapiente tempora tempore veritatis voluptas? Dolor, facere, quae. Deserunt,\r\n            natus nisi nobis porro praesentium quam voluptas! A ab accusamus ad consequatur culpa deserunt ducimus ea\r\n            earum esse et eveniet ex, facilis fuga fugit ipsam, itaque iure libero minus molestiae nam nisi non odit\r\n            pariatur perferendis perspiciatis placeat soluta tempora unde vero voluptate? Accusantium amet blanditiis\r\n            commodi corporis dicta dignissimos eligendi iste molestiae nesciunt nostrum, obcaecati, officia officiis\r\n            placeat praesentium quaerat quasi qui quidem quis repudiandae rerum tenetur ullam vel veniam vero\r\n            voluptatem. Accusantium enim fugit hic illo impedit porro praesentium quaerat quibusdam totam. Aspernatur\r\n            beatae blanditiis cupiditate deserunt eligendi error eum, mollitia quasi quo ratione, rerum sed. Adipisci\r\n            asperiores aut consequatur temporibus unde! </p>\r\n    </div>\r\n";
},"useData":true});

this["JST"]["AddButton"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button type=\"button\" class=\"btn btn-primary js-add-button\">Add</button>";
},"useData":true});

this["JST"]["AddButtonSettingsPopup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close js-close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\r\n                    aria-hidden=\"true\"><i class=\"fa fa-times\"></i></span></button>\r\n            <h4 class=\"modal-title\">Input new Button</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form class=\"add-item-form\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"inputName\" class=\"control-label\">Name</label>\r\n                    <input type=\"text\" class=\"form-control dateInput\" id=\"inputName\" placeholder=\"Name\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"inputSum\" class=\" control-label\">Sum</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"inputSum\" placeholder=\"Sum\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"inputCategory\" class=\" control-label\">Category</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"inputCategory\" placeholder=\"Category\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"inputSource\" class=\"control-label\">Source</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"inputSource\" placeholder=\"Source\">\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default js-close\" data-dismiss=\"modal\">Cancel</button>\r\n            <button type=\"submit\" class=\"btn btn-primary js-add-item\">Add Item</button>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["JST"]["AddCategoryPopup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"modal fade\" id=\"modalCategory\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">Add category</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form class=\"form-inline\">\r\n          <div class=\"form-group\">\r\n            <label for=\"inputName\">Name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputName\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" id=\"btnCreate\" class=\"btn btn-primary\">Create</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n";
},"useData":true});

this["JST"]["AddItemPopup"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "                        <option>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close js-close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\r\n                    aria-hidden=\"true\"><i class=\"fa fa-times\"></i></span></button>\r\n            <h4 class=\"modal-title\">Add transaction</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form class=\"add-item-form\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"inputDate\" class=\"control-label\">Date</label>\r\n                    <input type=\"text\" class=\"form-control dateInput\" id=\"inputDate\" placeholder=\"\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"inputSum\" class=\" control-label\">Sum</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"inputSum\" placeholder=\"Sum\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"inputCategory\" class=\" control-label\">Category</label>\r\n                    <select class=\"form-control categoryType\" id=\"inputCategory\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"inputSource\" class=\"control-label\">Source</label>\r\n                    <select class=\"form-control categoryType\" id=\"inputSource\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.sources : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </select>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default js-close\" data-dismiss=\"modal\">Cancel</button>\r\n            <button type=\"submit\" class=\"btn btn-primary js-add-item\">Add Item</button>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["JST"]["AddSourcePopup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"modal fade\" id=\"modalSource\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">Add source</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form class=\"form-inline\">\r\n          <div class=\"form-group\">\r\n            <label for=\"inputName\">Name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputName\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" id=\"btnCreate\" class=\"btn btn-primary\">Create</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n";
},"useData":true});

this["JST"]["Alert"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"alert fixed\" role=\"alert\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    <p><i class=\"glyphicon glyphicon-"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\"></i> "
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div>";
},"useData":true});

this["JST"]["Balance"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-5\">\r\n        <form class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n                <label>Balance:</label> <span class=\"label label-success\">"
    + this.escapeExpression(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"count","hash":{},"data":data}) : helper)))
    + "</span>\r\n            </div>\r\n        </form>\r\n    </div>\r\n";
},"useData":true});

this["JST"]["Button"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<span>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " -  "
    + alias3(((helper = (helper = helpers.sum || (depth0 != null ? depth0.sum : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sum","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});

this["JST"]["ButtonSettings"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n<td>"
    + alias3(((helper = (helper = helpers.sum || (depth0 != null ? depth0.sum : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sum","hash":{},"data":data}) : helper)))
    + "</td>\r\n<td>"
    + alias3(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"category","hash":{},"data":data}) : helper)))
    + "</td>\r\n<td>"
    + alias3(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"source","hash":{},"data":data}) : helper)))
    + "</td>\r\n<td><i class=\"fa fa-trash-o\"></i></td>";
},"useData":true});

this["JST"]["Buttons"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form class=\"form-inline\">\r\n    <div class=\"col-md-1\">\r\n        <div id=\"add-button-container\">\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-11\">\r\n        <div class=\"form-group\">\r\n            <label>Favorite:</label>\r\n            <div class=\"btn-group\" id=\"buttons-container\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>";
},"useData":true});

this["JST"]["ButtonsSettings"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"panel panel-default\">\r\n    <table class=\"table table-hover table-bordered\">\r\n        <thead>\r\n        <tr class=\"active\">\r\n            <th>Name</th>\r\n            <th>Sum</th>\r\n            <th>Category</th>\r\n            <th>Source</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody id=\"buttons-settings-container\">\r\n\r\n        </tbody>\r\n    </table>\r\n</div>";
},"useData":true});

this["JST"]["Category"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<td>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</td>\r\n<td><i class=\"fa fa-trash-o\"></i></td>";
},"useData":true});

this["JST"]["Chart"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"col-md-12\">\r\n    <div id=\"chart\"></div>\r\n</div>";
},"useData":true});

this["JST"]["DashboardPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-12\">\r\n    <h3>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\r\n    <hr>\r\n</div>\r\n";
},"useData":true});

this["JST"]["ForgotPasswordPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-8 col-md-offset-2\">\r\n    <form class=\"form-horizontal\">\r\n        <h3>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\r\n        <hr>\r\n        <div class=\"form-group\">\r\n            <label for=\"inputEmail\" class=\"col-sm-2 control-label\">Email*:</label>\r\n\r\n            <div class=\"col-sm-6\">\r\n                <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\r\n            </div>\r\n            <div class=\"form-message-box\"></div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-12 text-center\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Restore</button>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n    </form>\r\n</div>";
},"useData":true});

this["JST"]["HelpPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-8 col-md-offset-2\">\r\n    <h1>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n</div>\r\n<div class=\"col-md-8 col-md-offset-2\">\r\n    <blockquote>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci atque autem consequuntur culpa\r\n        dolor, dolores, earum exercitationem fuga illo impedit, iure laudantium minus modi mollitia nam\r\n        obcaecati perferendis placeat quaerat quam quas quia quis rem saepe similique tempore ullam vel. At\r\n        cupiditate doloribus, facere fugiat maiores quas rem voluptas! Ab officia perspiciatis ratione\r\n        voluptate? Accusantium blanditiis facilis libero quidem voluptate. Alias, autem consequatur doloremque\r\n        eaque enim error facilis illum in minima quia, quod ratione reiciendis reprehenderit unde ut! Accusamus\r\n        animi at, cum cupiditate dicta dolor doloribus eius exercitationem explicabo impedit, incidunt, neque\r\n        quo repellendus sunt unde. Aliquam consectetur consequatur culpa cum dolore, earum exercitationem\r\n        explicabo nihil nobis nostrum odio pariatur perferendis quas quibusdam quis saepe sint ullam voluptatem!\r\n        Assumenda autem beatae dolores ex ipsum laboriosam nesciunt perspiciatis quam reprehenderit totam!\r\n        Accusamus architecto commodi cum deleniti distinctio doloremque doloribus eos error esse ex fugit\r\n        incidunt iure laborum magnam minima minus nobis odio officia omnis perspiciatis placeat porro, quibusdam\r\n        quo, quod rerum sapiente sunt velit. Aliquid architecto consequuntur culpa deleniti dignissimos dolore\r\n        explicabo, itaque laborum minus nisi placeat voluptates. Accusamus architecto, consectetur doloribus\r\n        dolorum eaque, earum eius expedita fugiat in minus necessitatibus nesciunt odit porro, quaerat quis\r\n        quisquam ratione unde vero!\r\n    </blockquote>\r\n    <blockquote>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci atque autem consequuntur culpa\r\n        dolor, dolores, earum exercitationem fuga illo impedit, iure laudantium minus modi mollitia nam\r\n        obcaecati perferendis placeat quaerat quam quas quia quis rem saepe similique tempore ullam vel. At\r\n        cupiditate doloribus, facere fugiat maiores quas rem voluptas! Ab officia perspiciatis ratione\r\n        voluptate? Accusantium blanditiis facilis libero quidem voluptate. Alias, autem consequatur doloremque\r\n        eaque enim error facilis illum in minima quia, quod ratione reiciendis reprehenderit unde ut! Accusamus\r\n        animi at, cum cupiditate dicta dolor doloribus eius exercitationem explicabo impedit, incidunt, neque\r\n        quo repellendus sunt unde. Aliquam consectetur consequatur culpa cum dolore, earum exercitationem\r\n        explicabo nihil nobis nostrum odio pariatur perferendis quas quibusdam quis saepe sint ullam voluptatem!\r\n        Assumenda autem beatae dolores ex ipsum laboriosam nesciunt perspiciatis quam reprehenderit totam!\r\n        Accusamus architecto commodi cum deleniti distinctio doloremque doloribus eos error esse ex fugit\r\n        incidunt iure laborum magnam minima minus nobis odio officia omnis perspiciatis placeat porro, quibusdam\r\n        quo, quod rerum sapiente sunt velit. Aliquid architecto consequuntur culpa deleniti dignissimos dolore\r\n        explicabo, itaque laborum minus nisi placeat voluptates. Accusamus architecto, consectetur doloribus\r\n        dolorum eaque, earum eius expedita fugiat in minus necessitatibus nesciunt odit porro, quaerat quis\r\n        quisquam ratione unde vero!\r\n    </blockquote>\r\n</div>";
},"useData":true});

this["JST"]["HomePage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-12\">\r\n    <h3>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\r\n    <hr>\r\n</div>\r\n<div class=\"col-md-4 text-center\">\r\n    <img src=\"http://placehold.it/250x250\" alt=\"img\">\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Atque impedit ipsam libero nobis rem tempore? Debitis deserunt\r\n        dicta eius nam officiis quaerat quod sapiente. Debitis\r\n        deleniti eius fugiat id inventore nam necessitatibus, nisi\r\n        omnis provident quas quasi quidem rerum sunt temporibus voluptate!\r\n        Aspernatur eos molestias quasi sunt? Doloribus earum eius eum molestiae\r\n        odio quasi, quibusdam repellat repudiandae velit veritatis. Adipisci\r\n        asperiores deleniti distinctio eligendi iste iure laudantium nihil odit,\r\n        quaerat reprehenderit sequi vel, voluptas. Animi dicta dignissimos dolorem fugiat,\r\n        fugit, ipsum magni minus non omnis perspiciatis praesentium\r\n        recusandae reprehenderit unde? Ab consequatur consequuntur,\r\n        ducimus error et expedita libero molestias mollitia, obcaecati\r\n        recusandae veniam vero! Accusantium ad aliquam aspernatur assumenda\r\n        aut autem consequuntur corporis, cum delectus, deserunt distinctio dolorem\r\n        dolores ducimus eligendi excepturi facere facilis harum id itaque iusto nam\r\n        nisi nulla, odio omnis quasi qui quis quisquam sequi vero voluptatum? Accusamus\r\n        distinctio magnam rem sint voluptas? Maiores nisi provident rerum. Lorem ipsum dolor\r\n        sit amet, consectetur adipisicing elit. Atque impedit ipsam libero nobis\r\n        rem tempore? Debitis deserunt dicta eius nam officiis quaerat quod sapiente.</p>\r\n</div>\r\n<div class=\"col-md-4 text-center\">\r\n    <img src=\"http://placehold.it/250x250\" alt=\"img\">\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Atque impedit ipsam libero nobis rem tempore? Debitis deserunt\r\n        dicta eius nam officiis quaerat quod sapiente. Debitis\r\n        deleniti eius fugiat id inventore nam necessitatibus, nisi\r\n        omnis provident quas quasi quidem rerum sunt temporibus voluptate!\r\n        Aspernatur eos molestias quasi sunt? Doloribus earum eius eum molestiae\r\n        odio quasi, quibusdam repellat repudiandae velit veritatis. Adipisci\r\n        asperiores deleniti distinctio eligendi iste iure laudantium nihil odit,\r\n        quaerat reprehenderit sequi vel, voluptas. Animi dicta dignissimos dolorem fugiat,\r\n        fugit, ipsum magni minus non omnis perspiciatis praesentium\r\n        recusandae reprehenderit unde? Ab consequatur consequuntur,\r\n        ducimus error et expedita libero molestias mollitia, obcaecati\r\n        recusandae veniam vero! Accusantium ad aliquam aspernatur assumenda\r\n        aut autem consequuntur corporis, cum delectus, deserunt distinctio dolorem\r\n        dolores ducimus eligendi excepturi facere facilis harum id itaque iusto nam\r\n        nisi nulla, odio omnis quasi qui quis quisquam sequi vero voluptatum? Accusamus\r\n        distinctio magnam rem sint voluptas? Maiores nisi provident rerum. Lorem ipsum dolor\r\n        sit amet, consectetur adipisicing elit. Atque impedit ipsam libero nobis\r\n        rem tempore? Debitis deserunt dicta eius nam officiis quaerat quod sapiente.</p>\r\n</div>\r\n<div class=\"col-md-4 text-center\">\r\n    <img src=\"http://placehold.it/250x250\" alt=\"img\">\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n        Atque impedit ipsam libero nobis rem tempore? Debitis deserunt\r\n        dicta eius nam officiis quaerat quod sapiente. Debitis\r\n        deleniti eius fugiat id inventore nam necessitatibus, nisi\r\n        omnis provident quas quasi quidem rerum sunt temporibus voluptate!\r\n        Aspernatur eos molestias quasi sunt? Doloribus earum eius eum molestiae\r\n        odio quasi, quibusdam repellat repudiandae velit veritatis. Adipisci\r\n        asperiores deleniti distinctio eligendi iste iure laudantium nihil odit,\r\n        quaerat reprehenderit sequi vel, voluptas. Animi dicta dignissimos dolorem fugiat,\r\n        fugit, ipsum magni minus non omnis perspiciatis praesentium\r\n        recusandae reprehenderit unde? Ab consequatur consequuntur,\r\n        ducimus error et expedita libero molestias mollitia, obcaecati\r\n        recusandae veniam vero! Accusantium ad aliquam aspernatur assumenda\r\n        aut autem consequuntur corporis, cum delectus, deserunt distinctio dolorem\r\n        dolores ducimus eligendi excepturi facere facilis harum id itaque iusto nam\r\n        nisi nulla, odio omnis quasi qui quis quisquam sequi vero voluptatum? Accusamus\r\n        distinctio magnam rem sint voluptas? Maiores nisi provident rerum. Lorem ipsum dolor\r\n        sit amet, consectetur adipisicing elit. Atque impedit ipsam libero nobis\r\n        rem tempore? Debitis deserunt dicta eius nam officiis quaerat quod sapiente.</p>\r\n</div>";
},"useData":true});

this["JST"]["Item"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)));
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, buffer = 
  "<td>";
  stack1 = ((helper = (helper = helpers.convertTime || (depth0 != null ? depth0.convertTime : depth0)) != null ? helper : alias1),(options={"name":"convertTime","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.convertTime) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\r\n<td>"
    + alias3(((helper = (helper = helpers.sum || (depth0 != null ? depth0.sum : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sum","hash":{},"data":data}) : helper)))
    + "</td>\r\n<td>"
    + alias3(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"category","hash":{},"data":data}) : helper)))
    + "</td>\r\n<td>"
    + alias3(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"source","hash":{},"data":data}) : helper)))
    + "</td>\r\n<td><i class=\"fa fa-trash-o\"></i></td>";
},"useData":true});

this["JST"]["ItemStat"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)));
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, buffer = 
  "<td>";
  stack1 = ((helper = (helper = helpers.convertTime || (depth0 != null ? depth0.convertTime : depth0)) != null ? helper : alias1),(options={"name":"convertTime","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.convertTime) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\r\n<td>"
    + alias3(((helper = (helper = helpers.sum || (depth0 != null ? depth0.sum : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sum","hash":{},"data":data}) : helper)))
    + "</td>\r\n<td>"
    + alias3(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"category","hash":{},"data":data}) : helper)))
    + "</td>\r\n<td>"
    + alias3(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"source","hash":{},"data":data}) : helper)))
    + "</td>\r\n<td><i class=\"fa fa-pencil-square-o\"></i> <i class=\"fa fa-trash-o\"></i></td>";
},"useData":true});

this["JST"]["Items"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"panel panel-default\">\r\n    <table class=\"table table-hover table-bordered\">\r\n        <thead>\r\n        <tr class=\"active\">\r\n            <th>Date</th>\r\n            <th>Sum</th>\r\n            <th>Category</th>\r\n            <th>Source</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody class=\"items-container\">\r\n\r\n        </tbody>\r\n    </table>\r\n</div>";
},"useData":true});

this["JST"]["LoginPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-8 col-md-offset-2\">\r\n    <form class=\"form-horizontal\">\r\n        <h3>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\r\n        <hr>\r\n        <div class=\"form-group\">\r\n            <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\r\n\r\n                <div class=\"form-message-box email-error\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\r\n\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\r\n\r\n                <div class=\"form-message-box password-error\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                        <input type=\"checkbox\" checked> Remember me\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\" class=\"btn btn-primary pull-right\">Sign in</button>\r\n                <div class=\"form-message-box login-error\"></div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"col-md-8 col-md-offset-2 login-links\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10 text-right\">\r\n            <a href=\"#forgotpass\">Forgot your password?</a>\r\n        </div>\r\n        <div class=\"col-md-2 text-right\">\r\n            <a href=\"#registration\">Registration</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"col-md-8 col-md-offset-2 social-login\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\">\r\n            <p>Social buttons:</p>\r\n        </div>\r\n        <div class=\"col-sm-10\">\r\n            <ul class=\"list-inline\">\r\n                <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n                <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                <li><a href=\"#\"><i class=\"fa fa-github\"></i></a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["JST"]["NotFoundPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-8 col-md-offset-2\">\r\n    <h1>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n</div>";
},"useData":true});

this["JST"]["RegistrationPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-8 col-md-offset-2\">\r\n    <form class=\"form-horizontal\">\r\n        <h3>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\r\n        <hr>\r\n        <div class=\"form-group\">\r\n            <label for=\"inputEmail\" class=\"col-sm-2 control-label\">Email*:</label>\r\n\r\n            <div class=\"col-sm-6\">\r\n                <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\r\n            </div>\r\n            <div class=\"form-message-box\"></div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"inputName\" class=\"col-sm-2 control-label\">Name:</label>\r\n\r\n            <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Name\">\r\n            </div>\r\n            <div class=\"form-message-box\"></div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Password:</label>\r\n\r\n            <div class=\"col-sm-6\">\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\r\n            </div>\r\n            <div class=\"form-message-box\"></div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"inputDateBirth\" class=\"col-sm-2 control-label\">Date of birth:</label>\r\n\r\n            <div class=\"col-sm-4\">\r\n                <input type=\"date\" class=\"form-control\" id=\"inputDateBirth\" placeholder=\"Password\">\r\n            </div>\r\n            <div class=\"form-message-box\"></div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">State:</label>\r\n\r\n            <div class=\"col-sm-6\">\r\n                <label class=\"radio-inline\">\r\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadioMale\" value=\"Male\"> Male\r\n                </label>\r\n                <label class=\"radio-inline\">\r\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadioFemale\" value=\"Female\"> Female\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-12 text-center\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Sign up</button>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n    </form>\r\n</div>";
},"useData":true});

this["JST"]["ReportsPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-12\">\r\n    <h3>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\r\n    <hr>\r\n    <form class=\"form-inline\">\r\n        <div class=\"row\">\r\n            <div class=\"form-group\">\r\n                <label for=\"inputEmail3\">Chart type:</label>\r\n                <label class=\"radio-inline\">\r\n                    <input class=\"chartType\" type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"pie\" checked>\r\n                    pie\r\n                </label>\r\n                <label class=\"radio-inline\">\r\n                    <input class=\"chartType\" type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"line\"> line\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"form-group\">\r\n                <label for=\"inputDateBegin\">from</label>\r\n                <input type=\"text\" class=\"form-control dateInput\" id=\"inputDateBegin\">\r\n                <label for=\"inputDateEnd\">to</label>\r\n                <input type=\"text\" class=\"form-control dateInput\" id=\"inputDateEnd\">\r\n                <select class=\"form-control itemType\">\r\n                    <option selected>all</option>\r\n                    <option>income</option>\r\n                    <option>costs</option>\r\n                </select>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Filter</button>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n    </form>\r\n</div>";
},"useData":true});

this["JST"]["SettingsPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-12\">\r\n    <h3>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\r\n    <hr>\r\n</div>\r\n<br><br><br><br><br>\r\n<div class=\"col-md-12\">\r\n    <!-- Nav tabs -->\r\n    <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\r\n        <li role=\"presentation\" class=\"active\">\r\n            <a href=\"#user-buttons\" aria-controls=\"user-buttons\" role=\"tab\" data-toggle=\"tab\">\r\n            User buttons\r\n            </a>\r\n        </li>\r\n        <li role=\"presentation\">\r\n            <a href=\"#category\" aria-controls=\"category\" role=\"tab\" data-toggle=\"tab\">\r\n            Category\r\n            </a>\r\n        </li>\r\n        <li role=\"presentation\">\r\n            <a href=\"#sources\" aria-controls=\"sources\" role=\"tab\" data-toggle=\"tab\">\r\n            Sources\r\n            </a>\r\n        </li>\r\n    </ul>\r\n\r\n    <!-- Tab panes -->\r\n    <div class=\"tab-content\">\r\n        <!-- User buttons -->\r\n        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"user-buttons\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"panel panel-default\">\r\n                    <table class=\"table table-hover table-bordered\">\r\n                        <thead>\r\n                        <tr class=\"active\">\r\n                            <th>Name</th>\r\n                            <th>Sum</th>\r\n                            <th>Category</th>\r\n                            <th>Source</th>\r\n                            <th>Actions</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody class=\"items-container\">\r\n                        <tr>\r\n                            <td>test1</td>\r\n                            <td>+100</td>\r\n                            <td>Other</td>\r\n                            <td>VISA</td>\r\n                            <td><i class=\"fa fa-trash-o\"></i></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>test2</td>\r\n                            <td>-123</td>\r\n                            <td>Other</td>\r\n                            <td>VISA</td>\r\n                            <td><i class=\"fa fa-trash-o\"></i></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>test3</td>\r\n                            <td>+500</td>\r\n                            <td>Other</td>\r\n                            <td>VISA</td>\r\n                            <td><i class=\"fa fa-trash-o\"></i></td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i> Add</button>\r\n            </div>    \r\n        </div><!--/ User buttons -->\r\n\r\n        <!-- Categories -->\r\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"category\">\r\n            <div class=\"row\">\r\n                <div class=\"panel panel-default\">\r\n                    <table class=\"table table-hover table-bordered\">\r\n                        <thead>\r\n                            <tr class=\"active\">\r\n                                <th>Name</th>\r\n                                <th>Actions</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody class=\"items-container\"></tbody>\r\n                    </table>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i> Add</button>\r\n            </div>    \r\n        </div><!--/ Categories -->\r\n\r\n        <!-- Sources -->\r\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"sources\">\r\n            <div class=\"row\">\r\n                <div class=\"panel panel-default\">\r\n                    <table class=\"table table-hover table-bordered\">\r\n                        <thead>\r\n                            <tr class=\"active\">\r\n                                <th>Name</th>\r\n                                <th>Actions</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody class=\"items-container\"></tbody>\r\n                    </table>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i> Add</button>\r\n            </div>\r\n        </div><!--/ Sources -->\r\n    </div><!--/ Tab panes -->\r\n</div>";
},"useData":true});

this["JST"]["Source"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<td>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</td>\r\n<td><i class=\"fa fa-trash-o\"></i></td>\r\n";
},"useData":true});

this["JST"]["StatisticsFilter"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"col-md-12\">\r\n    <form class=\"form-inline\">\r\n        <div class=\"form-group\">\r\n            <label for=\"inputDateBegin\">From</label>\r\n            <input type=\"text\" class=\"form-control dateInput\" id=\"inputDateBegin\">\r\n            <label for=\"inputDateEnd\">to</label>\r\n            <input type=\"text\" class=\"form-control dateInput\" id=\"inputDateEnd\">\r\n            <label for=\"inputType\">Type</label>\r\n            <select id=\"inputType\" class=\"form-control\">\r\n                <option selected>all</option>\r\n                <option>income</option>\r\n                <option>costs</option>\r\n            </select>\r\n            <label for=\"inputCategory\">Category</label>\r\n            <select id=\"inputCategory\" class=\"form-control\">\r\n                <option selected>Category1</option>\r\n                <option>Category2</option>\r\n                <option>Category3</option>\r\n            </select>\r\n            <label for=\"inputSource\">Source</label>\r\n            <select id=\"inputSource\" class=\"form-control\">\r\n                <option selected>Source1</option>\r\n                <option>Source2</option>\r\n                <option>Source3</option>\r\n            </select>\r\n            <button type=\"submit\" class=\"btn btn-primary js-filter-button\">Filter</button>\r\n        </div>\r\n    </form>\r\n</div>";
},"useData":true});

this["JST"]["StatisticsPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-8\">\r\n    <h3>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\r\n    <hr>\r\n</div>";
},"useData":true});

this["JST"]["UserMenuLogin"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<ul class=\"nav navbar-nav top-menu\">\r\n    <li><a href=\"#dashboard\">Dashboard</a></li>\r\n    <li><a href=\"#statistics\">Statistics</a></li>\r\n    <li><a href=\"#reports\">Reports</a></li>\r\n</ul>\r\n<ul class=\"nav navbar-nav user-top-menu pull-right\">\r\n    <li><a href=\"#settings\"><i class=\"fa fa-cog\"></i></a></li>\r\n    <li class=\"dropdown\"><a href=\"#avatar\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\"></i> "
    + this.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</a>\r\n    	<ul class=\"dropdown-menu\">\r\n		    <li><a href=\"#signout\" id=\"signout\"><i class=\"fa fa-sign-out\"></i> Sign out</a></li>\r\n  		</ul>\r\n    </li>    \r\n</ul>";
},"useData":true});

this["JST"]["UserMenuLogout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul class=\"nav navbar-nav user-top-menu pull-right\">\r\n    <li><a href=\"#registration\">SignUp</a></li>\r\n    <li><a href=\"#login\">Login</a></li>\r\n</ul>";
},"useData":true});

this["JST"]["favoriteCategory"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<tr>\r\n	<td>"
    + this.escapeExpression(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"category","hash":{},"data":data}) : helper)))
    + "</td>\r\n	<td><i class=\"glyphicon glyphicon-trash\"></i></td>\r\n</tr>";
},"useData":true});

return this["JST"];

});