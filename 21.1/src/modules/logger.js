export default function log(name, before, after, comments = "") {
  console.log(
    `${name} before: ${before
      .toString()
      .substring(8, 13)} after: ${after
      .toString()
      .substring(8, 13)}, difference: ${after - before}, ${comments}`
  );
}
