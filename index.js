const puppeteer = require('puppeteer');

(async () => {
  
  const browser = await puppeteer.launch({headless: false, devtools: true});
  const page = await browser.newPage();
  debugger;
  for(let i=0; i<30; i++){
    await page.goto('https://www.telewebion.com/program/all-episodes/64988', {timeout: 500000});
    await page.evaluate((i) => {
      debugger;
      let elements = document.getElementsByClassName('image-frame');
      
      elements[i].click()
    }, i);
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await page.evaluate(() => {
  
      let download = document.getElementsByClassName('fa-cloud-download');
      console.log(download)
      download[0].click()
      let modal = document.getElementsByClassName('h-100 w-100 border-0 pointer')
      console.log(modal)
      // debugger
      modal[2].click()
      
    });
    await page.waitFor(600000)
  }
  // await page.waitForSelector('identifierId')
  // // await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
  // await page.$eval('#identifierId', el => el.value = 'test@example.com');
  // await page.keyboard.press('Enter')    
  // await page.evaluate(() => {
  //   // document.querySelector('#identifierId').value = 'bahrami.ehssan';
  // });
})();