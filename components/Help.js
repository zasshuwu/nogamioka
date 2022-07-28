function createEntry({
  command = "",
  synopsis = "",
} = {}) { 
  return {
    command,
    synopsis,
  }
}

const man_entries = [
  // create entries from the table below and the primitives above
  createEntry({
    command: ":help",
    synopsis: "Display command lookup table."
  }),
  createEntry({
    command: "cd /etc/contact",
    synopsis: "Show my contact details."
  }),
  createEntry({
    command: "cd /var/experience",
    synopsis: "Retrieve my work experiences."
  }),
  createEntry({
    command: "cd /bin/awards",
    synopsis: "Retrieve my accolade(s)."
  }),
  createEntry({
    command: "cd /lib/projects",
    synopsis: "Show my past and present projects."
  }),
  createEntry({
    command: "cd ~",
    synopsis: "Return to home screen."
  }),
  createEntry({
    command: "curl -O uses",
    synopsis: "Retrieve my cool setups."
  }),
  createEntry({
    command: "wget resume",
    synopsis: "Resume download center."
  }),
  createEntry({
    command: "history",
    synopsis: "Show history of commands, much like on Linux."
  }),
]


export default function Help() {
  return (
    <div className="font-normal max-h-full w-full flex flex-col text-sm sm:text-lg">
      <code>
        Hi, glad you{"'"}re interested. Please find the available
        commands below 😊
      </code>
      <table className="my-4">
        <thead>
          <tr className="bg-blue-500">
            <th className="p-2">Command</th>
            <th className="p-2">Synopsis</th>
          </tr>
        </thead>
        <tbody>
          {man_entries.map((entry, index) => (
            <tr key={index} className="odd:bg-neutral-300/50 dark:odd:bg-neutral-500/50">
              <td>{entry.command}</td>
              <td>{entry.synopsis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
