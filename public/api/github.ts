export default async function handle(
  req: any,
  res: { json: (arg0: any) => void }
) {
  console.log(req ? req : 1);
  res.json({ message: "Hello Everyone!" });
}
