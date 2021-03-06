import React, { useState } from 'react';
import './information.scss';
import banknote from '../../assets/icons/banknote.svg';
import building from '../../assets/icons/building.svg';
import cat from '../../assets/icons/cat.svg';
import cpu from '../../assets/icons/cpu.svg';
import globe from '../../assets/icons/globe.svg';
import net from '../../assets/icons/net.svg';
import police from '../../assets/icons/police.svg';
import tag from '../../assets/icons/tag.svg';
import tree from '../../assets/icons/tree.svg';

export const Information = () => {
  const [visible, setVisible] = useState([true, false]);

  return (
    <>
      <section className="information">
        <h1 className="information__title">Jak se zachovat?</h1>
        <hr className="information__divider" />
        <div className="information__container">
          <div className="information__buttons">
            <button
              className={
                visible[0]
                  ? 'information__button information__button--active'
                  : 'information__button'
              }
              onClick={() => {
                setVisible([true, false]);
              }}
            >
              Ztráta
            </button>
            <button
              className={
                visible[1]
                  ? 'information__button information__button--active'
                  : 'information__button'
              }
              onClick={() => {
                setVisible([false, true]);
              }}
            >
              Nález
            </button>
          </div>

          <article
            className={
              visible[0]
                ? 'information__section'
                : 'information__section information__section--hidden'
            }
          >
            <div>
              <div className="information__text">
                <img src={tree} alt="ikona stromů" />
                <p>
                  Zůstaňte 2-3h na místě ztráty a pravidelně kontrolujte místo,
                  kde se vám zvíře ztratilo.
                </p>
              </div>
              <div className="information__text">
                <img src={police} alt="ikona policejni odznak" />
                <p>
                  Kontaktujte Městskou policii, která zajišťuje odchyt psů a
                  jejich převoz do útulků.
                </p>
              </div>
              <div className="information__text">
                <img src={building} alt="ikona domečku" />
                <p>
                  Informujte okolní útulky, veterináře a myslivecká sdružení, s
                  fotografií a popisem vašeho ztraceného zvířete nebo přímo
                  navštivte nejbližší útulek.
                </p>
              </div>
              <div className="information__text">
                <img src={cpu} alt="ikona čipu" />
                <p>
                  Pokud je vaše zvíře čipované, kontaktujte{' '}
                  <a
                    className="information__link"
                    href="https://www.narodniregistr.cz/"
                    target="_blank"
                    re="noreferrer noopener"
                  >
                    Národní registr majitelů čipovaných zvířat
                  </a>{' '}
                  a ztrátu nahlašte.
                </p>
              </div>
              <div className="information__text">
                <img src={net} alt="ikona sítě" />
                <p>
                  Zavolejte na městský nebo obecní úřad a zjistěte, zda v místě
                  ztráty neproběhl odchyt zvířat a váš mazlíček nezmizel tímto
                  způsobem.
                </p>
              </div>
              <div className="information__text">
                <img src={cat} alt="ikona kočky v ramečku" />
                <p>
                  Na frekventovaná místa v okolí ztráty můžete vylepit plakáty s
                  fotkou zvířete.
                </p>
              </div>
              <div className="information__text">
                <img src={banknote} alt="ikona bankovky" />
                <p>Pomoci vám může také vypsání odměny.</p>
              </div>
            </div>
          </article>
          <article
            className={
              visible[1]
                ? 'information__section'
                : 'information__section information__section--hidden'
            }
          >
            <div>
              <div className="information__text">
                <img src={tag} alt="ikona štítku" />
                <p>
                  Pokud zvíře není agresivní a nebojí se vás, podívejte se,
                  jestli má obojek se známkou nebo se pokuste najít jinou formu
                  jeho identifikace.
                </p>
              </div>
              <div className="information__text">
                <img src={cpu} alt="ikona čipu" />
                <p>
                  Zvíře může být očipované, vezměte jej k nejbližšímu
                  veterináři.{' '}
                </p>
              </div>
            </div>
            <div className="information__text">
              <img src={building} alt="ikona domečku" />
              <p>Případně jej dovezte do nejbližšího útulku.</p>
            </div>
            <div>
              <div className="information__text">
                <img src={net} alt="ikona sítě" />
                <p>
                  Pokud zvíře nespolupracuje a vy vidíte, že je opravdu
                  zatoulané, zavolejte pomocnou odchytovou službu.
                </p>
              </div>
              <div className="information__text">
                <img src={globe} alt="ikona globální" />
                <p>
                  Dejte o nálezu zvířete vědět svému okolí - jak na místě, tak
                  prostřednictvím internetu.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
