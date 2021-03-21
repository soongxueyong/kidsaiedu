/* global tm */

const mainEl = document.querySelector('#container');

const wizard = new tm.Wizard({
  introduction: {
    title: tm.html`训练电脑能够识别Rock、Paper、Scissor石头、剪刀、布游戏的手势。`,
    description: tm.html`点击“Start”，启动后允许访问你的网络摄像头。请放心采集的个人图像保存浏览器本地，不会上传互联网。`
  },
  classes: [
    {
      name: "Rock",
      title: "手势石头，点击 Hold to Record 按钮采集石头手势的图片.",
      description:
        "按住按钮，至少采集20张石头手势照片。"
    },
    {
      name: "Paper",
      title: "手势纸张，点击 Hold to Record 按钮采集纸张放手的图片.",
      description:
        "按住按钮，至少采集20张纸张手势照片。"
    },
	{
	  name: "Scissor",
	  title: "手势剪刀，点击 Hold to Record 按钮采集剪刀手势的图片.",
	  description:
	    "按住按钮，至少采集20张剪刀手势照片。"
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
