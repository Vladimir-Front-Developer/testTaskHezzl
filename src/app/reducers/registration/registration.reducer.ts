export const registrtionNode = 'registrationForm'

export interface RegistrationFormStateI {
    name: {
        value: string,
        validation: boolean
    };
    email: {
        value: string,
        validation: boolean
    };
    password: {
        value: string,
        validation: boolean
    };
}

const initState: RegistrationFormStateI = {
    name: {
        value: '',
        validation: false
    },
    email: {
        value: '',
        validation: false
    },
    password: {
        value: '',
        validation: false
    }
}

export const registrationReducer = (state = initState, action) => {
    return state;
}