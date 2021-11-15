export function summitSponsorLevel(level) {
    let messageText = document.getElementById('00N6f00000FmlhK');
    let messageArr = [
        "Hello, I am interested in supporting the OpenInfra Summit as a Headline sponsor.",
        "Hello, I am interested in supporting the OpenInfra Summit as a Premier sponsor.",
        "Hello, I am interested in supporting the OpenInfra Summit as a Spotlight sponsor.",
        "Hello, I am interested in supporting the OpenInfra Summit as an Exhibitor sponsor.",
        "Hello, I am interested in supporting the OpenInfra Summit as a Startup sponsor.",
        "Hello, I am interested in supporting the OpenInfra Summit as a Supporting sponsor.",
    ];
    messageText.value = messageArr[level];
}