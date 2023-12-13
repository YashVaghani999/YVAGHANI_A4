import React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import useSWR from 'swr';

export default function ArtworkCardDetail({ objectID }) {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );

  if (error) {
    return <Error statusCode={404} />;
  }

  if (data) {
    const {
      primaryImage,
      title,
      objectDate,
      classification,
      medium,
      artistDisplayName,
      creditLine,
      dimensions,
      artistWikidata_URL,
    } = data;

    return (
      <Card>
        {primaryImage && (
          <Card.Img src={primaryImage} alt={title} />
        )}
        <Card.Title>{title || 'N/A'}</Card.Title>
        <Card.Text>
          Date: {objectDate || 'N/A'}
          <br />
          Classification: {classification || 'N/A'}
          <br />
          Medium: {medium || 'N/A'}
          <br /><br />
          Artist: {artistDisplayName || 'N/A'}
          <br />
          Credit Line: {creditLine || 'N/A'}
          <br />
          Dimensions: {dimensions || 'N/A'}
          <br />
          {artistDisplayName && (
            <a href={artistWikidata_URL} target="_blank" rel="noreferrer">
              wiki
            </a>
          )}
        </Card.Text>
      </Card>
    );
  }

  return null;
};

