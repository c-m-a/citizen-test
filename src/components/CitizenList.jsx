export default function CitizenList({ citizens }) {
  console.log(citizens)
  return <div>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>SSN</th>
        </tr>
      </thead>
      <tbody>
        { citizens.map(c => (
          <tr key={c.ssn}>
            <td>{c.firstName}</td>
            <td>{c.lastName}</td>
            <td>{c.address}</td>
            <td>{c.ssn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div> 
}

