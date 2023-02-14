import Row from "react-bootstrap/Row";
import Service from "../Service/Service";
import { useState, useEffect } from "react";

function ServiceArea() {
  const [serviceInfo, setServiceInfo] = useState([]);
  useEffect(() => {
    fetch("ServiceData.json")
    .then(res => res.json())
    .then(data => {
      setServiceInfo(data);
    })
    .catch(err => console.log(err));
  }, []);
 
  return (
    <section>
      <h1 className="text-center my-5">My Services</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {serviceInfo.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </Row>
    </section>
  );
}

export default ServiceArea;
