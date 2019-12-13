// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

console.log(Object.keys(app.models))
app.models.user.afterRemote('create', (ctx, user, next) => 
{
  console.log('New user is ', user)
  app.models.Profile.create({
      "first_name": `${user.username}`,
      "userId":user.id,
      "created_at": new Date()
  }, (err, res) =>
  {
    if(err)
    {
      console.log("Error Occurred:", err)
    }
    if(res)
    {
      console.log("Success:", res)
    }
    next()
  })
  
  
});

app.models.Role.find({where:{name:'admin'}}, (err, role) => 
{
  if(!err && role)
  {
    console.log('Found: ', role, 'Length: ', role.length)
    if(role.length === 0)
    {
      app.models.Role.create({

        name:'admin'

      }, (err2, result ) => 
      {
        if(!err2 && result)
        {
          app.models.user.findOne((err3, user) => 
          {
            if(!err3 && user)
            {
              result.principals.create({
                principalType: app.models.RoleMapping.USER,
                principalId: user.id
              }, (err4, principal) =>
              {
                if(!err4 && principal)
                {
                  console.log('Principal Created? ', err4, principal)
                } 
              })
            }
          })
        }
      })
    }
  }
  else
  {
    console.log('Not found')
  }
})


// app.models.Role.find({where:{name:'admin'}}, (err,role) =>
// {
//   if(!err && role)
//   {
//     console.log('No error, role is', role)
//     if(role.length === 0)
//     {
//       app.models.Role.create(
//       {
//         name:'admin'
//       }, (err2, result) =>
//       {
//         if(!err2 && result)
//         {
//           app.models.user.findOne((userErr, user)=>
//           {
//             if(!userErr && user)
//             {
//               result.principals.create({
//                 principalType: app.models.RoleMapping.USER,
//                 principalId: user.id,
//               }, (!err3, principal) =>
//               {
//                 console.log('New Principal:',err3,  principal)
//               })
//             }
//           }) 
//         }
//       })
//     }
//   }
// })