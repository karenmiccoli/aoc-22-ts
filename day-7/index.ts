import { readFileSync } from 'fs';

// - / (dir)
//   - a (dir)
//     - e (dir)
//       - i (file, size=584)
//     - f (file, size=29116)
//     - g (file, size=2557)
//     - h.lst (file, size=62596)
//   - b.txt (file, size=14848514)
//   - c.dat (file, size=8504156)
//   - d (dir)
//     - j (file, size=4060174)
//     - d.log (file, size=8033020)
//     - d.ext (file, size=5626152)
//     - k (file, size=7214296)

const path: string[] = [];
const directory: Record<string, number> = {};

const calculateSize = (filename: string, part:number):number => {
    const formattedData = readFileSync(filename, 'utf-8').split("\n")
    formattedData
        .forEach(line => {
            let commandParts = line.split(" ")
            if (commandParts[1] == "cd") {
                //command "cmd"
                commandParts[2] === ".." ? path.pop() : path.push(commandParts[2])
            }
            
            if (/\d/.test(commandParts[0])) {
                //file with size listed
                for (let i = 0; i < path.length; i++) {                    
                    const p = path.slice(0, i + 1).join('/');
                    directory[p] = (directory[p] || 0) + Number(commandParts[0]);
                }

            }
        })
    
    console.log(
        Object.values(directory)
            .filter((v) => v <= 100000)
            .reduce((a, c) => a + c, 0)
    );

    const required = 30000000 - (70000000 - directory['/']);
    console.log(
        Object.values(directory)
            .sort((a, b) => a - b)
            .find((v) => v >= required)
    );
    
    return 0;
    
}

module.exports = calculateSize