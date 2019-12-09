const models = require('./server.js').models;

const filter = 
{
    where:
    {
        name:{like: 'Sean'}
    },
    order:'id DESC',
    limit:3
}

models.Profile.find(filter, (err, found) =>
{
    console.log('Found', err, found)
})


// const sampleData = [

//     {
//         "name":"rob",
//         "email":"rob@rob.com"
//     },
//     {
//         "name":"rob",
//         "email":"ro2@rob.com"
//     },
//     {
//         "name":"tom",
//         "email":"tom2@tom.com"
//     },
//     {
//         "name":"paddy",
//         "email":"paddy2@paddy.com"
//     },
//     {
//         "name":"tom",
//         "email":"tom@tom.com"
//     },
// ]

// sampleData.map((obj) => 
// {
//     models.Profile.create(obj, (err, created) =>
//     {
//         console.log("Created?", err, created )
//     })
// })

// models.Profile.upsert({"id":"5dee39355c71794a14aa3773"}, (err, profile) =>
// {
//     if(err)
//     {
//         console.log('Error: ', err)
//     } 
//     else if(profile)
//     {
//         profile.email = "sean3@sean.com"
//         profile.save((ue, updated) => 
//         {
//             console.log("Updated? " , updated)
//         })
//     }
// })