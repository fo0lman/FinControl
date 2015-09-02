define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["AboutPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "\n    <div class=\"col-md-8 col-md-offset-2\">\n        <h1>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n    </div>\n    <div class=\"col-md-8 col-md-offset-2\">\n        <img src=\"http://placehold.it/750x250\" alt=\"about\">\n        <p class=\"lead text-justify\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur possimus voluptatum! Aut\n            cumque distinctio nam reiciendis, sint ut voluptates. Commodi corporis dolores ducimus eius incidunt magni\n            maiores mollitia, nam natus nesciunt numquam officiis placeat provident qui vitae? Aliquam aliquid amet\n            animi asperiores beatae culpa dolores earum, eius eligendi esse facere fugit, hic id ipsa ipsam iusto labore\n            laudantium neque nostrum optio perferendis quas quidem rem, similique sunt tempore temporibus unde voluptate\n            voluptatem voluptatum. Asperiores enim laboriosam mollitia repellat rerum suscipit vitae? Aliquid assumenda\n            at autem, beatae dolore doloremque doloribus ducimus eaque esse est eum eveniet excepturi facere facilis\n            fugiat harum hic labore laudantium molestiae nesciunt nobis omnis perspiciatis quam rem repellat repellendus\n            tempore totam ullam, unde velit voluptas voluptate voluptatem voluptates. Architecto, dignissimos\n            exercitationem quam quia rem repellendus. Dignissimos eius eos esse incidunt nemo nobis qui reiciendis.\n            Corporis delectus dicta fuga illo illum itaque laboriosam molestias quos vitae. Aliquid corporis deserunt\n            doloribus dolorum ducimus excepturi exercitationem nisi, nobis numquam odio placeat possimus provident quia\n            rerum sit unde ut voluptatem! Consequatur dignissimos earum id magni odio ratione? Ab accusamus accusantium\n            adipisci amet aperiam blanditiis consectetur consequuntur delectus dolores doloribus dolorum ea earum\n            eligendi esse exercitationem illum impedit incidunt iste mollitia nisi, optio, perspiciatis placeat\n            provident quasi quia quo reiciendis repellat sapiente sint suscipit ut vel, veritatis voluptatum. Aliquid\n            consectetur consequatur consequuntur cumque deserunt dignissimos dolore earum eius eos esse expedita\n            explicabo facilis illum ipsa iste magnam magni natus nobis odio possimus praesentium quaerat quas quasi\n            quidem recusandae, reprehenderit sapiente tempora tempore veritatis voluptas? Dolor, facere, quae. Deserunt,\n            natus nisi nobis porro praesentium quam voluptas! A ab accusamus ad consequatur culpa deserunt ducimus ea\n            earum esse et eveniet ex, facilis fuga fugit ipsam, itaque iure libero minus molestiae nam nisi non odit\n            pariatur perferendis perspiciatis placeat soluta tempora unde vero voluptate? Accusantium amet blanditiis\n            commodi corporis dicta dignissimos eligendi iste molestiae nesciunt nostrum, obcaecati, officia officiis\n            placeat praesentium quaerat quasi qui quidem quis repudiandae rerum tenetur ullam vel veniam vero\n            voluptatem. Accusantium enim fugit hic illo impedit porro praesentium quaerat quibusdam totam. Aspernatur\n            beatae blanditiis cupiditate deserunt eligendi error eum, mollitia quasi quo ratione, rerum sed. Adipisci\n            asperiores aut consequatur temporibus unde! </p>\n    </div>\n";
},"useData":true});

this["JST"]["AddButton"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button type=\"button\" class=\"btn btn-primary js-add-button\">Add</button>";
},"useData":true});

