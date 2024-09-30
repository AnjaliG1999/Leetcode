function findMaxConsecutiveOnes(nums: number[]): number {
    let output = 0;
    let tempMax = 0;

    nums.forEach((num) => {
        if (num) {learn
            tempMax += 1
            if(tempMax > output) output = tempMax
        } else tempMax = 0

    });
    return output
};
