---
title: vue+oss 上传/下载文件
date: 2021-02-21
tags:
    - vue
    - oss
categories:
    - Web
---

### aliyun-oss-sdk 引入

```shell
yarn add ali-oss
```

### 创建工具，在 utils 目录下新增 oss.js

```js
import { getststoken, getuploadconfig } from '@/api/index.js'
import md5 from 'js-md5'
import { Message } from 'element-ui'

const OSS = require('ali-oss')

export function oss(params) {
    return new OSS(params)
}

// oss 实例
export function ossClient({ config }) {
    return new Promise((resolve, reject) => {
        Promise.all([getststoken(), getuploadconfig()])
            .then(res => {
                let tokenData = res[0].data
                let configData = res[1].data

                // 接口失败跳出
                if (res[0].status != 200 || tokenData.ret_code != 200) {
                    Message.error('服务异常，稍后请重试')
                    reject()
                }
                if (res[0].status != 200 || configData.ret_code != 200) {
                    Message.error('服务异常，稍后请重试')
                    reject()
                }

                // oss参数
                const { Credentials } = tokenData.result
                const singleConfig = configData.result[config]

                let params = {
                    region: 'oss-cn-beijing',
                    stsToken: Credentials.SecurityToken,
                    accessKeyId: Credentials.AccessKeyId,
                    accessKeySecret: Credentials.AccessKeySecret,
                    bucket: singleConfig.bucket
                }

                const client = oss(params)
                resolve({ client, configData: singleConfig })
            })
            .catch(() => {
                Message.error('服务异常，稍后请重试')
                reject()
            })
    })
}

// 名称加密
export function setMd5Path(path, value) {
    let array = value.split('.')
    let type = array[array.length - 1]
    let fileName = ''
    array.forEach((value, index) => {
        if (index !== array.length - 1) {
            fileName += value
        }
    })
    return `${path}${md5(fileName)}${+new Date()}.${type}`
}
```

### 页面内调用

```js
import { ossClient, setMd5Path } from '@/utils/oss'

// 上传文件到oss
uploadFileInOss({ file }) {
	let params = { config: 'diagnosis_treat' }
	ossClient(params).then(({ client, configData }) => {
		let filePath = setMd5Path(configData.pre, file.name)
		client
			.put(filePath, file)
			.then((ossRes) => {
				this.setFileList(ossRes, file)
			})
			.catch(() => {
				return this.$message.error('上传异常，稍后请重试')
			})
	})
}

// 下载oss文件
downloadFileInOss(url) {
	let params = { config: 'diagnosis_treat' }
	ossClient(params).then(({ client }) => {
        // 预览路径
		let filePath = client.signatureUrl(url);
	})
}
```
