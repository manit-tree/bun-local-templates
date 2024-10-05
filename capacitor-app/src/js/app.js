import { SplashScreen } from '@capacitor/splash-screen';
import { Camera } from '@capacitor/camera';

let app = document.querySelector('#app');

let take_photo = async () => {
    try {
      const photo = await Camera.getPhoto({
        resultType: 'uri',
      })

      const image = app.querySelector('#image');

      if (image) {
        image.src = photo.webPath;
      }

    } catch (e) {
      console.warn('User cancelled', e);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', evt => {
        let el = evt.target;

        if (el.matches('a[data-cmd]')) {
            let cmd = el.getAttribute('data-cmd');

            if (cmd == 'take-photo') {
                take_photo();
            }
        }
    })

    SplashScreen.hide();
})