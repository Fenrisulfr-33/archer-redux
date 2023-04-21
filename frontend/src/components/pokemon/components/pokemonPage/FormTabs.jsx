import { useState } from 'react';

export default function FormsTabs({forms}){
    const newTabs = forms.map((form, index) => {
        return {
            ...form,
            active: index === 0 ? true : false,
        }
    })
    const [tabs, setTabs] = useState(newTabs);
    const setActiveTab = (active) => {
        const activeTabs = newTabs.map((tab, index) => {
            if (index === active){
                return {
                    ...tab,
                    active: true
                }
            } else {
                return {
                    ...tab,
                    active: false
                }
            }
        });
        setTabs(activeTabs);
    }

    return (
        <div className={`row-flex bg-purple-100 space-x-2`}>
            {tabs.map((tab, index) => (
                <button className={`${tab.active ? 'label-purp' : 'button'}`}
                    onClick={''}
                >
                    {tab.formName}
                </button>
            ))}
        </div>
    )
}