    let startDate=new Date('2025-11-11');
    let endDate=new Date('2025-12-11');
    let diffTime=Math.abs(endDate-startDate);
    let diffDays=Math.ceil(diffTime/(1000 * 60 * 60 * 24));
    console.log('There are ${dateDays}days between ${startDate.toISOString().slice(0,10)} and ${endDate.toISOString().slice(0,10)}');

