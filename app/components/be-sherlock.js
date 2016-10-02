import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  emberStorage: Ember.inject.service(),
  reportToWatson: Ember.inject.service(),
  filesDidChange(files){
    let router = this.get('router');

    if(!Ember.isEmpty(files)){
      let photo = files[0];
      let watson = this.get('reportToWatson');
      let storage = this.get('emberStorage');

      let upload = storage.uploadPhoto('/uploads',photo);
      upload.on('state_changed',null,function(/* error */){
          console.warn("error!");
        },function(/* success */){
          let imageLocation = upload.snapshot.metadata.downloadURLs[0];

          watson.reportImage(imageLocation);
        });
    }

    router.transitionTo('main.thank-you');
  }
});
