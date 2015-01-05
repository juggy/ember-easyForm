Ember.Handlebars.registerHelper('form-for', function(object, options) {
  Em.merge(options.data.keywords, options.hash)
  options.data.keywords.formForModelBinding = object;
  options.data.keywords.formForModelPath = object;
  return Ember.Handlebars.helpers.view.call(this, Ember.EasyForm.Form, options);
});
