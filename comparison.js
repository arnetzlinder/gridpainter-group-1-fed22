const modelArray = [
    {
        cell: "1.1",
        color: "red"
    },
    {
        cell: "1.2",
        color: "blue"
    },
    {
        cell: "1.3",
        color: "red"
    },
    {
        cell: "1.4",
        color: "blue"
    }, 
    {
        cell: "1.5",
        color: "red"
    }, 
    {
        cell: "1.6",
        color: "blue"
    }, 
    {
        cell: "1.7",
        color: "red"
    }, 
    {
        cell: "1.8",
        color: "blue"
    }, 
    {
        cell: "1.9",
        color: "red"
    }, 
    {
        cell: "2.0",
        color: "blue"
    }
];

let answereArray = [
    {
        cell: "1.1",
        color: "red"
    },
    {
        cell: "1.2",
        color: "blue"
    },
    {
        cell: "1.3",
        color: "red"
    },
    {
        cell: "1.4",
        color: "red"
    }, 
    {
        cell: "1.5",
        color: "red"
    }, 
    {
        cell: "1.6",
        color: "blue"
    }, 
    {
        cell: "1.7",
        color: "blue"
    }, 
    {
        cell: "1.8",
        color: "blue"
    }, 
    {
        cell: "1.9",
        color: "red"
    }, 
    {
        cell: "2.0",
        color: "blue"
    }
];

function compareArrays(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
      const objResult = {};
      for (const key in a[i]) {
        if (a[i].hasOwnProperty(key) && b[i].hasOwnProperty(key)) {
          objResult[key] = a[i][key] === b[i][key];
        } else {
          objResult[key] = false;
        }
      }
      result.push(objResult);
    }
    return result;
  }
  
  const comparisonResult = compareArrays(modelArray, answereArray);
  console.log(comparisonResult);
  
  const colorCounts = comparisonResult.reduce((counts, obj) => {
    if (obj.color) {
      counts.true++;
    } else {
      counts.false++;
    }
    return counts;
  }, { true: 0, false: 0 });
  
  console.log(colorCounts);

  const totalValues = colorCounts.true + colorCounts.false;
  const percentage = colorCounts.false / totalValues;

  console.log(percentage * 100 + "%");
