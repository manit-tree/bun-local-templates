let app = document.querySelector('#app');

let take_photo = () => {
    if (!navigator.camera) return;

    let onSuccess = (imgData) => {
        let image = app.querySelector('#image');
        console.log(imgData);
        image.src = 'data:image/jpeg;base64,' + imgData;
    }

    let onError = (err) => {
        console.log(err);
    }

    navigator.camera.getPicture(onSuccess, onError, {
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: Camera.DestinationType.DATA_URL
    })
}

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    app.addEventListener('click', evt => {
        let el = evt.target;

        if (el.matches('a[data-cmd]')) {
            let cmd = el.getAttribute('data-cmd');

            if (cmd == 'take-photo') {
                take_photo();
            }
        }
    })

    app.removeAttribute('hidden');
}
