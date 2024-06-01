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
    <div className="flex flex-col items-center">
      <div className="">
        <p>
          <strong>First Name: </strong> <code>{props.graphData.givenName}</code>
        </p>
        <p>
          <strong>Last Name: </strong> <code>{props.graphData.surname}</code>
        </p>
        <p>
          <strong>Email: </strong>{" "}
          <code>{props.graphData.userPrincipalName}</code>
        </p>
        <p>
          <strong>Id: </strong>{" "}
          <code>{props.graphData.id.replace(/[^-]/g, "*")}</code>
        </p>
      </div>
    </div>
  );
};
