import React from 'react'
import { useState } from 'react'

import moment from 'moment'

const SortTaskButton = (props) => {
    const [showDrop, setShowDrop] = useState(false)

    const showDropdown = () => {
        setShowDrop(true)
    }

    const hideDropdown = () => {
        setShowDrop(false)
    }

    const sortByDueTime = () => {
        console.log('SortTaskButton: Sorting by due time')
        props.setTasks([...props.tasks].sort((a,b) => (moment(a.day).isAfter(moment(b.day))) ? 1 : -1))
        hideDropdown()
    }

    const sortByPriority = () => {
        console.log('SortTaskButton: Sorting by priority')
        props.setTasks([...props.tasks].sort((a,b) => (a.priority < b.priority) ? 1 : -1))
        hideDropdown()
    }

    const sortByAlphabet = () => {
        console.log('SortTaskButton: Sorting by alphabetical order')
        props.setTasks([...props.tasks].sort((a,b) => (a.text > b.text) ? 1 : -1))
        hideDropdown()
    }

    return (
        <div className="relative" onMouseOver={showDropdown} onMouseLeave={hideDropdown}>
            <button className="inline-flex items-center h-10 px-3 py-4 mb-3 text-gray-400 border border-indigo-100 transition-colors duration-150 bg-white rounded-lg focus:outline-none hover:border-indigo-500 hover:text-indigo-700">
                <span className="truncate">{props.buttonText}</span>
                <svg className="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
            </button>

            {showDrop &&
                <div className="absolute flex flex-col w-full py-2 mt-0 text-gray-700 bg-white border rounded-lg shadow-lg">
                    <div className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 hover:text-indigo-700" onClick={sortByAlphabet}>A-Z</div>
                    <div className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 hover:text-indigo-700" onClick={sortByDueTime}>Due First</div>
                    <div className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 hover:text-indigo-700" onClick={sortByPriority}>High Priority</div>
                </div>
            }
        </div>
    )
}

export default SortTaskButton

SortTaskButton.defaultProps ={
    buttonText: "Sort by",
}