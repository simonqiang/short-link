import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import {Links} from '../imports/api/links';
import '../imports/startup/schema-config';

Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Links.findOne({_id});

    if(link){
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
      Meteor.call('links.trackVisitor', _id);
    } else {
      next();
    }
  });

  WebApp.connectHandlers.use((req, res, next) => {
    console.log('This is from my custom middleware!');
    // res.statusCode = 404;
    // res.setHeader('my-custom-header', 'Simon is here');
    // res.write('<h1>This is my middleware at work !</h1>');
    next();
  });
});

// const petSchema = new SimpleSchema({
//   name: {
//     type: String,
//     min: 1,
//     max: 200,
//     optional: true
//   },
//   age: {
//     type: Number,
//     min: 0
//   },
//   contactNumber: {
//     type: String,
//     optional: true,
//     regEx: SimpleSchema.RegEx.Phone
//   }
// });
//
// petSchema.validate({
//   name : "Simon",
//   age: 41,
//   contactNumber: '+60123565665'
// });

  // const employeeSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200
  //   },
  //   hourlyWage: {
  //     type: Number,
  //     min: 0
  //   },
  //   email: {
  //     type: String,
  //     regEx: SimpleSchema.RegEx.Email
  //   }
  // });
  //
  // employeeSchema.validate({
  //   name: 'Simon',
  //   hourlyWage: 9,
  //   email: 'simon@gmail.com'
  // });
