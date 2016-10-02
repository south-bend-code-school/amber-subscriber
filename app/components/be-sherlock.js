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
      let component = this;

      // loadImage(photo,function(img) {
      //   let watson = component.get('reportToWatson');
      //   let storage = component.get('emberStorage');
      //   console.log(img);
      //
      //   let upload = storage.uploadPhoto('/uploads',img.src);
      //   upload.on('state_changed',null,function(/* error */){
      //       console.warn("error!");
      //     },function(/* success */){
      //       let imageLocation = upload.snapshot.metadata.downloadURLs[0];
      //
      //       watson.reportImage(imageLocation);
      //     });
      //
      // },{maxWidth:600});
      this.set('photo',photo);
      imageResizer.resize(photo, {
        width: 300,
        height: 520
      }, function(blob, didItResize){
        let watson = component.get('reportToWatson');
        let storage = component.get('emberStorage');
        if(didItResize){
          let upload = storage.uploadPhoto('/uploads',blob);
          upload.on('state_changed',null,function(/* error */){
              console.warn("error!");
            },function(/* success */){
              let imageLocation = upload.snapshot.metadata.downloadURLs[0];

              watson.reportImage(imageLocation);
            });
        } else {
          let upload = storage.uploadPhoto('/uploads',photo);
          upload.on('state_changed',null,function(/* error */){
              console.warn("error!");
            },function(/* success */){
              let imageLocation = upload.snapshot.metadata.downloadURLs[0];

              watson.reportImage(imageLocation);
            });
        }
        console.log(blob);
      });
      // let watson = this.get('reportToWatson');
      // let storage = this.get('emberStorage');
      //
      // console.log(photo);
      // let upload = storage.uploadPhoto('/uploads',this.get('photo'));
      // upload.on('state_changed',null,function(/* error */){
      //     console.warn("error!");
      //   },function(/* success */){
      //     let imageLocation = upload.snapshot.metadata.downloadURLs[0];
      //
      //     watson.reportImage(imageLocation);
      //   });
    }

    router.transitionTo('main.thank-you');
  }
});
