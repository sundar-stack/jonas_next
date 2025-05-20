export const metadata = {
  title: "Account Page",
};

const prom = new Promise((res, rej) => {
  setTimeout(() => {
    res("resolved");
  }, 20000);
});

const Page = async () => {
  const data = await prom;
  console.log({ data });

  return <>{data ? <h1>Account</h1> : ""}</>;
};

export default Page;
