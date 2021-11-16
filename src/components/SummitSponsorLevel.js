export function summitSponsorLevel(level) {
    let messageText = document.getElementById('00N6f00000FmlhK');
    let levelsArr = [
        "Headline",
        "Premier",
        "Spotlight",
        "Exhibitor",
        "Startup",
        "Supporting"
    ];
    let message = `Hello, I am interested in sponsoring the OpenInfra Summit at the ${levelsArr[level]} level.`;
    messageText.value = message;
};
