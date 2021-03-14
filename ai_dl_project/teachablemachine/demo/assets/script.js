/* global tm */

const mainEl = document.querySelector('#container');

const wizard = new tm.Wizard({
  introduction: {
    title: tm.html`让我们教您的计算机识别您的动作.`,
    description: tm.html`点击“开始”，您将需要允许访问您的网络摄像头。请注意，您的图像对您不公开，请勿离开计算机。`
  },
  classes: [
    {
      name: "Action1",
      title: "“采样1.",
      description:
        "按住按钮，举起手拍至少20张照片。确保你的动作在每个采样视频中。"
    },
    {
      name: "Action2",
      title: "采样2",
      description:
        "按住按钮，放下手拍至少20张照片。确保你的动作在每个采样视频中。"
    } ,
    {
      name: "Action3",
      title: "采样3",
      description:
        "按住按钮，放下手拍至少20张照片。确保你的动作在每个采样视频中。"
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
