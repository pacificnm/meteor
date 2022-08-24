import { Meteor } from 'meteor/meteor';
import Axios from 'axios';

Meteor.startup(() => {

  Axios.get('https://api.rigado.com/v1/sites', {
    headers: {
      'X-Rigado-API-Token':'',
      'X-Rigado-API-Secret': '',
      },
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
  });
});
