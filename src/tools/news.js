// const request = require ('request')
// const news = (news)=>
// {
//     const url = 'https://newsapi.org/v2/top-headlines?country=eg&apiKey=e791f5e1b84342129563ba9bbb6831ec'
//     request({url,json:true} , (error,data)=>
//     {
//         if(error)
//         {
//           console.log('Error has occurred')
//         }
//         else if(data.body.error)
//         {
//          console.log(data.body.error.message )
//         }
//         // else if(data.body.articles.length === 0)
//         // {
//         //   console.log('Not Fout This Article')
//         //  }
//         else 
//         {
//         console.log( data.body.articles.title)
//         }
//     })

//     app.get('/' , (req , res)=>
// {
//     res.render('/news' , (news))
// })

// }

// module.exports = news