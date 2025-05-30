export default {
  async fetch(request) {
    return new Response(
      `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Under Construction</title>
        <style>
          body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #fff;
            color: #333;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            padding: 2rem;
          }
          .container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            max-width: 1200px;
            width: 100%;
            gap: 2rem;
            flex-wrap: wrap;
          }
          .text {
            flex: 1;
            min-width: 300px;
          }
          .text h1 {
            font-size: 3rem;
            color: #ff7a00;
            margin-bottom: 1rem;
          }
          .text p {
            font-size: 1.2rem;
            color: #555;
          }
          .image {
            flex: 1;
            min-width: 300px;
            text-align: center;
          }
          .image img {
            max-width: 100%;
            height: auto;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="text">
            <h1>We're Building Something Great</h1>
            <p>Our website is currently under construction. We're working hard to launch soon. Stay tuned!</p>
          </div>
          <div class="image">
            <img src="https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2FF8BFC681AC6CE06B%21s06f1aabeaf46405a9f1576b69fa0b521%3Fithint%3Dphoto%26e%3DEKwEGY%26migratedtospo%3Dtrue&sw=bypassConfig&cid=F8BFC681AC6CE06B&id=F8BFC681AC6CE06B%21s06f1aabeaf46405a9f1576b69fa0b521&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2kvYy9mOGJmYzY4MWFjNmNlMDZiL0ViNnE4UVpHcjFwQW54VjJ0cC1ndFNFQk1USk5zTy1BaHctOTVsX3p1eWVBS1E%5FZT1FS3dFR1k&v=photos" alt="Under Construction" />
          </div>
        </div>
      </body>
      </html>`,
      {
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
        },
      }
    );
  },
};
