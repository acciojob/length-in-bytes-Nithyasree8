const byteSize = (str) => {
    // Create a Blob object with the string
    const blob = new Blob([str]);
    // Return the size property, which gives the size in bytes
    return blob.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
