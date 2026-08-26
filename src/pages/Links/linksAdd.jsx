import { useState } from 'react';

export default function LinksAdd({ kategorien = [], onAdd, addsichtbar }) {
  const [neueKategorieAktiv, setNeueKategorieAktiv] = useState(false);

  return (
    <div>
      {addsichtbar && (
        <div>
          <form className='linkformular'
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get("name");
              const url = formData.get("url");

              const category = formData.get("category");
              const neueKategorie = formData.get("neueKategorie");

              const finalCategory = (category === "neu" && neueKategorie)
                ? neueKategorie
                : category;

              onAdd(name, url, finalCategory);
            }}
          >
            <h4>Neue Links</h4>

            <div>
              <div className="radiobuttons">
                {kategorien.map(kategorie => (
                  <div key={kategorie} className="kategorien">
                    <input
                      type="radio"
                      name="category"
                      value={kategorie}
                      id={kategorie}
                      onChange={() => setNeueKategorieAktiv(false)}
                      required
                    />
                    <label htmlFor={kategorie}>
                      {kategorie}
                    </label>
                  </div>
                ))}
              </div>

              

        <div className="kategorien">
  <input
    type="radio"
    name="category"
    value="neu"
    id="neueKategorieRadio"
    onChange={() => setNeueKategorieAktiv(true)}
    required
  />
  <label htmlFor="neueKategorieRadio">
    Neue Kategorie
  </label>
  {neueKategorieAktiv && (
    <input
      id="neueKategorie"
      name="neueKategorie"
      placeholder="Name der neuen Kategorie"
      required={neueKategorieAktiv}
    />
  )}
</div>
            </div>
            <hr />

            <div className='linksname'>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                placeholder="z.B. React Dokumentation"
                required
              />
            </div>

            <div className='linkurl'>
              <label htmlFor="url">URL</label>
              <input
                id="url"
                type="url"
                name="url"
                placeholder="https://..."
                required
              />
            </div>


            <div>
              <button className='btn' type="submit">
                Link speichern
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}