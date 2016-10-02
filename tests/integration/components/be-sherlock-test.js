import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('be-sherlock', 'Integration | Component | be sherlock', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{be-sherlock}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#be-sherlock}}
      template block text
    {{/be-sherlock}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
