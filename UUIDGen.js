function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function UUIDGen() {
    let UUID = [];
    let cc = 0;
    let i;
    for (i = 0; i <= 32; i++) {
        UUID[i] = getRandomInt(16);

    };
    UUID[12] = 1;
    if (UUID[16] < 8) UUID[16] += 8;
    var strUUID = "";
    for (i = 0; i < 32; i++) {
        numer = (i + 1) % 10;
        if (numer == 0) numer = 10;
        ccthis = UUID[i] * (numer);
        cc += ccthis;
        console.log(i + "\t" + UUID[i] + "\t" + ccthis + "\t" + cc);
        if (UUID[i] == 10) UUID[i] = 'A';
        if (UUID[i] == 11) UUID[i] = 'B';
        if (UUID[i] == 12) UUID[i] = 'C';
        if (UUID[i] == 13) UUID[i] = 'D';
        if (UUID[i] == 14) UUID[i] = 'E';
        if (UUID[i] == 15) UUID[i] = 'F';
        if ([8, 13, 18, 23].includes(strUUID.length)) strUUID += "-";
        strUUID += UUID[i];

    }
    rescc = cc % 16;
    console.log("ResCC:\t" + rescc);
    if (rescc == 10) rescc = 'A';
    if (rescc == 11) rescc = 'B';
    if (rescc == 12) rescc = 'C';
    if (rescc == 13) rescc = 'D';
    if (rescc == 14) rescc = 'E';
    if (rescc == 15) rescc = 'F';
    strUUID += "-" + rescc;

    return strUUID;
}

function UUIDAdd(UUID) {
    var UUIDArr = [];
    let cc = 0;

    if (UUID.length != 36) return undefined;

    UUIDArr = UUID.toUpperCase().replace(/[^\w\s]/gi, "").split("");
    for (i = 0; i < UUIDArr.length; i++) {
        if (UUIDArr[i] == 'A') UUIDArr[i] = 10;
        if (UUIDArr[i] == 'B') UUIDArr[i] = 11;
        if (UUIDArr[i] == 'C') UUIDArr[i] = 12;
        if (UUIDArr[i] == 'D') UUIDArr[i] = 13;
        if (UUIDArr[i] == 'E') UUIDArr[i] = 14;
        if (UUIDArr[i] == 'F') UUIDArr[i] = 15;
        numer = (i + 1) % 10;
        if (numer == 0) numer = 10;
        ccthis = UUIDArr[i] * (numer);
        cc += ccthis;
        console.log(i + "\t" + UUIDArr[i] + "\t" + ccthis + "\t" + cc);
    }
    rescc = cc % 16;
    console.log("ResCC:\t" + rescc);
    if (rescc == 10) rescc = 'A';
    if (rescc == 11) rescc = 'B';
    if (rescc == 12) rescc = 'C';
    if (rescc == 13) rescc = 'D';
    if (rescc == 14) rescc = 'E';
    if (rescc == 15) rescc = 'F';
    UUID += "-" + rescc;
    return UUID;
}
function UUIDCheck(UUID) {
    var UUIDArr = [];

    let cc = 0;
    let checkcc, rescc = 0;

    if (UUID.length != 38) return undefined;
    checkcc = UUID.substr(37, 1).toUpperCase();

    UUIDArr = UUID.toUpperCase().replace(/[^\w\s]/gi, "").substr(0, 32).split("");
    for (i = 0; i < UUIDArr.length; i++) {
        if (UUIDArr[i] == 'A') UUIDArr[i] = 10;
        if (UUIDArr[i] == 'B') UUIDArr[i] = 11;
        if (UUIDArr[i] == 'C') UUIDArr[i] = 12;
        if (UUIDArr[i] == 'D') UUIDArr[i] = 13;
        if (UUIDArr[i] == 'E') UUIDArr[i] = 14;
        if (UUIDArr[i] == 'F') UUIDArr[i] = 15;
        numer = (i + 1) % 10;
        if (numer == 0) numer = 10;
        ccthis = UUIDArr[i] * (numer);
        cc += ccthis;
        console.log(i + "\t" + UUIDArr[i] + "\t" + ccthis + "\t" + cc);
    }
    rescc = cc % 16;
    console.log("ResCC:\t" + rescc);
    if (rescc == 10) rescc = 'A';
    if (rescc == 11) rescc = 'B';
    if (rescc == 12) rescc = 'C';
    if (rescc == 13) rescc = 'D';
    if (rescc == 14) rescc = 'E';
    if (rescc == 15) rescc = 'F';
    if (rescc == checkcc) {
        return true
    }
    else {
        return false
    }
}
console.log('UUIDGen.js loaded');

