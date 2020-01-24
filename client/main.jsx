import React from 'react';
import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Tracker} from "meteor/tracker";
import {Session} from 'meteor/session';

import {routes, onAuthChange} from "../imports/routes/routes";
import { Links } from "../imports/api/links";
import '../imports/startup/schema-config';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
  const name = Session.get('name');
  console.log('name: ' + name);
});

Session.set('name', 'Andrew Mead');

Meteor.startup(() => {
  Session.set('showVisible', true);
  ReactDOM.render(routes, document.getElementById('react-target'));
});
