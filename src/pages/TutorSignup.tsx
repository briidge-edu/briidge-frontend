import React, { SyntheticEvent, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AuthHeader from '../components/AuthHeader'
import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import NaviBar from '../components/NaviBar';
import LoginDetailForm from '../components/signup-forms/LoginDetailsForm';
import TutorPDForm from '../components/signup-forms/TutorPDForm';
import LocationForm from '../components/signup-forms/LocationForm';
import TuitionPreferencesForm from '../components/signup-forms/TutorTuitionPreferences';
import TutorConfirmation from '../components/signup-forms/TutorConfirmation';
import update from 'immutability-helper';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    },

    formControl: {
        marginTop: '2%',
        minWidth: 240,
    },

    button: {
        marginTop: '3%',
        marginLeft: '10px',
        marginBottom: '5%',
        borderRadius: '30px'
    },

}));

function getSteps() {
    return ['Login Details', 'Personal Details', 'Location Preferences', 'Tutoring Preferences', 'Confirmation'];
}

export default function TutorSignup() {
    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);

    const steps = getSteps();

    const checkButtonDisabled = (step: number) => {
        function isEmptyString(...args: string[]) {
            for (var i = 0; i < args.length; i++) {
                if (args[i] === '') return true;
            }
            return false;
        }
        switch (step) {
            case 0: return isEmptyString(state.email, state.password, state.password_confirmation);
            case 1: return isEmptyString(state.name, state.gender, state.education) || state.languages.length === 0;
            case 2: return state.locations.length === 0;
            case 3: return isEmptyString(state.lessonMode) || state.subjects.length === 0 || !state.priceRange;
        }
    }

    const [state, setState] = useState({
        // Step 1 - LoginDetailsForm
        email: "",
        password: "",
        password_confirmation: "",
        // Step 2 - StudentPDForm
        name: "",
        gender: "",
        education: "",
        languages: [],
        bio: "",
        // Step 3 - LocationForm
        locations: [],
        // Step 4
        lessonMode: '',
        subjects: [],
        priceRange: null,
    });

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    };

    const handleNext = (event: any) => {
        // Submitting 
        if (activeStep === steps.length - 1) {
            handleSubmit(event);
        } else {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };

    const handleChange = (event: any) => {
        setState(prev => ({
            ...prev,
            [event.target.id]: event.target.value,
        }))
    };

    const handleSelect = (event: React.ChangeEvent<{ name: string, value: string }>) => {
        setState(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    };

    const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newLocations = update(state.locations, { $push: [event.target.name] as any })
            setState({ ...state, locations: newLocations });
        } else {
            const removeIndex = state.locations.findIndex(x => x === event.target.name);
            const newLocations = update(state.locations, { $splice: [[removeIndex, 1]] })
            setState({ ...state, locations: newLocations });
        }
    };

    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSubjects = update(state.subjects, { $push: [event.target.name] as any })
            setState({ ...state, subjects: newSubjects });
        } else {
            const removeIndex = state.subjects.findIndex(x => x === event.target.name);
            const newSubjects = update(state.subjects, { $splice: [[removeIndex, 1]] })
            setState({ ...state, subjects: newSubjects });
        }
    };

    const handleModuleChange = (event: any, selected: string[]) => {
        setState({ ...state, subjects: selected as any });
    }

    const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log("Submitted")
    }

    const getStepContent = (stepIndex: number) => {
        switch (stepIndex) {
            case 0:
                return <LoginDetailForm state={state} handleChange={handleChange} />
            case 1:
                return <TutorPDForm state={state} handleChange={handleChange}
                    handleEducationChange={handleSelect}
                    handleLanguageChange={handleSelect}
                    handleRadio={handleRadio} />
            case 2:
                return <LocationForm state={state} handleLocationChange={handleLocationChange} />
            case 3:
                return <TuitionPreferencesForm state={state}
                    handleRadio={handleRadio}
                    handleSubjectChange={handleSubjectChange}
                    handleModuleChange={handleModuleChange}
                    handleChange={handleChange}
                    handlePriceChange={handleSelect} />
            case 4:
                return <TutorConfirmation state={state} />
        }
    }

    console.log(state)

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <NaviBar />
            <AuthHeader text="Tutor Sign-Up" />
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {getStepContent(activeStep)}
            </div>

            <Button
                variant="contained" color="primary" className={classes.button} onClick={handleBack}
                style={activeStep === 0 ? { display: 'none' } : { display: 'inline' }}
            >
                Back
            </Button>

            <Button
                variant="contained" color={activeStep === steps.length - 1 ? 'secondary' : 'primary'}
                className={classes.button} onClick={handleNext}
                disabled={checkButtonDisabled(activeStep)}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
        </form>
    )
}