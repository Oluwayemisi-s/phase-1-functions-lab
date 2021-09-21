// Code your solution in this file!

function distanceFromHqInBlocks(pickup){

    if (pickup >= 42){
       
        return pickup - 42
    } 
    if (pickup < 42){
        
        return 42 - pickup
    }
}

function distanceFromHqInFeet(pickup){
    let distance = distanceFromHqInBlocks(pickup)
    console.log (distance * 264)
    return (distance * 264)
}

function distanceTravelledInFeet(start, destination){
    let blocks 
    if (destination > start) {
        blocks = destination - start
    }

    if (destination < start) {
        blocks = start - destination
    }

    return blocks * 264

}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination)
    let fare
    if (feet <= 400){
        fare = 0
    } else if (feet > 400 && feet <= 2000){
        fare = ((feet - 400) * 2) / 100
    } else if (feet > 2000 && feet < 2500){
        fare = 25
    } else {
        fare = 'cannot travel that far'
    }
    return fare
}
//distanceFromHqInBlocks(43)
//distanceFromHqInFeet(43)
//distanceTravelledInFeet(50, 43)
//console.log(calculatesFarePrice(32, 34))