this["JST"]["AddButtonSettingsPopup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <button type=\"button\" class=\"close js-close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                    aria-hidden=\"true\"><i class=\"fa fa-times\"></i></span></button>\n            <h4 class=\"modal-title\">Input new Button</h4>\n        </div>\n        <div class=\"modal-body\">\n            <form class=\"add-item-form\">\n                <div class=\"form-group\">\n                    <label for=\"inputName\" class=\"control-label\">Name</label>\n                    <input type=\"text\" class=\"form-control dateInput\" id=\"inputName\" placeholder=\"Name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"inputSum\" class=\" control-label\">Sum</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputSum\" placeholder=\"Sum\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"inputCategory\" class=\" control-label\">Category</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputCategory\" placeholder=\"Category\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"inputSource\" class=\"control-label\">Source</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputSource\" placeholder=\"Source\">\n                </div>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default js-close\" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"submit\" class=\"btn btn-primary js-add-item\">Add Item</button>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["JST"]["AddItemPopup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <button type=\"button\" class=\"close js-close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                    aria-hidden=\"true\"><i class=\"fa fa-times\"></i></span></button>\n            <h4 class=\"modal-title\">Input new Item</h4>\n        </div>\n        <div class=\"modal-body\">\n            <form class=\"add-item-form\">\n                <div class=\"form-group\">\n                    <label for=\"inputDate\" class=\"control-label\">Date</label>\n                    <input type=\"text\" class=\"form-control dateInput\" id=\"inputDate\" placeholder=\"!!!Timestamp\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"inputSum\" class=\" control-label\">Sum</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputSum\" placeholder=\"Sum\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"inputCategory\" class=\" control-label\">Category</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputCategory\" placeholder=\"Category\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"inputSource\" class=\"control-label\">Source</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputSource\" placeholder=\"Source\">\n                </div>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default js-close\" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"submit\" class=\"btn btn-primary js-add-item\">Add Item</button>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["JST"]["Alert"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"alert fixed\" role=\"alert\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <p><i class=\"glyphicon glyphicon-"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\"></i> "
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p>\n</div>";
},"useData":true});

this["JST"]["Balance"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-5\">\n        <form class=\"form-inline\">\n            <div class=\"form-group\">\n                <label for=\"inputBalance\">Balance:</label> "
    + this.escapeExpression(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"count","hash":{},"data":data}) : helper)))
    + "\n            </div>\n        </form>\n    </div>\n";
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
    + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.sum || (depth0 != null ? depth0.sum : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sum","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"category","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"source","hash":{},"data":data}) : helper)))
    + "</td>\n<td><i class=\"fa fa-trash-o\"></i></td>";
},"useData":true});

this["JST"]["Buttons"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form class=\"form-inline\">\n    <div class=\"col-md-1\">\n        <div id=\"add-button-container\">\n\n        </div>\n    </div>\n    <div class=\"col-md-11\">\n        <div class=\"form-group\">\n            <label>Favorite:</label>\n            <div class=\"btn-group\" id=\"buttons-container\">\n\n            </div>\n        </div>\n    </div>\n</form>";
},"useData":true});

this["JST"]["ButtonsSettings"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"panel panel-default\">\n    <table class=\"table table-hover table-bordered\">\n        <thead>\n        <tr class=\"active\">\n            <th>Name</th>\n            <th>Sum</th>\n            <th>Category</th>\n            <th>Source</th>\n            <th>Actions</th>\n        </tr>\n        </thead>\n        <tbody id=\"buttons-settings-container\">\n\n        </tbody>\n    </table>\n</div>";
},"useData":true});

this["JST"]["Categories"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<tr>\n	<td>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n	<td>"
    + alias3(((helper = (helper = helpers.summ || (depth0 != null ? depth0.summ : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"summ","hash":{},"data":data}) : helper)))
    + "</td>\n	<td>"
    + alias3(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"category","hash":{},"data":data}) : helper)))
    + "</td>\n	<td>"
    + alias3(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"source","hash":{},"data":data}) : helper)))
    + "</td>\n	<td><i class=\"glyphicon glyphicon-trash\"></i></td>\n</tr>";
},"useData":true});

this["JST"]["Category"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container\">\n  <h4 class=\"sub-header\">User Buttons</h4>\n  <div class=\"panel panel-default\">\n      <table class=\"table table-hover table-bordered\">\n          <thead>\n            <tr class=\"active\">\n                <th>Name</th>\n                <th>Sum</th>\n                <th>Category</th>\n                <th>Source</th>\n                <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody id=\"items-container\">\n\n            \n          </tbody>\n      </table>\n  </div>\n\n\n  <!-- table categories -->\n  <h4 class=\"sub-header\">Categories</h4>\n   <div class=\"panel panel-default\">\n      <table class=\"table table-hover table-bordered\">\n          <thead>\n            <tr class=\"active\">\n                <th>Category</th>\n                <th>Action</th>\n            </tr>\n          </thead>\n          <tbody id=\"items-container\">\n\n\n          </tbody>\n      </table>\n  </div>\n\n\n  <!-- table Sources -->\n  <h4 class=\"sub-header\">Sources</h4>\n  <div class=\"panel panel-default\">\n      <table class=\"table table-hover table-bordered\">\n          <thead>\n            <tr class=\"active\">\n                <th>Source</th>\n                <th>Action</th>\n            </tr>\n          </thead>\n          <tbody id=\"items-container\">\n\n          </tbody>\n      </table>\n  </div>\n</div>\n";
},"useData":true});

