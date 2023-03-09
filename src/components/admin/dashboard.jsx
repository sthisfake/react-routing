import React from "react";
import SideBar from "./sidbar";
import Posts from "./posts"
import Users from "./users"
import { Route } from "react-router-dom";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar/>
      <Route path="/admin/posts" component={Posts} />
      <Route path="/admin/users" component={Users} />
    </div> 
  );
};

export default Dashboard;
