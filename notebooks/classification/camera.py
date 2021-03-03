import cv2
import threading
import numpy as np
import traitlets
from traitlets.config.configurable import SingletonConfigurable

class Camera(SingletonConfigurable):

    value = traitlets.Any()

    def __init__(self, *args, **kwargs):
        self.value = np.empty((224, 224, 3), dtype=np.uint8)
        super(Camera, self).__init__(*args, **kwargs)


        self.cap = cv2.VideoCapture(0)

        re, image = self.cap.read()
        if not re:
            raise RuntimeError('Could not read image from camera.')

        self.value = image
        self.start()

    def _capture_frames(self):
        while True:
            re, image = self.cap.read()
            if re:
                self.value = image
            else:
                break
    def start(self):
        self.thread = threading.Thread(target=self._capture_frames)
        self.thread.start()

def bgr8_to_jpeg(value, quality=75):
    return bytes(cv2.imencode('.jpg', value)[1])



