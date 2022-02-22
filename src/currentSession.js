import { Auth } from 'aws-amplify';

const currentSession = () => {
    const { attributes } = await Auth.currentAuthenticatedUser();

    return (
        {attributes}
    )
}

export default currentSession