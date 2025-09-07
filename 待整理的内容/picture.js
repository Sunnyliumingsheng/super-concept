const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://duckduckgo.com/?q=tall&ia=images");

  // 等图片加载出来
  await page.waitForSelector("img.tile--img__img");

  // 获取图片链接
  const urls = await page.$$eval("img.tile--img__img", imgs =>
    imgs.map(img => img.src)
  );

  console.log(urls);
  await browser.close();
})();
