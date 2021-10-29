const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const PORT = 8084

const app = express()

const url = "https://www.globo.com/"

axios(url).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
    $('.post ', html).each(function() {
        const title = $(this).text()
        const url = $(this).find('a').attr('href')
        articles.push({
            title,
            url
        })
    })
    console.log(articles)
}).catch(err => console.log(err))

app.listen(PORT, () => console.log(`🚀 Server is running on ${PORT} 🚀`))

