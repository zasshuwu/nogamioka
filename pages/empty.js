import { Button } from "@material-ui/core";
import { Autorenew } from "@material-ui/icons";

export default function Empty() {
    return <div style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh"}}>
        <h1> Wow, such empty </h1>
        <Button variant="contained" color="primary" onClick={(e) => {
            // e.preventDefault();
            window.location.replace("/");
        }}>Wanna go back?</Button>
    </div>
}