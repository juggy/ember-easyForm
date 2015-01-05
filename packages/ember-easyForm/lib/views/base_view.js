Ember.EasyForm.BaseView = Ember.View.extend({
  classNameBindings: ['property'],
  wrapper: function() {
    var wrapperView = this.nearestWithProperty('wrapper');
    if (wrapperView) {
      return wrapperView.get('wrapper');
    } else {
      return 'default';
    }
  }.property(),
  wrapperConfig: function() {
    return Ember.EasyForm.Config.getWrapper(this.get('wrapper'));
  }.property('wrapper'),
  templateForName: function(name) {
    var template;

    if (this.container) {
      template = this.container.lookup('template:' + name);
    }

    return template || Ember.EasyForm.Config.getTemplate(name);
  },
  formForModel: null,
  forceError: false
});