this["JST"]["Chart"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"col-md-12\">\n    <div id=\"chart\"></div>\n</div>";
},"useData":true});

this["JST"]["DashboardPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-8 col-md-offset-2\">\n    <h1>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n</div>\n";
},"useData":true});

this["JST"]["ForgotPasswordPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-8 col-md-offset-2\">\n    <form class=\"form-horizontal\">\n        <h3>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n        <hr>\n        <div class=\"form-group\">\n            <label for=\"inputEmail\" class=\"col-sm-2 control-label\">Email*:</label>\n\n            <div class=\"col-sm-6\">\n                <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\n            </div>\n            <div class=\"form-message-box\"></div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"col-sm-12 text-center\">\n                <button type=\"submit\" class=\"btn btn-primary\">Restore</button>\n            </div>\n        </div>\n        <hr>\n    </form>\n</div>";
},"useData":true});

this["JST"]["HelpPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-8 col-md-offset-2\">\n    <h1>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n</div>\n<div class=\"col-md-8 col-md-offset-2\">\n    <blockquote>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci atque autem consequuntur culpa\n        dolor, dolores, earum exercitationem fuga illo impedit, iure laudantium minus modi mollitia nam\n        obcaecati perferendis placeat quaerat quam quas quia quis rem saepe similique tempore ullam vel. At\n        cupiditate doloribus, facere fugiat maiores quas rem voluptas! Ab officia perspiciatis ratione\n        voluptate? Accusantium blanditiis facilis libero quidem voluptate. Alias, autem consequatur doloremque\n        eaque enim error facilis illum in minima quia, quod ratione reiciendis reprehenderit unde ut! Accusamus\n        animi at, cum cupiditate dicta dolor doloribus eius exercitationem explicabo impedit, incidunt, neque\n        quo repellendus sunt unde. Aliquam consectetur consequatur culpa cum dolore, earum exercitationem\n        explicabo nihil nobis nostrum odio pariatur perferendis quas quibusdam quis saepe sint ullam voluptatem!\n        Assumenda autem beatae dolores ex ipsum laboriosam nesciunt perspiciatis quam reprehenderit totam!\n        Accusamus architecto commodi cum deleniti distinctio doloremque doloribus eos error esse ex fugit\n        incidunt iure laborum magnam minima minus nobis odio officia omnis perspiciatis placeat porro, quibusdam\n        quo, quod rerum sapiente sunt velit. Aliquid architecto consequuntur culpa deleniti dignissimos dolore\n        explicabo, itaque laborum minus nisi placeat voluptates. Accusamus architecto, consectetur doloribus\n        dolorum eaque, earum eius expedita fugiat in minus necessitatibus nesciunt odit porro, quaerat quis\n        quisquam ratione unde vero!\n    </blockquote>\n    <blockquote>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci atque autem consequuntur culpa\n        dolor, dolores, earum exercitationem fuga illo impedit, iure laudantium minus modi mollitia nam\n        obcaecati perferendis placeat quaerat quam quas quia quis rem saepe similique tempore ullam vel. At\n        cupiditate doloribus, facere fugiat maiores quas rem voluptas! Ab officia perspiciatis ratione\n        voluptate? Accusantium blanditiis facilis libero quidem voluptate. Alias, autem consequatur doloremque\n        eaque enim error facilis illum in minima quia, quod ratione reiciendis reprehenderit unde ut! Accusamus\n        animi at, cum cupiditate dicta dolor doloribus eius exercitationem explicabo impedit, incidunt, neque\n        quo repellendus sunt unde. Aliquam consectetur consequatur culpa cum dolore, earum exercitationem\n        explicabo nihil nobis nostrum odio pariatur perferendis quas quibusdam quis saepe sint ullam voluptatem!\n        Assumenda autem beatae dolores ex ipsum laboriosam nesciunt perspiciatis quam reprehenderit totam!\n        Accusamus architecto commodi cum deleniti distinctio doloremque doloribus eos error esse ex fugit\n        incidunt iure laborum magnam minima minus nobis odio officia omnis perspiciatis placeat porro, quibusdam\n        quo, quod rerum sapiente sunt velit. Aliquid architecto consequuntur culpa deleniti dignissimos dolore\n        explicabo, itaque laborum minus nisi placeat voluptates. Accusamus architecto, consectetur doloribus\n        dolorum eaque, earum eius expedita fugiat in minus necessitatibus nesciunt odit porro, quaerat quis\n        quisquam ratione unde vero!\n    </blockquote>\n</div>";
},"useData":true});

