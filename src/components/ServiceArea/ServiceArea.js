import Row from "react-bootstrap/Row";
import Service from "../Service/Service";
import serviceOne from "../../images/serviceOne.jpg";
import serviceTwo from "../../images/serviceTwo.jpg";
import serviceThree from "../../images/serviceThree.jpg";

function ServiceArea() {
  const serviceInfo = [
    {
      image: serviceOne,
      title: "Sporting Events Photography",
      price: 300,
      details:
        "I'm the leading sporting event photographer in Bangladesh. I offer quality images and products, on-site printing and great pricing!",
    },
    {
      image: serviceTwo,
      title: "Live Match Photography",
      price: 100,
      details:
        "My live match photography is best in the world. The quality of the photos are just amazing and beautiful and ready to use for your next platform.",
    },
    {
      image: serviceThree,
      title: "Team Picture Day Photography",
      price: 150,
      details:
        "I offers top quality posed team & individual photography services for any size team and league. You will get best team photos from me.",
    },
  ];
  return (
    <section>
      <h1 className="text-center my-5">My Services</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {serviceInfo.map((service) => (
          <Service service={service} key={service.title} />
        ))}
      </Row>
    </section>
  );
}

export default ServiceArea;
