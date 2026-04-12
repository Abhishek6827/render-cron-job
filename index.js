const https = require('https');

const webhookUrl = 'https://n8n-joas.onrender.com/webhook/38c0edc8-623e-41a1-b5bc-44cba8300348';

https.get(webhookUrl, (res) => {
  console.log(`Status: ${res.statusCode}`);
  process.exit(0);
}).on('error', (e) => {
  console.error(e);
  process.exit(1);
});