this["JST"]["HomePage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-12\">\n    <h3>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n    <hr>\n</div>\n<div class=\"col-md-4 text-center\">\n    <img src=\"http://placehold.it/250x250\" alt=\"img\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n        Atque impedit ipsam libero nobis rem tempore? Debitis deserunt\n        dicta eius nam officiis quaerat quod sapiente. Debitis\n        deleniti eius fugiat id inventore nam necessitatibus, nisi\n        omnis provident quas quasi quidem rerum sunt temporibus voluptate!\n        Aspernatur eos molestias quasi sunt? Doloribus earum eius eum molestiae\n        odio quasi, quibusdam repellat repudiandae velit veritatis. Adipisci\n        asperiores deleniti distinctio eligendi iste iure laudantium nihil odit,\n        quaerat reprehenderit sequi vel, voluptas. Animi dicta dignissimos dolorem fugiat,\n        fugit, ipsum magni minus non omnis perspiciatis praesentium\n        recusandae reprehenderit unde? Ab consequatur consequuntur,\n        ducimus error et expedita libero molestias mollitia, obcaecati\n        recusandae veniam vero! Accusantium ad aliquam aspernatur assumenda\n        aut autem consequuntur corporis, cum delectus, deserunt distinctio dolorem\n        dolores ducimus eligendi excepturi facere facilis harum id itaque iusto nam\n        nisi nulla, odio omnis quasi qui quis quisquam sequi vero voluptatum? Accusamus\n        distinctio magnam rem sint voluptas? Maiores nisi provident rerum. Lorem ipsum dolor\n        sit amet, consectetur adipisicing elit. Atque impedit ipsam libero nobis\n        rem tempore? Debitis deserunt dicta eius nam officiis quaerat quod sapiente.</p>\n</div>\n<div class=\"col-md-4 text-center\">\n    <img src=\"http://placehold.it/250x250\" alt=\"img\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n        Atque impedit ipsam libero nobis rem tempore? Debitis deserunt\n        dicta eius nam officiis quaerat quod sapiente. Debitis\n        deleniti eius fugiat id inventore nam necessitatibus, nisi\n        omnis provident quas quasi quidem rerum sunt temporibus voluptate!\n        Aspernatur eos molestias quasi sunt? Doloribus earum eius eum molestiae\n        odio quasi, quibusdam repellat repudiandae velit veritatis. Adipisci\n        asperiores deleniti distinctio eligendi iste iure laudantium nihil odit,\n        quaerat reprehenderit sequi vel, voluptas. Animi dicta dignissimos dolorem fugiat,\n        fugit, ipsum magni minus non omnis perspiciatis praesentium\n        recusandae reprehenderit unde? Ab consequatur consequuntur,\n        ducimus error et expedita libero molestias mollitia, obcaecati\n        recusandae veniam vero! Accusantium ad aliquam aspernatur assumenda\n        aut autem consequuntur corporis, cum delectus, deserunt distinctio dolorem\n        dolores ducimus eligendi excepturi facere facilis harum id itaque iusto nam\n        nisi nulla, odio omnis quasi qui quis quisquam sequi vero voluptatum? Accusamus\n        distinctio magnam rem sint voluptas? Maiores nisi provident rerum. Lorem ipsum dolor\n        sit amet, consectetur adipisicing elit. Atque impedit ipsam libero nobis\n        rem tempore? Debitis deserunt dicta eius nam officiis quaerat quod sapiente.</p>\n</div>\n<div class=\"col-md-4 text-center\">\n    <img src=\"http://placehold.it/250x250\" alt=\"img\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n        Atque impedit ipsam libero nobis rem tempore? Debitis deserunt\n        dicta eius nam officiis quaerat quod sapiente. Debitis\n        deleniti eius fugiat id inventore nam necessitatibus, nisi\n        omnis provident quas quasi quidem rerum sunt temporibus voluptate!\n        Aspernatur eos molestias quasi sunt? Doloribus earum eius eum molestiae\n        odio quasi, quibusdam repellat repudiandae velit veritatis. Adipisci\n        asperiores deleniti distinctio eligendi iste iure laudantium nihil odit,\n        quaerat reprehenderit sequi vel, voluptas. Animi dicta dignissimos dolorem fugiat,\n        fugit, ipsum magni minus non omnis perspiciatis praesentium\n        recusandae reprehenderit unde? Ab consequatur consequuntur,\n        ducimus error et expedita libero molestias mollitia, obcaecati\n        recusandae veniam vero! Accusantium ad aliquam aspernatur assumenda\n        aut autem consequuntur corporis, cum delectus, deserunt distinctio dolorem\n        dolores ducimus eligendi excepturi facere facilis harum id itaque iusto nam\n        nisi nulla, odio omnis quasi qui quis quisquam sequi vero voluptatum? Accusamus\n        distinctio magnam rem sint voluptas? Maiores nisi provident rerum. Lorem ipsum dolor\n        sit amet, consectetur adipisicing elit. Atque impedit ipsam libero nobis\n        rem tempore? Debitis deserunt dicta eius nam officiis quaerat quod sapiente.</p>\n</div>";
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
  return buffer + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.sum || (depth0 != null ? depth0.sum : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sum","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"category","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"source","hash":{},"data":data}) : helper)))
    + "</td>\n<td><i class=\"fa fa-trash-o\"></i></td>";
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
  return buffer + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.sum || (depth0 != null ? depth0.sum : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sum","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"category","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"source","hash":{},"data":data}) : helper)))
    + "</td>\n<td><i class=\"fa fa-pencil-square-o\"></i> <i class=\"fa fa-trash-o\"></i></td>";
},"useData":true});

