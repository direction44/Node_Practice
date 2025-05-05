import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs"
import fspromises from "fs/promises"
import chalk from "chalk";
import validator from "validator"

async function getURL(){
try{
    let answer=await inquirer.prompt([{name:"URL",message:"Type in your URL"}])
    
}
catch(err)
{

}
}

async function getImageType() {
    
}

async function generateQRCode (url,imageType) {
    
}

async function writeToFile(filePath,url) {
    
}

async function doTask() {
    
}