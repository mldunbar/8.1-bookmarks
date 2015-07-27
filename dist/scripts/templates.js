this["JST"] = this["JST"] || {};
this["JST"]["bookmark-add"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"add-new\">\n  <button class=\"bookmark-add-button pure-button\">new</button>\n\n  <form class=\"bookmark-add-form hidden pure-form\">\n    <input class=\"bookmark-title\"type=\"text\" placeholder=\"title\">\n    <input class=\"bookmark-url\" type=\"text\" placeholder=\"url\">\n    <input class=\"bookmark-reset\" type=\"reset\" placeholder=\"reset\">\n    <input class=\"bookmark-save\" type=\"submit\" placeholder=\"save\">\n  </form>\n</div>\n";
},"useData":true});
this["JST"]["bookmark-item"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"link-item\">\n  <p>\n    <a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">  <i class=\"fa fa-pencil\"></i>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a>\n  </p>\n\n  <button class=\"bookmark-edit-button pure-button\">edit</button>\n\n  <form class=\"bookmark-edit-form hidden pure-form\">\n    <input class=\"bookmark-title\"type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n    <input class=\"bookmark-url\" type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n    <input class=\"bookmark-reset\" type=\"reset\" value=\"reset\">\n    <input class=\"bookmark-save\" type=\"submit\" value=\"save\">\n    <button class=\"bookmark-delete\" type=\"delete\">delete</button>\n  </form>\n</div>\n";
},"useData":true});
this["JST"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});