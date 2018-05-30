import attachPhoto from '../helpers/attachPhotoHelper'


export const attachImage = (takeFromLibrary = true) => (dispatch, getState) => new Promise((resolve, reject) => {
    return attachPhoto(takeFromLibrary ? 'launchImageLibrary' : 'launchCamera').then(resolve, reject)
});
