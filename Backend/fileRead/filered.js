const http = require('http')
const fs= require('fs')

const server = http.createServer((req,res)=>{
     const url=req.url
     const method=req.method

     if(req.url==='/'){
          //read the file
          fs.readFile(meaasage.txt,(err,data)=>{
               if(err){
                    res.statusCode=500
                    res.end('Error reading file')
               }
          const messages = data.split('\n').filter(msg => msg.trim() !== '');
          const messagesHtml = messages.reverse().map(msg => `<p>${msg}</p>`).join('');
          
          res.setHeader('Content-Type', 'text/html');
          res.write('<html>');
          res.write('<head><title>Message Board</title></head>');
          res.write('<body>');

          //show the file
          res.write('<h3>Recent Messages:</h3>');
            res.write(`<div>${messagesHtml || "No messages yet!"}</div>`);
            res.write('<hr>');
//form
          res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
            
            res.write('</body>');
            res.write('</html>');
            return res.end();

          })
     }
     else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // The input comes in as "message=your+text"
            const message = parsedBody.split('=')[1].replace(/\+/g, ' ');

            // 4. Append the message to the file with a newline
            // We use appendFile so we don't delete old messages
            fs.appendFile('messages.txt', message + '\n', (err) => {
                if (err) console.log(err);
                
                // 5. Redirect back to home to see the updated list
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
});

server.listen(3002, () => {
    console.log("Server running on http://localhost:3000");
})
