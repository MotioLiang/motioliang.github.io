---
title: 微信小程序文件需要批量上传，使用递归完成上传。
date: 2021-12-06
tags:
    - wxchat
categories:
    - Web
---

#### 文件需要批量上传，使用递归完成上传。

```js
const app = getApp()
import { commonuploadfile, validateopenid } from './apis'

/*
 * @desc 上传
 * @param {string} filePath 文件 file url
 * @param {string} config oss 桶名称
 * @returns {promise}
 */
function uploadFile(filePath, config) {
    return new Promise((resolve, reject) => {
        wx.uploadFile({
            url: `${app.globalData.apiHost}${commonuploadfile}`,
            filePath,
            name: 'file',
            header: {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + wx.getStorageSync('token')
            },
            formData: {
                method: 'POST',
                config
            },
            success(res) {
                const data = JSON.parse(res.data)
                if (data.ret_code === 200) {
                    resolve(data.result)
                } else {
                    reject()
                }
            },
            fail(err) {
                reject(err)
            }
        })
    })
}

/*
 * @desc 验证文件是否满足类型
 * @param {array} fileList 文件 file 集合
 * @param {string} accept 文件类型
 */
function validaAccept(fileList, accept) {
    let accepts = accept.split(',')
    let isTrue = fileList.every(item => {
        let arr = item.url.split('.')
        return accepts.includes(arr[arr.length - 1].toLowerCase())
    })
    return isTrue
}

/*
 * @desc 多张递归上传，失败终止上传不保留上传记录
 * @param {array} fileList 文件 file 集合 [{url: ''}]
 * @param {number} index 文件集合索引，初始为0，超过数组的下标说明已全部上传完成
 * @param {string} config oss 桶名称
 * @param {number} size 文件大小 默认15M
 * @param {string} accept 文件类型
 * @param {function} success 上传成功的回掉
 * @param {function} error 上传失败的回掉
 */
function loopUpload({ fileList = [], index = 0, size = 15, accept = '', config, success, error }) {
    let i = index

    // 首次初始化
    if (i === 0) {
        // 验证文件类型
        if (accept) {
            let isTrue = validaAccept(fileList, accept)
            if (!isTrue) {
                if (error) error('上传失败，请上传格式为.png或.jpg(jpeg)的图片')
                return false
            }
        }
        // 验证文件大小
        let isTrue = fileList.some(item => item.size > size * 1024 * 1024)
        if (isTrue) {
            if (error) error(`上传失败，图片大小不得超过${size}MB`)
            return false
        }
        wx.showLoading({ title: '上传中...', mask: true })
        loopUpload.picList = []
    }

    // 上传完成
    if (i >= fileList.length) {
        if (success) success(loopUpload.picList)
        wx.hideLoading()
        return false
    }

    // 上传
    uploadFile(fileList[i].url, config)
        .then(res => {
            loopUpload.picList.push(res)
            ++i
            loopUpload({ fileList, index: i, config, success, error })
        })
        .catch(err => {
            if (error) error(err)
            wx.hideLoading()
            wx.showToast({ title: '上传失败，请重新上传', icon: 'none' })
        })
}

module.exports = {
    uploadFile,
    loopUpload
}
```

#### 调用

```html
<van-uploader accept="image" bind:after-read="afterReadImg" multiple="{{ true }}">
    <view class="upload-wrap">
        <van-icon name="plus" />
    </view>
</van-uploader>
```

```js
// 获取选择文件
afterReadImg({ detail }) {
  if (!detail.file.length) return
  let _this = this
  loopUpload({
    fileList: detail.file,
    accept: 'jpg,png,jpeg',
    config: 'subject_medical',
    success(res) {
      // 上传成的集合
      console.log(res)
    },
    error(err) {
      wx.showToast({ title: err, icon: 'none' })
    }
  })
}
```
