const path = require('path');
const fsPromises = require('fs/promises');
const { read } = require('fs');

async function createFile(filePath) {
  console.log("Create file...");
    try {
      let result = await fsPromises.writeFile(filePath, "Initial text");
      console.log('File created successfully');
    } catch (error) {
      console.log("Error creating file: " + error);
    }
}

async function updateFile(filePath, text) {
  console.log("Update file...");
    try {
      let result = await fsPromises.writeFile(filePath, text);
      console.log('File updated successfully');
    } catch (error) {
      console.log("Error updating file: " + error);
    }
}

async function readFile(filePath) {
  console.log("Read file...");
    try {
      let result = await fsPromises.readFile(filePath);
      console.log('File read successfully. Contents: ');
      console.log(result.toString());
    } catch (error) {
      console.log("Error reading file: " + error);
    }
}

function deleteFile(filePath) {
  console.log("Delete file...");
  return new Promise(async (resolve, reject) => {
    try {
      let result = await fsPromises.unlink(filePath);
      console.log("File deleted succesfully");
      resolve();
    } catch (error) {
      console.log("Error deleting file: " + error);
      reject();
    }
  });
}

const filePath = path.join(process.cwd(), "testfile.txt");

(async() => { 
  await createFile(filePath);
  await  updateFile(filePath, "overwritten text to file");
  await readFile(filePath);
  await deleteFile(filePath)
})();