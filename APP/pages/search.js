import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const AdvancedSearch = () => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();

  const submitForm = (data) => {
    let queryString = '';
    if (data.searchBy) {
      queryString += `searchBy=${data.searchBy}`;
    }

    if (data.geoLocation) {
      queryString += `&geoLocation=${data.geoLocation}`;
    }

    if (data.medium) {
      queryString += `&medium=${data.medium}`;
    }

    queryString += `&isOnView=${data.isOnView}`;
    queryString += `&isHighlight=${data.isHighlight}`;
    queryString += `&q=${data.q}`;

    router.push(`/artwork?${queryString}`);
  };

  return (
      <Form onSubmit={handleSubmit(submitForm)}>
      <Row>
        <Col>
        <Form.Group className="mb-3">
  <Form.Label>Search Query</Form.Label>
  <Form.Control
    type="text"
    name="q"
    {...register("q", { required: true })}
    className={errors && errors.q && "is-invalid"}
  />
</Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Form.Label>Search By</Form.Label>
          <Form.Select name="searchBy" className="mb-3">
            <option value="title">Title</option>
            <option value="tags">Tags</option>
            <option value="artistOrCulture">Artist or Culture</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Geo Location</Form.Label>
            <Form.Control type="text" placeholder="" name="geoLocation" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Medium</Form.Label>
            <Form.Control type="text" placeholder="" name="medium" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Check
            type="checkbox"
            label="Highlighted"
            name="isHighlight"
            {...register("isHighlight")}
          />
          <Form.Check
            type="checkbox"
            label="Currently on View"
            name="isOnView"
            {...register("isOnView")}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AdvancedSearch;
