import React from 'react'
// import "./Home.css";
import { Avatar } from "@material-ui/core";
import "./User.css"
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";



const Usr = ({user}) => {
    // console.log(user)
    return (
<div className="table_right_box">
<div className="table_right_box_in">{user.id}</div>
<div className="table_right_box_in">{user.login}</div>
<div className="table_right_box_in">
  <div>
    <Avatar  src={user.avatar_url} />
  </div>
  <div className="Avatar">
    {/* <div className="Avt_name">{user.login}</div> */}
    {/* <p>{user.email}</p> */}
  </div>
</div>
{/* <div className="table_right_box_in"> {user.html_url}</div> */}
<div className="table_right_box_in"><NotificationsNoneIcon />
</div>
</div>




    )
}

export default Usr;




























// <div className="table_right_box">
// <div className="table_right_box_in">{user.id}</div>
// <div className="table_right_box_in">{user.login}</div>
// <div className="table_right_box_in">
//   <div>
//     <Avatar  src={user.avatar_url} />
//   </div>
//   <div className="Avatar">
//     <div className="Avt_name">{user.login}</div>
//     <p>{user.email}</p>
//   </div>
// </div>
// <div className="table_right_box_in"> {user.html_url}</div>
// <div className="table_right_box_in">{user.type}</div>
// <div className="table_right_box_in">{user.gravatar_id}</div>
// <div className="table_right_box_in"> action</div>
// </div>


