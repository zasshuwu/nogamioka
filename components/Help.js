export default function Help() {
  return (
    <div className="font-normal max-h-full w-full flex flex-col text-sm sm:text-lg">
      <code>
        Hi, glad you{"'"}re interested. Please find the available
        commands below 😊
      </code>
      <table className="my-4">
        <thead>
          <tr>
            <th>Command</th>
            <th>Synopsis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>:help</td>
            <td>Display help message.</td>
          </tr>
          <tr>
            <td>cd /etc/contact</td>
            <td>Show my contact details.</td>
          </tr>
          <tr>
            <td>cd /var/experience</td>
            <td>Retrieve my work experiences.</td>
          </tr>
          <tr>
            <td>cd /bin/awards</td>
            <td>Retrieve my accolade(s).</td>
          </tr>
          <tr>
            <td>cd /lib/projects</td>
            <td>Show my past and present projects.</td>
          </tr>
          <tr>
            <td>cd ~</td>
            <td>Return to home screen.</td>
          </tr>
          <tr>
            <td>curl -O uses</td>
            <td>Retrieve my cool setups.</td>
          </tr>
          <tr>
            <td>wget resume</td>
            <td>Resume download center.</td>
          </tr>
          <tr>
            <td>history</td>
            <td>Show history of commands, much like on Linux.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
