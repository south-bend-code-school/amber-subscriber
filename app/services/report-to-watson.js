import Ember from 'ember';
import ENV from 'amber-subscriber/config/environment';

export default Ember.Service.extend({
  reportImage(imageLocation){
    return Ember.$.ajax({
      type: 'POST',
      url: `${ENV.APP.Watson.URL}/report`,
      data: {
        imageurl: imageLocation
      }
    });
  }
});
