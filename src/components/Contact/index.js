import React, { useEffect, useRef } from 'react'
import { IconContext } from 'react-icons/lib';
import { ContactContainer, ContactTopLine, ContactH1, ContactWrapper, ContactType, ContactLogo, ContactContent, GoogleMapContainer, GoogleMap } from './ContactElements';
import { contactData } from './data';
const google = window.google;

const uluru = {
  lat: 18.5665489,
  lng: 73.7685269
};

const Contact = () => {
  const mapRef = useRef();
  const contentString = "<strong>Wash4Sure</strong>"
  useEffect(() => {

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    const map = new google.maps.Map(mapRef.current, {
      zoom: 15,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }, []);

  return (

    <ContactContainer id="contact">
      <ContactTopLine>Stay in touch</ContactTopLine>
      <ContactH1>
        Contact Us
      </ContactH1>
      <ContactWrapper>
        <IconContext.Provider value={{ color: "#008ed6", verticalAlign: 'middle', size: "2rem" }}>
          {contactData.map((item, index) =>
            <ContactType key={index}>
              <ContactLogo>{item.icon}</ContactLogo>
              <ContactContent><span dangerouslySetInnerHTML={{ __html: item.content }}></span></ContactContent>
            </ContactType>
          )}
        </IconContext.Provider>
      </ContactWrapper>
      <GoogleMapContainer>
        <GoogleMap ref={mapRef}></GoogleMap>
      </GoogleMapContainer>
    </ContactContainer>
  )
}

export default Contact;
