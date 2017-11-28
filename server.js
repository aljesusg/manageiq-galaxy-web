var http = require('http'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    // This is our React component, shared by server and browser thanks to browserify
    App = React.createFactory(require('./src/App'))

// Just create a plain old HTTP server that responds to two endpoints ('/' and
// '/bundle.js') This would obviously work similarly with any higher level
// library (Express, etc)
http.createServer(function(req, res) {
    
      // If we hit the homepage, then we want to serve up some HTML - including the
      // server-side rendered React component(s), as well as the script tags
      // pointing to the client-side code
      if (req.url == '/') {
    
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
    
        // `props` represents the data to be passed in to the React component for
        // rendering - just as you would pass data, or expose variables in
        // templates such as Jade or Handlebars.  We just use some dummy data
        // here (with some potentially dangerous values for testing), but you could
        // imagine this would be objects typically fetched async from a DB,
        // filesystem or API, depending on the logged-in user, etc.
    
        // Here we're using React to render the outer body, so we just use the
        // simpler renderToStaticMarkup function, but you could use any templating
        // language (or just a string) for the outer page template
        var html = ReactDOMServer.renderToStaticMarkup(body(null,
    
          // The actual server-side rendering of our component occurs here, and we
          // pass our data in as `props`. This div is the same one that the client
          // will "render" into on the browser from browser.js
          div({id: 'content', dangerouslySetInnerHTML: {__html:
            ReactDOMServer.renderToString(App)
          }}),
    
          
          // We'll load React from a CDN - you don't have to do this,
          // you can bundle it up or serve it locally if you like
          script({src: '//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js'}),
          script({src: '//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min.js'}),
    
          // Then the browser will fetch and run the browserified bundle consisting
          // of browser.js and all its dependencies.
          // We serve this from the endpoint a few lines down.
          script({src: '/bundle.js'})
        ))
    
        // Return the page to the browser
        res.end(html)
    
      // This endpoint is hit when the browser is requesting bundle.js from the page above
      } else {
        res.statusCode = 404
        res.end()
      }
    
    // The http server listens on port 3000
    }).listen(3000, function(err) {
      if (err) throw err
      console.log('Listening on 3000...')
    })   
