
process.setUncaughtExceptionCaptureCallback( e => {
    console.error("Uncaught Exception : ", e);
});

const str = "{\"a\":\"a1\", \"b\":\"b1\", \"c\":[\"c1\",\"c2\"]}";

const patterns = [
    /"[\w]+":"[A-Z\w\d\s.\-\:]*"/g, 
    /"[\w]+":[\d\s]*/g, 
    /"[\w]+":\[[A-Z\w\d\s,.\-\"]*\]/g
];

let finalMatchedResult = [];

for(pattern of patterns){
    console.log("processing pattern : %s", pattern);
    matchedResult = str.match(pattern);
    console.log("   matchedResult(s) : %s \n", JSON.stringify(matchedResult));
    finalMatchedResult = finalMatchedResult.concat(matchedResult);
}

let formattedJson = "{ \n\t"+finalMatchedResult.join(",\r\n\t")+ "\n}"

console.log(formattedJson);
