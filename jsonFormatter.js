
process.setUncaughtExceptionCaptureCallback( e => {
    console.error("Uncaught Exception : ", e);
});

const str = "{\"a\":\"a1\", \"b\":\"b1\", \"c\":[\"c1\",\"c2\"]}";

const patterns = [
    /"[\w]+":"[A-Z\w\d\s.\-\:]*"/g, 
    /"[\w]+":null/g, 
    /"[\w]+":[\d\s]*/g, 
    /"[\w]+":\[[A-Z\w\d\s,.\-\"]*\]/g
];

let finalMatchedResult = [];

for(pattern of patterns){
    console.log("processing pattern : %s", pattern);
    matchedResult = str.match(pattern);
    if(matchedResult != null && matchedResult != undefined){
        console.log("   matchedResult(s) : %s \n", JSON.stringify(matchedResult));
        finalMatchedResult = finalMatchedResult.concat(matchedResult);
    }else{
        console.log("   matchedResult(s) : null \n");
    }
}

let formattedJson = "{ \n\t"+finalMatchedResult.join(",\r\n\t")+ "\n}"

console.log(formattedJson);
