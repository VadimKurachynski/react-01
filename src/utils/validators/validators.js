

export const required1=value=>{
    if(value) return undefined;
    return "Field is required";
}

export const maxLengthCreator=(maxLength)=>(value)=>{

    if(value.length>maxLength) return `max length is ${maxLength} symbols`;
    return undefined;
}