this["JST"]["Items"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"panel panel-default\">\n    <table class=\"table table-hover table-bordered\">\n        <thead>\n        <tr class=\"active\">\n            <th>Date</th>\n            <th>Sum</th>\n            <th>Category</th>\n            <th>Source</th>\n            <th>Actions</th>\n        </tr>\n        </thead>\n        <tbody id=\"items-container\">\n\n        </tbody>\n    </table>\n</div>";
},"useData":true});

this["JST"]["LoginPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-8 col-md-offset-2\">\n    <form class=\"form-horizontal\">\n        <h3>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n        <hr>\n        <div class=\"form-group\">\n            <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n            <div class=\"col-sm-10\">\n                <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n\n                <div class=\"form-message-box email-error\"></div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n\n            <div class=\"col-sm-10\">\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n\n                <div class=\"form-message-box password-error\"></div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-10\">\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" checked> Remember me\n                    </label>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-10\">\n                <button type=\"submit\" class=\"btn btn-primary pull-right\">Sign in</button>\n                <div class=\"form-message-box login-error\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n<div class=\"col-md-8 col-md-offset-2 login-links\">\n    <div class=\"row\">\n        <div class=\"col-md-10 text-right\">\n            <a href=\"#forgotpass\">Forgot your password?</a>\n        </div>\n        <div class=\"col-md-2 text-right\">\n            <a href=\"#registration\">Registration</a>\n        </div>\n    </div>\n</div>\n<div class=\"col-md-8 col-md-offset-2 social-login\">\n    <div class=\"row\">\n        <div class=\"col-sm-2\">\n            <p>Social buttons:</p>\n        </div>\n        <div class=\"col-sm-10\">\n            <ul class=\"list-inline\">\n                <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                <li><a href=\"#\"><i class=\"fa fa-github\"></i></a></li>\n            </ul>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["JST"]["NotFoundPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-8 col-md-offset-2\">\n    <h1>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n</div>";
},"useData":true});

this["JST"]["RegistrationPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-8 col-md-offset-2\">\n    <form class=\"form-horizontal\">\n        <h3>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n        <hr>\n        <div class=\"form-group\">\n            <label for=\"inputEmail\" class=\"col-sm-2 control-label\">Email*:</label>\n\n            <div class=\"col-sm-6\">\n                <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\n            </div>\n            <div class=\"form-message-box\"></div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"inputName\" class=\"col-sm-2 control-label\">Name:</label>\n\n            <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Name\">\n            </div>\n            <div class=\"form-message-box\"></div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Password:</label>\n\n            <div class=\"col-sm-6\">\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\n            </div>\n            <div class=\"form-message-box\"></div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"inputDateBirth\" class=\"col-sm-2 control-label\">Date of birth:</label>\n\n            <div class=\"col-sm-4\">\n                <input type=\"date\" class=\"form-control\" id=\"inputDateBirth\" placeholder=\"Password\">\n            </div>\n            <div class=\"form-message-box\"></div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">State:</label>\n\n            <div class=\"col-sm-6\">\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadioMale\" value=\"Male\"> Male\n                </label>\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadioFemale\" value=\"Female\"> Female\n                </label>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"col-sm-12 text-center\">\n                <button type=\"submit\" class=\"btn btn-primary\">Sign up</button>\n            </div>\n        </div>\n        <hr>\n    </form>\n</div>";
},"useData":true});

