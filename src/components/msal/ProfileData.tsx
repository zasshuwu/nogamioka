import React from "react";
/**
 * Renders information about the user obtained from MS Graph
 * @param props
 */
export const ProfileData = (props: {
  graphData: {
    givenName: string;
    surname: string;
    userPrincipalName: string;
    id: string;
  };
}) => {
  return (
    <div id="profile-div">
      <p>
        <strong>First Name: </strong> {props.graphData.givenName}
      </p>
      <p>
        <strong>Last Name: </strong> {props.graphData.surname}
      </p>
      <p>
        <strong>Email: </strong> {props.graphData.userPrincipalName}
      </p>
      <p>
        <strong>Id: </strong> {props.graphData.id.replace(/[^-]/g, "*")}
      </p>
    </div>
  );
};
