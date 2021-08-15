import { Button } from "@material-ui/core";

export default function Empty() {
    return <>
        <h1> Wow, such empty </h1>
        <Button color="primary" onClick={(e) => {
            // e.preventDefault();
            window.location.replace("/");
        }}>Wanna go back?</Button>
    </>
}