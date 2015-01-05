Ember.Handlebars.registerHelper('form-for', function(object, options) {
// <<<<<<< HEAD
//   Em.merge(options.data.keywords, options.hash)
//   options.data.keywords.formForModelBinding = object;
//   options.data.keywords.formForModelPath = object;
//   return Ember.Handlebars.helpers.view.call(this, Ember.EasyForm.Form, options);
// =======
  var parentView = options.data.view;

  Ember.Handlebars.helpers.view.call(this, Ember.EasyForm.Form, options);

  var newView = parentView._childViews[parentView._childViews.length - 1];

  newView._keywords.formForModelPath = object;

  return newView;

});
