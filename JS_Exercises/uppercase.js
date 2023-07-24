function uppercaseName(name) {

    var uppercaseLetter = name.slice(0,1).toUpperCase();
    var restOfName = name.slice(1,name.length);

    completeName = uppercaseLetter + restOfName;

    console.log(completeName);
}

uppercaseName("jason");