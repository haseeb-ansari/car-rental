

const Feul = () => {
  return (
    <>
        <div className="feul-container">
            <div className="tag-links">
                <h3>Feul</h3>
            </div>
            <ul>
                <li>
                    <input type="checkbox" id="gas" />
                    <label htmlFor="gas">Gas</label>
                </li>
                <li>
                    <input type="checkbox" id="hybrid" />
                    <label htmlFor="hybrid">Hybrid</label>
                </li>
                <li>
                    <input type="checkbox" id="diesel" />
                    <label htmlFor="diesel">Diesel</label>
                </li>
                <li>
                    <input type="checkbox" id="elec" />
                    <label htmlFor="elec">Eletric</label>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Feul