import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | memleak', function(hooks) {
  setupApplicationTest(hooks);

  test('Memory leak', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
  });
});
