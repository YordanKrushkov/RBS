import { sendEmail } from './API';

const Email = async (state) => {

    const email = await fetch(sendEmail, {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let extra = await email;
    return extra;
}

export default Email;

