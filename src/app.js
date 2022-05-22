const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()
const request = require ('request')
const port = process.env.PORT || 3000
const publicDirectory = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../tamplates/views')
// const news = require('./tools/news')
app.use(express.static(publicDirectory))
app.set('view engine', 'hbs');
app.set('views',viewsPath)


const url = 'https://newsapi.org/v2/top-headlines?country=eg&apiKey=e791f5e1b84342129563ba9bbb6831ec'
    request({url,json:true} , (req,res)=>
    {
      // if(error)
      // {
      //  console.log(res.body.error.message) 
      // }
        const news = res.body.articles
        // console.log(news)

        app.get('/news' , (req , res)=>
        {
            res.render('news',{news})
        })
    })










app.listen(port, () => {
    console.log(`Examplee app listening on port ${port}`)
  })