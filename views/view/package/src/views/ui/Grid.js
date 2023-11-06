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

const OrdersTables = () => {
  const { userId } = useParams();
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;


    useEffect(() => {
      const fetchData = async () => {
        try {
          // End Point
          const response = await axios.get('http://localhost:3001/home'); 
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
        .delete(`/api/users/${userId}`)
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


        // Pagination 
        // const currentItems = Array.isArray(data)
        //       ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        //       : [];

        //     const paginate = (pageNumber) => {
        //       setCurrentPage(pageNumber);
        //     };

        //     const shopALL = Array.isArray(data)
        //       ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        //       : [];

        //     const paginateShopALL = (pageNumber) => {
        //       setCurrentPage(pageNumber);
        //     };

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
              <tr style={{borderBottom: '1px solid #403F2B50'}}>
                {/* table color  */}
                <th style={{backgroundColor: 'transparent', color: '#403F2B', height:'3rem', fontFamily:'sans-serif'}}>Order ID</th>
                <th style={{backgroundColor: 'transparent', color: '#403F2B', height:'3rem', fontFamily:'sans-serif'}}>Total</th>
 
                {/* <th>Budget</th> */}
              </tr>
            </thead>
            <tbody >
              {data.map((tdata) => (
                <tr   key={tdata.id} style={{borderBottom: '1px solid #403F2B50'}}>
                  <td style={{backgroundColor: '#ffffff60'}}>
                    <div className="d-flex align-items-center p-2">
                      <img
                        // src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.title}</h6>
                        {/* <span className="text-muted">{tdata.email}</span> */}
                      </div>
                    </div>
                  </td>
                  {/* <td>{tdata.project}</td> */}
                       
                  <td style={{backgroundColor: '#ffffff60'}}>
                    <span className="text-muted">{tdata.id}</span>  </td>
                
                  
                                          

                  {/* <td>{tdata.budget}</td> */}
                </tr>
              ))}
            </tbody>
           
          </Table>
           {/* Pagination  */}
         {/* <ul className="pagination" class='list-none flex justify-center pb-12 '>
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
            i + 1 >= currentPage - 1 && i + 1 <= currentPage + 1 ? (
                <li
                key={i}
                className={i + 1 === currentPage ? 'border rounded-full active bg-[#5C5C42] text-[#ffffff]' : ''}
                onClick={() => {
                    paginate(i + 1);
                }}
                class={`${
                    i + 1 === currentPage ? 'w-8 h-8 border rounded-full bg-[#5C5C42] text-[#ffffff] shadow text-center p-1 m-1' : 'w-8 h-8 border rounded-full bg-[#ffffff] hover:bg-[#5C5C42] hover:text-[#ffffff] shadow text-[#4C7581] text-center p-1 m-1'
                }`}
                >
                {i + 1}
                </li>
            ) : null
            ))}
          </ul> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default OrdersTables;



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
// import { Container, Col, Row, Card, CardBody, CardTitle } from "reactstrap";

// const Grid = () => {
//   return (
//     <div>
//       {/* --------------------------------------------------------------------------------*/}
//       {/* Start Inner Div*/}
//       {/* --------------------------------------------------------------------------------*/}
//       {/* --------------------------------------------------------------------------------*/}
//       {/* Row*/}
//       {/* --------------------------------------------------------------------------------*/}
//       <Card>
//         <CardTitle tag="h6" className="border-bottom p-3 mb-0">
//           Grid Layout
//         </CardTitle>
//         <CardBody className="">
//           <Container>
//             <Row>
//               <Col>
//                 <div className="bg-light p-2 border">.col</div>
//               </Col>
//             </Row>
//             <Row className="mt-3">
//               <Col>
//                 <div className="bg-light p-2 border">.col</div>
//               </Col>
//               <Col>
//                 <div className="bg-light p-2 border">.col</div>
//               </Col>
//               <Col>
//                 <div className="bg-light p-2 border">.col</div>
//               </Col>
//               <Col>
//                 <div className="bg-light p-2 border">.col</div>
//               </Col>
//             </Row>
//             <Row className="mt-3">
//               <Col xs="3">
//                 <div className="bg-light p-2 border">.col-3</div>
//               </Col>
//               <Col xs="auto">
//                 <div className="bg-light p-2 border">
//                   .col-auto - variable width content
//                 </div>
//               </Col>
//               <Col xs="3">
//                 <div className="bg-light p-2 border">.col-3</div>
//               </Col>
//             </Row>
//             <Row className="mt-3">
//               <Col xs="6">
//                 <div className="bg-light p-2 border">.col-6</div>
//               </Col>
//               <Col xs="6">
//                 <div className="bg-light p-2 border">.col-6</div>
//               </Col>
//             </Row>
//             <Row className="mt-3">
//               <Col xs="6" sm="4">
//                 <div className="bg-light p-2 border">.col-6 .col-sm-4</div>
//               </Col>
//               <Col xs="6" sm="4">
//                 <div className="bg-light p-2 border">.col-6 .col-sm-4</div>
//               </Col>
//               <Col sm="4">
//                 <div className="bg-light p-2 border">.col-sm-4</div>
//               </Col>
//             </Row>
//             <Row className="mt-3">
//               <Col
//                 sm={{
//                   offset: 1,
//                   order: 2,
//                   size: 6,
//                 }}
//               >
//                 <div className="bg-light p-2 border">
//                   .col-sm-6 .col-sm-order-2 .col-sm-offset-2
//                 </div>
//               </Col>
//             </Row>
//             <Row className="mt-3">
//               <Col
//                 sm="12"
//                 md={{
//                   offset: 2,
//                   size: 8,
//                 }}
//               >
//                 <div className="bg-light p-2 border">
//                   .col-sm-12 .col-md-6 .col-md-offset-3
//                 </div>
//               </Col>
//             </Row>
//             <Row className="mt-3">
//               <Col
//                 sm={{
//                   offset: 1,
//                   size: "auto",
//                 }}
//               >
//                 <div className="bg-light p-2 border">
//                   .col-sm .col-sm-offset-1
//                 </div>
//               </Col>
//               <Col
//                 sm={{
//                   offset: 1,
//                   size: "auto",
//                 }}
//               >
//                 <div className="bg-light p-2 border">
//                   .col-sm .col-sm-offset-1
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </CardBody>
//       </Card>
//       {/* --------------------------------------------------------------------------------*/}
//       {/* Row*/}
//       {/* --------------------------------------------------------------------------------*/}

//       {/* --------------------------------------------------------------------------------*/}
//       {/* End Inner Div*/}
//       {/* --------------------------------------------------------------------------------*/}
//     </div>
//   );
// };

// export default Grid;
