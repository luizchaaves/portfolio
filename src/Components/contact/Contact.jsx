import React, { useRef } from 'react';
import { SiGmail } from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineSend } from 'react-icons/ai';
import Message from '../message/Message';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        'service_nkicpn8',
        'template_ucgd93a',
        form.current,
        '9P_RE0LnW2tAY2jmO'
      )
      .then(
        (result) => {
          setShowPopup(!showPopup);
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const cards = [
    {
      id: 1,
      title: 'Email',
      icon: <SiGmail />,
      data: `locchavescarvalho@gmail.com`,
      link: 'mailto:locchavescarvalho@gmail.com',
    },
    {
      id: 2,
      title: 'LinkedIn',
      icon: <SiLinkedin />,
      data: '',
      link: 'https://www.linkedin.com/in/luiz-ot%C3%A1vio-chaves-carvalho-b812951b4',
    },
    {
      id: 3,
      title: 'Whatsapp',
      icon: <SiWhatsapp />,
      data: '',
      link: 'https://api.whatsapp.com/send?phone=5531973406987',
    },
  ];

  return (
    <section className="section__contact" id="contact">
      <div className="contact__container container">
        <div className="contact__container-title">
          <h2 className="contact__title">Contato</h2>
        </div>

        <div className="contact__content grid">
          <div className="contact__cards">
            {cards.map((card) => (
              <div key={card.id} className="contact__card">
                <div className="contact__card__div-icon">
                  <i className="contact__card-icon">{card.icon}</i>
                </div>
                <div>
                  <h3 className="contact__card-title">{card.title}</h3>
                  <span className="contact__card-data">{card.data}</span>
                  <div className="contact__card-button">
                    <a href={card.link} target="_blank" rel="noreferrer">
                      Fale comigo <AiOutlineArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="contact__content-form">
            <h3>Mande sua mensagem!</h3>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div">
                <label htmlFor="name" className="contact__form-label">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="contact__form-input"
                />
              </div>
              <div className="contact__form-div">
                <label htmlFor="email" className="contact__form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="contact__form-input"
                />
              </div>
              <div className="contact__form-div contact__form-area">
                <label htmlFor="message" className="contact__form-label">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="contact__form-input "
                ></textarea>
              </div>
              {loading ? (
                <button disabled className="button">
                  Enviando...
                </button>
              ) : (
                <button className="button">
                  Enviar mensagem <AiOutlineSend />
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      {showPopup && (
        <Message showPopup={showPopup} setShowPopup={setShowPopup} />
      )}
    </section>
  );
};

export default Contact;
