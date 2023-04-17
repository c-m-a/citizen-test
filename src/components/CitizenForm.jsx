export default function CitizenForm() {
  return <div className="citizenContainer">
    <form className="citizenForm">
      <input type="text" name="firstName" value="" placeholder="First Name" />
      <input type="text" name="lastName" value="" placeholder="Last Name" />
      <input type="text" name="address" value="" placeholder="Address" />
      <input type="text" name="ssn" value="" placeholder="SSN" />
      <div class="citizenFormButtons">
        <button>Reset</button>
        <button>Save</button>
      </div>
    </form>
  </div>
}

