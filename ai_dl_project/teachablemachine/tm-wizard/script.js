/* global tm */

const mainEl = document.querySelector('#container');

const wizard = new tm.Wizard({
  introduction: {
    title: tm.html`训练电脑能够识别手势向上还是向下。`,
    description: tm.html`点击“Start”，启动后允许访问你的网络摄像头。请放心采集的个人图像保存浏览器本地，不会上传互联网。`
  },
  classes: [
    {
      name: "Hand up",
      title: "举手，点击 Hold to Record 按钮采集举手的图片.",
      description:
        "按住按钮，至少采集20张举手照片。"
    },
    {
      name: "Hand down",
      title: "放手，点击 Hold to Record 按钮采集放手的图片.",
      description:
        "按住按钮，至少采集20张放手照片。"
    }
  ],
  onLoad: () => {
    console.log("model has loaded");
  },
  onPrediction: predictions => {
    const images = document.querySelectorAll('.prediction-image');
    let highestProb = Number.MIN_VALUE;
    let highestIndex = -1;
    predictions.forEach((pred, i) => {
      if (pred.probability > highestProb) {
        highestProb = pred.probability;
        highestIndex = i;
      }
    });
    images.forEach((img, i) => {
      if (i === highestIndex) {
        img.classList.remove('hidden');
      } else {
        img.classList.add('hidden');
      }
    });
  },
  onSampleAdded: added => {
    console.log(added);
  },
  onTrain: () => console.log("train begins"),
  onReady: () => {
    const inferenceCamera = wizard.createInferenceCamera({
      size: 270
    });
    const cameraContainer = document.querySelector('#inference-camera-container');
    cameraContainer.appendChild(inferenceCamera);
    mainEl.classList.add('ready');
  }
});

document.querySelector('#train-model-button').addEventListener('click', () => wizard.open());
