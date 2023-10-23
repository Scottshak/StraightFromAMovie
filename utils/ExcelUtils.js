import writeXlsxFile from 'write-excel-file/node';

class ExcelUtils {
    async writeToExcel(data, file) {
        await writeXlsxFile(data, {
            filePath: file
        })
    }
}

module.exports = {ExcelUtils};