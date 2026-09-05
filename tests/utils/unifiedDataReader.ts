import path from 'path';
import {readCsvFile} from "./csvReader.js";
import fs from 'fs';

export function readData(filePath: string) {

    //get file extension
    const extension = path.extname(filePath).toLowerCase();
    //switch so that it can be expandable to other file types in the future
    switch (extension) {
        case '.csv':
            return readCsvFile(filePath);

        case '.json':
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            return JSON.parse(fileContent);

        default:
            throw new Error(`Unsupported file type: ${extension}`);
    }
}
