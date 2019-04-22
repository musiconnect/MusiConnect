import React, { Component } from 'react';

function createUser(){
  
    <script src = "script.js"></script>
    const Chatkit = require('@pusher/chatkit-server');

    
    const chatkit = new Chatkit({
        instanceLocator: "v1:us1:eb7f4a94-a90b-450c-8e15-144ac87018b2",
        key: "e79d4f6c-5834-41f7-bb89-58cb70abd1e0:9m+Ee5nNCNveC2uH3zXwIkz2h/nnZXDjIKPaKb7cJYE=",
    })
     
    chatkit.createUser({
    id: profile.getEmail(),
    
    })
   .then(() => {
    console.log('User created successfully');
  }).catch((err) => {
    console.log(err);
  });
    
}

createUser();