'use strict';

const _ = require('lodash');
const request = require('supertest');

module.exports = {
    getGistsOfUser: (token, username) =>
        request('https://api.github.com')
            .get(`/users/${username}/gists`)
            .set({
                authorization: `Bearer ${token}`,
            })
            .set('Accept', 'application/vnd.github.v3+json'),

    createNewGist:(token, username) =>
        request('https://api.github.com')
            .post(`/users/${username}/gists`)
            .set({
                authorization: `Bearer ${token}`,
            })
            .set('Accept', 'application/vnd.github.v3+json')
            .set('description','Test description')
            .set('public', true)
            .set('files', {
                "hello_world.rb": {
                  "content": "class HelloWorld\n   def initialize(name)\n      @name = name.capitalize\n   end\n   def sayHi\n      puts \"Hello !\"\n   end\nend\n\nhello = HelloWorld.new(\"World\")\nhello.sayHi"
                },
                "hello_world.py": {
                  "content": "class HelloWorld:\n\n    def __init__(self, name):\n        self.name = name.capitalize()\n       \n    def sayHi(self):\n        print \"Hello \" + self.name + \"!\"\n\nhello = HelloWorld(\"world\")\nhello.sayHi()"
                },
              }),

    updateGistByGistId:(token, username, gistId) =>
        request('https://api.github.com')
            .patch(`/users/:${username}/gists/:${gistId}`)
            .set({
                authorization: `Bearer ${token}`,
            })
            .set('Accept', 'application/vnd.github.v3+json')
            
            .set('description','Test description')
            .set('files', {
                "hello_world_ruby.txt": {
                  "content": "Run `ruby hello_world.rb` or `python hello_world.py` to print Hello World",
                  "filename": "hello_world.md"
                },
                "hello_world_python.txt": null,
                "new_file.txt": {
                  "content": "This is a new placeholder file."
                }
              }
            ),
    
    listAllCommintsOfGist: (token, gistId) => 
        request('https://api.github.com')
            .get(`/gists/:${gistId}/commits`)  
            .set({
                authorization: `Bearer ${token}`,
            })
            .set('Accept', 'application/vnd.github.v3+json'),
};