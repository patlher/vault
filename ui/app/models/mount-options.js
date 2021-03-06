import { attr } from '@ember-data/model';
import Fragment from 'ember-data-model-fragments/fragment';

export default Fragment.extend({
  version: attr('number', {
    label: 'Version',
    helpText:
      'The KV Secrets Engine can operate in different modes. Version 1 is the original generic Secrets Engine the allows for storing of static key/value pairs. Version 2 added more features including data versioning, TTLs, and check and set.',
    possibleValues: [2, 1],
    // This shouldn't be defaultValue because if no version comes back from API we should assume it's v1
    defaultFormValue: 2, // Set the form to 2 by default
  }),
});
