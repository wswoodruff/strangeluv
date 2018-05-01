const StrangeAuth = require('strange-auth');
const AuthTypes = require('../action-types/auth');
const Deeply = require('../utils/deeply');

const authReducer = StrangeAuth.makeReducer();

module.exports = (state, action) => {

    state = authReducer(state, action);

    const { type } = action;
    const { payload } = action;

    switch (type) {

        case AuthTypes.REMEMBER_ME:

            return Deeply(state)
                .set('rememberMe', payload)
                .value();

        case AuthTypes.REGISTRATION_FAILURE:

            return Deeply(state)
                .set('error.message', payload)
                .value();

        case AuthTypes.REGISTRATION_SUCCESS:

            return Deeply(state)
                .set('error.message', null)
                .value();
    }

    return state;
};
