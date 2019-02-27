


export default async function loadImage() {
  const data = await fetch("src/loadimage.csv", {
      credentials: "same-origin",
    }).then(r => r.text());

  const csv = data
    .split("\n")
    .map(d => d.split(",").map(dd => dd.trim()))
    .filter(d => d.length > 0);

  return {
    data: csv.map((d, i) => ({
      id: i.toString(),
      name: d[1],
      image: d[2],
      show:true
    }))
  };
}
