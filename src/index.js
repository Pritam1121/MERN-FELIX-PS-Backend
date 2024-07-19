// import http from 'http'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'


dotenv.config();
const app = express();

const hostname=process.env.HOSTNAME;
const port=process.env.PORT;



app.use(cors())

app.get('/',(req,resp)=>{
    resp.send("This is the Home page...!")
})

app.get('/about',(req,resp)=>{
    resp.send("This is the About US page...!")
})

app.get('/movies',(req,resp)=>{
    
    const Movies=[
            {
                cover:"https://m.media-amazon.com/images/M/MV5BN2RjZDJhYzUtOTQ5Yy00OWM3LWE5OTctM2Y0YWVmNzAzODllXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
            title:"Sita-Raman",
            link:"https://www.primevideo.com/",
           
            }
            ,
            {
                cover:"https://upload.wikimedia.org/wikipedia/en/c/c3/Ved_film_poster.jpg",
            title:"Veed",
            link:"https://www.primevideo.com/",
           
            }
            ,
           
            {
                cover:"https://m.media-amazon.com/images/M/MV5BMDgxYTI1ODMtNGFhNC00ZWRkLWE4YjktZGI5NTlmNjdmMDYxXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
            title:"Fighter",
            link:"https://www.youtube.com/watch?v=6amIq_mP4xM",
            
            },
            {
                cover:"https://assets.telegraphindia.com/telegraph/2024/Jun/1719487096_kalki-1.jpg",
            title:"Kalki",
            link:"https://www.youtube.com/watch?v=kQDd1AhGIHk",
            
            }
            
    ]


    resp.send(Movies)
})


app.listen(port,hostname,()=>{
     console.log(`server is listining http://${hostname}:${port}`)
})
