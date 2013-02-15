Ember.FormBuilder.Submit = Ember.View.extend({
  tagName: 'input',
  attributeBindings: ['type', 'value'],
  type: 'submit',
  init: function() {
    this.set('value', this.value);
  },
  onClick: function() {
    if (this.get('context').validate()) {
      this.get('controller').send('submit');
    }
  }
});