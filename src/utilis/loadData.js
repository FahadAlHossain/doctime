export const doctorLoader = async () => {
    const res = await fetch('/public/doctor.json');
    if(!res.ok){
        throw Error('Doctors could not found');
    }
    return res.json();
}