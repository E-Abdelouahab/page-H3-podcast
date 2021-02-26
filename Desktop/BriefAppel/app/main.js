const {
  app, BrowserWindow,ipcMain
} = require('electron')
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 990,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


// -----------------Catch contact value---------------------- 

ipcMain.on('contactInfo', function (e, contactName, contactNumber) {
 
  try {

    fs.appendFileSync("file.txt",contactName + '-' + contactNumber + '-' , "UTF-8", {
      'flags': 'a+'
    });

  } catch (e) {
    alert('Failed to save the file !');
  }


fs.readFile('file.txt', 'utf8', function(err, data) {
    if (err) throw err;
    let res = data.split("-")

    console.log(res);


});

})

// -----------------Catch call value from home page---------------------- 

ipcMain.on('callNumberInfo', function (e, callNumber) {

  let date_ob = new Date();

  // adjust 0 before single digit date
  let date = ("0" + date_ob.getDate()).slice(-2);
  
  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  
  // current year
  let year = date_ob.getFullYear();
  
  // current hours
  let hours = date_ob.getHours();
  
  // current minutes
  let minutes = date_ob.getMinutes();
  
  
  // get date & time in YYYY-MM-DD HH:MM format
  let fullDate = year + "/" + month + "/" + date + " " + hours + ":" + minutes ;

  // convert date to string 

  let fullDateString = fullDate.toString();




  try {

    fs.appendFileSync("history.txt",callNumber + '-' + fullDateString + '-' , "UTF-8", {
      'flags': 'a+'
    });

  } catch (e) {
    alert('Failed to save the file !');
  }


fs.readFile('history.txt', 'utf8', function(err, data) {
    if (err) throw err;
    let res = data.split("-")

    console.log(res);


});

})

// -----------------Catch call value from contact List ---------------------- 

ipcMain.on('callNameInfo', function (e, callName) {

  let date_ob = new Date();

  // adjust 0 before single digit date
  let date = ("0" + date_ob.getDate()).slice(-2);
  
  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  
  // current year
  let year = date_ob.getFullYear();
  
  // current hours
  let hours = date_ob.getHours();
  
  // current minutes
  let minutes = date_ob.getMinutes();
  
  
  // get date & time in YYYY-MM-DD HH:MM format
  let fullDate = year + "/" + month + "/" + date + " " + hours + ":" + minutes ;

  // convert date to string 

  let fullDateString = fullDate.toString();




  try {

    fs.appendFileSync("history.txt",callName + '-' + fullDateString + '-' , "UTF-8", {
      'flags': 'a+'
    });

  } catch (e) {
    alert('Failed to save the file !');
  }


fs.readFile('history.txt', 'utf8', function(err, data) {
    if (err) throw err;
    let res = data.split("-")

    console.log(res);


});

})



