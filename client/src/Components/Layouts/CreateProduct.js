import React, { Fragment, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

function CreateProduct() {
  const [productState, setProductState] = useState({
    service: "",
    assign: "",
    date: "",
    customer: "",
    price: "",
    status: "",
  });

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setProductState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    console.log(productState);
    // await postAPI();
    setProductState({
      service: "",
      assign: "",
      date: "",
      customer: "",
      price: "",
      status: "",
    });
    // await getAPI();
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col xl={12} className="mt-5 mb-5">
            <Form inline onSubmit={(e) => handleOnSubmit(e)}>
              <Col lg={12} className="d-flex">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="service" className="mr-sm-2">
                    Service
                  </Label>

                  <Input
                    type="text"
                    name="service"
                    placeholder="Enter service name"
                    value={productState.service}
                    onChange={handleOnChange}
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="assign" className="mr-sm-2">
                    Assign
                  </Label>

                  <Input
                    type="text"
                    name="assign"
                    placeholder="Assign to?"
                    value={productState.assign}
                    onChange={handleOnChange}
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="date" className="mr-sm-2">
                    Date
                  </Label>

                  <Input
                    type="date"
                    name="date"
                    placeholder="Enter Date"
                    value={productState.date}
                    onChange={handleOnChange}
                  />
                </FormGroup>
              </Col>

              <Col lg={12} className="d-flex mt-5">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="customer" className="mr-sm-2">
                    Customer
                  </Label>

                  <Input
                    type="number"
                    name="customer"
                    placeholder="Enter no. of customer"
                    value={productState.customer}
                    onChange={handleOnChange}
                  />
                </FormGroup>

                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="price" className="mr-sm-2">
                    Price
                  </Label>

                  <Input
                    type="text"
                    name="price"
                    placeholder="Enter the price"
                    value={productState.price}
                    onChange={handleOnChange}
                  />
                </FormGroup>

                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="status" className="mr-sm-2">
                    Status
                  </Label>

                  <Input
                    type="text"
                    name="status"
                    placeholder="Status"
                    value={productState.status}
                    onChange={handleOnChange}
                  />
                </FormGroup>
              </Col>

              <Col lg={12} className="mt-5 text-center">
                <Button>Submit</Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default CreateProduct;
