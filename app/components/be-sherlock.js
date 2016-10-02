import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  imageTools: Ember.inject.service(),
  emberStorage: Ember.inject.service(),
  reportToWatson: Ember.inject.service(),
  filesDidChange(files){
    let router = this.get('router');
    let imageResizer = this.get('imageTools');

    if(!Ember.isEmpty(files)){
      let photo = files[0];
      imageResizer.resize(photo, {
        width: 300,
        height: 520
      }, function(blob, didItResize){
        if(didItResize){
          photo = blob;
        }
        console.log(blob);
      });
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
