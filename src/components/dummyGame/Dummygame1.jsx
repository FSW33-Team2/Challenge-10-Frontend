import "../style/style1.css";
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";


export default  function Dummygame1(){
    return (
        <section className="game">
       
      {/* kolom username---------- */}

      <MDBCardBody className="data">
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>User Name</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />

        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Email</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">example@example.com</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />

        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Password</MDBCardText>
          </MDBCol>
          <MDBCol sm="9" className="custom-9">
            <input type="password" className="text-muted-9" value="88888" readOnly />
          </MDBCol>
        </MDBRow>
        <hr />

        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Role</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">Fighter</MDBCardText>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
 
      </section>
    );
    

}