this["JST"]["ReportsPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-12\">\n    <form class=\"form-inline\">\n        <h3>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n        <hr>\n        <div class=\"row\">\n            <div class=\"form-group\">\n                <label for=\"inputEmail3\">Chart type:</label>\n                <label class=\"radio-inline\">\n                    <input class=\"chartType\" type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"pie\" checked>\n                    pie\n                </label>\n                <label class=\"radio-inline\">\n                    <input class=\"chartType\" type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"line\"> line\n                </label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group\">\n                <label for=\"inputDateBegin\">from</label>\n                <input type=\"text\" class=\"form-control dateInput\" id=\"inputDateBegin\">\n                <label for=\"inputDateEnd\">to</label>\n                <input type=\"text\" class=\"form-control dateInput\" id=\"inputDateEnd\">\n                <select class=\"form-control itemType\">\n                    <option selected>all</option>\n                    <option>income</option>\n                    <option>costs</option>\n                </select>\n                <button type=\"submit\" class=\"btn btn-primary\">Filter</button>\n            </div>\n        </div>\n        <hr>\n    </form>\n</div>";
},"useData":true});

this["JST"]["SettingsPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-8 col-md-offset-2\">\n    <h1>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n</div>\n<br><br><br><br><br>\n<div class=\"col-md-12\">\n    <!-- Nav tabs -->\n    <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\n        <li role=\"presentation\" class=\"active\"><a href=\"#user-buttons\" aria-controls=\"user-buttons\" role=\"tab\"\n                                                  data-toggle=\"tab\">User buttons</a></li>\n        <li role=\"presentation\"><a href=\"#category\" aria-controls=\"category\" role=\"tab\"\n                                   data-toggle=\"tab\">Category</a>\n        </li>\n        <li role=\"presentation\"><a href=\"#sources\" aria-controls=\"sources\" role=\"tab\" data-toggle=\"tab\">Sources</a>\n        </li>\n    </ul>\n\n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"user-buttons\">\n\n            <div class=\"row\">\n                <div class=\"panel panel-default\">\n                    <table class=\"table table-hover table-bordered\">\n                        <thead>\n                        <tr class=\"active\">\n                            <th>Name</th>\n                            <th>Sum</th>\n                            <th>Category</th>\n                            <th>Source</th>\n                            <th>Actions</th>\n                        </tr>\n                        </thead>\n                        <tbody id=\"items-container\">\n                        <tr>\n                            <td>test1</td>\n                            <td>+100</td>\n                            <td>Other</td>\n                            <td>VISA</td>\n                            <td><i class=\"fa fa-trash-o\"></i></td>\n                        </tr>\n                        <tr>\n                            <td>test2</td>\n                            <td>-123</td>\n                            <td>Other</td>\n                            <td>VISA</td>\n                            <td><i class=\"fa fa-trash-o\"></i></td>\n                        </tr>\n                        <tr>\n                            <td>test3</td>\n                            <td>+500</td>\n                            <td>Other</td>\n                            <td>VISA</td>\n                            <td><i class=\"fa fa-trash-o\"></i></td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <button type=\"button\" class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i> Add</button>\n            </div>\n\n        </div>\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"category\">\n\n            <div class=\"row\">\n                <div class=\"panel panel-default\">\n                    <table class=\"table table-hover table-bordered\">\n                        <thead>\n                        <tr class=\"active\">\n                            <th>Name</th>\n                            <th>Actions</th>\n                        </tr>\n                        </thead>\n                        <tbody id=\"items-container\">\n                        <tr>\n                            <td>INTERNET</td>\n                            <td><i class=\"fa fa-trash-o\"></i></td>\n                        </tr>\n                        <tr>\n                            <td>FOOD</td>\n                            <td><i class=\"fa fa-trash-o\"></i></td>\n                        </tr>\n                        <tr>\n                            <td>RENT</td>\n                            <td><i class=\"fa fa-trash-o\"></i></td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <button type=\"button\" class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i> Add</button>\n            </div>\n\n        </div>\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"sources\">\n\n            <div class=\"row\">\n                <div class=\"panel panel-default\">\n                    <table class=\"table table-hover table-bordered\">\n                        <thead>\n                        <tr class=\"active\">\n                            <th>Name</th>\n                            <th>Actions</th>\n                        </tr>\n                        </thead>\n                        <tbody id=\"items-container\">\n                        <tr>\n                            <td>VISA</td>\n                            <td><i class=\"fa fa-trash-o\"></i></td>\n                        </tr>\n                        <tr>\n                            <td>MASTERCARD</td>\n                            <td><i class=\"fa fa-trash-o\"></i></td>\n                        </tr>\n                        <tr>\n                            <td>PAYPAL</td>\n                            <td><i class=\"fa fa-trash-o\"></i></td>\n                        </tr>\n                        <tr>\n                            <td>WEBMONEY</td>\n                            <td><i class=\"fa fa-trash-o\"></i></td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <button type=\"button\" class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i> Add</button>\n            </div>\n\n        </div>\n    </div>\n</div>";
},"useData":true});

