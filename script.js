const getRandomNumber = size => Math.floor(Math.random() * size);

const getDistance = (event, target) => {
    const diffX = event.offsetX - target.x;
    const diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

const getDistanceHint = distance => {
    if (distance < 5) {
        return "Boiling hot!";
    } else if (distance < 20) {
        return "Extremely hot!";
    } else if (distance < 40) {
        return "Very hot!";
    } else if (distance < 75) {
        return "Hot";
    } else if (distance < 100) {
        return "Really Warm";
    } else if (distance < 130) {
        return "Warm";
    } else if (distance < 180) {
        return "Cold";
    } else if (distance < 250) {
        return "Really cold";
    } else if (distance < 320) {
        return "Really really cold";
    } else if (distance < 400) {
        return "Extremely cold!";
    } else {
        return "Freezing!";
    }
};

const getTextRries = () => {
    if (attempts === 1) {
        return `You have ${attempts} try`;
    }
    return `You have ${attempts} tries`;
}

const width = 768;

const height = 768;

let clicks = 0;

let attempts = 30;

const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$("#attempt").text(getTextRries());

$("#map").click(function (event) {
    clicks++;

    attempts--;

    const distance = getDistance(event, target);

    const distanceHint = getDistanceHint(distance);

    $("#distance").text(distanceHint);
    $("#attempt").text(getTextRries());

    if (distance < 10) {
        alert("You won! Found the treasure in " + clicks + " clicks!");
    }

    if (attempts === 0) {
        alert("GAME OVER");
    }
});

