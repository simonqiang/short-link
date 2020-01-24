import React from 'react';
import {Accounts} from "meteor/accounts-base";
import {Meteor} from 'meteor/meteor';
import { Links } from "../api/links";
import LinksList from "./LinksList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";
import LinksListFilter from "./LinksListFilter";

export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links"/>
      <div className="page-content">
        <LinksListFilter/>
        <AddLink/>
        <LinksList/>
      </div>
    </div>
  )
};


// export default class Link extends React.Component {
//   render() {
//     return (
//       <div>
//         <PrivateHeader title="Your Links From Link"/>
//         <LinksList/>
//         <AddLink/>
//       </div>
//     )
//   }
// }
