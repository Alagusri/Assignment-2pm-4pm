const samplePromise = () => Promise.resolve("Converted to Async/Await!");

async function run() {
  const result = await samplePromise();
  console.log(result);
}

run();
