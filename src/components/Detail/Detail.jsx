import React, { useEffect, useState } from 'react';
import './detail.scss';
import { db } from '../../db.js';
import emptyImage from '../../assets/img/empty_image.svg';

export const Detail = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState('fail');
  useEffect(() => {
    setLoading('loading');
    return db.collection('ztrata').onSnapshot(
      (query) => {
        setRecords(
          query.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          }),
        );
        setLoading('success');
      },
      (err) => {
        setLoading('fail');
      },
    );
  }, []);

  console.log(records);

  const recordLost = records[1];

  let content = <h2 className="detail__loading">Nic tu není 😢</h2>;

  if (loading === 'loading') {
    content = <h2 className="detail__loading">Načítám...⏳</h2>;
  } else if (loading === 'success') {
    content = (
      <div className="detail__container">
        <figure className="detail__figure">
          <img
            className="detail__image"
            width="200"
            height="200"
            src={
              recordLost.downloadURL === undefined
                ? emptyImage
                : recordLost.downloadURL
            }
            alt={`photo_${recordLost.type}`}
          />
          <figcaption className="detail__figcaption">
            Fotografie ztraceného zvířete
          </figcaption>
        </figure>
        <div className="detail__wrapper">
          <span className="detail__name">Druh zvířete: </span>
          <span className="detail__type">
            {' '}
            {recordLost.type === '' ? 'nevyplněno' : recordLost.type}
          </span>
        </div>
        <div className="detail__wrapper">
          <span className="detail__name">Popis zvířete: </span>
          <span className="detail__description">
            {' '}
            {recordLost.description === ''
              ? 'nevyplněno'
              : recordLost.description}
          </span>
        </div>
        <div className="detail__wrapper">
          <span className="detail__name">Kontaktní e-mail: </span>
          <a className="detail__email-link" href={`mailto:${recordLost.email}`}>
            <span className="detail__email"> {recordLost.email}</span>
          </a>
        </div>
        <div className="detail__wrapper">
          <span className="detail__name">Telefonický kontakt: </span>
          <span className="detail__phone"> {recordLost.phone}</span>
        </div>
        <div className="detail__wrapper">
          <span className="detail__name">Datum ohlášení: </span>
          <time className="detail__date" dateTime={recordLost.date}>
            {recordLost.date}
          </time>
        </div>
      </div>
    );
  }

  return (
    <section className="detail">
      <h1 className="detail__headline">Detail ztráty</h1>
      <hr className="detail__divider" />
      {content}
    </section>
  );
};
