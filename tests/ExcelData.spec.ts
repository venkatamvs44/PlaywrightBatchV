

import excel, { Workbook, Worksheet } from 'exceljs'
import {test, expect} from '@playwright/test'

test('get data from Excel', async({page})=>
{
        const book=new excel.Workbook()
        await book.xlsx.readFile('./Testdata/Testdata.xlsx')
        const sheet=book.getWorksheet('Sheet1')
        const data=sheet.getRow(1).getCell(1).toString()
        console.log(data)
}
)
test('write data to Excel', async({page})=>
{
        const book= new excel.Workbook()
        await book.xlsx.readFile('./Testdata/Testdata.xlsx')
         let sheet=book.addWorksheet('Sheet2')
         sheet.addRow(5).getCell(5).value='Hello World'
         await book.xlsx.writeFile('./Testdata/Testdata.xlsx')
}
)
//multiple rows and multiple columns

test('get data from multiple rows columns', async({page})=>
{
        let sheet:Worksheet;
        
      const book=new excel.Workbook()
        await book.xlsx.readFile('./Testdata/Testdata.xlsx')
        sheet=book.getWorksheet('Sheet1')
        let lastrow:any=sheet.rowCount
        console.log('Total rows in the sheet: ${lastrow}');

        for (let i=1; i<=lastrow; i++)     // fetching mulitple values from Single COLUMN
        {
        const value:any=sheet.getRow(i).getCell(1).toString();
        console.log(value)

        }
        //const data=sheet.getRow(1).getCell(1).toString()
        //data.array.forEach(element => {
         
// multiple data reading from .json data 



});
        
