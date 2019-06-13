const superagent = require('superagent')

superagent
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {console.log(response.body.message)})
            .catch(error => {console.log(error)})