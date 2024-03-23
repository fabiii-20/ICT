const arr=[2,3,4,5,4,4,3]

var mc=0
for(i=0;i<arr.length;i++){
    var c=0
    for(j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            c++;
        }
    }
    if (c>mc){
        mc=c;
        var frqItem=arr[i]
    }
}
console.log("The most freequent item in the array is", frqItem)