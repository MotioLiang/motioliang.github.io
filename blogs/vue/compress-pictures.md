---
title: vue+vant ui图片上传压缩图片大小
date: 2020-02-22
tags:
    - vue
    - vant
categories:
    - Web
---

::: tip 介绍
可能在项目中大家都会遇到文件上传的需求,比如头像,图片等,但是太大的文件上传会给服务器造成很大大压力,那么我们就需要压缩上传的文件
其实这儿所说的压缩,就是图片重绘,改变图片大小
:::

<!-- more -->

这样就可以完成图片的重绘了,到底该上传多大的文件还需要根据具体业务去调整代码**toDataURL**里面的参数：

```js
//html
<div class="upload">
  <van-uploader
  :after-read="onRead"
  :before-read="getImageData"
  v-model="fileList"
  :max-count="2"/>
</div>

//js
data () {
  return {
     fileList: [], // 回显图片
     imagePath: [] // 上传图片路径
   }
 }
 methods: {
     // 将base64转换为file文件
  dataURLtoFile (dataurl, filename) {
      let arr = dataurl.split(',')
      let mime = arr[0].match(/:(.*?);/)[1]
      let bstr = atob(arr[1])
      let n = bstr.length
      let u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, {type: mime})
    },

    // 上传之前检测图片类似返回true和false会影响到onRead函数
    beforeRead (file) {
      let regex = /(.jpg|.jpeg|.png|.bmp)$/
      if (!regex.test(file.type)) {
        Toast('图片格式不支持上传')
        return false
      } else {
        return true
      }
    },

    // 获取图片原图宽高
    getImageData(file) {
      let _this = this;
      var imgs = new Image();
      imgs.src = file.content;
      imgs.onload = function(argument) {
        _this.compressImg({
          file: file,
          width: this.width,
          height: this.height
        });
      };
    },

    // 压缩图片
    compressImg(item) {
      let canvas = document.createElement("canvas"); // 创建Canvas对象(画布)
      let context = canvas.getContext("2d");
      let img = new Image();
      img.src = item.file.content; // 指定图片的DataURL(图片的base64编码数据)
      img.onload = () => {
        canvas.width = item.width / 6;
        canvas.height = item.height / 6;
        context.drawImage(img, 0, 0, item.width / 6, item.height / 6);
        let newBase = canvas.toDataURL(item.file.file.type, 0.9);
        let files = this.dataURLtoFile(newBase, item.file.file.name);
        if (files.size > 4194304) {
          this.$toast("请选择小于4M的图片！");
        } else {
          this.upLoadChooseImage(files);
        }
      }
    }


```
