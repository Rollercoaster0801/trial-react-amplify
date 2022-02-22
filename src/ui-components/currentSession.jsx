import { Auth } from 'aws-amplify';

const { attributes } = await Auth.currentAuthenticatedUser();

const currentSession = () => {
    return (
        {attributes}
    )
}

export default currentSession