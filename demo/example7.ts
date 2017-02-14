interface NumberDictionary1 {
    [index: string]: number;
    length: number;    // ok, length is a number, and the string indexer returns a number; 
    name: string;      // error, the type of 'name' is a string and the string indexer returns a number
}

interface NumberDictionary2 {
    [index: string]: string;
    length: number;    // error, length is a number, and the string indexer returns a string
    name: string;      // ok, name is a string, and the string indexer returns a string
}

interface NumberDictionary3 {
    [index: number]: number;
    length: number;    // ok, length is a number, which matches the type returned by the numeric indexer
    name: string;      // ok, name is a string, the numeric indexer returns a number, and string is a subtype of number
}