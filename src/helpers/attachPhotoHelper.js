import ImagePicker from 'react-native-image-picker';

const FILE_NAME_REGEXP = /(?=\w+\.\w{3,4}$).+/ig;

const options = {
  takePhotoButtonTitle: 'Take photo',
  chooseFromLibraryButtonTitle: 'Choose from library',
  noData: true,
  allowsEditing: false
};


export default async function attachPhoto(method = 'showImagePicker') {
  return new Promise((resolve, reject) => {
    ImagePicker[method](options, (res) => {
      if (res.didCancel) {
        return;
      }
      if (res.error) {
        return reject(res.error);
      }

      const filePath = res.path || res.uri || '';
      const fileName = res.fileName || filePath.match(FILE_NAME_REGEXP)[0];
      const fileUri = res.uri;

      const normalizedAttach = {
        url: fileUri,
        name: fileName,
        mimeType: 'image'
      };

      resolve(normalizedAttach);
    });
  });
}