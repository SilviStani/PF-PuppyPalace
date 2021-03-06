import React from "react";
import './ReserveCard.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from "mdb-react-ui-kit";

export default function ReserveCard({ clinicName, date, hourly, clinicPhone, description }) {
  return (
    <div >
      <MDBCard className="card-reserve">
        <MDBCardBody className="body-reserve">
          <MDBCardTitle className="nameT">Datos de la reserva:</MDBCardTitle>
          <MDBCardTitle className="name"> {clinicName}</MDBCardTitle>
          <MDBCardText>Fecha: {date}</MDBCardText>
          <MDBCardText>Hora: {hourly}</MDBCardText>
          <MDBCardText>{description}</MDBCardText>
          <MDBCardText><img src="https://cdn-icons-png.flaticon.com/512/7129/7129257.png" alt="" height="30px" />{clinicPhone}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}