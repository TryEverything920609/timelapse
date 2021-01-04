module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture }) {
    await page.setViewport({ width: 1920, height: 1080 })
    await page.goto('https://glitch.com/@dtinth', { waitUntil: 'networkidle0' })
    await capture(page, 'profile')
  },
})
