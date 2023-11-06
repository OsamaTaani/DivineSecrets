import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Elite React",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

// const deleteUser = (userId) => {
//   setUsers(users.filter((user) => user.id !== userId));
// };

const ProjectTables = () => {
  const { userId } = useParams();
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // End Point
          const response = await axios.get('http://localhost:3001/users'); 
          setData(response.data);
          console.log('array', data);
        } catch (error) {
          console.error('Error', error);
        }
      };
    
      fetchData();
    }, []);
    
    const deleteUser = (userId) => {

      // Send a DELETE request to your API to delete the user by ID
      axios
      // End Point
        .delete(`http://localhost:3001/users/${userId}/delete`)
        .then((response) => {
          if (response.status === 200) {
            // If the user was successfully deleted, update your local state
            setUsers(users.filter((user) => user.id !== userId));
          } else {
            console.log('Delete request was not successful.');
          }
        })
        .catch((error) => {
          console.error('Error deleting user:', error);
        });
    };
  return (
    <div style={{ backgroundColor: '#FEFAF0'}}>
      <Card  style={{ backgroundColor: '#FEFAF0'}}>
        <CardBody style={{ backgroundColor: 'transparent', boxShadow:'none'}}>
          <CardTitle tag="h5">Users</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the users
          </CardSubtitle>

          <Table style={{ backgroundColor: '#403F2B20'}} className="no-wrap mt-3 align-middle bg-[#403F2B20]" responsive borderless>
            <thead>
              <tr>
                {/* table color  */}
                <th style={{backgroundColor: 'transparent', color: '#403F2B', height:'3rem', fontFamily:'sans-serif'}}>Username</th>
                <th style={{backgroundColor: 'transparent', color: '#403F2B', height:'3rem', fontFamily:'sans-serif'}}>Email</th>
                <th style={{backgroundColor: 'transparent', color: '#403F2B', height:'3rem', fontFamily:'sans-serif'}} >Delete User</th>
 
                {/* <th>Budget</th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((tdata) => (
                <tr  key={tdata.id} style={{borderBottom: '1px solid #403F2B50'}}>
                  <td style={{backgroundColor: '#ffffff50'}}>
                    <div className="d-flex align-items-center p-2">
                      <img
                        // src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.username}</h6>
                        {/* <span className="text-muted">{tdata.email}</span> */}
                      </div>
                    </div>
                  </td>
                  {/* <td>{tdata.project}</td> */}
                       
                  <td style={{backgroundColor: '#ffffff60'}}><span className="text-muted">{tdata.email}</span>  </td>
                
                  {/* {users.map((user) => ( */}
                  <td style={{backgroundColor: '#ffffff60'}}> 
                  <button style={{backgroundColor: 'transparent', border:'none'}} onClick={(user) => deleteUser(user.id)}> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                      </svg>
                  </button> 
                  </td>    
                  {/* ))} */}
                                          

                  {/* <td>{tdata.budget}</td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;



{/* <td> */}
{/* {tdata.id} */}
  // *****
  {/* {tdata.status === "pending" ? (
    <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
  ) : tdata.status === "holt" ? (
    <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
  ) : (
    <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
  )} */}
{/* </td> */}