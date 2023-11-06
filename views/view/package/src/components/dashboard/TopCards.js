import { Card, CardBody } from "reactstrap";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// const TopCards = (props) => {
const TopCards = (props) => {
  const { userId } = useParams();
  const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // End Point
          const response = await axios.get(`/api/users/${userId}`); 
          setData(response.data);
          console.log('array', data);
        } catch (error) {
          console.error('Error', error);
        }
      };
    
      fetchData();
    }, []);


  return (
    <Card style={{backgroundColor: '#403F2050'}}>
      <CardBody >
        <div  className="d-flex">
          <div className={`bg-[#403F20] p-2 d-inline-block`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="34" fill="#fff" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>          </div>
          <div  className="ms-3">
            <h3 className="mb-0 font-weight-bold">hii {props.earning}</h3>
            <small className="text-muted">{props.subtitle}</small>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TopCards;
