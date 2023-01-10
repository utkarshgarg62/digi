import React from 'react'
import "../styles/addquestion.css"
import { FaPlus, FaDumpster } from 'react-icons/fa'

const AddQuestion = () => {
    return (
        <div id="mainPanel" >
            <div id="panelInner">
                <div id="header">
                    <h3>Questions</h3>
                </div>
                <div id="questionsBody">
                    <ul id="questionsUl">

                    </ul>
                    <button class="btn btn-danger homeBtn" onclick="homePage()">Done</button>
                </div>
                <div id="addBtnDiv">
                    <button id="addBtn" class="btn btn-success fa fa-plus" onclick="AddQuestion()"><FaPlus /></button>
                    <button id="delAllBtn" class="btn btn-danger fa fa-trash" onclick="dellAll()"><FaDumpster /></button>
                </div>
            </div>
        </div>
    )
}

export default AddQuestion