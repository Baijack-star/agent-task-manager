const localtunnel = require('localtunnel');

async function startTunnel() {
  try {
    const tunnel = await localtunnel({
        port: 3000,
        subdomain: 'sour-dragons-tease'
    });
    
    console.log(`[${new Date().toLocaleString()}] Tunnel started: ${tunnel.url}`);
    
    tunnel.on('close', () => {
      console.log(`[${new Date().toLocaleString()}] Tunnel closed`);
    });
    
    // Keep the process running
    process.on('SIGINT', () => {
      console.log(`[${new Date().toLocaleString()}] Closing tunnel...`);
      tunnel.close();
      process.exit(0);
    });
    
  } catch (error) {
    console.error(`[${new Date().toLocaleString()}] Tunnel error:`, error.message);
    // Retry after 5 seconds
    setTimeout(startTunnel, 5000);
  }
}

startTunnel();