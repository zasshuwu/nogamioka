import React, { useEffect } from 'react'
import { Terminal } from 'xterm'

function TerminalComponent() {
    useEffect(() => {
        var term = new Terminal();
        term.open(document.getElementById("terminal"));
        term.write("aanh@portfolio \x1B[1;3;31m$\x1B[0m ");
        term.onData(
            e => {
                if (e.charCodeAt(0) == 127)
                    term.write("\b \b");
                term.write(e)
            }
        )
    }, []);

    return <div id="terminal"/>
}

export default TerminalComponent