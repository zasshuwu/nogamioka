import React, { useEffect } from 'react'
import { Terminal } from 'xterm'

function TerminalComponent() {
    useEffect(() => {
        var term = new Terminal();
        var num_char = 0;
        term.open(document.getElementById("terminal"));
        term.write("aanh@portfolio \x1B[1;3;31m$\x1B[0m ");
        term.onData(
            e => {
                if (e.charCodeAt(0) == 127 && num_char >= 1) {
                    console.log(num_char);
                    term.write("\b \b");
                    num_char = num_char - 1;
                }
                term.write(e);
                num_char = num_char + 1;
            }
        )
    }, []);

    return <div id="terminal"/>
}

export default TerminalComponent