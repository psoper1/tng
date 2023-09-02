import React, { useState } from "react";
import ImageText from "./ImageText";
import Nav from "./Nav";
import Question from "./Question";
import InputField from "./InputField";

function SignUp({ activeLink, setActiveLink }) {

    const [selectedOption, setSelectedOption] = useState("");
    const [teamName, setTeamName] = useState("");
    const [teamMembers, setTeamMembers] = useState("");

    const handleSubmit = () => {
        if (selectedOption === 'Free Agent') {
            console.log('Summoner: ', teamName)
        } else if (selectedOption === 'Creating a Team') {
            console.log('Team: ', teamName)
            console.log('Summoners: ', teamMembers)
        }
        console.log('Form Submitted')
    }

    const isSubmitDisabled = teamName.trim() === "";

    return (
        <>
            <ImageText activeLink={activeLink} setActiveLink={setActiveLink} />
            <Nav activeLink={activeLink} setActiveLink={setActiveLink} />
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center"><u>Tournament Sign Up Form</u></h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <Question
                                            question="Are you a Free Agent or Creating a Team?"
                                            options={["Free Agent", "Creating a Team"]}
                                            selectedOption={selectedOption}
                                            onSelectOption={setSelectedOption}
                                        />
                                    </div>
                                    {selectedOption === "Free Agent" && (
                                        <div className="form-group">
                                            <InputField label="What is your Summoner Name?" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
                                        </div>
                                    )}
                                    {selectedOption === "Creating a Team" && (
                                        <>
                                            <div className="form-group">
                                                <InputField
                                                    label="What is your Team Name?"
                                                    value={teamName}
                                                    onChange={(e) => setTeamName(e.target.value)}
                                                    maxLength={24}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <InputField
                                                    label="What are the Summoner Names of all team members? (Separate each Summoner Name with a comma ,)"
                                                    value={teamMembers}
                                                    onChange={(e) => setTeamMembers(e.target.value)}
                                                    isTextarea // Add this prop to make the input field a textarea
                                                />
                                            </div>
                                        </>
                                    )}
                                    {selectedOption != '' &&
                                        <div className="formbutton">
                                            <button className="buttonsubmit btn btn-primary btn-block mt-3" type="submit" disabled={isSubmitDisabled}>Submit</button>
                                        </div>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;