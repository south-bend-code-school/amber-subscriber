import Ember from 'ember';

export default Ember.Service.extend({
  firebaseApp: Ember.inject.service(),
  _getStorageRef(){
    const storageRef = this.get('firebaseApp').storage().ref();
    return storageRef;
  },
  _getTimestamp(){
    let date = new Date();
    return date.getTime();
  },
  uploadPhoto(directory,photo){
    let storageRef = this._getStorageRef();
    let timestamp = this._getTimestamp();

    let metadata = {
      contentType: photo.type
    };

    let bucketLocation = `${directory}/${timestamp}`;

    return storageRef.child(bucketLocation).put(photo,metadata);
  }
});
