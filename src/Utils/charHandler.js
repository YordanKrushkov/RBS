const charHandler = (propertie) => {
    let char, bath = '';
    if (propertie.bedrooms && propertie.bedrooms !== 'Studio') {
        char = propertie.bedrooms.charAt(0);
    } else {
        char = '1';
    }
    if (propertie.bathroom) {
        bath = propertie.bathroom.charAt(0);
    }
    return { char, bath };
}

export default charHandler