this["JST"]["StatisticsFilter"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"col-md-12\">\n    <form class=\"form-inline\">\n        <div class=\"form-group\">\n            <label for=\"inputDateBegin\">From</label>\n            <input type=\"text\" class=\"form-control dateInput\" id=\"inputDateBegin\">\n            <label for=\"inputDateEnd\">to</label>\n            <input type=\"text\" class=\"form-control dateInput\" id=\"inputDateEnd\">\n            <label for=\"inputType\">Type</label>\n            <select id=\"inputType\" class=\"form-control\">\n                <option selected>all</option>\n                <option>income</option>\n                <option>costs</option>\n            </select>\n            <label for=\"inputCategory\">Category</label>\n            <select id=\"inputCategory\" class=\"form-control\">\n                <option selected>Category1</option>\n                <option>Category2</option>\n                <option>Category3</option>\n            </select>\n            <label for=\"inputSource\">Source</label>\n            <select id=\"inputSource\" class=\"form-control\">\n                <option selected>Source1</option>\n                <option>Source2</option>\n                <option>Source3</option>\n            </select>\n            <button type=\"submit\" class=\"btn btn-primary js-filter-button\">Filter</button>\n        </div>\n    </form>\n</div>";
},"useData":true});

this["JST"]["StatisticsPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-md-8 col-md-offset-2\">\n    <h1>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n</div>";
},"useData":true});

this["JST"]["UserMenuLogin"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<ul class=\"nav navbar-nav top-menu\">\n    <li><a href=\"#dashboard\">Dashboard</a></li>\n    <li><a href=\"#statistics\">Statistics</a></li>\n    <li><a href=\"#reports\">Reports</a></li>\n</ul>\n<ul class=\"nav navbar-nav user-top-menu pull-right\">\n    <li><a href=\"#settings\"><i class=\"fa fa-cog\"></i></a></li>\n    <li class=\"dropdown\"><a href=\"#avatar\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\"></i> "
    + this.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</a>\n    	<ul class=\"dropdown-menu\">\n		    <li><a href=\"#signout\" id=\"signout\"><i class=\"fa fa-sign-out\"></i> Sign out</a></li>\n  		</ul>\n    </li>    \n</ul>";
},"useData":true});

this["JST"]["UserMenuLogout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul class=\"nav navbar-nav user-top-menu pull-right\">\n    <li><a href=\"#registration\">SignUp</a></li>\n    <li><a href=\"#login\">Login</a></li>\n</ul>";
},"useData":true});

this["JST"]["favoriteCategory"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<tr>\n	<td>"
    + this.escapeExpression(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"category","hash":{},"data":data}) : helper)))
    + "</td>\n	<td><i class=\"glyphicon glyphicon-trash\"></i></td>\n</tr>";
},"useData":true});

this["JST"]["source"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<tr>\n	<td>"
    + this.escapeExpression(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"source","hash":{},"data":data}) : helper)))
    + "</td>\n	<td><i class=\"glyphicon glyphicon-trash\"></i></td>\n</tr>";
},"useData":true});

return this["JST"];

});