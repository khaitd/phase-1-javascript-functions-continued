// code your solution here
function saturdayFun(thing = "roller-skate"){
    return `This Saturday, I want to ${thing}!`
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(sym) {
    const innerFunction = (adj = "special") => {
        return `You are ${sym}${adj}`
    }
    return (innerFunction)
}

