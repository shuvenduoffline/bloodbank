const BloodGroups = ['OPositive','ONegative','APositive','ANegative','BPositive','BNegative','ABPositive','ABNegative']
export const getBlooodGroup = num => {
    num = num % 8
    return BloodGroups[num]
}

