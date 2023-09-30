/* eslint-disable * THIS FILE IS FOR FUTURE WORK/


import axios from 'axios'
import * as XLSX from 'xlsx/xlsx.mjs'

function auto_width(ws, data) {
  /*set worksheet max width per col*/
  const colWidth = data.map((row) =>
    row.map((val) => {
      /*if null/undefined*/
      if (val == null) {
        return { wch: 10 }
      } else if (val.toString().charCodeAt(0) > 255) {
        /*if chinese*/
        return { wch: val.toString().length * 2 }
      } else {
        return { wch: val.toString().length }
      }
    })
  )
  /*start in the first row*/
  let result = colWidth[0]
  for (let i = 1; i < colWidth.length; i++) {
    for (let j = 0; j < colWidth[i].length; j++) {
      if (result[j]['wch'] < colWidth[i][j]['wch']) {
        result[j]['wch'] = colWidth[i][j]['wch']
      }
    }
  }
  ws['!cols'] = result
}

export const export_json_to_excel = ({ data, key, title, filename, autoWidth }) => {
  const wb = XLSX.utils.book_new()
  data.unshift(title)
  const ws = XLSX.utils.json_to_sheet(data, { header: key, skipHeader: true })
  if (autoWidth) {
    const arr = json_to_array(key, data)
    auto_width(ws, arr)
  }
  XLSX.utils.book_append_sheet(wb, ws, filename)
  XLSX.writeFile(wb, filename + '.xlsx')
}

// Blob 转 File
const blobToFile = (blob, fileName) => {
  return new File([blob], fileName, {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  })
}

export const export_array_to_excel = ({ key, data, title, filename, autoWidth }) => {
  console.log('o/p→', key, data, title, filename, autoWidth)
  const wb = XLSX.utils.book_new()
  const arr = json_to_array(key, data)
  arr.unshift(title)
  const ws = XLSX.utils.aoa_to_sheet(arr)
  if (autoWidth) {
    auto_width(ws, arr)
  }
  XLSX.utils.book_append_sheet(wb, ws, filename)
  const buffer = XLSX.writeFile(wb, filename + '.xlsx')

  const formData = new FormData()
  let myFile = blobToFile(buffer, filename + '.xlsx')
  formData.append('file', myFile) // appending file
}

export default {
  export_array_to_excel,
  export_json_to_excel
}
