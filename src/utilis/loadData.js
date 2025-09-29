export const doctorLoader = async () => {
    const res = await fetch('/doctor.json');
    if(!res.ok){
        throw Error('Doctors could not found');
    }
    return res.json();
}

export const doctorDetailsLoader = async ({params}) => {
    const {regNo} = params
    const res = await fetch("/doctor.json");
    if(!res.ok){
        throw Error("Details not found");
    } 
    const data = await res.json();
    const doctor = data.find(d => d.regNo === regNo);

    if(!doctor){
        throw Error("Doctor not found");
    }
    return doctor;
}

export const blogData = async () => {
    const res = await fetch('/blog.json')
    if(!res.ok){
        throw Error("Blogs not Found!")
    }
    return res.json();
}