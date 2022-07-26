/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
    const dupFiles = {};

    paths.forEach(function (path) {
        const [dirName, ...files] = path.split(" ");

        files.map(function (file) {
            fileName = file.split("(")[0];
            content = file.slice(fileName.length + 1, file.length - 1);
            
            if (!Object.keys(dupFiles).includes(content))
                dupFiles[content] = [];

            dupFiles[content].push(dirName + "/" + fileName);
        })
    })

    finalFiles = Object.keys(dupFiles).reduce(function (acc, key) {
        const list = dupFiles[key];
        if (list.length > 1)
            acc.push(list);
        return acc;
    }, [])

    return finalFiles;
};

// /**
//  * @param {string[]} paths
//  * @return {string[][]}
//  */
//  var findDuplicate = function (paths) {
//     let dupFiles = {};

//     paths.forEach(function (path) {
//         let [dirName, ...files] = path.split(" ");

//         files.forEach(function (file) {
//             let [fileName, content] = file.split("(");
            
//             if (!dupFiles[content])
//                 dupFiles[content] = [dirName + "/" + fileName];
//             else
//                 dupFiles[content].push(dirName + "/" + fileName);
//         })
//     })

//     result = []
//     for (let k in dupFiles){
//         if (dupFiles[k].length > 1){
//             result.push(dupFiles[k])}
//     }

//     return result;
// };



console.log(findDuplicate( [
    "root/a 1.txt(abcd) 2.txt(efgh)",
    "root/c 3.txt(abcd)",
    "root/c/d 4.txt(efgh)",
    "root 4.txt(efgh)",
]))