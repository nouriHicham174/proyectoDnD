import React from 'react'

function DnDSheet() {
  return (
    <form className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row mb-3">
        <div className="flex-1 bg-gray-200 rounded-l-lg border border-black px-3 py-2 flex flex-col h-fit m-auto border-r-0">
          <input className="bg-white rounded px-2 py-1" type="text" placeholder="" />
          <label className="text-tiny uppercase mt-1">Nombre del personaje</label>
        </div>
        <div className="flex-[2] rounded-lg border border-black px-4 py-2">
          <div className="grid grid-cols-3">
            <div>
              <input className="border-b border-gray-400 w-full py-1 text-xs" type="text" placeholder="" />
              <label className="text-xs uppercase">Clase y nivel</label>
            </div>
            <div>
              <input className="border-b border-gray-400 w-full py-1 text-xs" type="text" placeholder="" />
              <label className="text-xs uppercase">Trasfondo</label>
            </div>
            <div>
              <input className="border-b border-gray-400 w-full py-1 text-xs" type="text" placeholder="" />
              <label className="text-xs uppercase">Jugador</label>
            </div>
            <div>
              <input className="border-b border-gray-400 w-full py-1 text-xs" type="text" placeholder="" />
              <label className="text-xs uppercase mb-1">Raza</label>
            </div>
            <div>
              <input className="border-b border-gray-400 w-full py-1 text-xs" type="text" placeholder="" />
              <label className="text-xs uppercase mb-1">Alineamiento</label>
            </div>
            <div>
              <input className="border-b border-gray-400 w-full py-1 text-xs" type="number" placeholder="" />
              <label className="text-xs uppercase mb-1">Experiencia</label>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Left Section */}
        <section className="flex-1 flex flex-col gap-3">
          {/* Attributes */}
          <div className="flex gap-4">
            <div className="bg-gray-200 rounded-lg p-2 h-fit">
              <ul className="flex flex-col gap-2">
                {[
                  { name: 'Fuerza', key: 'Strength' },
                  { name: 'Destreza', key: 'Dexterity' },
                  { name: 'Constitución', key: 'Constitution' },
                  { name: 'Sabiduría', key: 'Wisdom' },
                  { name: 'Inteligencia', key: 'Intelligence' },
                  { name: 'Carisma', key: 'Charisma' }
                ].map(attr => (
                  <li key={attr.key} className="bg-white border rounded-lg py-2 flex flex-col items-center mb-3">
                    <label className="text-xs font-bold">{attr.name}</label>
                    <input className="text-2xl font-medium text-center max-w-16 pb-3" type="number" placeholder="10" />
                    <input className="bg-white text-center text-sm border rounded-full max-w-12 mt-1 absolute transform -translate-y-[-50px]" type="text" placeholder="+0" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              {/* Inspiration */}
              <div className='flex w-full items-center'>
                <div className="rounded-lg border bg-gray-100 flex items-center">
                  <input type="checkbox" className='appearance-none size-3 m-2 cursor-pointer transition-all rounded-full border border-gray-500 checked:bg-black checked:border-black'/>
                </div>
                <label className="text-tiny uppercase text-center border w-full my-auto border-l-0 py-0.5">Inspiración</label>
              </div>
              {/* Proficiency Bonus */}
              <div className='flex w-full items-center'>
                <input className="rounded-lg border bg-gray-100 text-center text-small size-[28px]" type="text" placeholder="+2" />
                <label className="text-tiny text-center uppercase border w-full py-0.5 border-l-0">Bonif. competencia</label>
              </div>
              {/* Saving Throws */}
              <div className="border rounded-lg p-2 pb-1">
                <ul>
                  {[
                    'Fuerza',
                    'Destreza',
                    'Constitución',
                    'Sabiduría',
                    'Inteligencia',
                    'Carisma'
                  ].map(attr => (
                    <li key={attr} className="flex items-center gap-2 ">
                      <input type="checkbox" className="w-2.5 h-2.5 appearance-none rounded-full checked:bg-black checked:border-black border cursor-pointer" />
                      <input className="border-b w-8 text-center text-small" type="text" placeholder="+0" />
                      <label className="text-tiny w-20">{attr}</label>
                    </li>
                  ))}
                </ul>
                <div className="text-tiny font-bold text-center uppercase">Tiradas de salvación</div>
              </div>
              {/* Skills */}
              <div className="border rounded-lg p-2 pb-1">
                <ul>
                  {[
                    ['Acrobacias', 'Des'],
                    ['Trato con animales', 'Sab'],
                    ['Arcanos', 'Int'],
                    ['Atletismo', 'Fue'],
                    ['Engaño', 'Car'],
                    ['Historia', 'Int'],
                    ['Perspicacia', 'Sab'],
                    ['Intimidación', 'Car'],
                    ['Investigación', 'Int'],
                    ['Medicina', 'Sab'],
                    ['Naturaleza', 'Int'],
                    ['Percepción', 'Sab'],
                    ['Interpretación', 'Car'],
                    ['Persuasión', 'Car'],
                    ['Religión', 'Int'],
                    ['Juego de manos', 'Des'],
                    ['Sigilo', 'Des'],
                    ['Supervivencia', 'Sab'],
                  ].map(([skill, stat]) => (
                    <li key={skill} className="flex items-center gap-2">
                      <input type="checkbox" className="w-2.5 h-2.5 appearance-none rounded-full checked:bg-black checked:border-black border cursor-pointer" />
                      <input className="border-b w-8 text-center text-small" type="text" placeholder="+0" />
                      <label className="text-tiny w-max">{skill} <span className="text-gray-400">({stat})</span></label>
                    </li>
                  ))}
                </ul>
                <div className="text-tiny font-bold uppercase text-center">Habilidades</div>
              </div>
            </div>
          </div>
          {/* Passive Perception */}
          <div className='flex w-full items-center'>
            <input className="rounded-lg border bg-gray-100 text-center size-[36px]" type="text" placeholder="10" />
            <label className="text-tiny text-center uppercase border w-full py-1 border-l-0">Sabiduría pasiva (Percepción)</label>
          </div>
          {/* Other Proficiencies */}
          <div className='flex flex-col h-full justify-start'>
            <textarea className="w-full min-h-full border rounded p-2 resize-none text-small"></textarea>
            <label className="text-tiny text-center font-bold uppercase border border-t-0 rounded-b-lg w-fit px-2 mx-auto">Otras competencias e idiomas</label>
          </div>
        </section>

        {/* Middle Section */}
        <section className="flex-1 flex flex-col gap-3">
          {/* Combat */}
          <div className="bg-gray-100 rounded-lg p-2 flex flex-wrap">
            {/* Armor Class */}
            <div className="flex-1 flex flex-col items-center mx-1">
              <input className="bg-white border rounded size-full text-center text-4xl h-18" type="text" placeholder="10" />
              <label className="bg-white text-tiny border border-t-0 rounded-b-lg  max-w-15 px-2 mx-auto text-center">Clase de armadura</label>
            </div>
            {/* Initiative */}
            <div className="flex-1 flex flex-col items-center mx-1">
              <input className="bg-white border rounded size-full text-center text-4xl h-18" type="text" placeholder="+0" />
              <label className="bg-white text-tiny border border-t-0 rounded-b-lg w-fit px-2 mx-auto">Iniciativa</label>
            </div>
            {/* Speed */}
            <div className="flex-1 flex flex-col items-center mx-1">
              <input className="bg-white border rounded size-full text-center text-4xl h-18" type="text" placeholder="30" />
              <label className="bg-white text-tiny border border-t-0 rounded-b-lg w-fit px-2 mx-auto">Velocidad</label>
            </div>
            {/* HP */}
            <div className="w-full flex gap-2 mt-2">
              <div className="flex-1 bg-white border rounded p-2">
                <div className="flex items-center">
                  <label className="text-small whitespace-nowrap text-gray-400 mr-1 ">PG Máximos</label>
                  <input className="border-b border-gray-300 w-full text-center text-small" type="text" placeholder="10" />
                </div>
                <div className="flex flex-col-reverse">
                  <label className="text-tiny font-bold text-center uppercase">Puntos de Golpe Actuales</label>
                  <input className="w-full text-center text-lg " type="text" />
                </div>
              </div>
              <div className="flex-1 bg-white border rounded p-2 flex flex-col-reverse">
                <label className="text-tiny font-bold text-center uppercase">Puntos de Golpe temporales</label>
                <input className="w-full text-center text-lg" type="text" />
              </div>
            </div>
            {/* Second row */}
            <div className="w-full flex gap-2 mt-2">
              {/* Hit Dice */}
              <div className="flex-1 flex flex-col justify-between bg-white border rounded p-2">
                <div className="flex items-center">
                  <label className="text-small text-gray-400 mr-1">Total</label>
                  <input className="border-b border-gray-300 w-full text-center text-small" type="text" placeholder="2d10" />
                </div>
                <div className="flex flex-col-reverse">
                  <label className="text-tiny font-bold text-center uppercase">Dados de golpe</label>
                  <input className="w-full text-center" type="text" />
                </div>
              </div>
              {/* Death Saves */}
              <div className="flex-1 bg-white border rounded p-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 justify-end">
                    <label className="text-xs uppercase">Éxitos</label>
                    {[1,2,3].map(i => (
                      <input key={i} type="checkbox" className="appearance-none size-3 cursor-pointer transition-all rounded-full border border-gray-500 checked:bg-black checked:border-black" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <label className="text-xs uppercase">Fallos</label>
                    {[1,2,3].map(i => (
                      <input key={i} type="checkbox" className="appearance-none size-3 cursor-pointer transition-all rounded-full border border-gray-500 checked:bg-black checked:border-black" />
                    ))}
                  </div>
                  <div className="text-tiny uppercase font-bold text-center">Salvación contra muerte</div>
                </div>
              </div>
            </div>
          </div>
          {/* Attacks and Spellcasting */}
          <div className="border rounded-lg p-2">
            <table className="w-full mb-2">
              <thead>
                <tr>
                  <th className="text-tiny text-gray-400 uppercase">Arma/Cantrip</th>
                  <th className="text-tiny text-gray-400 uppercase">Ataque</th>
                  <th className="text-tiny text-gray-400 uppercase">Daño/Tipo</th>
                </tr>
              </thead>
              <tbody className="text-small">
                {[1,2,3,4,5].map(i => (
                  <tr key={i}>
                    <td className="pr-0.5"><input className="bg-gray-200 w-full px-1 text-xs" type="text" /></td>
                    <td className="pr-0.5"><input className="bg-gray-200 w-full px-1 text-xs" type="text" /></td>
                    <td><input className="bg-gray-200 w-full px-1 text-xs" type="text" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <textarea className="w-full bg-gray-200 rounded p-1 text-small resize-none"></textarea>
            <label className="block text-tiny font-bold text-center uppercase">Ataques y trucos</label>
          </div>
          {/* Equipment */}
          <div className="border rounded-lg p-2">
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
                    <li key={money} className="flex items-center mb-2">
                      <label className="border border-black border-r-0 rounded-l-lg px-1 min-w-[22px] text-gray-400 text-tiny text-center uppercase">{money}</label>
                      <input className="border rounded w-10 text-center" type="text" />
                    </li>
                  ))}
                </ul>
                {/* Attunement */}
                <div className="flex flex-col items-center gap-1 mt-3">
                    <div className='flex gap-2'>
                      {[1,2,3].map(i => (
                      <input key={i} type="checkbox" className="appearance-none size-3 cursor-pointer transition-all rounded-full border border-gray-500 checked:bg-black checked:border-black" />
                      ))}
                    </div>
                    <label className="text-tiny font-bold uppercase">Sintonización</label>
                  </div>
              </div>
              {/* Equipment */}
              <div className="flex-1 flex flex-col min-h-full">
                <textarea className="w-full h-full bg-gray-200 rounded p-1 text-small resize-none"></textarea>
                <label className="block text-tiny font-bold text-center uppercase">Equipo</label>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="flex-1 flex flex-col gap-3">
          {/* Flavor */}
          <div className="bg-gray-200 rounded-lg p-2">
            <div className="bg-white rounded-t-lg p-1 flex flex-col-reverse mb-2">
              <label className="text-tiny uppercase text-center">Personalidad</label>
              <textarea className="bg-gray-200 text-tiny rounded p-1 resize-none" rows={3}></textarea>
            </div>
            <div className="bg-white p-1 flex flex-col-reverse mb-2">
              <label className="text-tiny uppercase text-center">Ideales</label>
              <textarea className="bg-gray-200 text-tiny rounded p-1 resize-none" rows={3}></textarea>
            </div>
            <div className="bg-white p-1 flex flex-col-reverse mb-2">
              <label className="text-tiny uppercase text-center">Vínculos</label>
              <textarea className="bg-gray-200 text-tiny rounded p-1 resize-none" rows={3}></textarea>
            </div>
            <div className="bg-white rounded-b-lg p-1 flex flex-col-reverse">
              <label className="text-tiny uppercase text-center">Defectos</label>
              <textarea className="bg-gray-200 text-tiny rounded p-1 resize-none" rows={3}></textarea>
            </div>
          </div>
          {/* Features & Traits */}
          <div className="flex flex-col border rounded-lg p-2 gap-1 flex-1">
            <textarea className="w-full h-full bg-gray-200 rounded p-1 resize-none flex-1 text-tiny" />
            <label className="text-tiny uppercase font-bold text-center">Rasgos y habilidades</label>
          </div>
          {/* Backstory and Appearance
          <div className="border rounded-lg p-4">
            <label className="text-xs font-bold text-center mb-2">Historia y apariencia</label>
            <textarea className="w-full border rounded p-2" rows={6} placeholder="¿Cómo llegaste aquí?"></textarea>
          </div> */}
        </section>
      </div>
    </form>
  )
}

export default DnDSheet
