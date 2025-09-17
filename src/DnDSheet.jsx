import React from 'react'

function DnDSheet() {
  return (
    <form className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 bg-gray-100 rounded-l-lg border border-gray-300 p-4 flex flex-col justify-end">
          <label className="text-xs font-bold uppercase mb-1">Nombre del personaje</label>
          <input className="border rounded px-2 py-1" type="text" placeholder="¿Quién eres?" />
        </div>
        <div className="flex-[2] bg-gray-100 rounded-lg border border-gray-300 p-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-bold uppercase mb-1">Clase y nivel</label>
              <input className="border-b w-full px-2 py-1" type="text" placeholder="Clase y nivel" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase mb-1">Antecedentes</label>
              <input className="border-b w-full px-2 py-1" type="text" placeholder="Antecedentes" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase mb-1">Jugador</label>
              <input className="border-b w-full px-2 py-1" type="text" placeholder="Nombre jugador" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase mb-1">Raza</label>
              <input className="border-b w-full px-2 py-1" type="text" placeholder="Raza" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase mb-1">Alineamiento</label>
              <input className="border-b w-full px-2 py-1" type="text" placeholder="Alineamiento" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase mb-1">Experiencia</label>
              <input className="border-b w-full px-2 py-1" type="number" placeholder="XP" />
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <section className="flex-1 flex flex-col gap-4">
          {/* Attributes */}
          <div className="flex gap-4">
            <div className="bg-gray-200 rounded-lg p-2 w-32">
              <ul className="flex flex-col gap-2">
                {[
                  { name: 'Fuerza', key: 'Strength' },
                  { name: 'Destreza', key: 'Dexterity' },
                  { name: 'Constitución', key: 'Constitution' },
                  { name: 'Sabiduría', key: 'Wisdom' },
                  { name: 'Inteligencia', key: 'Intelligence' },
                  { name: 'Carisma', key: 'Charisma' }
                ].map(attr => (
                  <li key={attr.key} className="bg-white border rounded-lg p-2 flex flex-col items-center">
                    <label className="text-xs font-bold">{attr.name}</label>
                    <input className="text-2xl text-center font-bold border-b w-16" type="number" placeholder="10" />
                    <input className="text-center border rounded-full w-12 mt-1" type="text" placeholder="+0" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              {/* Inspiration */}
              <div>
                <label className="block text-xs text-center font-bold mb-1">Inspiración</label>
                <input type="checkbox" className="mx-auto block w-5 h-5 rounded-full border" />
              </div>
              {/* Proficiency Bonus */}
              <div>
                <label className="block text-xs text-center font-bold mb-1">Bonif. competencia</label>
                <input className="mx-auto block border rounded w-16 text-center" type="text" placeholder="+2" />
              </div>
              {/* Saving Throws */}
              <div className="border rounded-lg p-2">
                <div className="text-xs font-bold text-center mb-1">Tiradas de salvación</div>
                <ul>
                  {[
                    'Fuerza',
                    'Destreza',
                    'Constitución',
                    'Sabiduría',
                    'Inteligencia',
                    'Carisma'
                  ].map(attr => (
                    <li key={attr} className="flex items-center gap-2 mb-1">
                      <label className="text-xs w-20">{attr}</label>
                      <input className="border-b w-12 text-center" type="text" placeholder="+0" />
                      <input type="checkbox" className="w-4 h-4 rounded-full border" />
                    </li>
                  ))}
                </ul>
              </div>
              {/* Skills */}
              <div className="border rounded-lg p-2">
                <div className="text-xs font-bold text-center mb-1">Habilidades</div>
                <ul>
                  {[
                    'Acrobacias',
                    'Des',
                    'Trato con animales',
                    'Sab',
                    'Arcanos',
                    'Int',
                    'Atletismo',
                    'Fue',
                    'Engaño',
                    'Car',
                    'Historia',
                    'Int',
                    'Perspicacia',
                    'Sab',
                    'Intimidación',
                    'Car',
                    'Investigación',
                    'Int',
                    'Medicina',
                    'Sab',
                    'Naturaleza',
                    'Int',
                    'Percepción',
                    'Sab',
                    'Interpretación',
                    'Car',
                    'Persuasión',
                    'Car',
                    'Religión',
                    'Int',
                    'Juego de manos',
                    'Des',
                    'Sigilo',
                    'Des',
                    'Supervivencia',
                    'Sab'
                  ].map(([skill, stat]) => (
                    <li key={skill} className="flex items-center gap-2 mb-1">
                      <label className="text-xs w-36">{skill} <span className="text-gray-400">({stat})</span></label>
                      <input className="border-b w-12 text-center" type="text" placeholder="+0" />
                      <input type="checkbox" className="w-4 h-4 rounded-full border" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Passive Perception */}
          <div>
            <label className="block text-xs text-center font-bold mb-1">Sabiduría pasiva (Percepción)</label>
            <input className="mx-auto block border rounded w-16 text-center" type="text" placeholder="10" />
          </div>
          {/* Other Proficiencies */}
          <div>
            <label className="block text-xs text-center font-bold mb-1">Otras competencias e idiomas</label>
            <textarea className="w-full border rounded p-2" rows={4}></textarea>
          </div>
        </section>

        {/* Middle Section */}
        <section className="flex-1 flex flex-col gap-4">
          {/* Combat */}
          <div className="bg-gray-100 rounded-lg p-4 flex flex-wrap gap-4">
            {/* Armor Class */}
            <div className="flex-1 flex flex-col items-center">
              <label className="text-xs font-bold mb-1">Clase de armadura</label>
              <input className="border rounded w-16 text-center text-xl" type="text" placeholder="10" />
            </div>
            {/* Initiative */}
            <div className="flex-1 flex flex-col items-center">
              <label className="text-xs font-bold mb-1">Iniciativa</label>
              <input className="border rounded w-16 text-center text-xl" type="text" placeholder="+0" />
            </div>
            {/* Speed */}
            <div className="flex-1 flex flex-col items-center">
              <label className="text-xs font-bold mb-1">Velocidad</label>
              <input className="border rounded w-16 text-center text-xl" type="text" placeholder="30" />
            </div>
            {/* HP */}
            <div className="w-full flex gap-4 mt-4">
              <div className="flex-1 bg-white border rounded p-2">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-gray-400">HP Máx</label>
                  <input className="border-b w-16 text-center" type="text" placeholder="10" />
                </div>
                <div className="flex flex-col-reverse">
                  <label className="text-xs font-bold text-center">HP actual</label>
                  <input className="w-full text-center text-lg border-b" type="text" />
                </div>
              </div>
              <div className="flex-1 bg-white border rounded p-2 flex flex-col-reverse">
                <label className="text-xs font-bold text-center">HP temporal</label>
                <input className="w-full text-center text-lg border-b" type="text" />
              </div>
            </div>
            {/* Hit Dice */}
            <div className="flex-1 bg-white border rounded p-2 mt-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs text-gray-400">Total</label>
                <input className="border-b w-16 text-center" type="text" placeholder="2d10" />
              </div>
              <div className="flex flex-col-reverse">
                <label className="text-xs font-bold text-center">Dados de golpe</label>
                <input className="w-full text-center border-b" type="text" />
              </div>
            </div>
            {/* Death Saves */}
            <div className="flex-1 bg-white border rounded p-2 mt-4">
              <div className="text-xs font-bold text-center mb-2">Salvaciones contra muerte</div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <label className="text-xs">Éxitos</label>
                  {[1,2,3].map(i => (
                    <input key={i} type="checkbox" className="w-4 h-4 rounded-full border" />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-xs">Fallos</label>
                  {[1,2,3].map(i => (
                    <input key={i} type="checkbox" className="w-4 h-4 rounded-full border" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Attacks and Spellcasting */}
          <div className="border rounded-lg p-4 mt-4">
            <label className="block text-xs font-bold text-center mb-2">Ataques, acciones y cantrips</label>
            <table className="w-full mb-2">
              <thead>
                <tr>
                  <th className="text-xs text-gray-400">Arma/Cantrip</th>
                  <th className="text-xs text-gray-400">Ataque</th>
                  <th className="text-xs text-gray-400">Daño/Tipo</th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3,4,5].map(i => (
                  <tr key={i}>
                    <td><input className="border-b w-full px-1 text-xs" type="text" /></td>
                    <td><input className="border-b w-full px-1 text-xs" type="text" /></td>
                    <td><input className="border-b w-full px-1 text-xs" type="text" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <textarea className="w-full border rounded p-2" rows={2}></textarea>
          </div>
          {/* Equipment */}
          <div className="border rounded-lg p-4 mt-4">
            <label className="block text-xs font-bold text-center mb-2">Equipo</label>
            <div className="flex gap-4">
              {/* Money */}
              <div>
                <ul>
                  {[
                    'cp',
                    'sp',
                    'ep',
                    'gp',
                    'pp'
                  ].map(money => (
                    <li key={money} className="flex items-center gap-2 mb-1">
                      <label className="border rounded-l-lg px-2 py-1 text-xs w-10 text-center">{money}</label>
                      <input className="border rounded w-16 text-center" type="text" />
                    </li>
                  ))}
                </ul>
              </div>
              {/* Equipment Table 1 */}
              <div className="flex-1">
                <table className="w-full text-xs">
                  <thead>
                    <tr>
                      <th className="text-gray-400">Nombre</th>
                      <th className="text-gray-400">Cant.</th>
                      <th className="text-gray-400">Peso</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1,2,3,4,5,6,7,8,9,10].map(i => (
                      <tr key={i}>
                        <td><input className="border-b w-full px-1" type="text" /></td>
                        <td><input className="border-b w-full px-1" type="text" /></td>
                        <td><input className="border-b w-full px-1" type="text" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Equipment Table 2 */}
              <div className="flex-1">
                <table className="w-full text-xs">
                  <thead>
                    <tr>
                      <th className="text-gray-400">Nombre</th>
                      <th className="text-gray-400">Cant.</th>
                      <th className="text-gray-400">Peso</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1,2,3,4,5,6,7,8,9,10].map(i => (
                      <tr key={i}>
                        <td><input className="border-b w-full px-1" type="text" /></td>
                        <td><input className="border-b w-full px-1" type="text" /></td>
                        <td><input className="border-b w-full px-1" type="text" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="flex-1 flex flex-col gap-4">
          {/* Flavor */}
          <div className="bg-gray-200 rounded-lg p-4">
            <div className="bg-white rounded-t-lg p-2 flex flex-col-reverse mb-2">
              <label className="text-xs text-center">Personalidad</label>
              <textarea className="border rounded p-2" rows={2}></textarea>
            </div>
            <div className="bg-white p-2 flex flex-col-reverse mb-2">
              <label className="text-xs text-center">Ideales</label>
              <textarea className="border rounded p-2" rows={2}></textarea>
            </div>
            <div className="bg-white p-2 flex flex-col-reverse mb-2">
              <label className="text-xs text-center">Vínculos</label>
              <textarea className="border rounded p-2" rows={2}></textarea>
            </div>
            <div className="bg-white rounded-b-lg p-2 flex flex-col-reverse">
              <label className="text-xs text-center">Defectos</label>
              <textarea className="border rounded p-2" rows={2}></textarea>
            </div>
          </div>
          {/* Features & Traits */}
          <div className="border rounded-lg p-4">
            <label className="text-xs font-bold text-center mb-2">Rasgos y habilidades</label>
            <textarea className="w-full border rounded p-2" rows={6}></textarea>
          </div>
          {/* Backstory and Appearance */}
          <div className="border rounded-lg p-4">
            <label className="text-xs font-bold text-center mb-2">Historia y apariencia</label>
            <textarea className="w-full border rounded p-2" rows={6} placeholder="¿Cómo llegaste aquí?"></textarea>
          </div>
        </section>
      </div>
    </form>
  )
}

export default DnDSheet
