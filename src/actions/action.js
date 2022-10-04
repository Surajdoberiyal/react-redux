
export const incNumber = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decNumber = (num) => {
    return {
        type: 'DECREMENT',
        payload: num
        
    }
};


export const multiplyby2 = (num) => {
    return {
        type: 'MULTIPLY', 
        payload : num      
    }
};
