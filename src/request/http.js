import axios from 'axios'

// 默认请求超时时间
const TIME_OUT_MS = 60 * 1000

//192.168.1.200
const REQUEST_URL = process.env.NODE_ENV === 'development'
  // 测试接口地址
  ? 'http://192.168.1.200:6969'
  // 线上接口地址 http://www.jdbiji.com
  : 'http://localhost:6969';

/*
 * @param response 返回数据列表
 */
function handleResults(response) {
  let remoteResponse = response.data
  let result = {
    success: false,
    message: '',
    status: [],
    errorCode: '',
    data: {
      total: 0,
      results: []
    }
  }
  if (remoteResponse.code == 200) {
    result.data.results = remoteResponse.data
    result.data.total = remoteResponse.total
    result.success = true
  }
  if (remoteResponse.code != 200) {
    let code = remoteResponse.errorCode
    if (code === 400) {
      console.log('传参错误')
    }
    result.errorCode = remoteResponse.errorCode
    result.message = remoteResponse.message
  }
  return result
}

function handleUrl(url) {
  // BASE_URL是接口的ip前缀，比如http:10.100.1.1:8989/
  url = REQUEST_URL + url
  return url
}

/*
 * @param data 参数列表
 * @return
 */
function handleParams(data) {
  return data
}

export default {

  /*
   * @param url
   * @param data
   * @param response 请求成功时的回调函数
   * @param exception 异常的回调函数
   */
  post(url, data, response, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: handleParams(data),
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },

  /*
   * get 请求
   * @param url
   * @param response 请求成功时的回调函数
   * @param exception 异常的回调函数
   */
  get(url, response, exception) {
    axios({
      method: 'get',
      url: handleUrl(url),
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },

  /*
   * 导入文件
   * @param url
   * @param data
   * @param response 请求成功时的回调函数
   * @param exception 异常的回调函数
   */
  uploadFile(url, data, response, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: handleParams(data),
      dataType: 'json',
      processData: false,
      contentType: false
    }).then(
      (result) => {
        response(handleResults(result, data))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },

  /*
   * 下载文件用，导出 Excel 表格可以用这个方法
   * @param url
   * @param param
   * @param fileName 如果是导出 Excel 表格文件名后缀最好用.xls 而不是.xlsx，否则文件可能会因为格式错误导致无法打开
   * @param exception 异常的回调函数
   */
  downloadFile(url, data, fileName, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: handleParams(data),
      responseType: 'blob'
    }).then(
      (result) => {
        const excelBlob = result.data
        if ('msSaveOrOpenBlob' in navigator) {
          // Microsoft Edge and Microsoft Internet Explorer 10-11
          window.navigator.msSaveOrOpenBlob(excelBlob, fileName)
        } else {
          const elink = document.createElement('a')
          elink.download = fileName
          elink.style.display = 'none'
          const blob = new Blob([excelBlob])
          elink.href = URL.createObjectURL(blob)
          document.body.appendChild(elink)
          elink.click()
          document.body.removeChild(elink)
        }
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },
  uploadFileFormData(url, data, response, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: data,
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  }
}
