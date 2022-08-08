import { useState } from "react";
import { natures } from "../variables/natures";
import { items } from "../variables/items";
import Select from "react-select";

const styles = {
    btn: "mt-4 h-10 w-fit font-mono font-bold text-stone-800 bg-stone-300 rounded-xl p-2 shadow-xl shadow-stone-200/50",
    hover: "hover:bg-stone-400 hover:translate-y-0.5 hover:translate-x-0.5"
}

export default function SwShCompForm() {
    const initialFormData = {
        name: '',
        ability: '',
        moveOne: '',
        moveTwo: '',
        moveThree: '',
        moveFour: '',
        item: '',
        nature: '',
        hpEV: 0,
        atkEV: 0,
        defEV: 0,
        spAtkEV: 0,
        spDefEV: 0,
        spdEV: 0,
        briefDesc: ''
    },
    [formData, setFormData] = useState({ ...initialFormData }),
    [error, setError] = useState('error'),
    { name, ability, moveOne, moveTwo, moveThree, moveFour, item, nature, hpEV, atkEV, defEV, spAtkEV, spDefEV, spdEV, briefDesc } = formData,
    onSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({ ...initialFormData });
    },
    onChange = ({ target: {name, value} }) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    },
    onSelectChange = ({ name, value }) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    },
    options = [
        { title: 'Name', type: 'text', id: 'name', name: 'name', value: name, placeholder: `Pokemon's Name` },
        { title: `Ability`, type: 'text', id: 'ability', name: 'ability', value: ability, placeholder: `Pokemon's Ability` },
        { title: 'Move One:', type: 'text', id: 'moveOne', name: 'moveOne', value: moveOne, placeholder: 'Enter a Move' },
        { title: 'Move Two:', type: 'text', id: 'moveTwo', name: 'moveTwo', value: moveTwo, placeholder: 'Enter a Move' },
        { title: 'Move Three:', type: 'text', id: 'moveThree', name: 'moveThree', value: moveThree, placeholder: 'Enter a Move' },
        { title: 'Move Four:', type: 'text', id: 'moveFour', name: 'moveFour', value: moveFour, placeholder: 'Enter a Move' },
        { title: 'Held Item', type: 'text', id: 'item', name: 'item', value: item, placeholder: '', options: items },
        { title: 'Nature', type: 'text', id: 'nature', name: 'nature', value: nature, placeholder: '', options: natures },
        { title: 'HP Evs', type: 'number', id: 'hpEV', name: 'hpEV', value: hpEV, placeholder: '0' },
        { title: 'Atk EVs', type: 'number', id: 'atkEV', name: 'atkEV', value: atkEV, placeholder: '0' },
        { title: 'Def EVs', type: 'number', id: 'defEV', name: 'defEV', value: defEV, placeholder: '0' },
        { title: 'SpAtk EVs', type: 'number', id: 'spAtkEV', name: 'spAtkEV', value: spAtkEV, placeholder: '0' },
        { title: 'SpDef EVs', type: 'number', id: 'spDefEV', name: 'spDefEV', value: spDefEV, placeholder: '0' },
        { title: 'Spd EVs', type: 'number', id: 'spdEV', name: 'spdEV', value: spdEV, placeholder: '0' },
        { title: 'Brief Descritpion:', type: 'textarea', id: 'briefDesc', name: 'briefDesc', value: briefDesc, placeholder: 'Enter a brief description about your build.' },
    ]

    return (
        <div className='text-center py-40'>
            <section className='font-mono text-stone-200 space-y-4'>
                <h1 className='text-4xl text-extrabold'>Sword & Sheild</h1>
                <p>Create a custom Competitve Pokemon</p>
            </section>
            {/* {error ? error : null} */}
            <section className='form'>
                <form onSubmit={onSubmit}>
                    {options.map((option) => {
                        return (
                            option.hasOwnProperty('options') ? (
                                <div className='form-control w-1/2 m-auto'>
                                    <h4 className='text-extrabold text-stone-200 font-mono'>{option.title}</h4>
                                    <Select
                                        id={option.id}
                                        onChange={onSelectChange}
                                        placeholder={option.placeholder}
                                        options={option.options}
                                        required
                                    />
                                </div>
                            ) : option.type === 'textarea' ? (
                                <div className='form-group'>
                                    <h4 className='text-extrabold text-stone-200 font-mono'>{option.title}</h4>
                                    <textarea
                                        type={option.type}
                                        className='form-control rounded-md w-4/5'
                                        id={option.id}
                                        name={option.name}
                                        value={option.value}
                                        placeholder={option.placeholder}
                                        onChange={onChange}
                                        rows={3}
                                    />
                                </div>
                            ) : (
                                <div className='form-group'>
                                    <h4 className='text-extrabold text-stone-200 font-mono'>{option.title}</h4>
                                    <input
                                        type={option.type}
                                        className='form-control rounded-full text-center'
                                        id={option.id}
                                        name={option.name}
                                        value={option.value}
                                        placeholder={option.placeholder}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                            )
                        )
                    })}
                    <div className='form-group'>
                        <button type='submit' className={`${styles.btn} ${styles.hover}`}>Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}